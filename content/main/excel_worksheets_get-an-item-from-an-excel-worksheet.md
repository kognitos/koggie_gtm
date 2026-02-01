---
title: Get an Item from an Excel Worksheet | Excel (v2) | Kognitos Documentation
url: https://docs.kognitos.com/excel/worksheets/get-an-item-from-an-excel-worksheet
description: Retrieves a specific item from a sheet.
---

# Get an Item from an Excel Worksheet | Excel (v2) | Kognitos Documentation

### hashtagOverview

This procedure retrieves a specific item from a worksheet, such as a table, multiple tables, or a key-value pair based on the specified key.

### hashtagSyntax

Below is a line-by-line overview of the automation syntax. Expand each line to learn more.

#### hashtagWhat does it do?

Retrieves an item from the current worksheet.

#### hashtagWhere does it go?

This phrase should be written on anew line.

#### hashtagIs it required?

✅ Yes — This phrase isrequired.

#### hashtagDoes it require data?

✅ Yes — Replaceitemwithtable,tables, or a specific key name. A reference tothe worksheetmust be previously defined in the automation.

#### hashtagExample

#### hashtagWhat does it do?

Specifies the cell range to search within.

#### hashtagWhere does it go?

Indented underget the worksheet's item where.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — ReplaceA1:D10with a cell range in Excel format.

#### hashtagExample

#### hashtagWhat does it do?

Specifies a header to search for.

#### hashtagWhere does it go?

Indented underget the worksheet's item where.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replaceheader1with the header name.

#### hashtagExample

#### hashtagWhat does it do?

Specifies multiple headers to search for.

#### hashtagWhere does it go?

Indented underget the worksheet's item where.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replaceheader1, header2, header3with a list of header names.

#### hashtagExample

#### hashtagWhat does it do?

Specifies the exact cell location of the first header (faster than name-based search).

#### hashtagWhere does it go?

Indented underget the worksheet's item where.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — ReplaceA6with an Excel cell reference where the first header is located. Must be on the same row as the last header location.

#### hashtagExample

#### hashtagWhat does it do?

Specifies the exact cell location of the last header (faster than name-based search).

#### hashtagWhere does it go?

Indented underget the worksheet's item where.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — ReplaceDR6with an Excel cell reference where the last header is located. Must be on the same row as the first header location.

#### hashtagExample

#### hashtagWhat does it do?

Limits the number of data rows to extract (excluding header).

#### hashtagWhere does it go?

Indented underget the worksheet's item where.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replace40000with the number of data rows to extract. If omitted, extracts to the end of the worksheet.

#### hashtagExample

### hashtagExamples

#### hashtag1. Get the Worksheet's Table

#### hashtag2. Get the Worksheet's Item by Key

#### hashtag3. Get Table with Location Filter

Retrieves a table from a specific cell range.

#### hashtag4. Get Table with Header Filter

Retrieves a table that contains specific headers.

#### hashtag5. Get Table with Header Locations (Fast)

Retrieves a table using exact header cell locations - faster than name-based search.

#### hashtag6. Get Table with Header Locations and Row Limit

Retrieves a table using header locations with a specific number of data rows.

Last updated4 months ago

Was this helpful?
