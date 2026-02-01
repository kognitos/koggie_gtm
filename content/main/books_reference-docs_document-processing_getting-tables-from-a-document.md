---
title: Getting Tables from a Document | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/document-processing/getting-tables-from-a-document
description: Learn how to extract tables from documents using the get and table keywords.
---

# Getting Tables from a Document | Books | Kognitos Documentation

### hashtagSyntax

If there are multiple sections in the document that resemble tables, the system will return them as a list. Below, we show you how to narrow down to a specific table.

### hashtagExtracting a Specific Table

If a document contains multiple tables, you can specify which one to extract by referencing a column name:

You can also use relative keywords likefirst,second, orlastto target specific tables:

For more precise filtering, you can use multiple column names:

### hashtagExtracting Data With Directional Keywords

Directional keywords can be used with document extraction to pinpoint specific lines.

- below: Looks beneath the reference line

below: Looks beneath the reference line

- above: Looks on top of the reference line

above: Looks on top of the reference line

- left: Looks left of the reference line

left: Looks left of the reference line

- right: Looks right of the reference line

right: Looks right of the reference line

#### hashtagExample

Last updated4 months ago

Was this helpful?
