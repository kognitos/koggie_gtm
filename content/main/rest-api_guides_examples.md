---
title: Examples | REST API | Kognitos Documentation
url: https://docs.kognitos.com/rest-api/guides/examples
description: Examples and workflows for using the Kognitos REST API v2.
---

# Examples | REST API | Kognitos Documentation

### hashtag1. Check Health

Check the health and availability of the REST API v2.

### hashtag2. List Processes

List all processes in a specified agent.

### hashtag3. Get a Specific Process

Get details for a specific process by ID.

### hashtag4. List Runs

List all runs for a specific process and agent.

### hashtag5. Get a Specific Run

Get the status and details of a specific run.

### hashtag6. Start a New Run

Trigger a new process run(without a file upload). The request body must be sent asJSONwith the following fields:

#### hashtagRequired Fields

The process name (e.g., "to process the invoices")

The unique identifier of the process you want to execute.

The unique identifier of the agent that will execute the process.

The version of the process to run. Use"Published"for production processes or"Draft"for testing processes still in development.

#### hashtagOptional Fields

An array of input parameters to pass to your process. Each input is an object withname(the name of the data element/fact as defined in your process) andvalue(the actual value for that data element/fact).

An array of file IDs for the run.

This example shows how to start a new runwithouta file upload. To start a runwitha file upload and learn how to specifyfile_ids, seeExample 7.

### hashtag7. Start a New Run (with File Upload)

Trigger a new process run with an uploaded file. This is a 3-step process.

#### hashtagStep 1

First, make aPOST requestto/v2/filesarrow-up-rightto get an upload URL.

> The request body must be sent as JSON with two required fields:file_name: The name of your fileagent_id: Your agent ID

The request body must be sent as JSON with two required fields:

- file_name: The name of your file

file_name: The name of your file

- agent_id: Your agent ID

agent_id: Your agent ID

Save this response — you'll need it in subsequent steps.

#### hashtagStep 2

Next, make aPOST requestto theupload_urlfrom the response in Step 1.

> The request body must be sent asform data(multipart/form-data) and should include all theupload_fields(key, AWSAccessKeyId, x-amz-security-token, policy, signature, Content-Type)from the response in Step 1, plus thefileto be uploaded.

The request body must be sent asform data(multipart/form-data) and should include all theupload_fields(key, AWSAccessKeyId, x-amz-security-token, policy, signature, Content-Type)from the response in Step 1, plus thefileto be uploaded.

A successful upload returns a204status code with no response body.

#### hashtagStep 3

Finally, make aPOST requestto/v2/runsarrow-up-rightto start a new run.

> In your request body, add theid(from the response in Step 1)to thefile_idsarray.

In your request body, add theid(from the response in Step 1)to thefile_idsarray.

Refer toExample 6for more details on optional and required fields for this request.

### hashtagNotes

- Authentication: All requests require an API key. Include your key in thex-api-keyheader.

Authentication: All requests require an API key. Include your key in thex-api-keyheader.

- Base URLs: All examples use the US region base URL:https://rest-api.app.kognitos.com. If you're in a different region, adjust the base URL accordingly:UK:https://rest-api.uk.kognitos.comEU:https://rest-api.eu.kognitos.com

Base URLs: All examples use the US region base URL:https://rest-api.app.kognitos.com. If you're in a different region, adjust the base URL accordingly:

- UK:https://rest-api.uk.kognitos.com

UK:https://rest-api.uk.kognitos.com

- EU:https://rest-api.eu.kognitos.com

EU:https://rest-api.eu.kognitos.com

- Placeholders: Replace placeholder values in the requests with your actual values:YOUR_API_KEY: Your API key secretYOUR_AGENT_ID: Your agent IDYOUR_PROCESS_ID: Your process IDYOUR_RUN_ID: Your run ID

Placeholders: Replace placeholder values in the requests with your actual values:

- YOUR_API_KEY: Your API key secret

YOUR_API_KEY: Your API key secret

- YOUR_AGENT_ID: Your agent ID

YOUR_AGENT_ID: Your agent ID

- YOUR_PROCESS_ID: Your process ID

YOUR_PROCESS_ID: Your process ID

- YOUR_RUN_ID: Your run ID

YOUR_RUN_ID: Your run ID

For more information, check out ourFrequently Asked Questions.

Last updated3 months ago

Was this helpful?
