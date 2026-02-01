---
title: Create a Merged Table | Tables | Kognitos Documentation
url: https://docs.kognitos.com/tables/table-creation/create-a-merged-table
description: Merge two or more tables based on specified matching and merging criteria.
---

# Create a Merged Table | Tables | Kognitos Documentation

### hashtagOverview

This procedure generates a merged table by combining data from multiple tables based on user-specified merge criteria. You can designate a master table and a working table and define how rows should be matched (exact or fuzzy match). Additionally, you can configure which columns to include or exclude, how to treat similarly named columns, and whether to sort the columns in the final output.

### hashtagSyntax

Below is a line-by-line overview of the automation syntax. Expand each line to learn more.

#### hashtagWhat does it do?

Begins the procedure to merge tables using the specified parameters.

#### hashtagWhere does it go?

This phrase should be written on anew line.

#### hashtagIs it required?

✅ Yes — This phrase isrequired.

#### hashtagDoes it require data?

❌ No — This phrase does not require data.

#### hashtagWhat does it do?

References the tables to be merged.

#### hashtagWhere does it go?

Indented undercreate a merged table with.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Table References need to be provided.

#### hashtagWhat does it do?

Specifies the table with which other tables will be merged. This table serves as the base for the merge operation.

#### hashtagWhere does it go?

Indented undercreate a merged table with.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replacexwith a reference to a table.

#### hashtagExample

#### hashtagWhat does it do?

Specifies the secondary table to be merged into the master table. This is considered when fuzzy or exact match columns are specified.

#### hashtagWhere does it go?

Indented undercreate a merged table with.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replaceywith a reference to a table.

#### hashtagExample

#### hashtagWhat does it do?

Defines columns in the master table to use for fuzzy matching.

#### hashtagWhere does it go?

Indented undercreate a merged table with.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replacecolumn1,column2,column3, etc. with the names of the columns.

#### hashtagWhat does it do?

Defines columns in the working table to use for fuzzy matching.

#### hashtagWhere does it go?

Indented undercreate a merged table with.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replacecolumn1,column2,column3, etc. with the names of the columns.

#### hashtagWhat does it do?

Defines columns in the master table to use for exact matching.

#### hashtagWhere does it go?

Indented undercreate a merged table with.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replacecolumn1,column2,column3, etc. with the names of the columns.

#### hashtagWhat does it do?

Defines columns in the working table to use for exact matching.

#### hashtagWhere does it go?

Indented undercreate a merged table with.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replacecolumn1,column2,column3, etc. with the names of the columns.

#### hashtagWhat does it do?

Specifies similarly named columns to consider for merging.

#### hashtagWhere does it go?

Indented undercreate a merged table with.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replacecolumn1,column2,column3, etc. with the names of the columns.

#### hashtagWhat does it do?

Specifies columns to exclude from the final merged table.

#### hashtagWhere does it go?

Indented undercreate a merged table with.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replacecolumn1,column2,column3, etc. with the names of the columns.

#### hashtagWhat does it do?

References a table containing rows that will be excluded from the merged table.

#### hashtagWhere does it go?

Indented undercreate a merged table with.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replacebwith a reference to a table.

#### hashtagExample

#### hashtagWhat does it do?

Determines whether the columns in the final merged table are sorted alphabetically.

#### hashtagWhere does it go?

Indented undercreate a merged table with.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Use either "on" or "off". Default value is "on", if not specified.

#### hashtagExample

### hashtagExamples

#### hashtag1. Create a Basic Merged Table

#### hashtag2. Create a Merged Table with Similar and Excluded Columns

#### hashtag3. Create a Merged Table without Sorting Columns

#### hashtag4. Create a Merged Table with Fuzzy and Exact Match Merge

Last updated5 months ago

Was this helpful?
