---
title: Procedures | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/custom-books/api-reference/procedures
description: Learn how to implement a procedure in a custom book.
---

# Procedures | Books | Kognitos Documentation

To implement a procedure in a custom book, define a Python function in your book class and decorate it with@procedure.

## hashtagRequirements

### hashtag1. Naming

Ensure the name of your procedure adheres to the syntax guidelines specified in thenameparameter of the@proceduredecorator.

### hashtag2. Method Docstrings

Your methoddocstringshould include the following sections:

- A brief summary of the procedure

A brief summary of the procedure

- Input Concepts

Input Concepts

- Output Concepts

Output Concepts

Examples are not required but are valuable for generating usage documentation.

### hashtag3. Concept-Parameter Matching

Concepts and parameters mustmatchto ensure they are properly mapped internally. Ensure your method definition adheres to theguidelines.

## hashtagUsing Procedures in Your Automation

### hashtagSingularized Calls

Asingularized callis a way to call a procedure by phrasing it as if it returns a single item, even though it returns a list by definition. A procedure supports singularized calls in addition to standard calls if it meetsallof the following conditions:

- Returns a list.

Returns a list.

- Theoutputof the procedure is the object itself.

Theoutputof the procedure is the object itself.

- Theoutput noun phraseis plural.

Theoutput noun phraseis plural.

- The procedureaccepts filters.

The procedureaccepts filters.

You don't need to implement additional logic for singular calls. The system will automatically generate the singularized variation of any procedure that meets the above criteria.

#### hashtagExample

Consider a procedure that retrieves users from Outlook. It can be called in two ways:

- Standard Way:get some users from outlook whose whose mail is "example.com"

Standard Way:get some users from outlook whose whose mail is "example.com"

- Singularized Way:get a user from outlook whose whose mail is "example.com"

Singularized Way:get a user from outlook whose whose mail is "example.com"

Last updated1 month ago

Was this helpful?
