---
title: Convert Thing to Table | Tables | Kognitos Documentation
url: https://docs.kognitos.com/tables/conversions/convert-thing-to-table
description: Converts a specified thing, such as a CSV file or JSON, into a table.
---

# Convert Thing to Table | Tables | Kognitos Documentation

### hashtagOverview

Converts a specified thing, such as a CSV file or JSON, into a table. Only CSV files (and JSON if new_json is enabled) are supported for conversion.

### hashtagSyntax

Wherethe thingis replaced by a reference to a CSV or JSON object.

### hashtagParameters

- thing(required): The object to be converted into a table. Must be a CSV file or JSON object.

thing(required): The object to be converted into a table. Must be a CSV file or JSON object.

### hashtagReturns

A table created from the CSV or JSON data.

### hashtagExamples

#### hashtagExample 1: Convert CSV File to Table

Result: Table created from CSV file contents

Expected table structure:

Los Angeles

#### hashtagExample 2: Convert CSV String to Table

Result: Round-trip conversion - table → CSV → table preserves data

#### hashtagExample 3: Convert JSON to Table (with new_json enabled)

Result: Table with columns "name" and "val"

#### hashtagExample 4: Convert Single JSON Object to Table

Result: Single-row table

Last updated3 months ago

Was this helpful?
