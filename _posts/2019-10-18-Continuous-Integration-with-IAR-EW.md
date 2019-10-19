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
/* USER CODE BEGIN Header */
/**
  ******************************************************************************
  * @file           : main.c
  * @brief          : Main program body
  ******************************************************************************
  * @attention
  *
  * <h2><center>&copy; Copyright (c) 2019 STMicroelectronics.
  * All rights reserved.</center></h2>
  *
  * This software component is licensed by ST under BSD 3-Clause license,
  * the "License"; You may not use this file except in compliance with the
  * License. You may obtain a copy of the License at:
  *                        opensource.org/licenses/BSD-3-Clause
  *
  ******************************************************************************
  */
/* USER CODE END Header */

/* Includes ------------------------------------------------------------------*/
#include "main.h"
#include "usart.h"
#include "gpio.h"

/* Private includes ----------------------------------------------------------*/
/* USER CODE BEGIN Includes */
#include <stdint.h>

#if DEBUG
#include <string.h>
#include <stdio.h>
#endif

#include "math.h"
/* USER CODE END Includes */

/* Private typedef -----------------------------------------------------------*/
/* USER CODE BEGIN PTD */

/* USER CODE END PTD */

/* Private define ------------------------------------------------------------*/
/* USER CODE BEGIN PD */
/* USER CODE END PD */

/* Private macro -------------------------------------------------------------*/
/* USER CODE BEGIN PM */

/* USER CODE END PM */

/* Private variables ---------------------------------------------------------*/

/* USER CODE BEGIN PV */

/* USER CODE END PV */

/* Private function prototypes -----------------------------------------------*/
void SystemClock_Config(void);
/* USER CODE BEGIN PFP */

/* USER CODE END PFP */

/* Private user code ---------------------------------------------------------*/
/* USER CODE BEGIN 0 */

/* USER CODE END 0 */

/**
  * @brief  The application entry point.
  * @retval int
  */
int main(void)
{
  /* USER CODE BEGIN 1 */
  const uint16_t a = 15;
  const uint16_t b = 16;
  const uint16_t c = 17;
  /* USER CODE END 1 */
  

  /* MCU Configuration--------------------------------------------------------*/

  /* Reset of all peripherals, Initializes the Flash interface and the Systick. */
  HAL_Init();

  /* USER CODE BEGIN Init */

  /* USER CODE END Init */

  /* Configure the system clock */
  SystemClock_Config();

  /* USER CODE BEGIN SysInit */

  /* USER CODE END SysInit */

  /* Initialize all configured peripherals */
  MX_GPIO_Init();
  MX_USART2_UART_Init();
  /* USER CODE BEGIN 2 */
#if DEBUG
  printf("Hello!\r\n");
#endif

  uint16_t sum = math_sum(a, b);
#if DEBUG
  printf("Sum = %d\r\n", sum);
#endif

  uint16_t mul = math_mul(sum, c);
#if DEBUG
  printf("Mul = %d\r\n", mul);
#endif

#if DEBUG
  printf("Bye!\r\n");
#endif
  /* USER CODE END 2 */

  /* Infinite loop */
  /* USER CODE BEGIN WHILE */
  return 0;
    /* USER CODE END WHILE */

    /* USER CODE BEGIN 3 */
  /* USER CODE END 3 */
}

/**
  * @brief System Clock Configuration
  * @retval None
  */
