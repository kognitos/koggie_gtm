---
title: Extract a Table from a Worksheet | Excel (v2) | Kognitos Documentation
url: https://docs.kognitos.com/excel/tables/extract-a-table-from-a-worksheet
description: Locates and extracts a table from an Excel worksheet.
---

# Extract a Table from a Worksheet | Excel (v2) | Kognitos Documentation

### hashtagOverview

This procedure locates and extracts a table from an Excel worksheet.

### hashtagSyntax

Below is a line-by-line overview of the automation syntax. Expand each line to learn more.

#### hashtagWhat does it do?

Begins table extraction from the current worksheet.

#### hashtagWhere does it go?

This phrase should be written on anew line.

#### hashtagIs it required?

✅ Yes — This phrase isrequired.

#### hashtagDoes it require data?

✅ Yes — A reference tothe worksheetmust be defined in the automation.

#### hashtagWhat does it do?

Describes the table to be extracted.

#### hashtagWhere does it go?

Indented underextract a table from the worksheet where.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replacetable-descriptionwith a text description of the table you want to extract.

#### hashtagExample

#### hashtagWhat does it do?

Specifies the cell range containing the table.

#### hashtagWhere does it go?

Indented underextract a table from the worksheet where.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — ReplaceA1:D10with a cell range in Excel format that specifies the top-left and bottom-right corners of the table.

#### hashtagExample

#### hashtagWhat does it do?

Specifies the leftmost column header to start extraction.

#### hashtagWhere does it go?

Indented underextract a table from the worksheet where.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replacexwith the name of the first column header.

#### hashtagExample

#### hashtagWhat does it do?

Specifies the rightmost column header to end extraction.

#### hashtagWhere does it go?

Indented underextract a table from the worksheet where.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replaceywith the name of the last column header.

#### hashtagExample

#### hashtagWhat does it do?

Specifies the exact cell location of the first header.

#### hashtagWhere does it go?

Indented underextract a table from the worksheet where.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — ReplaceA6with an Excel cell reference where the first header is located. Must be on the same row as the last header location.

#### hashtagExample

#### hashtagWhat does it do?

Specifies the exact cell location of the last header.

#### hashtagWhere does it go?

Indented underextract a table from the worksheet where.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — ReplaceDR6with an Excel cell reference where the last header is located. Must be on the same row as the first header location.

#### hashtagExample

#### hashtagWhat does it do?

Limits the number of data rows to extract (excluding header).

#### hashtagWhere does it go?

Indented underextract a table from the worksheet where.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replace40000with the number of data rows to extract. If omitted, extracts to the end of the worksheet.

#### hashtagExample

#### hashtagWhat does it do?

Specifies the OpenAI model to use for AI-powered table extraction.

#### hashtagWhere does it go?

Indented underextract a table from the worksheet where.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replaceopenai-modelwith a valid OpenAI model name.

#### hashtagExample

#### hashtagWhat does it do?

Specifies the Gemini model to use for AI-powered table extraction.

#### hashtagWhere does it go?

Indented underextract a table from the worksheet where.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replacegemini-modelwith a valid Gemini model name.

#### hashtagExample

### hashtagExamples

#### hashtag1. Extract Table by Description

#### hashtag2. Extract Table by Cell Range

Extracts a table from a specific cell range.

#### hashtag3. Extract Table by Header Range

Extracts a table between specified column headers.

#### hashtag4. Extract Table by Header Locations (Fast)

Extracts a table using exact header cell locations - faster than header name matching.

#### hashtag5. Extract Table by Header Locations with Row Limit

Extracts a table using header locations with a specific number of data rows.

#### hashtag6. Extract Table by Description with Custom Model

Extracts a table using AI-powered description with a specific model.

Last updated3 months ago

Was this helpful?
