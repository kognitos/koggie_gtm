---
title: Concepts | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/excel/concepts
description: Concepts used in Microsoft Excel BDK Book.
---

# Concepts | Books | Kognitos Documentation

### hashtagExcel range reference

ExcelRangeRef represents a reference to a range of cells within an Excel worksheet. It provides detailed information about a contiguous set of cells and is designed for use in applications that require precise range-based operations, such as data extraction, modification, and analysis within spreadsheets.

The unique identifier for the drive containing the workbook.

The unique identifier for the workbook.

The unique identifier for the worksheet.

The address of the range.

address_local

The local address of the range.

optional[text]

The number of cells in the range.

optional[number]

column_count

The number of columns in the range.

optional[number]

column_hidden

Whether the columns in the range are hidden.

optional[boolean]

column_index

The index of the first column in the range.

optional[number]

Whether the range is hidden.

optional[boolean]

The number of rows in the range.

optional[number]

Whether the rows in the range are hidden.

optional[boolean]

The index of the first row in the range.

optional[number]

### hashtagExcel sheet reference

ExcelSheetRef represents a reference to a worksheet within an Excel workbook, providing details to uniquely identify and interact with a specific sheet. It facilitates precise data manipulation and integration, useful for data processing, automated workflows, and integration across multiple files.

The unique identifier for the worksheet.

The name of the worksheet.

The unique identifier for the drive containing the workbook.

The unique identifier for the workbook.

### hashtagExcel table reference

ExcelTableRef represents a reference to a table within an Excel worksheet, providing essential details to uniquely identify and interact with specific tables. This utility is used to facilitate data management, structured data handling, and integration within larger workflows.

The unique identifier for the worksheet.

The name of the worksheet.

The unique identifier for the drive containing the workbook.

The unique identifier for the workbook.

The unique identifier for the worksheet.

### hashtagExcel column reference

ExcelColumnRef represents a reference to a specific column within an Excel worksheet. It serves as a utility to uniquely identify and interact with data in a column, providing essential metadata that allows for efficient data manipulation and retrieval.

The unique identifier for the column.

The index of the column.

### hashtagExcel row reference

ExcelRowRef represents a reference to a specific row within an Excel worksheet. This utility enables efficient access, manipulation, and reference of data within rows, providing essential information to uniquely identify and interact with a row's content.

The unique identifier for the row.

The index of the row.

### hashtagSharepoint file reference

A Sharepoint File Reference is a reference to a file in a SharePoint document library.

The unique identifier for the document library.

optional[text]

The name of the document library.

optional[text]

URL that either displays the resource in the browser (for Office file formats), or is a direct link to the file (for other formats).

optional[text]

parent_reference

Parent information, if the item has a parent.

optional[parent_reference]

Boolean flag indicating whenever this item is a folder or not.

The name of the file. Same as name.

### hashtagParent_reference

A reference to a SharePoint document library item, providing essential identifiers that link to a specific item within a SharePoint document library.

The unique identifier of the document library item.

optional[text]

The unique identifier of the drive containing the document library item.

optional[text]

### hashtagExcel cell reference

ExcelCellRef represents a reference to a specific cell within an Excel worksheet, serving as a utility to uniquely identify and manipulate data within the cell. It provides essential details to locate the cell precisely.

The unique identifier for the drive.

The unique identifier for the file.

The unique identifier for the sheet.

The row of the cell.

column_index

The column of the cell.

The unique identifier for the cell.

optional[text]

The unique identifier for the row of the cell.

optional[text]

The unique identifier for the column of the cell.

optional[text]

The address of the cell.

optional[text]

The unique identifier for the table.

optional[text]

Last updated4 months ago

Was this helpful?