void SystemClock_Config(void)
{
  RCC_OscInitTypeDef RCC_OscInitStruct = {0};
  RCC_ClkInitTypeDef RCC_ClkInitStruct = {0};

  /** Configure the main internal regulator output voltage 
  */
  __HAL_RCC_PWR_CLK_ENABLE();
  __HAL_PWR_VOLTAGESCALING_CONFIG(PWR_REGULATOR_VOLTAGE_SCALE1);
  /** Initializes the CPU, AHB and APB busses clocks 
  */
  RCC_OscInitStruct.OscillatorType = RCC_OSCILLATORTYPE_HSI;
  RCC_OscInitStruct.HSIState = RCC_HSI_ON;
  RCC_OscInitStruct.HSICalibrationValue = RCC_HSICALIBRATION_DEFAULT;
  RCC_OscInitStruct.PLL.PLLState = RCC_PLL_NONE;
  if (HAL_RCC_OscConfig(&RCC_OscInitStruct) != HAL_OK)
  {
    Error_Handler();
  }
  /** Initializes the CPU, AHB and APB busses clocks 
  */
  RCC_ClkInitStruct.ClockType = RCC_CLOCKTYPE_HCLK|RCC_CLOCKTYPE_SYSCLK
                              |RCC_CLOCKTYPE_PCLK1|RCC_CLOCKTYPE_PCLK2;
  RCC_ClkInitStruct.SYSCLKSource = RCC_SYSCLKSOURCE_HSI;
  RCC_ClkInitStruct.AHBCLKDivider = RCC_SYSCLK_DIV1;
  RCC_ClkInitStruct.APB1CLKDivider = RCC_HCLK_DIV1;
  RCC_ClkInitStruct.APB2CLKDivider = RCC_HCLK_DIV1;

  if (HAL_RCC_ClockConfig(&RCC_ClkInitStruct, FLASH_LATENCY_0) != HAL_OK)
  {
    Error_Handler();
  }
}

/* USER CODE BEGIN 4 */

/* USER CODE END 4 */

/**
  * @brief  This function is executed in case of error occurrence.
  * @retval None
  */
void Error_Handler(void)
{
  /* USER CODE BEGIN Error_Handler_Debug */
  /* User can add his own implementation to report the HAL error return state */

  /* USER CODE END Error_Handler_Debug */
}

#ifdef  USE_FULL_ASSERT
/**
  * @brief  Reports the name of the source file and the source line number
  *         where the assert_param error has occurred.
  * @param  file: pointer to the source file name
  * @param  line: assert_param error line source number
  * @retval None
  */
void assert_failed(uint8_t *file, uint32_t line)
{ 
  /* USER CODE BEGIN 6 */
  /* User can add his own implementation to report the file name and line number,
     tex: printf("Wrong parameters value: file %s on line %d\r\n", file, line) */
  /* USER CODE END 6 */
}
#endif /* USE_FULL_ASSERT */

