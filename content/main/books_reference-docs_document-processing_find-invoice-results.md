---
title: Find Invoice Results | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/document-processing/find-invoice-results
description: Finds invoice-related information within a specified document using GPT-based extraction.
---

# Find Invoice Results | Books | Kognitos Documentation

### hashtagOverview

This procedure findsinvoice-relatedinformation within a document using GPT-based extraction. It can extract specific invoice fields like invoice numbers, dates, amounts, and other invoice-related data from document lines or text content.

Make sure to add theDocument Processing Bookto your agent before using this automation procedure.

### hashtagSyntax

Below is a line-by-line overview of the automation syntax. Expand each line to learn more.

What does it do?

Specifies the OpenAI API key to use for GPT-based extraction.

Where does it go?

This phrase should be written on anew line.

Is it required?

❌ No — This phrase isoptional.

Does it require data?

✅ Yes — Replaceopenai-keywith the OpenAI API key.Note: This OpenAI key will be the default for all processes in the agent.

What does it do?

Begins the invoice extraction process from the specified content.

Where does it go?

This phrase should be written on anew line.

Is it required?

✅ Yes — This phrase isrequired.

Does it require data?

✅ Yes — Replacethe thingwith a reference to the document or text content(must be previously defined in the automation).

What does it do?

Specifies the specific invoice-related columns to extract.

Where does it go?

Indented underfind the invoice results in the thing with.

Is it required?

❌ No — This phrase isoptional.

Does it require data?

✅ Yes — Replacecolumn1, column2, column3, etc.with the invoice fields you want to extract. If not specified, the default is "Invoice Number".

### hashtagExamples

#### hashtag1. Default Extraction(Invoice Number Only)

In this example, no columns are specified, so only the invoice number is extracted.

#### hashtag2. Extract Multiple Invoice Fields

This example extracts multiple invoice-related fields from document lines.

#### hashtag3. Extract Custom Invoice Fields

This example extracts custom invoice fields from document content.

Last updated4 months ago

Was this helpful?
