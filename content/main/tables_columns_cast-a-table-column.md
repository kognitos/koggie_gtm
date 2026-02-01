---
title: Cast a Table Column | Tables | Kognitos Documentation
url: https://docs.kognitos.com/tables/columns/cast-a-table-column
description: Converts a table column to a specified data type.
---

# Cast a Table Column | Tables | Kognitos Documentation

### hashtagOverview

This procedure casts a specified column in a table to a given data type. It supports conversion to common data types including text, decimals, and integers. For numeric conversions, it automatically handles comma-separated values and provides options for handling blank values.

### hashtagSyntax

Below is a line-by-line overview of the automation syntax. Expand each line to learn more.

#### hashtagWhat does it do?

Converts the specified column to the target data type.

#### hashtagWhere does it go?

This phrase should be written on anew line.

#### hashtagIs it required?

✅ Yes — This phrase isrequired.

#### hashtagDoes it require data?

✅ Yes — Replacecolumn-namewith the name of the column to convert. Replacedata-typewith the target data type: "string" (text), "float" (decimals), or "int" (integers).

#### hashtagExample

#### hashtagWhat does it do?

Specifies a replacement value for empty cells, null values, or NaN entries when converting to numeric types (float/int). This is useful when your data contains missing values that need to be handled during conversion.

#### hashtagWhere does it go?

Indented undercast the table's "column-name" column to "data-type".

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replacexwith the desired replacement value for missing data. For instance, you can use 0 for integer columns or 0.0 for decimal columns.

#### hashtagExample

### hashtagExamples

#### hashtag1. Cast Integer Column to Float (Decimal)

#### hashtag2. Cast Numeric Column to String (Text)

#### hashtag3. Cast Column to Integer with Blank Value

In this example, the "Price" column contains some missing or empty values. When converting to integer, these blank entries are replaced with 0.

#### hashtag4. Cast Column to Float with Custom Blank Value

When converting a column with missing values to decimal format, a custom replacement value of 0.0 is used for empty cells.

Last updated4 months ago

Was this helpful?
