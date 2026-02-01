---
title: Processes | REST API | Kognitos Documentation
url: https://docs.kognitos.com/rest-api/v2/processes
description: 
---

# Processes | REST API | Kognitos Documentation

Retrieve information about your automation processes. You can retrieve details about a specific process or all processes within an agent.

### hashtagList Processes

Get a list of processes for a specifiedagent_id.

The unique identifier of the agent. Find your agent ID by opening theAgentdrop-down menu at the top of the platform, selectingView All, and locating the ID in the table.

Maximum number of items to return.

Pagination token used to retrieve the next page of results. It is returned in a prior response from a call made to this endpoint.

A List of processes

Invalid input values

The specified agent was not found

A List of processes

### hashtagGet Process

Get information about a specific process.

The unique identifier of the process. This can be obtained by calling theList Processesendpoint.

The unique identifier of the agent. Find your agent ID by opening theAgentdrop-down menu at the top of the platform, selectingView All, and locating the ID in the table.

The process specified

Invalid input values

The specified process or agent was not found

The process specified

Last updated7 months ago

Was this helpful?
