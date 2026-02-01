---
title: Sort a Table | Tables | Kognitos Documentation
url: https://docs.kognitos.com/tables/manipulations/sort-a-table
description: Sorts a table by one or more columns with optional ascending/descending order.
---

# Sort a Table | Tables | Kognitos Documentation

### hashtagOverview

This procedure sorts a table by one or more columns. The sort order (ascending or descending) can be specified. Optionally, you can specify a list of sort orders for multiple columns.

This is useful in a variety of situations—for example, you can sorting a score or sales column, arrange items alphabetically by name or category, or sort by date to show the most recent entries first.

### hashtagInput Concepts

The table to be sorted.

The column(s) by which the table should be sorted. Can be a single column name or comma-separated list.

Optional sort order for single column. Format: ascending / descending column_name

Optional list of sort orders for multiple columns. Format: ascending / descending column_name for each column.

### hashtagOutput Concepts

The sorted table.

### hashtagExamples

For these examples, say we create a table using the following command:

#### hashtag1. Sort with Default Ascending Order

In this example, no order is specified, so the default sorting order is ascending.

#### hashtag2. Sort with Default Descending Order

In this example, the "age" column is sorted in descending order.

#### hashtag3. Sort Multiple Columns

In this example, both the "city" and "age" columns are sorted in different orders.

Last updated6 months ago

Was this helpful?
