---
title: Extract Multiple Subdocuments | LLMs | Kognitos Documentation
url: https://docs.kognitos.com/llms/automation-procedures/extract-subdocuments
description: Extracts multiple subdocuments from a document using markers or fixed-size chunking.
---

# Extract Multiple Subdocuments | LLMs | Kognitos Documentation

### hashtagOverview

This procedure extractsmultiple subdocumentsfrom a large document by either identifying recurring content patterns (like invoices or chapters) or by splitting the document into fixed-size chunks with optional overlap. Each subdocument becomes a separate document that can be processed independently, making it ideal for batch processing of multi-document files.

Make sure to add theDocument Processing Bookto your agent before using this automation procedure.

### hashtagSyntax

Below is a line-by-line overview of the automation syntax. Expand each line to learn more.

#### hashtagWhat does it do?

Begins extraction of multiple subdocuments from the specified document.

#### hashtagWhere does it go?

This phrase should be written on anew line.

#### hashtagIs it required?

✅ Yes — This phrase isrequired.

#### hashtagDoes it require data?

✅ Yes — Replacethe sourcewith a reference to a document or file.

#### hashtagWhat does it do?

Uses AI to identify pages that mark the beginning of new subdocuments.

#### hashtagWhere does it go?

Indented underextract subdocuments from {the source}.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replacestart-descriptionwith a description of content that marks new sections.

#### hashtagExample

#### hashtagWhat does it do?

Uses AI to find the ending page for each subdocument based on content description(inclusive).

#### hashtagWhere does it go?

Indented underextract subdocuments from {the source}.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replaceend-descriptionwith a description of what content marks the end. Used with start page marker for non-contiguous subdocuments.

#### hashtagExample

#### hashtagWhat does it do?

Uses AI to find the ending page for each subdocument based on content description(exclusive).

#### hashtagWhere does it go?

Indented underextract subdocuments from {the source}.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replaceexcluded-end-descriptionwith a description of what content marks the end(page not included). Used with start page marker for non-contiguous subdocuments.

#### hashtagExample

#### hashtagWhat does it do?

Splits the document into fixed-size chunks or limits subdocument length when used with markers.

#### hashtagWhere does it go?

Indented underextract subdocuments from {the source}.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replacenwith the number of pages per subdocument. The default is10.

#### hashtagExample

#### hashtagWhat does it do?

Specifies pages of overlap between consecutive subdocuments.

#### hashtagWhere does it go?

Indented underextract subdocuments from {the source}.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replacexwith the number of overlapping pages. Only used with subdocument size for chunking. The default is1.

#### hashtagExample

#### hashtagWhat does it do?

Specifies the OpenAI model to use for marker-based extraction.

#### hashtagWhere does it go?

Indented underextract subdocuments from {the source}.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replaceopenai-modelwith a validOpenAI modelarrow-up-right. The default isgpt-4o.

#### hashtagExample

#### hashtagWhat does it do?

Specifies fields to extract from each subdocument for identification.

#### hashtagWhere does it go?

Indented underextract subdocuments from {the source}.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replacefield-namewith the name of a field to extract. Used with markers.

#### hashtagExample

#### hashtagWhat does it do?

Specifies the format of the first field.

#### hashtagWhere does it go?

Indented underextract subdocuments from {the source}.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replacefield-formatwith "string", "number", or "date".

#### hashtagExample

### hashtagExamples

#### hashtag1. Extract Non-Contiguous Invoice Subdocuments

Extracts only invoices from a mixed document containing invoices and BOL documents.

#### hashtag2. Extract Invoice Subdocuments with Field Extraction

Splits a batch invoice file into individual invoices and extracts key fields.

#### hashtag3. Extract Invoices with Inclusive End Marker

Extracts invoices from start to a page containing the invoice total (included).

#### hashtag4. Extract Fixed-Size Chunks with Overlap

Splits a large report into 5-page chunks with 1-page overlap.

#### hashtag5. Extract Fixed-Size Chunks without Overlap

Splits a document into 5-page chunks with no overlap.

#### hashtag6. Extract Chapter-Based Subdocuments

Splits a document by identifying chapter beginnings.

Last updated2 months ago

Was this helpful?
