---
title: Create PDFs from a Template | Files & Documents | Kognitos Documentation
url: https://docs.kognitos.com/files/templates/create-pdfs-from-a-template
description: Generates a PDF document for each row in an Excel file by merging data into a .docx template.
---

# Create PDFs from a Template | Files & Documents | Kognitos Documentation

### hashtagOverview

This procedure fills placeholders in a Word document (.docx) template with data from an Excel (.xlsx) file. One output document is generated per row in the spreadsheet. Placeholders in the template are marked by a pair of characters (default is "{}") and must match the column headers in the Excel file.

### hashtagSyntax

Below is a line-by-line overview of the automation syntax. Expand each line to learn more.

What does it do?Specifies the path to the Word document template (.docx).

Where does it go?This phrase should be written on a new line.

Is it required?✅ Yes — This phrase isrequiredin the syntax.

Does it require input data?✅ Yes — ATextvalue should be specified.

Example:the template is "path/to/template.docx"

What does it do?Specifies the path to the Excel file containing the data (.xlsx).

Where does it go?This phrase should be written on a new line.

Is it required?✅ Yes — This phrase isrequiredin the syntax.

Does it require input data?✅ Yes — ATextvalue should be specified.

Example:the data file is "path/to/data.xlsx"

What does it do?Defines the two-character marker used to identify placeholders in the template. For example, if the marker is "<>", then a placeholder would look like "". The default is "{}". The marker must be exactlytwocharacters.

Where does it go?This phrase should be written on a new line.

Is it required?🌟 No — This phrase isoptionalin the syntax.

Does it require input data?✅ Yes — ATextvalue should be specified.

Example:the template marker is "<>"

What does it do?Starts the PDF generation using the provided template and Excel data.

Where does it go?This phrase should be written on a new line.

Is it required?✅ Yes — This phrase isrequiredin the syntax.

Does it require input data?⛔ No — This phrase doesnotrequire input data.

What does it do?Specifies the Excel file to use for the data source.

Where does it go?This phrase should be indented beneathcreate pdfs from the template where.

Is it required?✅ Yes — This phrase isrequiredin the syntax.

Does it require input data?⛔ No — This phrase doesnotrequire input data.

### hashtagExamples

#### hashtag1. Create a PDF From the Template

Last updated7 months ago

Was this helpful?
