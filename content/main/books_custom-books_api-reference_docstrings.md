---
title: Docstrings | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/custom-books/api-reference/docstrings
description: Understand how to format and write docstrings to ensure your Book is well-documented.
---

# Docstrings | Books | Kognitos Documentation

## hashtagFormat

BDK docstrings adhere toGoogle stylearrow-up-rightformatting:

- Docstrings are placedimmediately afterfunction, class, or method definitions.

Docstrings are placedimmediately afterfunction, class, or method definitions.

- A briefsummarythat describes the functionality begins the docstring.

A briefsummarythat describes the functionality begins the docstring.

- The summary is followed by organizedsections, separated by blank lines and labeled with headers.

The summary is followed by organizedsections, separated by blank lines and labeled with headers.

In BDK projects, docstrings are applied to decorated methods and classes.

## hashtagSupported Sections

The following sections are supported in BDK docstrings, with alternative headers available for labeling flexibility.

### hashtag1. Arguments and Parameters

Documents the arguments or parameters that a function or class accepts.

Supported Headers:Args,Arguments,Parameters,Params

### hashtag2. Return Values

Documents the return value of a function or method.

Supported Headers:Returns

### hashtag3. Error Handling

Lists any exceptions or errors that a function might raise.

Supported Headers:Raises,Exceptions,Except

### hashtag4. Instance Attributes

List instance attributes in a class.

Supported Headers:Attributes

### hashtag5. Code Authors

Attributes the author(s) of the code.

Supported Headers:Author

### hashtag6. Labels

Defines labeled data associated with a function related toconnections.

Supported Headers:Labels

### hashtag7. OAuth Labels

Describes OAuth labels for classes decorated with the@oauth decorator.

Supported Headers:OAuth Labels

### hashtag8. OAuth Arguments

Describes OAuth arguments for classes decorated with the@oauth decorator.

Supported Headers:OAuth Arguments

### hashtag9. Input Concepts

Describes theinput conceptsfor a procedure.

Supported Headers:Input Concepts

### hashtag10. Output Concepts

Describes theoutput conceptsfor a procedure.

Supported Headers:Output Concepts

### hashtag11. Examples

Outlines usage examples for a procedure.

Supported Headers:Example,Examples,Example [1-5]

Last updated1 month ago

Was this helpful?
