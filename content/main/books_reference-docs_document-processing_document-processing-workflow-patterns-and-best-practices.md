---
title: Document Processing: Workflow Patterns and Best Practices | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/document-processing/document-processing-workflow-patterns-and-best-practices
description: Discover how to design efficient document processing workflows in Kognitos.
---

# Document Processing: Workflow Patterns and Best Practices | Books | Kognitos Documentation

### hashtagOverview

This guide outlines best practices for designingdocument processing workflows, including structuring automations for single versus multiple document inputs. It covers when to use subprocesses and when to apply run parallelization.

### hashtagSingle Document Input

When the automation handlesone document at a time, focus onclean, modular design.
Usesubprocessesto separate distinct stages, such as extraction, processing, and output creation, for clarity and reusability. A typical document processing workflow might look like:

### hashtagMulti-Document Input

When the automation is processingmultiple documents, you can choose between three approaches:

- Calling a Subprocess

Calling a Subprocess

- Invoking a Subprocess

Invoking a Subprocess

- Start Parallel Runs

Start Parallel Runs

Typically, thecalling a subprocessandinvoking a subprocessmethods are used when documents are independent and can be processed separately.Run parallelizationis used when documents are related and their outputs need to be combined or aggregated. For a detailed comparison, refer toWhich Mechanism Should I Use?

Choosing the right approach ensures your workflow is scalable, efficient, and easy to troubleshoot.

Last updated4 months ago

Was this helpful?
