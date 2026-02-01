---
title: Open a JSON | Files & Documents | Kognitos Documentation
url: https://docs.kognitos.com/files/json/to-open-a-json-at-a-file
description: Opens a JSON file from either an S3 URL or an uploaded file.
---

# Open a JSON | Files & Documents | Kognitos Documentation

## hashtagOverview

This procedure opens and reads a JSON file from either a specified S3 URL or uploaded directly to Kognitos. It retrieves the file content, parses it as JSON, and returns the JSON object.

## hashtagInput

The S3 URL of the JSON file to be opened

## hashtagOutput

The JSON object obtained from the file

## hashtagExamples

### hashtag1. Opening a JSON file from S3

This example opens a JSON file stored at the specified S3 URL and returns the parsed JSON object.

### hashtag2. Opening a JSON file from an uploaded file

This example opens a JSON file that was uploaded by the user to Kognitos.

### hashtag3. Reading a JSON file from S3

This example reads a JSON file stored at the specified S3 URL and returns the parsed JSON object. This is an alternative syntax to "open a json at a file" and provides the same functionality.

### hashtag4. Reading a JSON file from an uploaded resource

This example demonstrates reading a JSON file containing student and course information from a test resource. The result would be a JSON object with nested structures for student details and course arrays.

### hashtag5. Error handling for invalid JSON files

This example shows the error handling when attempting to read an invalid or non-existent JSON file. The system will prompt with "Could not read a json from a file."

Last updated3 months ago

Was this helpful?
