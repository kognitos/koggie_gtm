---
title: Remove Duplicate Rows | Tables | Kognitos Documentation
url: https://docs.kognitos.com/tables/rows/remove-duplicate-rows
description: Deletes duplicate rows from the table, optionally based on specified columns.
---

# Remove Duplicate Rows | Tables | Kognitos Documentation

### hashtagOverview

This procedure removes duplicate rows from a table. If no columns are specified, all columns are considered when identifying duplicates. This automation procedure is useful for cleaning up data and removing redundancy.

### hashtagInput Concepts

The table from which duplicate rows should be deleted.

uniqueness columns

list of strings

Column names to consider for identifying duplicates.

All columns are used by default.

### hashtagOutput Concepts

The updated table with duplicate rows removed.

### hashtagExamples

#### hashtag1. Removing Duplicates - Default Behavior

By default, all columns are considered when removing duplicates.

#### hashtag2. Removing Duplicates by Specifying Columns to Consider

Last updated9 months ago

Was this helpful?
