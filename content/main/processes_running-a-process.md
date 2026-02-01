---
title: Runs | Kognitos Documentation
url: https://docs.kognitos.com/processes/running-a-process
description: Discover the different ways to run an automation process in Kognitos.
---

# Runs | Kognitos Documentation

## hashtagOverview

Arunrepresents a single execution of aprocess. Every time a process is ran, Kognitos captures all the details of its execution (inputs, outputs, and state changes). Each run is also assigned a unique ID, making them easy to track, monitor, and manage.

## hashtagWays to Run a Process

All processes can be run manually(draft or published). Published processes can also be triggered to run automatically by email, via API, or on a schedule.

Run directly from the platform by navigating toProcesses, selecting a process, and clickingRunto start a new run.

- checkTesting

- checkOne-time actions

One-time actions

Email Trigger

Trigger a run by sending an email to a unique email address.

- checkInvoice and document intake

Invoice and document intake

- checkSupport requests

Support requests

- checkAlert-driven workflows

Alert-driven workflows

API Triggerarrow-up-right

Trigger a run by making an HTTP request to the Kognitos REST API.

- checkSystem-to-system integrations

System-to-system integrations

- checkEvent-driven automation

Event-driven automation

- checkBackend workflows

Backend workflows

Scheduled Run

Schedule the process to run automatically at specific times / intervals(e.g., every hour, daily, or weekly)

- checkDaily reports

Daily reports

- checkRecurring system checks

Recurring system checks

- checkRoutine data processing

Routine data processing

## hashtagRun States

Runs execute asynchronously, moving through the following status transitions:Pending → Running → Succeeded, Failed, or Cancelled. Once a run completes successfully, its output becomes available for review or use in subsequent actions.

Run is queued for execution.

Run is currently executing.

Run completed successfully.

Run encountered an error.

Run was cancelled by user.

Run exceeded maximum execution time.

## hashtagManaging Runs

Once a process has been executed, you can manage individual runs through various actions. To access these options:

Navigate to Processes

From the left navigation menu, go toProcesses.

Select a Process

Click on the process you want to manage.

ClickView Runsto see all the process runs.

Select Runs and Choose an Action

Select the checkbox next to one or more runs. The following actions become available:

Re-executes a process using the same inputs and configuration as the selected run. This is useful for retrying failed runs or reproducing results with identical parameters.

Moves runs out of the main view to help organize and declutter your run history. Archived runs can be restored at any time.

Archiving a running process willnotpause or stop its execution. The run will continue to completion regardless of its archived status.

3. Unarchive

Restores previously archived runs back to the main run view. This makes them visible again in the default run list (without filters).

4. Add Test Case

Creates a test case from the selected run. Test cases can be used to validate process behavior in theTest Suite.

Last updated3 months ago

Was this helpful?
