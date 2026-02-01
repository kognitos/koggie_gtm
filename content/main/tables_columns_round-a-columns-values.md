---
title: Round a Column's Values | Tables | Kognitos Documentation
url: https://docs.kognitos.com/tables/columns/round-a-columns-values
description: Rounds numeric values in a table column to a specified number of decimal places.
---

# Round a Column's Values | Tables | Kognitos Documentation

### hashtagOverview

This procedure rounds the values in a specified column of a table to a given number of decimal digits. It automatically handles comma-separated values and converts non-numeric columns to numeric format before rounding. You can specify the number of decimal places and provide custom handling for missing values.

### hashtagSyntax

Below is a line-by-line overview of the automation syntax. Expand each line to learn more.

#### hashtagWhat does it do?

Rounds all values in the specified column.

#### hashtagWhere does it go?

This phrase should be written on anew line.

#### hashtagIs it required?

✅ Yes — This phrase isrequired.

#### hashtagDoes it require data?

✅ Yes — Replacecolumn-namewith the name of the column to round. A reference tothe tablemust be defined in the automation.

#### hashtagExample

#### hashtagWhat does it do?

Specifies the number of decimal places to round to.

#### hashtagWhere does it go?

Indented underround the table's "column-name" column.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replacenwith the number of decimal places to round to. If not specified, it defaults to 0 (rounds to whole numbers).

#### hashtagExample

#### hashtagWhat does it do?

Specifies a replacement value for empty cells or null values before rounding.

#### hashtagWhere does it go?

Indented underround the table's "column-name" column.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replacexwith the desired replacement value for missing data.

#### hashtagExample

### hashtagExamples

#### hashtag1. Round Column to Whole Numbers

Rounds decimal values in the "Age" column to whole numbers (no decimal places).

#### hashtag2. Round Column to Two Decimal Places

Rounds values in the "Tenure" column to exactly 2 decimal places.

#### hashtag3. Round Column with Blank Value Handling

Rounds a column while replacing any missing values with 0 before processing.

Last updated4 months ago

Was this helpful?
