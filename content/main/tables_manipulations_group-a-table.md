---
title: Group a Table | Tables | Kognitos Documentation
url: https://docs.kognitos.com/tables/manipulations/group-a-table
description: Groups a table by a specified column and optionally aggregates other columns.
---

# Group a Table | Tables | Kognitos Documentation

### hashtagOverview

This procedure groups a table by the values in a specific column, and optionally aggregates other columns. This helps you organize and summarize data into meaningful categories. It's useful when you want to analyze totals, averages, or counts within each group, such as total sales by region or number of employees per department.

### hashtagSyntax

Below is a line-by-line overview of the automation syntax. Expand each line to learn more.

#### hashtagWhat does it do?

Groups the table by the specified column and applies optional aggregation on other columns.

#### hashtagWhere does it go?

This phrase should be written on anew line.

#### hashtagIs it required?

✅ Yes — This phrase isrequired.

#### hashtagDoes it require data?

✅ Yes — A reference tothe tableis required. Replacethingwith the column to group by.

#### hashtagExample

#### hashtagWhat does it do?

Provides an optional list of columns with aggregation functions to apply.

#### hashtagWhere does it go?

Indented undergroup the table by <thing> with.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Supported aggregation functions areSum,Average, andCount. To specify aggregation, list the columns in this format: "{Column-Name}'s {Aggregation-Function}". For example:"Salary's Sum","Name's Count", or"Score's Average". If not specified, a count of rows for each group will be returned.

#### hashtagExample

### hashtagExamples

#### hashtag1. Example 1

#### hashtag2. Example 2

Last updated5 months ago

Was this helpful?
