---
title: Guidance Center | Kognitos Documentation
url: https://docs.kognitos.com/exception-handling/guidance-center
description: Learn how to provide guidance to automations in the Guidance Center.
---

# Guidance Center | Kognitos Documentation

## hashtagOverview

When an automation needs additional context or clarification to proceed, it will raise aquestion(also called anexception). In Kognitos, exceptions are resolved byproviding guidance— giving input to the system so it understands how to proceed. Using theGuidance Center, you can quickly provide guidance across automations to keep your processes running smoothly.

## hashtagGetting Started

Access theGuidance Centerfrom the top navigation menu. Here’s a quick walkthrough: ⬇️

## hashtagKey Features

TheGuidance Centercontains the following key features:

### hashtagGuidance Groups

Exceptions are grouped based on the automation step where each exception occurred. Using guidance groups, you can resolve similar issues together, instead of handling them individually.

### hashtagFilters

Sort and filter exceptions by:

- Status(Pending, Archived, Answered)

Status(Pending, Archived, Answered)

- Date(1 Week, 1 Month, 3 Months, Custom Range)

Date(1 Week, 1 Month, 3 Months, Custom Range)

### hashtagException Handling Modes

Use theTry New Flowtoggle to switch between:

- Group Handling(Try New Flow: enabled)- Resolve multiple related exceptions at once.

Group Handling(Try New Flow: enabled)- Resolve multiple related exceptions at once.

- Individual Handling(Try New Flow: disabled)- Resolve exceptions one by one, a workflow used in the former Exception Center.

Individual Handling(Try New Flow: disabled)- Resolve exceptions one by one, a workflow used in the former Exception Center.

## hashtagProviding Guidance

Providing guidanceis the process of giving input(guidance)that helps the system understand how to resolve exceptions and continue execution. Guidance can take the form of a specific value, a decision to skip the issue, or another form of clarification. Additionally, guidance can be provided forindividual exceptionsor for an entiregroup of exceptions.

We recommendgroup handling— It’s the fastest and easiest way to resolve multiple exceptions!

### hashtag1. Group Exception Handling

Group exception handlingallows you to resolve multiple exceptions at once. The Guidance Center automatically identifies and groups exceptions based on the automation step where each exception occurred. Instead of handling each exception individually, you can address the entire group. Additionally, group exception handling allows you to provide guidance using natural language instructions. Here's how:

Navigate to the Guidance Center

From the top navigation menu, go to theGuidance Center.

Try New Flow

EnableTry New Flowfor group exception handling.

Select a Guidance Group

Select aguidance groupby clicking on it.

View More Details

Open anyrunto view more details about an exception.

Provide Guidance in Natural Language

Provide instructions for resolving the exception. Then, click onGenerateto create answer suggestions.

➡️Best Practices

Provide clear instructions, including necessary context to avoid misinterpretations.

If the system has pulled incorrect data, override it by clearly stating what to use and what to ignore.

Specify if you need data returned in a specific format(especially for dates or numbers).

Review Suggestions

Review the suggested answers. Hover over the✨icon to view an explanation summary.

Take Action

Decide how to handle each run, after reviewing the suggested answers. You can choose to submit, provide alternative guidance(individually or for multiple runs), or leave certain runs unresolved and return to them later.

Click onChoose another answer optionto take an alternative action.

Individual Resolution Actions

These resolution actions can be taken on individual runs:

Enter your own answer directly, instead of using the system-generated suggestion. You can choose one of the following value types:Text,File Upload, orNo Value. This option may be useful when the automation can’t infer the right answer.

Let the system calculate or derive the answer using available data or logic. You can use this when the answer isn’t directly available, but can be computed.

This option bypasses the step in the automation. This is helpful if the step is not applicable or doesn't need resolution at the moment. For this resolution method, you can alsoadd a delay or timeout.

Note: Skipping a step may cause another exception if it resolves data that's needed later in the automation.

For example: An exception occurs with the message "Could not get a file as a scanned document". The user chooses the Skip this step option. Later, the automation attempts to reference the document, resulting in a new exception: "Please provide scanned document."

Use this option tore-execute the failed automation step. This may be helpful if the exception was caused by a network error, a timeout, or temporary issues.

Bulk Resolution Actions

Select one or more runs, then choose one of the following actions to apply to all:

Skipthe current step for all the selected runs.

Retrythe automation step for all the selected runs.

Submitanswers across all the selected runs.

Assignthe selected questions to a user.

### hashtag2. Individual Exception Handling

Theindividual exception handlingworkflow(previously used in theException Center)is also available in the Guidance Center.

Navigate to the Guidance Center

From the top navigation menu, go to theGuidance Center.

Disable Try New Flow

DisableTry New Flowfor individual exception handling.

Select an Exception

Select an exception to resolve from the bottom.

Select a Resolution Method

Select aresolution methodto handle the exception.

Checkalways use this answer for this processto automatically reuse your response if the same exception reoccurs in the future.

ClickSubmitto submit the resolution.

## hashtagResolution Methods

When resolving exceptions in the Guidance Center, you can choose from several resolution methods:

### hashtagProvide Value

Manually enter a static value to resolve the exception. Use this when you know the exact answer for simple values like names, numbers, dates, or text. Supports multiple input types (text, number, date, boolean, file upload, or no value). Character limit: 5,000.

### hashtagCompute the Answer

Write executable automation code (a technique) that calculates the answer dynamically. Use this when the answer needs to be calculated from data, varies based on context, or requires extraction/transformation. The technique runs in a mini playground, and you can choose to use the output as the answer, retry the step, or skip the step. Character limit: 15,000.

### hashtagSkip

Bypasses the current step and continues to the next step. Use this for optional or non-critical steps, when you want to continue despite failures, or for testing. You can optionally provide additional facts before skipping.

Skipping a step may cause another exception if it resolves data needed later. For example, if you skip getting a document, later references to that document will raise new exceptions.

### hashtagRetry

Re-executes the failed step. Use this for temporary failures (network issues, rate limits, timeouts) or when waiting might resolve the issue. You can configure a minimum delay (wait time before retry) and timeout (maximum retry duration), both in seconds. Optionally provide additional facts before retrying.

### hashtagReview

Approves a review request when the system needs human verification. Use this to approve extracted data, confirm actions should proceed, or validate quality control checkpoints.

### hashtagValidate Facts

Provide or correct facts that failed validation. The system will run a technique with your corrected facts, then you choose to retry or skip the original step. Use this when extracted data is incorrect or incomplete, or when validation rules need to be overridden.

### hashtagReplace Step

Replaces the problematic step with new steps you provide. Use this when the original step is fundamentally wrong, you need to change the approach entirely, or for one-time workarounds.

## hashtagLearning from Resolutions

Most resolution methods can belearned, meaning the same resolution will automatically apply to identical exceptions in the future. When submitting an answer, check the "Remember" checkbox and select where to apply (Draft Mode and/or Published Mode for processes, or agent's playgrounds). The learning will be stored and applied automatically to future identical exceptions, eliminating the need for repeated human intervention.

## hashtagNotes

### hashtagException Scope & Visibility

The Guidance Center only shows exceptions forpublished runs. Draft runs are treated as test runs, so they don’t generate exceptions. If you don’t see an exception, first check whether the process is published.

Last updated2 months ago

Was this helpful?
