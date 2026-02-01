---
title: Get a Text as a JSON | Files & Documents | Kognitos Documentation
url: https://docs.kognitos.com/files/json/to-get-a-string-as-a-json
description: Converts a string to a JSON object.
---

# Get a Text as a JSON | Files & Documents | Kognitos Documentation

## hashtagOverview

This procedure converts a string to a JSON object by parsing the string content. The string should contain valid JSON syntax. The procedure automatically handles strings that may have extra text before or after the JSON content by identifying and extracting the JSON portion (looking for opening{or[and corresponding closing}or]).

## hashtagInput Concepts

The string to be converted into a JSON object

## hashtagOutput Concepts

The JSON object obtained from the string conversion

## hashtagExamples

### hashtag1. Converting a simple JSON string

This example converts a string containing JSON to a JSON object.

### hashtag2. Converting a string with JSON object

This example converts a string representation of a JSON object to an actual JSON object.

### hashtag3. Converting and accessing JSON fields

This example shows converting a JSON string and then accessing its fields. The result would be "0.5% 10 NET 45" for Description and "38" for TermsCode.

### hashtag4. Converting a JSON array string

This example demonstrates converting a string containing a JSON array to an actual JSON array with multiple product objects.

### hashtag5. Converting complex nested JSON

This example shows converting a complex nested JSON structure from a string and then accessing a field. For a JSON with nested objects like{"u_project_name": {"link": "...", "value": "..."}, "state": "4"}, this would return "4".

Last updated3 months ago

Was this helpful?
