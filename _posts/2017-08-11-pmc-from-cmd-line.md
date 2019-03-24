---
layout: post
title: Package Management Console via the command line
published: true
---

### TL;DR
 [PMCCommand](https://github.com/benwtrent/PMCCommand) allows arbitrary Package Management Console commands against a solution or project from the command line.

## Accessing the Visual Studio PMC

### The need

The `Package Mangement Console` found in Visual Studio supplies some very useful commands that are not fully reflected in the nuget command line utility. A glaring example of this is `Update-Package`. When used inside the `Package Management Console` it will pull down and update any new dependencies referenced by the updated package. Conversely, [nuget update](https://docs.microsoft.com/en-us/nuget/tools/nuget-exe-cli-reference#update) will NOT do this.

> If an updated package has an added assembly, a new reference is not added. New package dependencies also don't have their assembly references added. To include these operations as part of an update, update the package in Visual Studio using the Package Manager UI or the Package Manager Console.

This is incredibly frustrating when trying to automate updates through a CI server. The Nuget maintainers are aware of this frustration but [actions have not been taken](https://github.com/NuGet/Home/issues/1512) and it does not appear that anything is going to be done very soon. So, I have written a tool that allows automation through Visual Studio (which is the currently suggested solution by the Nuget maintainers). [PMCCommand](https://github.com/benwtrent/PMCCommand) is a command line utility that allows arbitrary PMC commands to be made against a specified project or solution.

### How it "works"

PMCCommand takes advantage of the [VisualStudio.DTE](https://msdn.microsoft.com/en-us/library/68shb4dw(v=vs.100).aspx) for interprocess communication. A new `devenv` process is spun up and commands are sent directly to the process through DTE wrapped COM. Here is a simple example:

{% highlight java %}
Type t = Type.GetTypeFromProgID("VisualStudio.DTE.14", true);
DTE2 dte = (DTE2)Activator.CreateInstance(t, true);
// Ensure devenv process is killed on `Quit()`
dte.UserControle = false;
// Opens new VisualStudio devenv process
dte.MainWindow.Activate();
// Execute the command with parameters
dte.ExecuteCommand("File.OpenProject", "C:\foo\bar\foobar.sln");
dte.ExecuteCommand("View.PackageManagerConsole", "Update-Package bar");
dte.Solution.Close(true);
dte.Quit();
{% endhighlight %}

One of the biggest gotchas is that the `main` thread from which these messages are sent continues executing before the command completes. Consequently, if commands need to run in a specific order, callbacks need to be utilized. The `DTE2` wrapper class has events signals for most actions that can be used to allow the `main` thread to continue executing. 

{% highlight java %}
dte.Events.SolutionEvents.Opened += SolutionEvents_Opened;
dte.Events.CommandEvents.AfterExecute += CommandEvents_AfterExecute;
//...
void CommandEvents_AfterExecute(string guid, int id, object customIn, object customOut)
{
    // Take action here
}

void SolutionEvents_Opened()
{
    // Take action here
}
{% endhighlight %}

Each command event contains the command `guid`, `cmdid`, and passed parameters. The former two can be rather cryptic but what they mean can be found through a quick search through [MSDN](https://msdn.microsoft.com/en-us/library/microsoft.visualstudio.vsconstants.aspx), grepping the SDK directory  for VisualStudio (`C:\Program Files (x86)\Microsoft Visual Studio 14.0\VSSDK\VisualStudioIntegration\Common\Inc` on my machine), or just good ol' fashioned Google-Fu™.

Also, sometimes messages being sent between processes just fails (possibly due to the receiver being too busy to respond). To combat this a [MessageFilter](https://msdn.microsoft.com/en-us/library/ms228772.aspx) can be used to intercept the messages and their responses to facilitate retries on specific failures. Note, this only works if the calling thread's apartment state is `ApartmentState.STA` and that is the SAME THREAD that also created the COM object.

Putting all this together, you get the guts of `PMCCommand`. Feel free to take it apart and hack it together for your own needs. [https://github.com/benwtrent/PMCCommand](https://github.com/benwtrent/PMCCommand) 

### Additional Info

VisualStudio version and DTE version (Fullname: `VisualStudio.DTE.{version.number}`):

 - VisualStudio 2017 = `15.0`
 - VisualStudio 2015 = `14.0`
 - VisualStudio 2013 = `13.0`


