---
title: Remove Text Using Regex | Text | Kognitos Documentation
url: https://docs.kognitos.com/text/removal/remove-text-using-regex
description: Removes occurrences of a specified regular expression from a text.
---

# Remove Text Using Regex | Text | Kognitos Documentation

## hashtagOverview

This operation lets you clean a text by removing all or specific occurrences of a regular expression pattern. You can optionally define the strategy to either remove the first occurrence, the last occurrence, or all occurrences of the matched pattern in the text.

## hashtagSyntax

This operation supports both of the following syntaxes:

#### hashtagOption 1

This syntax definesthe textas data.

#### hashtagOption 2

> Note:Specifying a remove strategy is optional. By default, all matching occurrences are removed.

Note:Specifying a remove strategy is optional. By default, all matching occurrences are removed.

## hashtagData

The table below lists the names of the data elements in this operation and indicates which can be renamed in the syntax.

the regular expression

the remove strategy

## hashtagParameters

Parametersare placeholders for data. Refer to the table below for details on each parameter in this operation. In the syntax, replace parameters with your own values.

The text to be cleaned.

The order number is 12345.

The regular expression pattern to be removed.

The removal strategy. Accepted Values:

- first- Removes the first occurrence.

first- Removes the first occurrence.

- last- Removes the last occurrence.

last- Removes the last occurrence.

- all- Removes all occurrences.(default)

all- Removes all occurrences.(default)

## hashtagExamples

### hashtag1. No removal strategy specified

In this example, no removal strategy is specified, so all matching occurrences are removed by default.

### hashtag2. Removing the first occurrence

### hashtag3. Removing the last occurrence

Last updated6 months ago

Was this helpful?
