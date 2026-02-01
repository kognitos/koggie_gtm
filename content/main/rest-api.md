---
title: Overview | REST API | Kognitos Documentation
url: https://docs.kognitos.com/rest-api
description: Our REST API is a programmatic interface for interacting with Kognitos, allowing you to manage agents, processes, files, and runs.
---

# Overview | REST API | Kognitos Documentation

Version 2is the latest version of the Kognitos REST API.Check out our migration guidehere.

## hashtagAuthentication

Authentication uses anAPI Keyarrow-up-right, which must be included in thex-api-keyheader of every request:

## hashtagBase URLs

Our REST API is available in different regions. Use the base URL that matches your region when making requests:

https://rest-api.app.kognitos.com

https://rest-api.eu.kognitos.com

https://rest-api.uk.kognitos.com

## hashtagEndpoints

These are theresourcesandendpointsin the Kognitos REST API(v2):

Processesarrow-up-right

GET /v2/processesarrow-up-right

Get all processes for a specified agent

GET /v2/processes/{id}arrow-up-right

Get detailed information for a specific process

Runsarrow-up-right

GET /v2/runsarrow-up-right

Get all runs for a specified process and agent

POST /v2/runsarrow-up-right

Start a new run for a specified process

GET /v2/runs/{id}arrow-up-right

Get the details of a specific process run

POST /v2/filesarrow-up-right

Request file upload URL

GET /v2/healtharrow-up-right

Check the status and system health of the REST API v2

Last updated2 months ago

Was this helpful?
