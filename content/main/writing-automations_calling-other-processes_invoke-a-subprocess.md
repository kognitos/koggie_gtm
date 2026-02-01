---
title: Invoke a Subprocess | Kognitos Documentation
url: https://docs.kognitos.com/writing-automations/calling-other-processes/invoke-a-subprocess
description: Learn how to invoke a subprocess using the invoke keyword.
---

# Invoke a Subprocess | Kognitos Documentation

### hashtagOverview

Invoking a subprocess is one of the three ways a parent process can call a subprocess in Kognitos. When a subprocess isinvokedusing theinvokekeyword, the parent process doesnotmanage its execution or output.

This method is ideal when the parent process does not need to track the status or output of the subprocess and can continue execution immediately after invoking it.

## hashtagHow Can I Invoke A Subprocess?

This section explains how to call a process within another process as asubprocessusing theinvokekeyword.

#### hashtagSyntax

#### hashtagInput Parameters

- subprocess name: The name of the subprocess.

subprocess name: The name of the subprocess.

- inputs: Any data elements the subprocess needs to run.

inputs: Any data elements the subprocess needs to run.

#### hashtagExample

In this example, the subprocessverify applicant qualificationsis called withthe resumeas input.

Last updated8 months ago

Was this helpful?
