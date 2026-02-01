---
title: Replacement | Text | Kognitos Documentation
url: https://docs.kognitos.com/text/replace-text
description: Replace a text with another text.
---

# Replacement | Text | Kognitos Documentation

## hashtagOverview

This operation lets you replace occurrences of a specific text with a new text. For instance, consider the following sentence:

> The dog jumped over the curb and then the dog sprinted away.

The dog jumped over the curb and then the dog sprinted away.

Using this operation, you can replace all instances ofdogwithcat, resulting in:

> The cat jumped over the curb and then the cat sprinted away.

The cat jumped over the curb and then the cat sprinted away.

## hashtagSyntax

This operation supports both of the following syntaxes:

#### hashtagOption 1

#### hashtagOption 2

> Note:Specifyingthe replacement strategyisoptional.By default, all occurrences are replaced.

Note:Specifyingthe replacement strategyisoptional.By default, all occurrences are replaced.

## hashtagData

The table below lists the names of the data elements in this operation and indicates which can be renamed in the syntax.

the replacement strategy

## hashtagParameters

Parametersare placeholders for data. Refer to the table below for details on each parameter in this operation. In the syntax, replace parameters with your own values.

The input text where replacements will occur.

The dog jumped over the curb and then the dog sprinted away.

The section of the text to be replaced.

replacement

The replacement value.

The method for replacing matches of the substring. Accepted values:

- first- Removes the first occurrence.(default)

first- Removes the first occurrence.(default)

- last- Removes the last occurrence.

last- Removes the last occurrence.

- all- Removes all occurrences.

all- Removes all occurrences.

## hashtagExamples

### hashtag1. Replace all occurrences

### hashtag2. Replace the first occurrence

Last updated6 months ago

Was this helpful?
