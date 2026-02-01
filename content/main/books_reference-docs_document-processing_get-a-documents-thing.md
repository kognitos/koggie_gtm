---
title: Get a Document's Thing | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/document-processing/get-a-documents-thing
description: Retrieves specific content from a document.
---

# Get a Document's Thing | Books | Kognitos Documentation

## hashtagOverview

This procedure usesOCR (Optical Character Recognition)to analyze documents and extract various types of structured and unstructured data, including:

- Fields: Key-value pairs extracted from forms

Fields: Key-value pairs extracted from forms

- Lines: Individual text lines from the document

Lines: Individual text lines from the document

- Pages: Individual pages that can be processed separately

Pages: Individual pages that can be processed separately

- Paragraphs: Grouped text blocks

Paragraphs: Grouped text blocks

- Tables: Tabular data structures

Tables: Tabular data structures

- Text: Full text or filtered text content

Text: Full text or filtered text content

- Words: Individual words from the document

Words: Individual words from the document

- Custom Fields: User-defined fields stored in document metadata

Custom Fields: User-defined fields stored in document metadata

## hashtagInput

the document

The document from which content is to be retrieved. Must be a scanned document.

The specific type of content to retrieve from the document (e.g., 'field', 'line', 'paragraph', 'page', 'table', 'text', 'word'). Can include filters and qualifiers.

the department's textract query flag

If set, enables querying with Amazon Textract for advanced document analysis.

the department's ocr confidence threshold

The confidence threshold for OCR results. Content below this threshold will be ignored. Value must be between 0 and 1.

the department's duplicate column resolution mode

The mode for combining duplicate columns in a table (e.g., "merge cells").

## hashtagOutput

Depending on the 'thing' requested, returns the specific content from the document. This could be a list of fields, lines, paragraphs, pages, tables, text strings, or other specified content. Each item may include confidence scores and location information.

## hashtagExamples

### hashtag1. Getting Fields from a Document

Extracts all form fields from a scanned document.

### hashtag2. Getting Lines from a Document

Retrieves all text lines from the document.

### hashtag3. Getting Pages from a Document

Extracts individual pages that can be processed separately.

### hashtag4. Getting a Specific Page

Gets the first page from the document.

### hashtag5. Getting Tables from a Document

Extracts all tables found in the document.

### hashtag6. Getting the Full Text

Retrieves the complete text content of the document.

### hashtag7. Getting Text Content

Retrieves the text content of the document.

### hashtag8. Getting Page Texts

Retrieves text content for each page separately.

### hashtag9. Finding Specific Text

Searches for a specific line containing text.

### hashtag10. Finding Text That Contains a String

Finds text that contains a specific substring.

### hashtag11. Finding Lines Containing Text

Finds all lines that contain a specific string.

### hashtag12. Getting Filtered Fields

Gets selected checkbox fields from a form.

### hashtag13. Getting Fields with Specific Values

Retrieves fields whose value matches a condition.

### hashtag14. Getting Words from Document Pages

Extracts all words from the document's pages.

### hashtag15. Getting Dates from a Document

Extracts all dates found in the document.

### hashtag16. Getting Amounts from a Document

Extracts all monetary amounts from the document.

### hashtag17. Getting a Specific Field by Name

Retrieves a specific field value from the document.

### hashtag18. Getting Custom Metadata Fields

Retrieves custom fields stored in document metadata (e.g., from subdocument extraction).

### hashtag19. Finding Tables with Specific Columns

Finds tables that contain specific column names.

### hashtag20. Counting Pages

Gets the number of pages in a document. These are 3 different approaches:

### hashtag21. Getting Handwritten Lines

Counts only handwritten lines in the document.

### hashtag22. Getting the Document Filename

Retrieves the filename of the scanned document.

Last updated3 months ago

Was this helpful?
