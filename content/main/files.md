---
title: Create a JSON | Files & Documents | Kognitos Documentation
url: https://docs.kognitos.com/files
description: Creates an empty JSON object.
---

# Create a JSON | Files & Documents | Kognitos Documentation

## hashtagOverview

This procedure creates an empty JSON object (represented as{}). This is useful as a starting point for building up a JSON structure by adding fields one at a time. The empty JSON object can then be assigned to a fact and populated with data.

## hashtagInput

This procedure has no input concepts.

## hashtagOutput

An empty JSON object{}

## hashtagExamples

### hashtag1. Creating a simple empty JSON

This example creates an empty JSON object{}.

### hashtag2. Creating and using an empty JSON

This example creates an empty JSON object and assigns it to a fact called "request".

### hashtag3. Creating and populating a JSON object

This example creates an empty JSON and then populates it with three fields: name, age, and company.

### hashtag4. Creating multiple JSON objects

This example creates another empty JSON object with a different fact name and populates it with company and address fields.

### hashtag5. Creating JSON for nested structures

This example creates multiple JSON objects and nests one within another. The result would be:{"data": {"age": "23"}}

### hashtag6. Creating JSON for use with merge operations

This example creates an empty JSON object that will be used to merge or combine data from other sources.

Last updated3 months ago

Was this helpful?
