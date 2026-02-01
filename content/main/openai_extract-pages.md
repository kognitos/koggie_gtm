---
title: Extract Pages | LLMs | Kognitos Documentation
url: https://docs.kognitos.com/openai/extract-pages
description: Extracts specified pages from a document or file as individual page documents.
---

# Extract Pages | LLMs | Kognitos Documentation

### hashtagOverview

This procedure extracts specificpagesfrom a document or file. Each extracted page becomes aseparate documentthat can be processed independently in your automation.

Make sure to add theDocument Processing Bookto your agent before using this automation procedure.

### hashtagSyntax

Below is a line-by-line overview of the automation syntax. Expand each line to learn more.

#### hashtagWhat does it do?

Begins page extraction from the specified document.

#### hashtagWhere does it go?

This phrase should be written on anew line.

#### hashtagIs it required?

✅ Yes — This phrase isrequired.

#### hashtagDoes it require data?

✅ Yes — Replacethe sourcewith a reference to a document or file.

#### hashtagExample

#### hashtagWhat does it do?

Specifies the first page to extract.

#### hashtagWhere does it go?

Indented underextract pages from {the source}.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replacexwith a page number (1-based index). If not specified, it defaults to the first page.

#### hashtagExample

#### hashtagWhat does it do?

Specifies the last page to extract.

#### hashtagWhere does it go?

Indented underextract pages from {the source}.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replaceywith a page number (1-based index). If not specified, it defaults to the last page.

#### hashtagExample

### hashtagExamples

#### hashtag1. Extract Specific Page Range

Extracts pages 3-7 from a document.

#### hashtag2. Extract from Start to Specific Page

Extracts from the first page to page 4.

#### hashtag3. Extract from Specific Page to End

Extracts from page 21 to the last page.

#### hashtag4. Extract All Pages

In this example, no start or end pages are specified, so all pages are extracted.

Last updated5 months ago

Was this helpful?
