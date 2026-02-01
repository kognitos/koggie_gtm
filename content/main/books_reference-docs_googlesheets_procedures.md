---
title: Procedures | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/googlesheets/procedures
description: Automation procedures in the Google Sheets book.
---

# Procedures | Books | Kognitos Documentation

The following documentation is forGoogle Sheets v2.0.1(BDK).

Ensure that you have installed or connected theGoogle Sheetsbook and created a new playground before using these automation procedures.

## hashtagto add some content to a table

Append content to a Google Sheets table.

Input Concepts

table ref from which to read the content.

google sheet table reference

(no default)

the content to be added into the table reference.

(no default)

Append the contents of a table into a sheet table

## hashtagto create a (table) in a sheet

Create a table in a spreadsheet's sheet.

Input Concepts

spreadsheet's sheet where the table will be created.

google sheet reference

(no default)

List of the headers for the new table.

(no default)

Output Concepts

A reference to the created table.

google sheet table reference

Create a new table in a sheet of a spreadsheet

## hashtagto create a google spreadsheet in a (folder)

Create a new Google Sheets spreadsheet.

Input Concepts

The name for the new Google Sheets spreadsheet.

(no default)

The folder to create the Google Sheets spreadsheet in.

google drive folder reference

(no default)

Output Concepts

the new spreadsheet's file reference.

google drive file reference

Create a Google Sheets spreadsheet called "Hello World" in a google drive folder

## hashtagto get the (file's sheets)

Get the sheets from a Google Sheets file.

Input Concepts

Google Sheets spreadsheet from which to retrieve the sheets.

google drive file reference

(no default)

Output Concepts

file's sheets

The list of the retrieved sheet references.

google sheet reference

Retrieve the sheets of a spreadsheet inside a drive folder

Retrieve a sheet of a spreadsheet by name

## hashtagto get the (sheet's tables)

Get the tables from a Google Sheets sheet.

Input Concepts

spreadsheet's sheet from which to retrieve the table.

google sheet reference

(no default)

Output Concepts

sheet's tables

The list of the retrieved table references.

google sheet table reference

Retrieve the tables in a sheet of a spreadsheet

Retrieve the table in a sheet of a spreadsheet by name

## hashtagto insert a (new column) in the table

Create a new column in a Google Sheets table.

Input Concepts

table where to insert the new column.

google sheet table reference

(no default)

index in which to insert the column.

(no default)

name to the new column

(no default)

list of values to add to the new column

booleanornumberortext

(no default)

Output Concepts

A reference of the newly created column

google sheet column reference

Insert a new column into a table

## hashtagto insert a (new row) in the table

Create a new row in a Google Sheets table.

Input Concepts

table where to insert the new row.

google sheet table reference

(no default)

index in which to insert the row, starting at 0 and relative to the table's header.

(no default)

list of values to add with the row

booleanornumberortext

(no default)

Output Concepts

A list of the retrieved row references.

google sheet row reference

Insert a new row into a table

## hashtagto read the (content) from a table

Get the contents of a Google Sheets table.

Input Concepts

table reference from which to read the content.

google sheet table reference

(no default)

Output Concepts

A table with the read contents.

Read the contents of a sheet table

## hashtagto retrieve the (columns) from the table

Get the columns from a Google Sheets table.

Input Concepts

table from which to retrieve the columns.

google sheet table reference

(no default)

Output Concepts

A list of the retrieved column references.

google sheet column reference

Retrieve the columns of a table

## hashtagto retrieve the (rows) from the table

Get the rows from a Google Sheets table.

Input Concepts

table from which to retrieve the rows information.

google sheet table reference

(no default)

Output Concepts

A list of the retrieved row references.

google sheet row reference

Retrieve the rows of a table

## hashtagto write the content in a table

Update the contents of a Google Sheets table.

Input Concepts

table reference from which to read the content.

google sheet table reference

(no default)

the content to be set into the table reference.

(no default)

Set the contents of a table into a sheet table

Last updated11 days ago

Was this helpful?
