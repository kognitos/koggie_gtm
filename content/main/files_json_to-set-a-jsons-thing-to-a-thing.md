---
title: Set or Change a JSON's Value | Files & Documents | Kognitos Documentation
url: https://docs.kognitos.com/files/json/to-set-a-jsons-thing-to-a-thing
description: Sets or changes a specific value within a JSON object to a new value.
---

# Set or Change a JSON's Value | Files & Documents | Kognitos Documentation

## hashtagOverview

This procedure sets or changes a specific value within a JSON object to a new value. The verbs "set" and "change" are interchangeable. It supports both simple field names and nested paths using dot notation (e.g.,settings.notifications.enabled). If the field does not exist, it will be created. The JSON object is modified in place.

## hashtagInput

The JSON object to be modified

The path within the JSON object where the value is to be set or changed (specified as a handle)

The new value to be set at the specified path within the JSON object

## hashtagOutput

This procedure modifies the JSON in place and does not return a value.

## hashtagExamples

### hashtag1. Setting a simple field value

This example sets the "age" field of the JSON object to 23.

### hashtag2. Setting a field using the set command

This example sets the "name" field of the JSON object to "John Doe".

### hashtag3. Setting a nested field using dot notation

This example sets a deeply nested field using dot notation.

### hashtag4. Setting and modifying fields in sequence

This example shows multiple sequential modifications to JSON fields. The TermsCode is changed from "38" to 39.

### hashtag5. Using set command explicitly

This example uses the explicit "set" command to modify a field.

### hashtag6. Using change command

This example uses the "change" command, which is equivalent to "set".

### hashtag7. Adding a new field to a JSON object

This example adds a new field "Label" to an existing JSON object. The result would be:{"TermsCode": 42, "Description": "0.5% 10 NET 45", "Label": "Default"}

### hashtag8. Setting nested JSON structures

This example demonstrates setting one JSON object as a field within another JSON object.

### hashtag9. Setting a list as a field value

This example shows setting a list as a field value in a JSON object.

### hashtag10. Setting array element by ordinal

This example demonstrates setting array elements using ordinals like "first", "second", and "last".

### hashtag11. Setting nested array fields

This example shows setting fields within objects that are elements of an array.

Last updated3 months ago

Was this helpful?
