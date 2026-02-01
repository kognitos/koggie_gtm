---
title: Upload | REST API | Kognitos Documentation
url: https://docs.kognitos.com/rest-api/v1/upload
description: Manage your uploads.
---

# Upload | REST API | Kognitos Documentation

v1 of the REST API is nowdeprecated. Please refer tov2for the latest endpoints and features.

### hashtagCreate a URL for a file upload

Creates a pre-signed URL for uploading a file to Kognitos storage for later use in a run.

### Supported File Types:

The following file types are currently supported for uploading:

#### ERP Document

File upload url created successfully. Note the upload_url is valid for only 5 minutes. To upload the file, make a HTTP upload_http_method request to the upload_url with the file as the body - be sure to set any required headers in upload_http_headers The file can then be passed to a run after upload by providing the blob_uri using the attachments_key parameter.

Client error - see message for details

Invalid API key

Department not found

Internal server error

File upload url created successfully. Note the upload_url is valid for only 5 minutes. To upload the file, make a HTTP upload_http_method request to the upload_url with the file as the body - be sure to set any required headers in upload_http_headers The file can then be passed to a run after upload by providing the blob_uri using the attachments_key parameter.

Last updated7 months ago

Was this helpful?
