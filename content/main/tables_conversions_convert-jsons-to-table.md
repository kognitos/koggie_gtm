---
title: Convert JSONs to Table | Tables | Kognitos Documentation
url: https://docs.kognitos.com/tables/conversions/convert-jsons-to-table
description: Converts a specified non-empty JSON array of objects (or single object) into a table.
---

# Convert JSONs to Table | Tables | Kognitos Documentation

### hashtagOverview

Converts a specified non-empty JSON array of objects (or single object) into a table. This is a specialized conversion procedure for JSON data that explicitly creates tables from JSON arrays.

### hashtagSyntax

### hashtagParameters

- jsons(required): A JSON array of objects or a single JSON object to be converted into a table.

jsons(required): A JSON array of objects or a single JSON object to be converted into a table.

### hashtagReturns

A table where:

- Each object in the array becomes a row

Each object in the array becomes a row

- Object keys become column names

Object keys become column names

- Object values become cell values

Object values become cell values

### hashtagExamples

#### hashtag1. Convert Simple JSON Array to Table

Result: Table with columns "a" and "b"

#### hashtag2. Convert JSON with Nested Objects

Result: Table preserving nested structures

{"bar": "baz"}

{"bar": "busy"}

{"bar": "booze"}

#### hashtag3. Round-Trip Conversion

Result: Original JSON structure preserved

#### hashtag4. Single JSON Object

Result: Single-row table

#### hashtag5. Complex JSON from External Source

Result: Table with all fields, None/null values preserved

Last updated3 months ago

Was this helpful?
