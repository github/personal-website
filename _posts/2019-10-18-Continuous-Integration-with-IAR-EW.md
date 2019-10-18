---
title: "Continuous Integration with IAR Embedded Workbench"
published: false
---

Once upon a time I happened to work on a company which was using the IAR tools. They needed help with the development of their product and coming up with a solution to automate and modularize some of their work processes.   
These work processes included tasks such as provisioning, building, testing and versioning. Essentially they didn't have a proper continuous integration environment in the development of their products.   
Thusly, the task to create such a thing happened upon me.

Sadly the IAR tools are apparently only available on Windows host, meaning that this will introduce some restrictions and "quirks" (read: stuff that will piss you off) into the environment.   
Knowing and acknowledging this, running anything related to the IAR needs to be run on a Windows machine (be it virtual or physical).

What saddens me even more is that fact that there is so little documentation and public knowledge on the internet on how to use the IAR tools without a graphical user interface.   
For example I tried to find out how to get CSTAT results of all projects in a workspace into one file which can be the artifacted in the CI pipeline, but I could not for the life of me find anything on the topic.   
In the end, I ended up finding that the CSTAT results are also created into an SQLite3 database for each project and then combining the database information with Python into a JSON file.   
So you can expect to do a lot of studying and fiddling to find out how and what each IAR tool does without the help of any documentation.

In this blog post I will be showcasing how to integrate a basic continuous integration process chain into an IAR project. We will be having debug/release builds, automatic versioning, static analysis and unit tests.

## Continuous integration environment

The continuous integration environment for an IAR project can be roughly seperated into four different parts:

* The virtual builder/tester
* The physical builder/tester
* The repository
* The CI controller

Now, since the company in question was using GitLab, we decided to use it as a repository and also as a CI controller (with gitlab runner nodes).   
You can without a doubt succeed in doing this with something like a Jenkins server as the CI controller.   
But for the purpose of the example project in explaining how to set up the CI environment, we will be working with GitLab.

## Development flow

In the repository we will have two long living branches: *development* and *release*. The *development* is the main branch to work on and the changes are merged to *release* whenever we want to create a release.   
Feature branches are merged to *development*. Whenever a merge is done to the *development* and *release* branches, a version tag is created. The version tag in your project can be formed in every way you desire,   
however for this example we will be creating tags seperately for *development* and *release*. The tags will be in the following format: `<version number>-<branch name>`, eg. `123-development`.   
When a merge request is made to merge a branch into a target branch, the CI launches a process to build the source code and then backing it up to a file share.   
If the build is successful, the process returns a successful state to the merge request which then sets the merge request to be available to be merged.   
If the build is unsuccessful then the merge request can not be merged. In the case of merging to *development* and *release*, after merging, the merged commit is tagged with a new version number.

## Example project in IAR Embedded Workbench

For the example project in IAR Embedded Workbench, we will be having a device which does a few arithmetic calculations. The project has output prints when doing a Debug build and when running unit tests.

*math.h*:   
```c
#ifndef MATH_H
#define MATH_H

#include <stdint.h>

uint16_t math_sum(uint16_t a, uint16_t b);
uint16_t math_mul(uint16_t a, uint16_t b);

#endif /* MATH_H */
```

*math.c*:   
```c
#include <stdint.h>
#include "math.h"

uint16_t math_sum(uint16_t a, uint16_t b)
{
	uint16_t ret = (a + b) % UINT16_MAX;
	return ret;
}

uint16_t math_mul(uint16_t a, uint16_t b)
{
	uint16_t ret = (a * b) % UINT16_MAX;
	return ret;
}
```

*main.c*:   
```c
#include <stdio.h>
#include <stdint.h>

#include "math.h"

#define VERSION (10)

int main()
{
   printf("Hello!\r\n");
   printf("Version: %d\r\n", VERSION);

   const uint16_t a = 15;
   const uint16_t b = 16;
   const uint16_t c = 17;

   uint16_t sum = math_sum(a, b);
   printf("Sum = %d\r\n", sum);

   uint16_t mul = math_mul(sum, c);
   printf("Mul = %d\r\n", mul);

   printf("Bye!\r\n");

   return 0;
}
```

## Adding building to the CI

Now since I'm a lazy bum who loves modularizing, we will start by creating a configuration file (JSON) for our scripts to use.   
The configuration file includes things like IAR tools paths and configs for the projects as follows:

