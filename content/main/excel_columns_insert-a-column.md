---
title: Insert a Column | Excel (v2) | Kognitos Documentation
url: https://docs.kognitos.com/excel/columns/insert-a-column
description: Inserts a column into an existing Excel worksheet.
---

# Insert a Column | Excel (v2) | Kognitos Documentation

### hashtagOverview

This procedure inserts a column into an existing Excel worksheet at a specified column number. The existing column at that position, along with any columns to its right, is shifted one position to the right. This is useful in automation workflows where new data fields need to be dynamically added without overwriting existing content.

### hashtagSyntax

Below is a line-by-line overview of the automation syntax. Expand each line to learn more.

#### hashtagWhat does it do?

Begins column insertion into the current worksheet.

#### hashtagWhere does it go?

This phrase should be written on anew line.

#### hashtagIs it required?

✅ Yes — This phrase isrequired.

#### hashtagDoes it require data?

✅ Yes — A reference tothe worksheetmust be defined in the automation.

#### hashtagWhat does it do?

Specifies the header name for the new column.

#### hashtagWhere does it go?

Indented underinsert a column into the worksheet where.

#### hashtagIs it required?

✅ Yes — This phrase isrequired.

#### hashtagDoes it require data?

✅ Yes — Replacecolumn-headerwith the desired column header name.

#### hashtagExample

#### hashtagWhat does it do?

Specifies where to insert the new column.

#### hashtagWhere does it go?

Indented underinsert a column into the worksheet where.

#### hashtagIs it required?

✅ Yes — This phrase isrequired.

#### hashtagDoes it require data?

✅ Yes — Replacenwith a column number (1-based). Existing columns will be shifted right.

#### hashtagExample

#### hashtagWhat does it do?

Specifies the data to insert into the new column.

#### hashtagWhere does it go?

Indented underinsert a column into the worksheet where.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replacex, y, zwith a list of values for the column cells. If not specified, the column will be empty.

#### hashtagExample

### hashtagExamples

#### hashtag1. Insert Empty Column

Inserts an empty column with a header at position 2.

#### hashtag2. Insert a Column by Specifying Column Name, Number, and Values

Last updated4 months ago

Was this helpful?
