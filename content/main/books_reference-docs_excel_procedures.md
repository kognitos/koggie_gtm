---
title: Procedures | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/excel/procedures
description: Automation procedures in the Microsoft Excel BDK Book.
---

# Procedures | Books | Kognitos Documentation

Make sure to add both theMicrosoft Exceland theMicrosoft Office 365Books to your agent before using these automation procedures.

## hashtagto clear the worksheet range

Clear the contents of a range in an Excel sheet.

Input Concepts

worksheet range

The reference to the Excel range.

excel range reference

Clear the contents of a range in an Excel sheet.

## hashtagto create a (table) on a worksheet range

Create a table on a specified range in an Excel sheet.

Input Concepts

worksheet range

The reference to the Excel range.

excel range reference

has headers

A boolean value indicating whether the range has headers. Default is True.

Output Concepts

The reference to the created Excel table.

excel table reference

Create a table on a specified range in an Excel sheet.

## hashtagto create a (worksheet range) in a sheet

Create a range in an Excel sheet.

Input Concepts

The reference to the Excel sheet.

excel sheet reference

The start address of the range. For example, "A1".

The end address of the range. For example, "B2".

Output Concepts

worksheet range

The created range.

excel range reference

Create a range in an Excel sheet.

## hashtagto delete a column from the table

Delete a column from the table of an Excel sheet.

Input Concepts

The reference to the Excel table.

excel table reference

The reference to the column to delete.

excel column reference

Delete a column from the table of an Excel sheet.

## hashtagto delete a row from the table

Delete a row from the table of an Excel sheet.

Input Concepts

The reference to the Excel table.

excel table reference

The reference to the row to delete.

excel row reference

Delete a row from the table of an Excel sheet.

## hashtagto get the (cell's color)

Retrieve the color of a cell in an Excel sheet.

Input Concepts

The reference to the Excel cell.

excel cell reference

Output Concepts

cell's color

The color of the cell in the sheet.

Retrieve the color of a cell in an Excel sheet.

## hashtagto get the (cell's formula)

Retrieve the formula of a cell in an Excel sheet.

Input Concepts

The reference to the Excel cell.

excel cell reference

Output Concepts

cell's formula

The formula of the cell in the sheet.

Retrieve the formula of a cell in an Excel sheet.

## hashtagto get the (cell's value)

Retrieve the value of a cell in an Excel sheet.

Input Concepts

The reference to the Excel cell.

excel cell reference

Output Concepts

cell's value

The value of the cell in the sheet.

booleanornumberortext

Retrieve the value of a cell in an Excel sheet.

## hashtagto get the (column count) in a table

Get the number of columns in an Excel table.

Input Concepts

The reference to the Excel table.

excel table reference

Output Concepts

column count

The number of columns in the table.

Get the number of columns in an Excel table.

## hashtagto get the (column count) in a worksheet range

Get the number of columns in an Excel sheet.

Input Concepts

worksheet range

The reference to the Excel range.

excel range reference

Output Concepts

column count

The number of columns in the sheet range.

Get the number of columns in an Excel sheet.

## hashtagto get the (column's cells) from the table

Retrieve the cell of an Excel sheet.

Input Concepts

The reference to the Excel table.

excel table reference

The reference to the Excel column.

excel column reference

Output Concepts

column's cells

The list of Excel cells in the table column.

excel cell reference

Retrieve the cells of an Excel table.

## hashtagto get the (file's sheets)

Retrieve the sheets of an Excel file.

Input Concepts

The reference to the Excel file. The file must be an Excel file stored in a SharePoint document library.

sharepoint file reference

Output Concepts

file's sheets

The list of Excel sheets in the file.

excel sheet reference

Retrieve the sheets of an Excel file.

Retrieve the sheets of an Excel file by name.

## hashtagto get the (following row range) in a worksheet range

Retrieve the following row in an Excel sheet.

Input Concepts

worksheet range

The reference to the Excel range.

excel range reference

Output Concepts

following row range

The following row in the sheet.

excel range reference

Retrieve the following row in an Excel sheet range.

## hashtagto get the (row count) in a table

Get the number of rows in an Excel table.

Input Concepts

The reference to the Excel table.

excel table reference

Output Concepts

The number of rows in the table.

Get the number of rows in an Excel table.

## hashtagto get the (row count) in a worksheet range

Get the number of rows in an Excel sheet.

Input Concepts

worksheet range

The reference to the Excel range.

excel range reference

Output Concepts

The number of rows in the sheet range.

Get the number of rows in an Excel sheet.

