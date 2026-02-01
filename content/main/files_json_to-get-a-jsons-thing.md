---
title: Get a JSON's Item | Files & Documents | Kognitos Documentation
url: https://docs.kognitos.com/files/json/to-get-a-jsons-thing
description: Extracts a specific element or elements from a JSON structure.
---

# Get a JSON's Item | Files & Documents | Kognitos Documentation

## hashtagOverview

This procedure extracts a specific element or elements from a JSON structure based on the specified "thing" (field name or path). The thing can be specified with additional adjectives to refine the search within the JSON structure. It supports both simple field access and nested path traversal using dot notation (e.g.,address.city) or possessive syntax (e.g.,address's city). When the JSON is an array, it can extract values from multiple objects.

## hashtagInput

The JSON structure from which the thing is to be extracted

The specific element or elements to extract from the JSON (can include adjectives to refine the search)

## hashtagOutput

The extracted element or elements from the JSON structure. If multiple elements are extracted, they are returned as a list

## hashtagExamples

### hashtag1. Getting a simple field from a JSON object

This example extracts the "name" field from a JSON object.

### hashtag2. Getting a field with an adjective

This example extracts the "first name" field from a JSON object. If the JSON is an array, it returns the "name" field from the first element.

### hashtag3. Getting nested fields using dot notation

This example extracts the "city" field from the nested "address" object using dot notation.

### hashtag4. Getting nested fields using possessive syntax

This example extracts the "city" field from the nested "address" object using possessive syntax.

### hashtag5. Getting fields with spaces

This example extracts a field named "address city" (a single key with a space in it).

### hashtag6. Getting fields from a JSON array

This example shows how to extract fields from an array of JSON objects. When the JSON is an array like[{"Product Name": "P854282R COMP", "Price": "$53.00"}, {"Product Name": "F854734 COMP", "Price": "$34.95"}], you can use ordinals like "first" and "second" to access specific elements.

### hashtag7. Getting deeply nested fields

This example demonstrates accessing deeply nested fields using multiple possessive syntax. For a JSON structure with customers, orders, and order details, this navigates through multiple levels to extract the id field.

### hashtag8. Handling fields with camelCase or special naming

This example shows accessing fields with camelCase naming conventions like "threadId", "historyId", and "sizeEstimate".

Last updated3 months ago

Was this helpful?