*config.json*:   
```JSON
{
  "IAR_BUILD_PATH": "C:\\Program Files (x86)\\IAR Systems\\Embedded Workbench 8.3\\common\\bin\\IarBuild.exe",
  "IAR_CSTAT_PATH": "C:\\Program Files (x86)\\IAR Systems\\Embedded Workbench 8.3\\arm\\bin\\icstat.exe",
  "IAR_CSPY_PATH": "C:\\Program Files (x86)\\IAR Systems\\Embedded Workbench 8.3\\common\\bin\\CSpyBat.exe",
  "Build output path": "C:\\Builds",
  "Configurations": [
    "Debug",
    "Release"
  ],
  "Branches": {
    "development": {
      "Build": [
        "Device"
      ]
    },
    "release": {
      "Build": [
        "Device"
      ]
    }
  }
}
```

I chose to seperate the build configurations from the branches because even though a change has been made to a branch which doesn't need unit testing for example, it should not break them.   
We will be updating and adding to the configuration file later on.

Now let's write a script to get that configuration file into a python dictionary.

*config.py*:   
```python
#!/usr/bin/env python
# -*- coding: utf-8 -*-

import json

configDict = dict()
with open('./CI_scripts/config.json', 'r') as configFile:
	configDict = json.load(configFile)
```

The command to build an IAR project is: `<IAR EW Root>\common\bin\IarBuild.exe <project>.ewp -build <configuration>`   
And the command to clean an IAR project is: `<IAR EW Root>\common\bin\IarBuild.exe <project>.ewp -clean <configuration>`   
And finally a script for building our projects and backing up the results:

*build.py*:
```python
#!/usr/bin/env python
# -*- coding: utf-8 -*-

import os
import sys
import subprocess
import datetime
import shutil

from error_code import ErrorCode
import config
import version

def cleanProject(project: str, configuration: str) -> ErrorCode:
	print("Cleaning: {0} conf: {1}".format(project, configuration))
	process = subprocess.run([config.configDict["IAR_BUILD_PATH"], "{0}\{0}.ewp".format(project), "-clean", "{0}".format(configuration)], check=True, capture_output=True, text=True)
	print(process.stdout)
	if (process.returncode):
		print(process.stderr)
		return ErrorCode.IAR_FAIL
	return ErrorCode.OK

def buildProject(project: str, configuration: str) -> ErrorCode:
	print("Building: {0} conf: {1}".format(project, configuration))
	process = subprocess.run([config.configDict["IAR_BUILD_PATH"], "{0}\{0}.ewp".format(project), "-build", "{0}".format(configuration)], check=True, capture_output=True, text=True)
	print(process.stdout)
	if (process.returncode):
		print(process.stderr)
		return ErrorCode.IAR_FAIL
	return ErrorCode.OK

def backupProject(project: str, configuration: str) -> ErrorCode:
	print("Backing up: {0} conf: {1}".format(project, configuration))
	latestTag = version.getLatestTag()
	if (latestTag == ""):
		return ErrorCode.WTF
	binaryPath = r"{0}\{1}\Exe\{0}.bin".format(project, configuration)
	buildPath = config.configDict["Build output path"]
	buildPath = os.path.join(buildPath, latestTag)
	if (not os.path.exists(buildPath)):
		try:
			os.makedirs(buildPath)
		except:
			print("Could not create directory {0}".format(buildPath))
			return ErrorCode.OS_FAIL
	buildPath = os.path.join(buildPath, project)
	if (not os.path.exists(buildPath)):
		try:
			os.makedirs(buildPath)
		except:
			print("Could not create directory {0}".format(buildPath))
			return ErrorCode.OS_FAIL
	buildPath = os.path.join(buildPath, configuration)
	if (not os.path.exists(buildPath)):
		try:
			os.makedirs(buildPath)
		except:
			print("Could not create directory {0}".format(buildPath))
			return ErrorCode.OS_FAIL
	buildPath = os.path.join(buildPath, datetime.datetime.now().strftime("%Y-%m-%d_%H-%M-%S"))
	if (not os.path.exists(buildPath)):
		try:
			os.makedirs(buildPath)
		except:
			print("Could not create directory {0}".format(buildPath))
			return ErrorCode.OS_FAIL
	shutil.copy2(binaryPath, buildPath)
	return ErrorCode.OK

def main() -> ErrorCode:
	errorCode = ErrorCode.OK
	branch = version.getCurrentBranch()
	if (branch == ""):
		return ErrorCode.GIT_FAIL
	for configuration in config.configDict["Configurations"]:
		for project in config.configDict["Branches"][branch]["Build"]:
			errorCode = cleanProject(project, configuration)
			if (errorCode.value):
				return errorCode
			errorCode = buildProject(project, configuration)
			if (errorCode.value):
				return errorCode
			errorCode = backupProject(project, configuration)
			if (errorCode.value):
				return errorCode
	return errorCode

if __name__ == '__main__':
	errorCode = main()
	sys.exit(errorCode.value)
```

