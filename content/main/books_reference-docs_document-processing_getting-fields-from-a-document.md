---
title: Getting Fields from a Document | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/document-processing/getting-fields-from-a-document
description: Learn how to extract fields from a document.
---

# Getting Fields from a Document | Books | Kognitos Documentation

### hashtagSyntax

To extract fields from a document:

### hashtagInputs

- field:The item from the document you wish to extract.Example:invoice number,id,name,date of birth,supplier name

- The item from the document you wish to extract.

The item from the document you wish to extract.

- Example:invoice number,id,name,date of birth,supplier name

Example:invoice number,id,name,date of birth,supplier name

### hashtagExamples

Don't Forgetthe!

When writing your statements, remember to include thethekeyword, as it's necessary to introduce a new field in your automation.

### hashtagVideo Demonstration

The video showcases how Kognitos simplifies extracting structured data from scanned documents using advanced document processing capabilities. By leveraging AI and tools like Amazon Textract, users can flexibly retrieve specific values, tables, or other data points with natural language commands.

### hashtagWhat if Multiple Fields Share the Same Name?

If a document contains multiple fields with the same name, Kognitos will raise aQuestionprompting the user to select which value to use for an extracted field.

Consider a document with the following information:

> Customer Name: John Doe
Address: 1234 Elm Street
Address: 5678 Oak Avenue

Customer Name: John Doe
Address: 1234 Elm Street
Address: 5678 Oak Avenue

If your automation is written like this:

Kognitos will raise aQuestion: Multiple values found for address, please pick one.To respond, you can selectPick selected valuefrom the drop-down menu and choose the desired address to use.

To avoid this prompt, use relative indicators likefirst,second, orlastto specify which value to use:

For added clarity, you can also rename the fields:

### hashtagDon't Worry About Field Name Formats

Kognitos is flexible about extracting specific fields. For example, if a document contains a field calledTrailer No., you can extract it by writing:

Even though the field in the document may be labeledTrailer No., the automation recognizes and understands variations in naming, allowing you to refer to it astrailer number.

### hashtagHandling Extraction Failures

The automation may sometimes fail to extract a field from a document. This can happen if a field does not exist or is unable to be found. In these cases, Kognitos will raise aQuestionasking you toPlease providethe field. Below is a table outlining the available resolution options.

Write in answer

Manually enter a value for the requested field.

Upload files

Upload a file for the required field.

Indicate that no value is needed at this time.

Skip this step

Skip the field extraction step.

Compute an answer

Open a Mini-Playground to test operations without affecting the main run.

Retry the failed automation step, useful for issues like timeouts or slow APIs.

Retry after an interval

Re-run the automation after a set period of time.

Learn more about handling exceptions in Kognitos with ourexception handling guide.

Last updated3 months ago

Was this helpful?