/************************ (C) COPYRIGHT STMicroelectronics *****END OF FILE****/
```

## Adding versioning to the CI

Let's add versioning to our project.
First, let's create a python file for some errors:

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

Then we will create a python script for versioning:

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
	tags = process.stdout.split('\n')
	tags = list(filter(lambda x: x != '', tags))
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
...

#include "version.h"

...

int main(void)
{

...

  /* USER CODE BEGIN 2 */
#if DEBUG
  printf("Hello!\r\n");
#endif

#if DEBUG
  printf("Version: %d\r\n", SW_VERSION);
#endif

...
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
	tags = process.stdout.split('\n')
	tags = list(filter(lambda x: x != '', tags))
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

All that's left to do is for you to set up the CI pipeline to call this *version.py* file with the argument `-i` to increment it   
before building and the after building to call the file again with the argument `-p` to push the created version to your repository.

## Adding building to the CI

Now since I'm a lazy bum who loves modularizing, we will start by creating a configuration file (JSON) for our scripts to use.   
The configuration file includes things like IAR tools paths and configs for the projects as follows:

*config.json*:   
```JSON
{
  "IAR_BUILD_PATH": "C:\\Program Files (x86)\\IAR Systems\\Embedded Workbench 8.3\\common\\bin\\IarBuild.exe",
  "IAR_CSTAT_PATH": "C:\\Program Files (x86)\\IAR Systems\\Embedded Workbench 8.3\\arm\\bin\\icstat.exe",
  "IAR_CSPY_PATH": "C:\\Program Files (x86)\\IAR Systems\\Embedded Workbench 8.3\\common\\bin\\CSpyBat.exe",
  "Build backup path": "C:\\Builds",
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

Now let's set the project to create a binary file.   
We will right-click the project, go to `Options -> Output Converter -> Output` and check the *Generate additional output* checkbox and choose *Raw binary* from the *Output format* dropdown-menu.

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
	buildBackupPath = config.configDict["Build backup path"]
	buildBackupPath = os.path.join(buildBackupPath, latestTag)
	if (not os.path.exists(buildBackupPath)):
		try:
			os.makedirs(buildBackupPath)
		except:
			print("Could not create directory {0}".format(buildBackupPath))
			return ErrorCode.OS_FAIL
	buildBackupPath = os.path.join(buildBackupPath, project)
	if (not os.path.exists(buildBackupPath)):
		try:
			os.makedirs(buildBackupPath)
		except:
			print("Could not create directory {0}".format(buildBackupPath))
			return ErrorCode.OS_FAIL
	buildBackupPath = os.path.join(buildBackupPath, configuration)
	if (not os.path.exists(buildBackupPath)):
		try:
			os.makedirs(buildBackupPath)
		except:
			print("Could not create directory {0}".format(buildBackupPath))
			return ErrorCode.OS_FAIL
	if (os.path.exists(os.path.join(buildBackupPath, binaryPath.rsplit('\\')[-1]))):
		buildBackupPath = os.path.join(buildBackupPath, 'temp')
		buildBackupPath = os.path.join(buildBackupPath, datetime.datetime.now().strftime("%Y-%m-%d_%H-%M-%S"))
		if (not os.path.exists(buildBackupPath)):
			try:
				os.makedirs(buildBackupPath)
			except:
				print("Could not create directory {0}".format(buildBackupPath))
				return ErrorCode.OS_FAIL
	print("Copying binary to {0}".format(buildBackupPath))
	shutil.copy2(binaryPath, buildBackupPath)
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

## Adding static analysis to the CI


Static analysis using the CSTAT on the command line can be done the easiest way by calling the *IarBuild* tool.   
`C:\Program Files (x86)\IAR Systems\Embedded Workbench 8.3\common\bin\IarBuild.exe C:\Repo\iar_dev_board\Device\Device.ewp -cstat_analyze Debug`   
The sad part about running this command is that you can't dictate where the database file will be generated. However by using the *IarBuild* tool,   
we don't have to create a list of all of the project files and analyze them one by one with another tool (*icstat*).

The database from the static analysis will be created into the directory `<Project>\<Configuration>\Obj\cstat.db`.   
That file is an SQLite3 database file (luckily) so we can read its contents to find out what we need to extract.   
Namely, the table *warnings* contains the fields *warning_id*, *property_id*, *file_name*, *line_num*, *msg*, *severity* and *column_num*.   
We will be creating a python list of dictionaries wherein each dictionary represents a warning in the *warnings* table of the database.   
Then we will combine all of the warning messages from all the projects and their configurations based on the *config.json*, and then constructing a json file from them.

Let's start by creating a script to run the *CSTAT* on our projects and their configurations.   
*static_analysis.py*:
```python
#!/usr/bin/env python
# -*- coding: utf-8 -*-

import os
import sys
import subprocess
import datetime

from error_code import ErrorCode
import config
import version

def runStaticAnalysis(project: str, configuration: str) -> ErrorCode:
	print("Static analyzing: {0} conf: {1}".format(project, configuration))
	errorCode = ErrorCode.OK
	projectFile = r"{0}\{0}.ewp".format(project)
	print("CSTAT cleaning")
	process = subprocess.run([config.configDict["IAR_BUILD_PATH"], projectFile, "-cstat_clean", "{0}".format(configuration)], check=False, capture_output=True, text=True)
	print(process.stdout)
	if (process.returncode):
		errorCode = ErrorCode.OS_FAIL
		print(process.stderr)
	print("CSTAT analyzing")
	process = subprocess.run([config.configDict["IAR_BUILD_PATH"], projectFile, "-cstat_analyze", "{0}".format(configuration)], check=False, capture_output=True, text=True)
	print(process.stdout)
	if (process.returncode):
		errorCode = ErrorCode.OS_FAIL
		print(process.stderr)
	return errorCode

def main() -> ErrorCode:
	errorCode = ErrorCode.OK
	branch = version.getCurrentBranch()
	if (branch == ""):
		return ErrorCode.GIT_FAIL
	for configuration in config.configDict["Configurations"]:
		configBranch = config.configDict["Branches"][branch]
		for key in configBranch:
			if (key == "Static analysis"):
				for project in configBranch["Static analysis"]:
					errorCode = runStaticAnalysis(project, configuration)
					if (errorCode.value):
						return errorCode
	return errorCode

if __name__ == '__main__':
	errorCode = main()
	sys.exit(errorCode.value)
```

Then we will be adding the script to extract the database info from the analysis and combine everything into a JSON file.

*static_analysis.py*:
```python
#!/usr/bin/env python
# -*- coding: utf-8 -*-

import os
import sys
import subprocess
import datetime
import sqlite3
import json

from error_code import ErrorCode
import config
import version

def runStaticAnalysis(project: str, configuration: str) -> ErrorCode:
	print("Static analyzing: {0} conf: {1}".format(project, configuration))
	errorCode = ErrorCode.OK
	projectFile = r"{0}\{0}.ewp".format(project)
	print("CSTAT cleaning")
	process = subprocess.run([config.configDict["IAR_BUILD_PATH"], projectFile, "-cstat_clean", "{0}".format(configuration)], check=False, capture_output=True, text=True)
	print(process.stdout)
	if (process.returncode):
		errorCode = ErrorCode.OS_FAIL
		print(process.stderr)
	print("CSTAT analyzing")
	process = subprocess.run([config.configDict["IAR_BUILD_PATH"], projectFile, "-cstat_analyze", "{0}".format(configuration)], check=False, capture_output=True, text=True)
	print(process.stdout)
	if (process.returncode):
		errorCode = ErrorCode.OS_FAIL
		print(process.stderr)
	return errorCode

def getAnalysisData(project: str, configuration: str) -> dict:
	print("Getting analysis data for: {0} conf: {1}".format(project, configuration))
	databaseFile = r"{0}\{1}\Obj\cstat.db".format(project, configuration)
	connection = sqlite3.connect(databaseFile)
	cursor = connection.cursor()
	query = "SELECT warning_id, property_id, file_name, line_num, column_num, msg, severity FROM warnings"
	cursor.execute(query)
	data = dict()
	data["Project"] = project
	data["Configuration"] = configuration
	data["Warnings"] = list()
	for row in cursor.fetchall():
		data["Warnings"]["warning_id"] = row[0]
		data["Warnings"]["property_id"] = row[1]
		data["Warnings"]["file_name"] = row[2]
		data["Warnings"]["line_num"] = row[3]
		data["Warnings"]["column_num"] = row[4]
		data["Warnings"]["msg"] = row[5]
		data["Warnings"]["severity"] = row[6]
	connection.close()
	return data

def main() -> ErrorCode:
	errorCode = ErrorCode.OK
	branch = version.getCurrentBranch()
	if (branch == ""):
		return ErrorCode.GIT_FAIL
	wholeAnalysis = dict()
	analysises = list()
	for configuration in config.configDict["Configurations"]:
		configBranch = config.configDict["Branches"][branch]
		for key in configBranch:
			if (key == "Static analysis"):
				for project in configBranch["Static analysis"]:
					errorCode = runStaticAnalysis(project, configuration)
					if (errorCode.value):
						return errorCode
					analysis = getAnalysisData(project, configuration)
					if (analysis):
						analysises.append(analysis)
	wholeAnalysis["Timestamp"] = datetime.datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
	wholeAnalysis["Analysises"] = analysises
	with open('cstat_results.json', 'w+') as cstatResultsFile:
		json.dump(wholeAnalysis, cstatResultsFile, indent=2)
	return errorCode

if __name__ == '__main__':
	errorCode = main()
	sys.exit(errorCode.value)
```

Set up your CI pipeline to use the *static_analysis.py* script and to artifact the *cstat_results.json* file. Since static analysis takes a lot of time, it is inadvisable to include it in your merge requests.   
Instead, you could set it up to be run nightly. When you come back to work the following day, you can have a list of items nagging at you because you haven't had   
enough of nagging from your wife each morning about not closing the milk carton properly.

## Adding unit tests to the CI

TODO: How to use CSPY simulator and output logs to stdout

## Summa summarum

Now we have 
