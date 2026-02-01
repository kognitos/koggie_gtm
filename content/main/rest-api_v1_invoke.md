---
title: Invoke | REST API | Kognitos Documentation
url: https://docs.kognitos.com/rest-api/v1/invoke
description: Invoke automation runs.
---

# Invoke | REST API | Kognitos Documentation

v1 of the REST API is nowdeprecated. Please refer tov2for the latest endpoints and features.

### hashtagStart a new automation run

Asynchronously starts an automation run given a share_id.

### To get theshare_id:

- Go toProcessesand click on a Process to open the Process view.

- In the process view, navigate to the three dots in the top-right corner. Click to open the drop-down menu.

- SelectCopy API Endpoint. It will copy the endpoint URL with the alpha-numericshare_idat the end. For example:The endpoint URL:https://rest-api-main.kognitos-test.net/v1/invoke/abcd3fg9ijk5mn1pqr3tu2wxyTheshare_id:abcd3fg9ijk5mn1pqr3tu2wxy

- The endpoint URL:https://rest-api-main.kognitos-test.net/v1/invoke/abcd3fg9ijk5mn1pqr3tu2wxy

- Theshare_id:abcd3fg9ijk5mn1pqr3tu2wxy

The share_id identifies the automation to start. The share_id can be obtained from within the Kognitos web app when looking at an automation. Note that a share_id identifies an automation and a stage - draft/published.

The (optional) key to use for passing a list of file attachments to the run. For example, if attachments_key is "attachments", then the client can pass the list of attachments using the parameter "attachments" in the body of the request. The value should be a list of blob_uris. See the upload API for more detail on how to get a blob_uri.

Successful operation

Mismatch with department

Invalid API key

Invalid share id

Internal server error

Successful operation

Last updated7 months ago

Was this helpful?
