---
title: Extract Data | LLMs | Kognitos Documentation
url: https://docs.kognitos.com/llms/automation-procedures/extract-data
description: Extracts data from texts, documents, or files using LLM models.
---

# Extract Data | LLMs | Kognitos Documentation

### hashtagOverview

This procedure extracts data from texts, images, documents, and files. Using LLM models, it identifies and retrieves the text content, making it easy to access and work with the information in those documents.

Before using this procedure, ensure you have added theDocument ProcessingBook to your agent. After learning the Book, make sure to create a new Playground for it to take effect.

This procedure can be used to operate onPDFs,documents,images,textorfiles. It isnotcurrently supported for.csvfiles.

### hashtagSyntax

Below is a line-by-line overview of the automation syntax. Expand each line to learn more.

#### hashtagWhat does it do?

Instructs the system to begin data extraction from the specified source.

#### hashtagWhere does it go?

This phrase should be written on anew line.

#### hashtagIs it required?

✅ Yes — This phrase isrequired.

#### hashtagDoes it require data?

✅ Yes — Replacethe sourcewith a reference to a data source in your automation (ex -the file,the document,the text, etc.).

#### hashtagExample

#### hashtagWhat does it do?

Specifies the name of a field to be extracted from the source.

#### hashtagWhere does it go?

Indented underextract data from the source.

#### hashtagIs it required?

✅ Yes — This phrase isrequired.

#### hashtagDoes it require data?

✅ Yes — Thepositionshould be a word like "first", "second", "third", etc. to indicate the order of the field to extract from the source. Thenameshould be atextvalue that identifies the field.

#### hashtagExample

#### hashtagWhat does it do?

Specifies the rule to be followed for the field extraction.

#### hashtagWhere does it go?

Indented underextract data from the source.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Thepositionshould be a word like "first", "second", "third", etc. to indicate the order of the field to extract from the source. Theruleshould be atextvalue that specifies a rule for the field extraction.

#### hashtagExample

#### hashtagWhat does it do?

Specifies the format of the fields that need to be extracted from the source.

#### hashtagWhere does it go?

Indented underextract data from the source.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Thepositionshould be a word like "first", "second", "third", etc. to indicate the order of the field to extract from the source. Theformatshould be one of the following values:number,string, ordate. The default format isstring.

#### hashtagExample

#### hashtagWhat does it do?

Specifies the field's default value.

#### hashtagWhere does it go?

Indented underextract data from the source.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Thepositionshould be a word like "first", "second", "third", etc. to indicate the order of the field to extract from the source. Thedefaultshould be the default value itself.

#### hashtagExample

#### hashtagWhat does it do?

Specifies the global default value. This will be overwritten by a field's default value.

#### hashtagWhere does it go?

Indented underextract data from the source.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replacexwith any value to use as the common default.

#### hashtagExample

#### hashtagWhat does it do?

Specifies the name of the OpenAI model to use to generate the response.

#### hashtagWhere does it go?

Indented underextract data from the source.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replaceopenai-modelwith atextvalue containing the model'snamearrow-up-right. The default isgpt-4o-latest.

#### hashtagExample

#### hashtagWhat does it do?

Specifies the name of the Gemini model to use to generate the response.

#### hashtagWhere does it go?

Indented underextract data from the source.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replacegemini-modelwith atextvalue containing the model'snamearrow-up-right. The default model isgemini-2.5-pro(US region only).

#### hashtagExample

#### hashtagWhat does it do?

Specifies a JSON or YAML schema that defines the fields to extract, their formats, rules, and default values. This allows programmatic field definition instead of using individual field syntax.

#### hashtagWhere does it go?

Indented underextract data from the source.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replacexwith a stringified JSON, YAML string, or S3 URL pointing to a JSON file.

JSON format: {"fields": [{"name": "field_name", "format": "string|number|date", "rule": "extraction rule", "default": "default_value"}], "common_default": "value"}

S3 URL format: s3://bucket-name/path/to/schema.json

#### hashtagExample

#### hashtagWhat does it do?

Specifies a document or image to guide the LLM as a visual reference, improving accuracy when extracting data. This is useful in multi-document scenarios or when the reference differs from the source text.

#### hashtagWhere does it go?

Indented underextract data from the source.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replacexwith a reference to a document, image, or file.

#### hashtagExample

#### hashtagWhat does it do?

Specifies an output format for the response.

#### hashtagWhere does it go?

Indented underextract data from the source.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replacexwith a text value that is eithertableorjson.

#### hashtagExample

#### hashtagWhat does it do?

Specifies the DPI (dots per inch).

#### hashtagWhere does it go?

Indented underextract data from the source.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replacexwith a numeric value representing the DPI. The default is100.

#### hashtagExample

#### hashtagWhat does it do?

Specifies an extraction mode for the procedure.

#### hashtagWhere does it go?

Indented underextract data from the source.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replaceextraction-modewith one of the following options:

- "no ocr": Send the document image directly to the LLM without OCR text. Faster and usually just as accurate.

"no ocr": Send the document image directly to the LLM without OCR text. Faster and usually just as accurate.

- "file_upload": Upload the PDF directly to the LLM provider's Files API. Best for very large documents (100+ pages) as it avoids token limits from base64 encoding. Supports both OpenAI (gpt-4o models) and Gemini (gemini-2.0-flash, gemini-2.5-pro) models.

"file_upload": Upload the PDF directly to the LLM provider's Files API. Best for very large documents (100+ pages) as it avoids token limits from base64 encoding. Supports both OpenAI (gpt-4o models) and Gemini (gemini-2.0-flash, gemini-2.5-pro) models.

#### hashtagExample

### hashtagExamples

#### hashtag1. Extract Multiple Fields from a Document

#### hashtag2. Extract Data from Text

the data's invoice numbers: 123456

#### hashtag3. Extract Multiple Fields from Text (Using Default Values)

invoice amount: 5678invoice date: 21 jan 2023invoice location: San Joseinvoice number: 1234

#### hashtag4. Extract Data Using JSON Input Schema

invoice_number: INV-12345invoice_date: 2023-01-15amount: 1500.00shipping_address: 123 Main St, San Jose, CA

#### hashtag5. Extract Data Using S3 URL Input Schema

order_number: ORD-98765order_date: 2023-12-01total_amount: 2750.50

#### hashtag6. Extract Data from Large Document Using File Upload Mode

invoice number: INV-123456total amount: 5000.00

Last updated3 months ago

Was this helpful?
