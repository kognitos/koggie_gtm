---
title: FAQ | REST API | Kognitos Documentation
url: https://docs.kognitos.com/rest-api/guides/faq
description: Frequently Asked Questions for the Kognitos REST API.
---

# FAQ | REST API | Kognitos Documentation

### hashtag1. How do I get an API Key?

- Log in to your Kognitos account.

Log in to your Kognitos account.

- Navigate toUser Icon>API Keys.

Navigate toUser Icon>API Keys.

- Click onNew API Key. Assign it a name and a scope.

Click onNew API Key. Assign it a name and a scope.

- ClickCreateto generate your secret key. Store the key securely, as it won't be shown again.

ClickCreateto generate your secret key. Store the key securely, as it won't be shown again.

Check out theAPI Keysarrow-up-rightguide for more details on creating and managing API keys.

### hashtag2. How do I get an agent ID?

There are two ways you can get an agent ID:

#### hashtagOption 1: Copy API Endpoint

- Navigate toProcessesand click into a process.

Navigate toProcessesand click into a process.

- Click on the menu in the top-right (⋮) and selectCopy API Endpoint.

Click on the menu in the top-right (⋮) and selectCopy API Endpoint.

- Copy theagent_idfrom the API Information that appears.

Copy theagent_idfrom the API Information that appears.

#### hashtagOption 2: View All Agents

Click on theagent dropdownmenu and selectView Allto see a complete list of all your agents with their corresponding IDs:

### hashtag3. How do I get a process ID?

#### hashtagOption 1: Copy API Endpoint

- Navigate toProcessesand click into a process.

Navigate toProcessesand click into a process.

- Click on the menu in the top-right (⋮) and selectCopy API Endpoint.

Click on the menu in the top-right (⋮) and selectCopy API Endpoint.

- Copy theprocess_idfrom the API Information that appears.

Copy theprocess_idfrom the API Information that appears.

#### hashtagOption 2: Via API

Make a GET request to/v2/processesarrow-up-right. ReplaceYOUR_AGENT_IDwith your agent ID andYOUR_API_KEYwith your API key in the following request:

Look for theidin the response, which is theprocess ID:

### hashtag4. How do I get a run ID?

Make a GET request to/v2/runsarrow-up-rightto retrieve a list of runs. ReplaceYOUR_PROCESS_ID,YOUR_AGENT_ID, andYOUR_API_KEYwith your actual values:

Look for theidin the response, which is therun ID:

### hashtag5. How do I start a new run using the API?

#### hashtagWithout Files

To trigger a new runwithoutfile uploads, seeExample 6: Start a New Run, which shows how to make a POST request to/v2/runs, include required fields(name, process_id, agent_id, stage)and pass optional input parameters.

#### hashtagWith One or More Files

To trigger a new runwithone or more files, seeExample 7: Start a New Run (with File Upload), which shows the complete 3-step workflow:

- Make a POST request to/v2/files

Make a POST request to/v2/files

- Make a POST request to the upload URL obtained in Step #1

Make a POST request to the upload URL obtained in Step #1

- Make a POST request to/v2/runsto start a run with the file ID in thefile_idsarray

Make a POST request to/v2/runsto start a run with the file ID in thefile_idsarray

### hashtag6. How do I populate the outputs when getting a run's result?

When you retrieve a run viaGET /v2/runs/{run_id}, the API returns facts that start with"the output"in theoutputsfield of the response.

In your automation process, define facts likethe output valueorthe output invoice numberat the top level (not within a subprocess or indented blocks). For example:

#### hashtagAPI Response

When you callGET /v2/runs/{run_id}, you'll receive:

### hashtag7. How do I make API requests with Postman?

Import our pre-built Postman collection to quickly call all Kognitos REST API endpoints.

#### hashtagStep 1: Import the Collection

- Download theKognitos REST API Postman Collection(above).

Download theKognitos REST API Postman Collection(above).

- Open Postman and clickImport.

Open Postman and clickImport.

- Select the downloaded JSON file. The collection will appear in your workspace with all endpoints organized.

Select the downloaded JSON file. The collection will appear in your workspace with all endpoints organized.

#### hashtagStep 2: Set Up Environment Variables

Create environmentvariables:

Your API key

your-api-key-here

API base URL for your region

https://rest-api.app.kognitos.com

Your agent ID

a7xm2kp9qwj3v5nh8t4c6r1e9z

Your process ID

b4fzn1ghy2nbd3ems6lfd5k044fgd

- Save the environment and select it from the dropdown.

Save the environment and select it from the dropdown.

#### hashtagStep 3: Make Requests

The collection includes pre-configured requests for all endpoints. Thex-api-keyheader and base URLs use the environment variables you set up, so you can start making requests immediately.

### hashtag8.How can I import Postman output into Kognitos?

- Save the response from Postman as a.jsonfile and upload it to your Kognitos automation.

Save the response from Postman as a.jsonfile and upload it to your Kognitos automation.

- In your automation, write the following lines to upload and open the JSON file:

In your automation, write the following lines to upload and open the JSON file:

You can also use theHTTP bookarrow-up-rightto make API requests directly from Kognitos instead of Postman. SeeFAQ #10for more details.

### hashtag10. How do I call the Kognitos REST API from within an automation?

You can make requests to the Kognitos REST API directly from within a Kognitos playground or process automation using theHTTParrow-up-rightbook.

#### hashtagExample: Get All Processes

#### hashtagExample: Get a Specific Run

#### hashtagExample: Start a New Run

Last updated3 months ago

Was this helpful?
