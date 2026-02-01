---
title: Procedures | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/googledocs/procedures
description: Automation procedures in the Google Docs book.
---

# Procedures | Books | Kognitos Documentation

The following documentation is forGoogle Docs v2.0.1(BDK).

Ensure that you have installed or connected theGoogle Docsbook and created a new playground before using these automation procedures.

## hashtagto add a paragraph to a (document)

Adds a new paragraph to the document.

Input Concepts

The file to add the paragraph to

google drive file reference

(no default)

The new paragraph text.

(no default)

The new paragraph's style.

enum[heading_1, heading_2, heading_3, normal_text, subtitle, title]

(no default)

Output Concepts

the document's file reference

google drive file reference

Add a heading to a document

## hashtagto create a google document in a (folder)

Creates a new Google Docs document.

Input Concepts

The name for the new Google Docs document.

(no default)

The folder to create the Google Docs document in.

google drive folder reference

(no default)

Output Concepts

the new document's file reference.

google drive file reference

Create a Google Docs document called "Hello World" in a folder

Last updated11 days ago

Was this helpful?
