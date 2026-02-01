---
title: Concepts | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/s3/concepts
description: Concepts used in AWS S3 book.
---

# Concepts | Books | Kognitos Documentation

The following documentation is forAWS S3 v1.6.3(BDK).

### hashtagS3 file reference

Represents a reference to a file in an S3 bucket.

bucket_name

The name of the S3 bucket containing the file.

The full path of the file within the bucket, including the file name and extension.

parent_path

The path of the parent folder of the file.

The name of the file.

The ETag of the file.

The S3 URI of the file.

The size of the file in bytes.

### hashtagS3 folder reference

Represents a reference to a folder in an S3 bucket.

bucket_name

The name of the S3 bucket containing the folder.

folder_path

The path of the folder within the bucket. Should end with a trailing slash ('/') to indicate it's a folder.

parent_path

The path of the parent folder of the folder.

The name of the folder.

The ETag of the folder.

The S3 URI of the folder.

The size of the folder in bytes.

### hashtagS3 bucket

Represents a S3 bucket.

Name of the S3 Bucket

Last updated3 months ago

Was this helpful?
