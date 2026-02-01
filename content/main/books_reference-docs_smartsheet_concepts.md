---
title: Concepts | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/smartsheet/concepts
description: Concepts used in Smartsheet book.
---

# Concepts | Books | Kognitos Documentation

The following documentation is forSmartsheet v2.0.0(BDK).

### hashtagSmartsheet sheet

A Sheet in Smartsheet

The id of the sheet

The name of the sheet

### hashtagSmartsheet column

A column from a sheet.

The id of the column

optional[number]

The name of the column

column_type

The type of the column

enum[abstract_datetime, checkbox, contact_list, date, datetime, multi_contact_list, multi_picklist, picklist, predecessor, text_number]

The index of the column

### hashtagSmartsheet row

A row from a sheet.

The id of the row

optional[number]

The number of the row

optional[number]

list of the cells from the row

list of smartsheet cell

a dictionary of column name to cell value in that column

optional[json]

parent_row_id

the id of the parent row if this row is indented

optional[number]

### hashtagSmartsheet cell

A cell from a sheet.

The id of the column for the cell

column_title

The title of the column for the cell

The id of the row for the cell

optional[number]

The value of the cell

### hashtagSmartsheet workspace

A Workspace in Smartsheet

The id of the workspace

The name of the workspace

Last updated17 days ago

Was this helpful?
