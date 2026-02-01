---
title: Query Multiple Documents | LLMs | Kognitos Documentation
url: https://docs.kognitos.com/llms/automation-procedures/query-multiple-documents
description: Process multiple documents with a custom prompt using LLM file upload APIs.
---

# Query Multiple Documents | LLMs | Kognitos Documentation

### hashtagOverview

This procedure processes multiple documents with a custom prompt by uploading them directly to the LLM provider's file API (OpenAI Files API or Gemini Part). No OCR or image conversion is performed - the documents are sent as-is to the LLM for processing. This is efficient for handling multiple documents in a single API call.

Make sure to add theDocument Processing Bookto your agent before using this automation procedure.

This procedure uploads PDF files directly to the LLM provider without OCR processing. It does not support scanned documents. Documents are processed in their native format using the LLM's file upload capabilities.

### hashtagSyntax

Below is a line-by-line overview of the automation syntax. Expand each line to learn more.

#### hashtagWhat does it do?

Begins the request to process multiple documents with a custom prompt.

#### hashtagWhere does it go?

This phrase should be written on anew line.

#### hashtagIs it required?

✅ Yes — This phrase isrequired.

#### hashtagDoes it require data?

❌ No — This phrase does not require data.

#### hashtagExample

#### hashtagWhat does it do?

Specifies the custom query/prompt to use for processing the documents.

#### hashtagWhere does it go?

Indented underquery the documents where.

#### hashtagIs it required?

✅ Yes — This phrase isrequired.

#### hashtagDoes it require data?

✅ Yes — Replaceyour-querywith your custom instruction for the LLM.

#### hashtagExample

#### hashtagWhat does it do?

Specifies the desired format of the response.

#### hashtagWhere does it go?

Indented underquery the documents where.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replaceresponse-formatwith one of the following:string,text,table,list of texts,list of tables,structured data,json. The default isstring.

#### hashtagExample

#### hashtagWhat does it do?

Specifies the OpenAI model to use.

#### hashtagWhere does it go?

Indented underquery the documents where.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replaceopenai-modelwith the name of an OpenAI model to use. The default isgpt-4o.

#### hashtagExample

#### hashtagWhat does it do?

Specifies the Gemini model to use.

#### hashtagWhere does it go?

Indented underquery the documents where.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replacegemini-modelwith the name of the Gemini model to use. The default isgemini-2.5-pro.

#### hashtagExample

### hashtagExamples

#### hashtag1. Extract Invoice Information from Multiple Documents

#### hashtag2. Summarize Multiple Reports

#### hashtag3. Compare Multiple Contracts

Last updated3 months ago

Was this helpful?
