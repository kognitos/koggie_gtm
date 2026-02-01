---
title: Convert Text to Number | Text | Kognitos Documentation
url: https://docs.kognitos.com/text/conversions/convert-text-to-number
description: Convert a text representation of a number into its numeric value.
---

# Convert Text to Number | Text | Kognitos Documentation

## hashtagOverview

This operation takes a text representing a number and converts it into a numeric value. It also recognizes and converts certain characters that resemble numbers, ensuring accurate interpretation of numeric values, including those written in European notation or with unconventional characters. See thenotesfor details.

## hashtagSyntax

## hashtagData

The table below lists the names of the data elements in this operation and indicates which can be renamed in the syntax.

## hashtagParameters

Parametersare placeholders for data. Refer to the table below for details on each parameter in this operation. In the syntax, replace parameters with your own values.

The text that represents a number which needs to be converted.

## hashtagExamples

### hashtag1. Converting a Whitespace-Affected Number Text

### hashtag2. Converting a Decimal String to a Number

## hashtagNotes

#### hashtagAdditional Character-to-Number Mappings

This table defines additional character-to-number mappings, extending the standard set of conversions. It includes common characters and symbols that are translated to their corresponding numeric values.

#### hashtagEuropean Decimal Notation

This operation properly parses decimal numbers in European notation, where commas are used as decimal separators. It automatically converts numbers like "12.345,67" into the format "12345.67" for processing.

Last updated6 months ago

Was this helpful?
