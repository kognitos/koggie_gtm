---
title: Check Regex Match | Text | Kognitos Documentation
url: https://docs.kognitos.com/text/boolean-checks/check-regex-match
description: Check if a text matches a regular expression pattern.
---

# Check Regex Match | Text | Kognitos Documentation

## hashtagOverview

This operation checks if a text conforms to a regular expression pattern. It serves as a conditional check, allowing you to perform additional operations depending on the truth of the statement.

## hashtagSyntax

This operation has two different formats. You can use eitheris matched byormatchesto refer to the regular expression check.

#### hashtag1. Option 1

#### hashtag2. Option 2

## hashtagData

The table below lists the names of the data elements in this operation and indicates which can be renamed in the syntax.

the regular expression

## hashtagParameters

Parametersare placeholders for data. Refer to the table below for details on each parameter in this operation. In the syntax, replace parameters with your own values.

An input text to be checked against the regular expression.

- Welcome to Kognitos.

Welcome to Kognitos.

A regular expression that defines the criteria the text must match.

- ^[a-zA-Z0-9]+$

^[a-zA-Z0-9]+$

An operation that occurs ifinputconforms to the regular expression.

- say "The username contains only letters and numbers."

say "The username contains only letters and numbers."

## hashtagExamples

#### hashtag1. Validate Username Format

Last updated6 months ago

Was this helpful?
