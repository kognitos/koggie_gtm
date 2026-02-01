---
title: Get a Table from a File | Tables | Kognitos Documentation
url: https://docs.kognitos.com/tables/table-creation/get-a-table-from-a-file
description: Opens a table from a file, provided either through direct upload or at an S3 URL.
---

# Get a Table from a File | Tables | Kognitos Documentation

### hashtagOverview

This procedure imports a table from a file, which can be provided via direct upload to Kognitos or fetched from an S3 URL. It supports popular file formats such as CSV and Excel.

It is recommended to useGet the Worksheetarrow-up-rightfollowed byGet the Worksheet's Tablearrow-up-rightwhen extracting tables fromExcelfiles.

### hashtagSyntax

Below is a line-by-line overview of the automation syntax. Expand each line to learn more.

#### hashtagWhat does it do?

Specifies the file to extract the table from.

#### hashtagWhere does it go?

This phrase should be written on anew line.

#### hashtagIs it required?

✅ Yes — This phrase isrequired.

#### hashtagDoes it require data?

✅ Yes — Either specify an S3 url usingisor leave this line as "the file" to raise an exception prompting a local file upload.

#### hashtagExample

#### hashtagWhat does it do?

Instructs the system to extract the table at the provided file.

#### hashtagWhere does it go?

This phrase should be written on anew line.

#### hashtagIs it required?

✅ Yes — This phrase isrequired.

#### hashtagDoes it require data?

✅ Yes — Requiresthe fileto be defined in the previous line.

### hashtagExamples

#### hashtag1. Uploading a File Directly

Here,the filewill raise a question prompting you to upload a file directly.

#### hashtag2. Specifying an S3 URL

In this example,the fileis provided as an S3 URL.

Last updated6 months ago

Was this helpful?