## hashtagto get the (row's cells) from the table

Retrieve the cell of an Excel sheet.

Input Concepts

The reference to the Excel table.

excel table reference

The reference to the Excel row.

excel row reference

Output Concepts

row's cells

The list of Excel cells in the table row.

excel cell reference

Retrieve the cells of an Excel table.

## hashtagto get the (row's cells) from the worksheet range

Retrieve the cell of an Excel sheet.

Input Concepts

worksheet range

The reference to the Excel range.

excel range reference

The reference to the Excel row.

excel row reference

Output Concepts

row's cells

The list of Excel cells in the sheet.

excel cell reference

Retrieve the cells of an Excel sheet.

## hashtagto get the (sheet's tables)

Retrieve the tables of an Excel sheet.

Input Concepts

The reference to the Excel sheet.

excel sheet reference

Output Concepts

sheet's tables

The list of Excel tables in the sheet.

excel table reference

Retrieve the tables of an Excel sheet.

Retrieve the tables of an Excel sheet by name.

## hashtagto get the (sheet's used range)

Retrieve the used range of an Excel sheet.

Input Concepts

The reference to the Excel sheet.

excel sheet reference

Output Concepts

sheet's used range

The used range of the sheet.

excel range reference

Retrieve the used range of an Excel sheet.

## hashtagto get the (worksheet range's rows)

Retrieve the cell of an Excel sheet.

Input Concepts

worksheet range

The reference to the Excel range.

excel range reference

Output Concepts

worksheet range's rows

The list of Excel rows in the sheet.

excel row reference

Retrieve the rows of an Excel sheet.

## hashtagto get the (worksheet range) from the table

Retrieve the range of an Excel table.

Input Concepts

The reference to the Excel table.

excel table reference

Output Concepts

worksheet range

The range of the table.

excel range reference

Retrieve the range of an Excel table.

## hashtagto insert a (new column) in the table

Insert a new column in the table of an Excel sheet.

Input Concepts

The reference to the Excel table.

excel table reference

The index at which to insert the new column.

The name of the new column.

The values to insert in the new column.

booleanornumberortext

Output Concepts

excel column reference

Insert a new column in the table of an Excel sheet.

## hashtagto insert a (new row) in the table

Insert a new row in the table of an Excel sheet.

Input Concepts

The reference to the Excel table.

excel table reference

The index at which to insert the new row.

The values to insert in the new row.

booleanornumberortext

Output Concepts

excel row reference

Insert a new row in the table of an Excel sheet.

## hashtagto read the (content) from a table

Read the contents of an Excel table and return it as a Table object.

Input Concepts

The reference to the Excel table.

excel table reference

Output Concepts

The table content as a table object.

## hashtagto read the (content) from a worksheet range

Read the contents of an Excel range and return it as a Table object.

Input Concepts

worksheet range

The reference to the Excel range.

excel range reference

Output Concepts

The range content as a table object.

## hashtagto retrieve the (columns) from the table

Retrieve the columns of an Excel sheet.

Input Concepts

The reference to the Excel table.

excel table reference

Output Concepts

The list of Excel columns in the table.

excel column reference

Retrieve the columns of an Excel table.

## hashtagto retrieve the (rows) from the table

Retrieve the rows of an Excel

Input Concepts

The reference to the Excel table.

excel table reference

Output Concepts

The list of Excel rows in the table.

excel row reference

Retrieve the rows of an Excel table.

## hashtagto retrieve the (worksheet range) from a table

Retrieve the range of an Excel table.

Input Concepts

The reference to the Excel table.

excel table reference

Output Concepts

worksheet range

The range of the table.

excel range reference

Retrieve the range of an Excel table.

## hashtagto set the cell's content to a value

Set the value of a cell in an Excel sheet.

Input Concepts

The reference to the Excel cell.

excel cell reference

The value to set in the cell.

booleanornumberortext

Set the value of a cell in an Excel sheet.

## hashtagto set the cell's formula to a formula value

Set the formula of a cell in an Excel sheet.

Input Concepts

The reference to the Excel cell.

excel cell reference

formula value

The formula to set in the cell.

Set the formula of a cell in an Excel sheet.

## hashtagto write the content in a table

Set the contents of a table in an Excel table.

Input Concepts

The reference to the Excel table.

excel table reference

The table object to set in the table.

## hashtagto write the content in a worksheet range

Set the contents of a table in an Excel range.

Input Concepts

worksheet range

The reference to the Excel range.

excel range reference

The table object to set in the range.

Last updated4 months ago

Was this helpful?
