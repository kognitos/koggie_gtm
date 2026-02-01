---
title: Combine Tables | Tables | Kognitos Documentation
url: https://docs.kognitos.com/tables/manipulations/combine-tables
description: Combines multiple tables into a single table based on specified criteria.
---

# Combine Tables | Tables | Kognitos Documentation

### hashtagOverview

This procedure combines multiple tables and merges them into a single table based on specified criteria. This is useful when you have related data spread across multiple sources and want to bring it all together for easier analysis or reporting.

### hashtagInput Concepts

list of tables

The tables to be combined.

excluded columns

list of strings

Columns to be excluded from the final table.

included columns

Specifies which columns to include from each table. The dictionary keys are table identifiers, and the values are lists of column names to include.

same columns

list of strings

Columns that are considered the same across tables and can be merged.

### hashtagOutput Concepts

A single table that combines the input tables according to the specified criteria.

### hashtagExamples

#### hashtag1. Combine the Tables

#### hashtag2. Combine the Tables with Optional Arguments

Last updated9 months ago

Was this helpful?
