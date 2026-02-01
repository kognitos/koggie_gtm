---
title: Procedures | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/smartsheet/procedures
description: Automation procedures in the Smartsheet book.
---

# Procedures | Books | Kognitos Documentation

The following documentation is forSmartsheet v2.0.0(BDK).

Ensure that you have installed or connected theSmartsheetbook and created a new playground before using these automation procedures.

## hashtagto add some content to a sheet

Append the contents of a table into an existing sheet.

This procedure adds new rows from a table to an existing sheet, matching the table columns to the sheet's existing column structure.

Input Concepts

The sheet to add the content to.

smartsheet sheet

(no default)

The table object to append.

(no default)

Output Concepts

the sheet the content was appended to

smartsheet sheet

Append the contents of a table in a sheet

## hashtagto get some (sheet's columns)

Get a sheet's columns.

This procedure retrieves all columns from a sheet, including their names and types.

Input Concepts

The sheet to get columns for

smartsheet sheet

(no default)

Output Concepts

sheet's columns

a list of columns

smartsheet column

Get the sheet's columns

## hashtagto get some (sheet's rows)

Get a sheet's rows.

This procedure retrieves all rows from a sheet, or can filter rows based on specific column values.

Input Concepts

The sheet to get rows for

smartsheet sheet

(no default)

Output Concepts

sheet's rows

a list of rows

smartsheet row

Get the sheet's rows

## hashtagto get some (sheets)

Gets all sheets.

This procedure can get a list of all sheets, as well as getting a single sheet by filtering by its name.

Output Concepts

A list of sheets

smartsheet sheet

Get all sheets

Get a sheet by name

## hashtagto get some (workspaces)

Gets all workspaces.

This procedure can get a list of all workspaces, as well as getting a single workspace by filtering by its name.

Output Concepts

A list of workspaces

smartsheet workspace

Get all workspaces

Get a workspace by name

## hashtagto insert a (new column) in a sheet

Inserts a column in a sheet.

This procedure adds a new column to a sheet at a specific position, allowing you to specify the column name and type.

Input Concepts

The sheet to add the column to

smartsheet sheet

(no default)

Name of column to add

(no default)

column type

Type of column to add

enum[abstract_datetime, checkbox, contact_list, date, datetime, multi_contact_list, multi_picklist, picklist, predecessor, text_number]

(no default)

Index of column to add (First index is 1)

(no default)

Output Concepts

the created column

smartsheet column

Insert a new column at index

## hashtagto insert a (new row) in a sheet

Append a row in a sheet.

This procedure adds a new row to a sheet with the specified values, and can optionally indent the row under an existing parent row.

Input Concepts

The sheet to add the row to

smartsheet sheet

(no default)

List of values to insert

booleanornumberortext

(no default)

An existing row under which the new row will be indented

smartsheet row

(no default)

Output Concepts

the created row

smartsheet row

Append a new row to a sheet

## hashtagto write the content in a workspace

Set the contents of a table to a new sheet.

This procedure creates a new sheet within a workspace and populates it with the contents of a table, including all columns and rows.

Input Concepts

Workspace to create the sheet in.

smartsheet workspace

(no default)

The name of the new sheet.

(no default)

The table object to set in the sheet.

(no default)

Output Concepts

the created sheet

smartsheet sheet

Set the contents of a table into a new sheet

Last updated16 days ago

Was this helpful?
