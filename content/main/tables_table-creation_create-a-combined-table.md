---
title: Create a Combined Table | Tables | Kognitos Documentation
url: https://docs.kognitos.com/tables/table-creation/create-a-combined-table
description: Creates a combined table from two or more existing tables.
---

# Create a Combined Table | Tables | Kognitos Documentation

### hashtagOverview

This procedure creates a combined table from two or more existing tables.

### hashtagInput Concepts

first table

The first table to be combined.

Eithertablesorfirst tableandsecond tableare required.

second table

The second table to be combined.

Eithertablesorfirst tableandsecond tableare required.

list of tables

A list of tables to be combined.

Eithertablesorfirst tableandsecond tableare required.

excluded columns

list of strings

A list of column names to be excluded from the combined table.

included columns

A dictionary specifying which columns to include from each table. The keys are table names, and the values are lists of column names to include.

same columns

list of strings

A list of column names that are the same across all tables and should be combined into a single column in the combined table.

### hashtagOutput Concepts

A combined table created from the specified tables, with considerations for excluded and included columns, as well as columns that are the same across tables.

### hashtagExamples

#### hashtag1. Create a Combined Table From the Tables

#### hashtag2. Create a Combined Table From the First and Second Tables

Last updated9 months ago

Was this helpful?