Set up your CI pipeline so that the build.py is called and executed on a machine that is dedicated to building binaries.

## Adding versioning to the CI

Let's add versioning to our project. First, let's create a python script for it:

*error_code.py*:   
```python
#!/usr/bin/env python
# -*- coding: utf-8 -*-

from enum import Enum, auto, unique

@unique
class ErrorCode(Enum):
	WTF = -1
	OK = 0
	NOT_IMPLEMENTED = 1
	INCORRECT_PARAMETERS = 2
```

*version.py*:   
```python
#!/usr/bin/env python
# -*- coding: utf-8 -*-
import sys
import subprocess
import argparse

from error_code import ErrorCode

if __name__ == '__main__':
	parser = argparse.ArgumentParser(description='Version helper')
	parser.add_argument('-g', '--generate', action='store_const', const=True, help='Generate a C header')
	args = parser.parse_args()

from error_code import ErrorCode

VERSION_FILE_HEADER = """#ifndef VERSION_H
#define VERSION_H
			
#define SW_VERSION ({0})
			
#endif /* VERSION_H */
"""

def getCurrentBranch() -> str:
	print("Getting current branch")
	process = subprocess.run(["git", "rev-parse", "--abbrev-ref", "HEAD"], check=True, text=True, capture_output=True)
	if (process.returncode):
		return ""
	if (len(process.stdout) < 0):
		return ""
	return process.stdout.replace('\r','').replace('\n','')

def getLatestTag() -> str:
	branch = getCurrentBranch()
	if (branch == ""):
		return ""
	print("Getting latest tags for branch: {0}".format(branch))
	process = subprocess.run(["git", "tag", "-l"], check=True, text=True, capture_output=True)
	if (process.returncode):
		return ""
	if (len(process.stdout) < 0):
		return ""
	tags = list(map(lambda x: x.replace('\r','').replace('\n',''), process.stdout.split("\r\n")))
	tags = list(filter(lambda x: x.rsplit('-')[-1] == branch, tags))
	print("Tags: {0}".format(tags))
	return tags[-1]

def generateHeaderFile() -> ErrorCode:
	ret = ErrorCode.OK
	latestTag = getLatestTag()
	if (latestTag == ""):
		errorCode = ErrorCode.WTF
		return errorCode
	print("Latest tag: {0}".format(latestTag))
	version = latestTag.split('-')[0]
	with open('version.h', 'w+') as versionFile:
		fileContents = VERSION_FILE_HEADER.format(version)
		versionFile.write(fileContents)
	return ret

def main() -> ErrorCode:
	errorCode = ErrorCode.OK
	if (args.generate):
		print("Generating header")
		errorCode = generateHeaderFile()
		if (errorCode.value):
			return errorCode
	return errorCode

if __name__ == '__main__':
	errorCode = main()
	sys.exit(errorCode.value)
```

Afterwards we will create a *bat* script for IAR to use our python file:

```bat
pushd .\
"python.exe" ".\CI_scripts\version.py"  "-g"
popd
```

And then set the project's pre-build command line to use the bat file: `CMD /C "$PROJ_DIR$\..\CI_scripts\IAR_prebuild.bat"`

Next up we will use the generated header in our code:   
*main.c*:   
```c
#include <stdio.h>
#include <stdint.h>

#include "math.h"
#include "version.h"

int main()
{
   printf("Hello!\r\n");
   printf("Version: %d\r\n", SW_VERSION);

   const uint16_t a = 15;
   const uint16_t b = 16;
   const uint16_t c = 17;

   uint16_t sum = math_sum(a, b);
   printf("Sum = %d\r\n", sum);

   uint16_t mul = math_mul(sum, c);
   printf("Mul = %d\r\n", mul);

   printf("Bye!\r\n");

   return 0;
}
```

