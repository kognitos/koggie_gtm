---
title: Extract Tables | LLMs | Kognitos Documentation
url: https://docs.kognitos.com/llms/automation-procedures/extract-tables
description: Extracts table data from documents, text, or files using AI-powered analysis.
---

# Extract Tables | LLMs | Kognitos Documentation

### hashtagOverview

This procedure extracts structured table data from various sources including documents, text, and files. It uses AI to identify and parse table structures, even when they don't have clear visual boundaries. You can customize the extraction with specific descriptions, models, and processing modes for optimal accuracy.

Make sure to add theDocument Processing Bookto your agent before using this automation procedure.

### hashtagSyntax

Below is a line-by-line overview of the automation syntax. Expand each line to learn more.

#### hashtagWhat does it do?

Begins table extraction from the specified source.

#### hashtagWhere does it go?

This phrase should be written on anew line.

#### hashtagIs it required?

✅ Yes — This phrase isrequired.

#### hashtagDoes it require data?

✅ Yes — Replacethe sourcewith the document, text, or file from which to extract the table.

#### hashtagWhat does it do?

Describes the table structure and content to be extracted.

#### hashtagWhere does it go?

Indented underextract a table from {the source}.

#### hashtagIs it required?

✅ Yes — This phrase isrequired.

#### hashtagDoes it require data?

✅ Yes — Replacetable-descriptionwith a detailed description of the table you want to extract.

#### hashtagExample

#### hashtagWhat does it do?

Specifies the OpenAI model to use for extraction.

#### hashtagWhere does it go?

Indented underextract a table from {the source}.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replaceopenai-modelwith a valid OpenAI model name. The default isgpt-4o.

#### hashtagExample

#### hashtagWhat does it do?

Specifies the Gemini model to use for extraction.

#### hashtagWhere does it go?

Indented underextract a table from {the source}.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replacegemini-modelwith a valid Gemini model name. The default isgemini-2.5-pro.

#### hashtagExample

#### hashtagWhat does it do?

Specifies a visual reference to guide the extraction.

#### hashtagWhere does it go?

Indented underextract a table from {the source}.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — A reference to the document must be defined in the automation.

#### hashtagWhat does it do?

Specifies the extraction mode for improved accuracy.

#### hashtagWhere does it go?

Indented underextract a table from {the source}.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Use "precise" to use location data for higher accuracy or use "no ocr" to skip OCR(Optical Character Recognition).

#### hashtagExample

#### hashtagWhat does it do?

Specifies the maximum number of pages per subdocument for large documents.

#### hashtagWhere does it go?

Indented underextract a table from {the source}.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replaceswith a number representing the page limit per subdocument.

#### hashtagExample

#### hashtagWhat does it do?

Adjusts the creativity of the response.

#### hashtagWhere does it go?

Indented underextract a table from {the source}.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replacexwith a number between 0.0 and 1.0. Higher values produce more creative responses.

#### hashtagExample

#### hashtagWhat does it do?

Controls table extraction behavior.

#### hashtagWhere does it go?

Indented underextract a table from {the source}.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replacemodewith "on" for two-pass extraction with header validation (default), or "off" for single-pass extraction without validation. The default ison.

#### hashtagExample

### hashtagExamples

#### hashtag1. Extract Invoice Table with Precise Mode

#### hashtag2. Extract Simple Table from Text

#### hashtag3. Extract Table from Large Document

Last updated3 months ago

Was this helpful?
