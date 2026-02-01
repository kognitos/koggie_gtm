---
title: Start Parallel Runs | Kognitos Documentation
url: https://docs.kognitos.com/writing-automations/calling-other-processes/start-parallel-runs
description: Learn how to start parallel runs in Kognitos.
---

# Start Parallel Runs | Kognitos Documentation

### hashtagOverview

In Kognitos, a process can call and run multiple subprocesses in parallel using thestart a runsyntax. Starting parallel runs enables the parent process to explicitly wait for the runs, retrieve the statuses, and fetch the outputs.

This is ideal when multiple subprocesses need to run simultaneously and you need to retrieve the statuses or outputs of multiple runs.

### hashtagHow To Start Parallel Runs

This section describes how to start parallel runs using thestart a runsyntax.

#### hashtagSyntax

#### hashtagParameters

- item: Object to loop over.

item: Object to loop over.

- subprocess: The name of the subprocess.

subprocess: The name of the subprocess.

- input: Objects to pass to the subprocess, if necessary.

input: Objects to pass to the subprocess, if necessary.

Use the Process Widget

When defining the procedure name, use theProcess Run Widget:

- Type a forward slash/after "the procedure is ".

Type a forward slash/after "the procedure is ".

- SelectProcessfrom the menu.

SelectProcessfrom the menu.

- Select the process you want to call from the Process drop-down menu.

Select the process you want to call from the Process drop-down menu.

#### hashtagExample

Clickhereto walk through an end-to-end example.

Remember to Publish Your Process

You need to promote your automation from thePlaygroundto aProcessin order to start parallel runs. This applies to both the main parent process and the subprocess. Otherwise, you will get anAssertion Errorsayingprocedure not found.

### hashtagHandling Subprocess Runs

A parent process canexplicitly waitfor the runs of a subprocess to complete. Once all runs have finished executing, the system notifies the parent process which runs will proceed further. This allows the parent to respond accordingly, such as collecting data and output from each subprocess, or taking further action based on the results.

#### hashtagAdding an Explicit Wait

To add an explicit wait, include the following line into your automationafterstarting parallel runs:

#### hashtagGetting Output From Parallel Runs

To get results from subprocesses that are called with thestart a runsyntax, use the following syntax after adding an explicit wait:

#### hashtagSyntax

Below is a line-by-line overview of the automation syntax. Expand each line to learn more.

What does it do?Instructs the system to retrieve data from the parallel run(s).

Where does it go?This phrase should be written on a new line.

Does it require input data?⛔ No — This phrase doesnotrequire input data.

What does it do?Specifies the name of the data elements to retrieve from the parallel runs.

Where does it go?This phrase should be indented belowretrieve data from the runorretrieve data from the runs.

Does it require input data?✅ Yes — Specify one or moretextvalues containing the names of the data elements.

Example:The fact names are "status", "name", "age"

#### hashtagExamples

1. Singular Run

2. Multiple Runs

Automatic Pluralization:If there are multiple runs, the system will automatically pluralize the output in the parent process (e.g.,status->statuses).

### hashtagWalkthrough: Run Parallelization

This is an example walkthrough of invoking multiple instances of a subprocess in parallel runs.

#### hashtagParent Process

The wait count is set to 10 seconds (2 intervals of 5 seconds).

A data element is defined as a list of names.

Initiates a loop across the list of names.

Initiates subprocess invocation usingstart a run wheresyntax.

Specifies the name of the published subprocess to call.

Passes input to the subprocess:the nameis passed asthe user.

Sets an explicit wait for the subprocess runs.

Explicitly retrievesthe greetingoutput from the subprocess runs.

#### hashtagSubprocess

Data is defined as a string that says"Hello "

Theuseris added to the end of the greeting.

The automation outputs a greeting with the user's name at the end.

#### hashtagSubprocess Output

Inline 9,the greetingsis referenced as output from the subprocess runs. Theresultsare:

Last updated5 months ago

Was this helpful?
