---
title: Extract Subdocument | LLMs | Kognitos Documentation
url: https://docs.kognitos.com/llms/automation-procedures/extract-subdocument
description: Extracts a subdocument from a document or file based on page numbers or markers.
---

# Extract Subdocument | LLMs | Kognitos Documentation

### hashtagOverview

This procedure extracts asubdocumentfrom a document or file. A subdocument is a continuous subsection of a larger document. You can specify the section to extract using page numbers or by using markers that describe the content. The extracted subdocument can then be processed independently in your automation workflow.

Make sure to add theDocument Processing Bookto your agent before using this automation procedure.

### hashtagSyntax

Below is a line-by-line overview of the automation syntax. Expand each line to learn more.

#### hashtagWhat does it do?

Begins subdocument extraction from the specified source

#### hashtagWhere does it go?

This phrase should be written on anew line.

#### hashtagIs it required?

✅ Yes — This phrase isrequired.

#### hashtagDoes it require data?

✅ Yes — Replacethe sourcewith a reference to a document or file.

#### hashtagWhat does it do?

Specifies the first page of the subdocument.

#### hashtagWhere does it go?

Indented underextract subdocument from {the source}.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replacexwith a starting page number (1-based index). Defaults to the first page.

#### hashtagExample

#### hashtagWhat does it do?

Specifies the last page of the subdocument.

#### hashtagWhere does it go?

Indented underextract subdocument from {the source}.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replaceywith a page number (1-based index). Defaults to the last page.

#### hashtagExample

#### hashtagWhat does it do?

Uses AI to find the starting page based on content description.

#### hashtagWhere does it go?

Indented underextract subdocument from {the source}.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replacestart-descriptionwith a description of what content marks the start.

#### hashtagExample

#### hashtagWhat does it do?

Uses AI to find the ending page based on content description(inclusive).

#### hashtagWhere does it go?

Indented underextract subdocument from {the source}.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replaceend-descriptionwith a description of what content marks the end.

#### hashtagExample

#### hashtagWhat does it do?

Uses AI to find the ending page based on content description(exclusive).

#### hashtagWhere does it go?

Indented underextract subdocument from {the source}.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replaceexcluded-end-descriptionwith a description of what content marks the end(page not included).

#### hashtagExample

#### hashtagWhat does it do?

Limits the subdocument to a maximum number of pages.

#### hashtagWhere does it go?

Indented underextract subdocument from {the source}.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replacenwith the maximum number of pages.

#### hashtagExample

#### hashtagWhat does it do?

Specifies the OpenAI model to use for marker-based extraction.

#### hashtagWhere does it go?

Indented underextract subdocument from {the source}.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replaceopenai-modelwith a validOpenAI modelarrow-up-right.

#### hashtagExample

### hashtagExamples

#### hashtag1. Extract by Page Numbers

In this example, pages 2 through 5 are extracted as a single subdocument.

#### hashtag2. Extract by Content Markers

Extracts from 'Introduction' section to before 'Conclusion' section.

#### hashtag3. Extract with Size Limit

Extracts starting from a specific form, limited to 1 page.

#### hashtag4. Extracting by Page Numbers with OpenAI Model

#### hashtag5. Extract Section by Inclusive End Marker

Extracts from Section 2 start through Section 2 end (inclusive).

Last updated5 months ago

Was this helpful?
