---
title: Extract Elements from Text | Text | Kognitos Documentation
url: https://docs.kognitos.com/text/extract-elements-from-text
description: Extract lines, words, characters, URLs, numbers, or patterns from a text.
---

# Extract Elements from Text | Text | Kognitos Documentation

## hashtagOverview

This collection of operations is used to extract specific elements from a text, including lines, words, characters, URLs, numbers, and patterns.

### hashtag1. Extract Words

This operation extracts individualwordsfrom a text. A word is a contiguous collection of characters delimited by a space.

#### hashtagSyntax

#### hashtagData

The table below lists the names of the data elements in this operation and indicates which can be renamed in the syntax.

#### hashtagParameters

Parametersare placeholders for data. Refer to the table below for details on each parameter in this operation. In the syntax, replace parameters with your own values.

The input text.

She quickly ran to the store.

#### hashtagExample

### hashtag2. Extract Lines

This operation extracts individuallinesfrom a text. A line refers to a single row of text that is typically separated by a line break or new line character.

#### hashtagSyntax

#### hashtagData

The table below lists the names of the data elements in this operation and indicates which can be renamed in the syntax.

#### hashtagParameters

Parametersare placeholders for data. Refer to the table below for details on each parameter in this operation. In the syntax, replace parameters with your own values.

The input text.

The quick brown fox jumps over the lazy dog. It loves to run fast. The dog watches quietly. Both enjoy the open field.

#### hashtagExample

### hashtag3. Extract Characters

This operation extracts individualcharactersfrom a text.

#### hashtagSyntax

#### hashtagData

The table below lists the names of the data elements in this operation and indicates which can be renamed in the syntax.

#### hashtagParameters

Parametersare placeholders for data. Refer to the table below for details on each parameter in this operation. In the syntax, replace parameters with your own values.

The input text.

#### hashtagExample

### hashtag4. Extract URLs

This operation extractsURLsfrom a text.

#### hashtagSyntax

> Note:The termsurl(s)orURL(s)can be used in any case and in either singular or plural form.

Note:The termsurl(s)orURL(s)can be used in any case and in either singular or plural form.

#### hashtagData

The table below lists the names of the data elements in this operation and indicates which can be renamed in the syntax.

#### hashtagParameters

Parametersare placeholders for data. Refer to the table below for details on each parameter in this operation. In the syntax, replace parameters with your own values.

The input text.

Visit our website athttps://www.example.comarrow-up-right

#### hashtagExample

#### hashtagNotes

> Implementation Detail:This is the regular expression used internally to find URLs in a given text:((http|https)://)?\[a-zA-Z0-9./?:@-_\=#]+.(\[a-zA-Z]){2,6}(\[a-zA-Z0-9.&/?:@-_\=#])\*

Implementation Detail:This is the regular expression used internally to find URLs in a given text:((http|https)://)?\[a-zA-Z0-9./?:@-_\=#]+.(\[a-zA-Z]){2,6}(\[a-zA-Z0-9.&/?:@-_\=#])\*

### hashtag5. Extract Numbers

This operation extractsnumbersfrom a text.

#### hashtagSyntax

#### hashtagData

The table below lists the names of the data elements in this operation and indicates which can be renamed in the syntax.

#### hashtagParameters

Parametersare placeholders for data. Refer to the table below for details on each parameter in this operation. In the syntax, replace parameters with your own values.

The input text.

There are 150 apples and 35 oranges in the basket.

#### hashtagExample

### hashtag6. Extract Substring

This operation extractssubstringsfrom a text.

#### hashtagSyntax

#### hashtagData

The table below lists the names of the data elements in this operation and indicates which can be renamed in the syntax.

#### hashtagParameters

The input text.

The order number is ORD123456 and should be processed by tomorrow.

A regular expression to match.

#### hashtagExample

Last updated6 months ago

Was this helpful?
