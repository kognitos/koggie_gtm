---
title: Compare a JSON with Another JSON | Files & Documents | Kognitos Documentation
url: https://docs.kognitos.com/files/json/to-compare-a-json-with-a-json
description: Compares two JSON objects and identifies differences between them.
---

# Compare a JSON with Another JSON | Files & Documents | Kognitos Documentation

## hashtagOverview

This procedure compares two JSON objects and identifies the differences between them. It returns a list of keys where the values differ between the two objects, including keys that exist in one object but not the other. The comparison is performed at the top level of the JSON objects.

## hashtagInput

The first JSON object to be compared

The second JSON object to be compared

## hashtagOutput

differences

A list of keys where the values differ between the two JSON objects. Each difference is represented as a string indicating the key that differs

## hashtagExamples

### hashtag1. Comparing simple JSON objects with one difference

This example compares two JSON objects and identifies that the "age" field differs.

### hashtag2. Comparing nested JSON objects

This example compares two JSON objects with nested structures. Note that the comparison identifies "specs" as different (since the nested object differs), not the individual nested fields.

### hashtag3. Complete comparison workflow with result handling

This example demonstrates a complete workflow: loading two JSON objects (where the actual json might be{"name": "john", "age": 28}and expected json is{"name": "john", "age": 29}), comparing them, and storing the list of differences (["age"]) in a fact for later use.

Last updated3 months ago

Was this helpful?
