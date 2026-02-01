---
title: Creating a Merged Spreadsheet from Multiple Files | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/excel-legacy/creating-a-merged-spreadsheet-from-multiple-files
description: 
---

# Creating a Merged Spreadsheet from Multiple Files | Books | Kognitos Documentation

This reference documentation is for theLegacyMicrosoft Excel book. Refer to the latest versionhere.

## hashtagOverview

This procedure merges multiple spreadsheet files into one. You can rename columns, ignore specific columns, and choose how the files are joined.

## hashtagSyntax

## hashtagInputs

- the files: The spreadsheet files to be merged. Supported formats are.csvandExcel.(required)

the files: The spreadsheet files to be merged. Supported formats are.csvandExcel.(required)

- type: The type of join to use when merging the files.(optional)Options:outer(default)innerleftright

type: The type of join to use when merging the files.(optional)Options:

- outer(default)

outer(default)

- original column name,new column name: A pair of column names that should be considered the same across spreadsheets. The first in each pair is theoriginal column name, and the second is thenew column nameall occurrences will be renamed to.You can specify multiple column pairs, separated by commas. Example:"Name", "Full Name", "Date", "Event Date".(required)

original column name,new column name: A pair of column names that should be considered the same across spreadsheets. The first in each pair is theoriginal column name, and the second is thenew column nameall occurrences will be renamed to.You can specify multiple column pairs, separated by commas. Example:"Name", "Full Name", "Date", "Event Date".(required)

- ignored columns: A list of columns to be excluded from the final merged spreadsheet.(optional)

ignored columns: A list of columns to be excluded from the final merged spreadsheet.(optional)

## hashtagExamples

1. Merging Two Files

2. Merging Multiple Files

Last updated4 months ago

Was this helpful?
