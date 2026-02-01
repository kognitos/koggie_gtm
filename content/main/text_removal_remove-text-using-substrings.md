---
title: Remove Text Using Substrings | Text | Kognitos Documentation
url: https://docs.kognitos.com/text/removal/remove-text-using-substrings
description: Removes a specific piece of text from a larger text.
---

# Remove Text Using Substrings | Text | Kognitos Documentation

## hashtagOverview

This operation allows you to edit a text by specifying a piece of text ("a substring") to remove. You can optionally define the strategy to remove the substring's first, last, or all occurrences in the larger text.

## hashtagSyntax

#### hashtagOptional: Specifying a Remove Strategy

Optionally, you can specify aremove strategyusing thewherekeyword. This specifies which occurrences of the second text to remove:

## hashtagData

The table below lists the names of the data elements in this operation and indicates which can be renamed in the syntax.

the remove strategy

## hashtagParameters

Parametersare placeholders for data. Refer to the table below for details on each parameter in this operation. In the syntax, replace parameters with your own values.

text1 value

The target text.

"The dog barked."

text2 value

The text to be removed from the target string.

The removal strategy. There is no default. Accepted values:

- first- Removes the first occurrence.

first- Removes the first occurrence.

- last- Removes the last occurrence.

last- Removes the last occurrence.

- all- Removes all occurrences.

all- Removes all occurrences.

## hashtagExamples

### hashtag1. Remove all occurrences

### hashtag2. Remove the first occurrence

### hashtag3. Remove the last occurrence

### hashtag4. No removal strategy specified

This willRaise a Questionand prompt you to choose which value to remove.

> Multiple: "dog"s in: "The quick brown fox jumps over the lazy dog. The dog barked." Which one do you want to remove?

Multiple: "dog"s in: "The quick brown fox jumps over the lazy dog. The dog barked." Which one do you want to remove?

Last updated6 months ago

Was this helpful?
