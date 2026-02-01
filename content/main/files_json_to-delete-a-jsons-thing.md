---
title: Delete a JSON's Item | Files & Documents | Kognitos Documentation
url: https://docs.kognitos.com/files/json/to-delete-a-jsons-thing
description: Deletes a specified key from a JSON object.
---

# Delete a JSON's Item | Files & Documents | Kognitos Documentation

## hashtagOverview

This procedure deletes a specified key from a JSON object. The field is permanently removed from the JSON structure. If the specified key does not exist in the JSON, the operation completes successfully without error (in the new JSON implementation). The procedure supports both simple field names and nested paths using dot notation.

## hashtagInput

The JSON object from which the key will be deleted

The key to be deleted from the JSON object

## hashtagOutput

The updated JSON object after the specified key has been deleted

## hashtagExamples

### hashtag1. Deleting a simple field

This example deletes the "username" field from the JSON object.

### hashtag2. Deleting a field and verifying the result

This example deletes the "TermsCode" field and shows the resulting JSON object would be:{"Description": "0.5% 10 NET 45"}

### hashtag3. Deleting a non-existent field (safe operation)

This example demonstrates that deleting a non-existent field does not cause an error and leaves the JSON unchanged at{"Description": "0.5% 10 NET 45"}.

### hashtag4. Deleting nested fields using dot notation

This example shows deleting a nested field using dot notation. For a JSON like{"b": {"c": 1, "d": {"e": [1, 2]}}}, this would remove the entire "d" object.

### hashtag5. Deleting fields from array elements

This example demonstrates deleting fields from specific elements in an array using ordinals. For a JSON with an "objects" array, this removes the "b" field from the second object and the "c" field from the last object.

### hashtag6. Deleting from nested structures

This example shows deleting fields from nested array structures. The second command demonstrates that deleting a non-existent field ("nowhere") does not cause an error.

Last updated3 months ago

Was this helpful?
