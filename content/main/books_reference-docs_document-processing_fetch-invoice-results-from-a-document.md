---
title: Fetch Labels from a Document | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/document-processing/fetch-invoice-results-from-a-document
description: Fetches specified labels from a document using OCR technology.
---

# Fetch Labels from a Document | Books | Kognitos Documentation

### hashtagOverview

This procedure fetches specifiedlabelsorkeywordsfrom a document using OCR technology. It extracts text based on given labels from documents that have been processed by OCR, returning matching text snippets sorted by their location within the document.

Make sure to add theDocument Processing Bookto your agent before using this automation procedure.

### hashtagSyntax

Below is a line-by-line overview of the automation syntax. Expand each line to learn more.

What does it do?

Specifies the minimum confidence level for OCR text recognition.

Where does it go?

This phrase should be written on anew line.

Is it required?

❌ No — This phrase isoptional.

Does it require data?

✅ Yes — Replaceconfidence-thresholdwith a numeric value between 0 and 100. The default is 20.Note: This confidence threshold will be the default for all processes in the agent.

What does it do?

Specifies the labels or keywords to look for within the document.

Where does it go?

This phrase should be written on anew line.

Is it required?

✅ Yes — This phrase isrequired.

Does it require data?

✅ Yes — Replacelabel1, label2, label3, etc.with the labels or keywords to search for in the document.

What does it do?

Begins the label extraction process from the document.

Where does it go?

This phrase should be written on anew line.

Is it required?

✅ Yes — This phrase isrequired.

Does it require data?

✅ Yes — References tothe documentandthe labelsmust be defined in the automation.

What does it do?

Specifies the labels or keywords to look for within the document.

Where does it go?

Indented underfetch the labels from the document where.

Is it required?

✅ Yes — This phrase isrequired.

Does it require data?

✅ Yes — Replacelabel1, label2, label3with the labels or keywords to search for.

### hashtagExamples

#### hashtag1. Fetch Invoice Labels

This example fetches invoice-related labels from a document.

#### hashtag2. Fetch Customer Information Labels

This example fetches customer-related labels with a higher confidence threshold.

#### hashtag3. Fetch Multiple Document Fields

This example fetches various document fields for comprehensive extraction.

Last updated4 months ago

Was this helpful?
