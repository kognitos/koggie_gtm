---
title: Runs | REST API | Kognitos Documentation
url: https://docs.kognitos.com/rest-api/v2/runs
description: 
---

# Runs | REST API | Kognitos Documentation

Trigger and manage process runs. Start new runs and view details about run executions.

### hashtagList Runs

Get a list of all the runs for a specified process and agent.

The unique identifier of the process.

The unique identifier of the agent.

Maximum number of items to return.

The process stage.

Stage of a process

Pagination token used to retrieve the next page of results. It is returned in a prior response from a call made to this endpoint.

A List of runs

Invalid input values

The specified process or agent was not found

A List of runs

### hashtagStart a Run

Initiates a new run (execution) of a specified process. Each run is an independent instance that can be tracked for status and results.

The ID of the agent containing the process

List of IDs of files given as input to the process

Inputs to the process

Name for this run

The ID of the process to run

The stage of the process

The run created

Invalid input values

A referenced resource was not found

The run created

### hashtagGet Run

Get the details of a specific run.

The unique identifier of the run.

The requested run

Invalid input values

The specified run was not found

The requested run

Last updated7 months ago

Was this helpful?
