---
title: Run a Subprocess | Kognitos Documentation
url: https://docs.kognitos.com/writing-automations/calling-other-processes/run-a-subprocess
description: Learn how to call and run a subprocess using the process run widget.
---

# Run a Subprocess | Kognitos Documentation

### hashtagOverview

One of the three ways a parent process can call a subprocess in Kognitos is by using theProcess Run Widget. In this setup, the parent process controls the execution and output of the subprocess.

This method is ideal for single-run scenarios where you need to capture the result and status of a subprocess.

### hashtagHow to Call a Subprocess Using the Process Run Widget

- In your automation, write the keywordrunfollowed by a slash/

In your automation, write the keywordrunfollowed by a slash/

- From the menu that appears, selectProcess.

From the menu that appears, selectProcess.

- Click on the Process drop-down menu to select the process you want to call.

Click on the Process drop-down menu to select the process you want to call.

### hashtagPassing Data to a Subprocess

Passing data to a subprocess allows the parent process to provide the specific inputs the subprocess needs to do its work. This makes subprocesses more dynamic and reusable, as they don’t depend on hardcoded values. To enable this, the parent process must explicitly pass the required data, and the subprocess must be designed to accept and return values accordingly.

#### hashtagParent Process

In yourparent process, add a new line afterrun <subprocess>. Indent and reference the data needed for the subprocess run on the new line. If a data element is required but not explicitly provided, Kognitos will raise aquestion.

#### hashtagSubprocess

In yoursubprocess, include one of these lines at the end of your automation to return data to the parent process. This syntax informs Kognitos of the subprocess's result so it can be accessed in the parent process.

- For a single result:the result is {result}

For a single result:the result is {result}

- For multiple results:the results are {result 1}, {result 2}, ...

For multiple results:the results are {result 1}, {result 2}, ...

### hashtagExamples

#### hashtag1. Returning a Single Result

This example shows how a subprocess can be used to calculate a total. The main process,Process an Invoice, calls the subprocesscalculate the totaland provides the price. The subprocess uses the price to calculate and return the total.

#### hashtag2. Returning Multiple Results

This example shows how to return multiple results from a subprocess. Here, the subprocessSplit Full Namereturns two results:the first nameandthe last name.

If you need to runmultiple instancesof a subprocess in parallel, seeStarting Parallel Runsfor details on using thestart a runsyntax.

Last updated3 months ago

Was this helpful?