Now we want that the CI pipeline will create a new tag for a release commit so we need to modify the *version.py* a little:
*version.py*:
```python
#!/usr/bin/env python
# -*- coding: utf-8 -*-
import sys
import subprocess
import argparse

from error_code import ErrorCode

if __name__ == '__main__':
	parser = argparse.ArgumentParser(description='Version helper')
	parser.add_argument('-g', '--generate', action='store_const', const=True, help='Generate a C header')
	parser.add_argument('-i', '--increment', action='store_const', const=True, help='Increment the version')
	parser.add_argument('-p', '--push', action='store_const', const=True, help='Push the tags to remote')
	args = parser.parse_args()

from error_code import ErrorCode

VERSION_FILE_HEADER = """#ifndef VERSION_H
#define VERSION_H
			
#define SW_VERSION ({0})
			
#endif /* VERSION_H */
"""

def getCurrentBranch() -> str:
	print("Getting current branch")
	process = subprocess.run(["git", "rev-parse", "--abbrev-ref", "HEAD"], check=False, text=True, capture_output=True)
	print(process.stdout)
	if (process.returncode):
		print(process.stderr)
		return ""
	if (len(process.stdout) < 0):
		return ""
	return process.stdout.replace('\r','').replace('\n','')

def getLatestTag() -> str:
	branch = getCurrentBranch()
	if (branch == ""):
		return ""
	print("Getting latest tags for branch: {0}".format(branch))
	process = subprocess.run(["git", "tag", "-l"], check=False, text=True, capture_output=True)
	print(process.stdout)
	if (process.returncode):
		print(process.stderr)
		return ""
	if (len(process.stdout) < 0):
		return ""
	tags = list(map(lambda x: x.replace('\r','').replace('\n',''), process.stdout.split("\r\n")))
	tags = list(filter(lambda x: x.rsplit('-')[-1] == branch, tags))
	print("Tags: {0}".format(tags))
	return tags[-1]

def generateHeaderFile() -> ErrorCode:
	ret = ErrorCode.OK
	latestTag = getLatestTag()
	if (latestTag == ""):
		errorCode = ErrorCode.WTF
		return errorCode
	print("Latest tag: {0}".format(latestTag))
	version = int(latestTag.split('-')[0])
	with open('version.h', 'w+') as versionFile:
		fileContents = VERSION_FILE_HEADER.format(version)
		versionFile.write(fileContents)
	return ret

def incrementTag() -> ErrorCode:
	latestTag = getLatestTag()
	if (latestTag == ""):
		return ErrorCode.GIT_FAIL
	versionNumber = int(latestTag.split('-')[0])
	versionNumber = versionNumber + 1
	newTag = "{0}-{1}".format(versionNumber, ''.join(latestTag.split('-')[1:]))
	process = subprocess.run(["git", "tag", "-a" , newTag, "-m", "Version {0}".format(versionNumber)], check=False, text=True, capture_output=True)
	print(process.stdout)
	if (process.returncode):
		print(process.stderr)
		return ErrorCode.WTF
	print("Created a new tag: {0}".format(newTag))
	return ErrorCode.OK

def pushTags() -> ErrorCode:
	process = subprocess.run(["git", "push", "--tags"], check=False, text=True, capture_output=True)
	print(process.stdout)
	if (process.returncode):
		print(process.stderr)
		return ErrorCode.WTF
	print("Pushed new tags")
	return ErrorCode.OK

def main() -> ErrorCode:
	errorCode = ErrorCode.OK
	if (args.generate):
		print("Generating header")
		errorCode = generateHeaderFile()
		if (errorCode.value):
			return errorCode
	if (args.increment):
		print("Incrementing version")
		errorCode = incrementTag()
		if (errorCode.value):
			return errorCode
	if (args.push):
		print("Pushing versions to remote")
		errorCode = pushTags()
		if (errorCode.value):
			return errorCode
	return errorCode

if __name__ == '__main__':
	errorCode = main()
	sys.exit(errorCode.value)
```

## Adding static analysis to the CI


Static analysis using the CSTAT on the command line can be done the easiest way by calling the *IarBuild* tool.   
`C:\Program Files (x86)\IAR Systems\Embedded Workbench 8.3\common\bin\IarBuild.exe C:\Repo\iar_dev_board\Device\Device.ewp -cstat_analyze Debug`   
The sad part about running this command is that you can't dictate where the database file will be generated. However by using the *IarBuild* tool,   
we don't have to create a list of all of the project files and analyze them one by one with another tool (*icstat*).

The database from the static analysis will be created into the directory `<Project>\<Configuration>\Obj\cstat.db`.   
That file is an SQLite3 database file (luckily) so we can read its contents to find out what we need to extract.   
Reading the file with a database reader tool, we can see that there is a table for warning messages and each warning has its own severity.   
What we will be doing is combining all of the warning messages from other projects and other configurations (based on the *config.json*)   
and then constructing a json file from them.

*static_analysis.py*:
```python
```

Set up your CI pipeline to use the *static_analysis.py* script. Since static analysis takes a lot of time, it is inadvisable to include it in your merge requests.   
Instead, you could set it up to be run nightly. When you come back to work the following day, you can have a list of items nagging at you.

## Adding unit tests to the CI

TODO: How to use CSPY simulator and output logs to stdout

## Summa summarum

Now we have 
