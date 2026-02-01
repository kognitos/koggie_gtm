---
title: Migrating to v2 | REST API | Kognitos Documentation
url: https://docs.kognitos.com/rest-api/guides/migrating-to-v2
description: How to migrate from Kognitos REST API v1 to v2.
---

# Migrating to v2 | REST API | Kognitos Documentation

## hashtagOverview

This guide describes how to migrate from the Kognitos REST API v1(deprecated)to v2, which offers improved resource organization, more detailed responses, and additional endpoints.

This table shows how v1 endpoints map to their v2 equivalents, along with new capabilities:

Start a Process Run

POST /v1/invoke/{share_id}

POST /v2/runs

Get Run Status

GET /v1/run/{worker_id}

GET /v2/runs/{id}

Upload Files

POST /v1/upload

POST /v2/files

Not available

GET /v2/runs

List Processes

Not available

GET /v2/processes

Get Process Details

Not available

GET /v2/processes/{id}

Check REST API Health

Not available

GET /v2/health

## hashtagMigrating to v2

The REST API v2 endpoints are immediately accessible using your existing API keys and identifiers. Migrating your automations involves updating request structures and handling the new, enhanced responses.

We recommend migrating to v2 at your earliest convenience. While an end-of-life date for v1 has not yet been announced, transitioning now ensures you benefit from v2's enhanced capabilities and continued support.

### hashtagAuthentication

v2 uses the same authentication mechanism as v1. All requests require thex-api-keyheader with anAPI keyarrow-up-right. You can continue using your current API keys without regenerating or reconfiguring them.

### hashtagBase URLs

v2 uses the same region-specific base URLs as v1:

- US Region:rest-api.app.kognitos.com

US Region:rest-api.app.kognitos.com

- EU Region:rest-api.eu.kognitos.com

EU Region:rest-api.eu.kognitos.com

- UK Region:rest-api.uk.kognitos.com

UK Region:rest-api.uk.kognitos.com

### hashtagIdentifiers

The sameagent_idandprocess_idvalues work in v2 without modification. These identifiers are retrieved the same way. No identifier format changes or migrations are required.

However, v1'sworker_idconcept does not exist in v2. In v1, you received aworker_idfromPOST /v1/invoke/{share_id}and used it to check the run status withGET /v1/run/{worker_id}.

In v2, runs are identified by arun ID,which is part of a more comprehensive run object.

Need help finding your identifiers? SeeHow do I get an agent ID?arrow-up-right,How do I get a process ID?arrow-up-right, andHow do I get a run ID?arrow-up-rightin the FAQ.

### hashtagEndpoints

The following sections detail the key differences between v1 and v2 endpoints for each operation. In general, v2 uses more structured request formats and returns richer response objects with additional metadata.

#### hashtagChecking Run Status

Update your response parsing logic to extract data from the detailed run object with status, timestamps, and metadata fields.

SeeExample 5: Get a Specific Runarrow-up-right.

GET /v1/run/{worker_id}

GET /v2/runs/{id}

Path Parameters

Query Parameters

Request Body

{ "state": "done", "answer": "{json having key and value of each output}" }

{ "agent_id": "abc123def456", "created_at": "2021-01-01T12:00:00", "file_ids": ["file789abc", "file456xyz"], "id": "run789xyz", "name": "Process invoice", "outputs": [{"name": "total_items", "value": 42}, {"name": "customer_id", "value": "cus123abc"}], "process_id": "proc456def", "stage": "Draft", "status": "Created" }

#### hashtagUploading Files

Both v1 and v2 use a multi-step upload process with pre-signed URLs.

SeeExample 7: Start a New Run (with File Upload)arrow-up-right.

Step 1: Request Upload URL

POST /v1/upload

POST /v2/files

Step 2: Upload File

Upload file content to returned pre-signed URL

Upload file content to returned pre-signed URL

Step 3: Reference in Run

Passblob_urlviaattachments_keyquery parameter in/v1/invoke/{share_id}

Passfile_idinfile_idsarray in request body of/v2/runs

#### hashtagStarting a Run

Instead of using a share ID in the URL path, put all the run details(process ID, agent ID, stage, inputs, and file references)directly in the request body. Update your automation logic as needed to parse the comprehensive run object returned in the response.

SeeExample 6: Start a New Runarrow-up-right.

POST /v1/invoke/{share_id}

POST /v2/runs

Path Parameters

Query Parameters

attachments_key(optional)

Request Body

{ "fact": "value" }

{ "process_id": "abc123", "agent_id": "xyz789", "stage": "Published", "inputs": { "param1": "value1" }, "file_ids": ["file123"] }

{ "worker_id": "worker123abc456" }

{ "agent_id": "abc123def456", "created_at": "2021-01-01T12:00:00", "file_ids": [...], "id": "run789xyz", "name": "Process invoice", "outputs": [{"name": "total_items", "value": 42}, ...], "process_id": "proc456def", "stage": "Draft", "status": "Created" }

Last updated2 months ago

Was this helpful?
