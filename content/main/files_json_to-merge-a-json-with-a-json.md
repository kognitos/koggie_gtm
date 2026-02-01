---
title: Merge a JSON with a JSON | Files & Documents | Kognitos Documentation
url: https://docs.kognitos.com/files/json/to-merge-a-json-with-a-json
description: Merges two JSON objects and returns the merged result.
---

# Merge a JSON with a JSON | Files & Documents | Kognitos Documentation

## hashtagOverview

This procedure merges two JSON objects into one. The first JSON object (target) is merged with the second JSON object (object), and the result contains all keys from both objects. The original JSON objects remain unchanged; a new merged object is returned.

## hashtagInput

The first JSON object

The second JSON object which will be merged with the first

## hashtagOutput

The final merged JSON object

## hashtagExamples

### hashtag1. Simple merge with non-overlapping keys

This example merges two JSON objects where some keys overlap. The merged result would be:{"address": "Bangalore", "age": 28, "company": "Kognitos", "name": "john"}. Note that in the basic implementation, the "company" field from json2 would overwrite json1's value.

### hashtag2. Verifying original objects remain unchanged

This example verifies that the original JSON objects are not modified by the merge operation.

### hashtag3. Nested JSON Merge

For nested JSON structures like:

- json1:{"company": "XYZ", "address": {"street": "State", "pets": ["Garfield", "Opus"]}}

json1:{"company": "XYZ", "address": {"street": "State", "pets": ["Garfield", "Opus"]}}

- json2:{"age": 28, "name": "john", "company": "Kognitos", "address": {"number": 123, "street": "Main", "pets": ["Alf"]}}

json2:{"age": 28, "name": "john", "company": "Kognitos", "address": {"number": 123, "street": "Main", "pets": ["Alf"]}}

The new JSON implementation's recursive merge produces:{"age": 28, "name": "john", "company": "XYZ", "address": {"number": 123, "street": "State", "pets": ["Alf", "Garfield", "Opus"]}}

This demonstrates:

- Nested objects are merged recursively

Nested objects are merged recursively

- Arrays are concatenated (not replaced)

Arrays are concatenated (not replaced)

- Primitive values from json1 overwrite those in json2

Primitive values from json1 overwrite those in json2

### hashtag4. Hierarchical JSON example

This example shows a complete workflow of creating two JSON objects and merging them. The final result would be:{"name": "John", "age": 30, "height": 182, "city": "Bangalore"}

### hashtag5. Merge with duplicate key behavior

In case of duplicate keys, the value from the second JSON (object) overwrites the value from the first JSON (target).

For example:

- target json:{"name": "John", "age": 30}

target json:{"name": "John", "age": 30}

- object json:{"place": "USA", "age": 31}

object json:{"place": "USA", "age": 31}

- final result:{"name": "John", "place": "USA", "age": 31}

final result:{"name": "John", "place": "USA", "age": 31}

The "age" field is updated to 31 from the object json.

Last updated3 months ago

Was this helpful?
