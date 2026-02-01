---
title: Extract Data from Multiple Documents | LLMs | Kognitos Documentation
url: https://docs.kognitos.com/llms/automation-procedures/extract-data-from-multiple-documents
description: Extracts data from multiple documents in a single LLM call using file upload.
---

# Extract Data from Multiple Documents | LLMs | Kognitos Documentation

### hashtagOverview

This procedure extracts data from multiple documents simultaneously by uploading all documents to the LLM provider and making a single API call. This is more efficient than processing documents individually and is particularly useful for batch processing of large document sets. The documents are uploaded using the LLM provider's Files API (OpenAI or Gemini).

Before using this procedure, ensure you have added theDocument ProcessingBook to your agent. After learning the Book, make sure to create a new Playground for it to take effect.

This procedure uploads PDF files directly to the LLM provider without OCR processing. It does not support scanned documents. All documents are processed in a single LLM call for better efficiency and consistency.

### hashtagSyntax

Below is a line-by-line overview of the automation syntax. Expand each line to learn more.

#### hashtagWhat does it do?

Instructs the system to begin data extraction from multiple documents.

#### hashtagWhere does it go?

This phrase should be written on anew line.

#### hashtagIs it required?

✅ Yes — This phrase isrequired.

#### hashtagDoes it require data?

✅ Yes — The documents must be available as a list or collection in your automation.

#### hashtagExample

#### hashtagWhat does it do?

Specifies the name of a field to be extracted from the documents.

#### hashtagWhere does it go?

Indented underextract data from the documents.

#### hashtagIs it required?

✅ Yes — This phrase isrequired.

#### hashtagDoes it require data?

✅ Yes — Thepositionshould be a word like "first", "second", "third", etc. to indicate the order of the field to extract from the documents. Thenameshould be atextvalue that identifies the field.

#### hashtagExample

#### hashtagWhat does it do?

Specifies the rule to be followed for the field extraction.

#### hashtagWhere does it go?

Indented underextract data from the documents.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Thepositionshould be a word like "first", "second", "third", etc. to indicate the order of the field to extract from the documents. Theruleshould be atextvalue that specifies a rule for the field extraction.

#### hashtagExample

#### hashtagWhat does it do?

Specifies the format of the fields that need to be extracted.

#### hashtagWhere does it go?

Indented underextract data from the documents.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Thepositionshould be a word like "first", "second", "third", etc. to indicate the order of the field to extract from the documents. Theformatshould be one of the following values:number,string, ordate. The default format isstring.

#### hashtagExample

#### hashtagWhat does it do?

Specifies the field's default value.

#### hashtagWhere does it go?

Indented underextract data from the documents.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Thepositionshould be a word like "first", "second", "third", etc. to indicate the order of the field to extract from the documents. Thedefaultshould be the default value itself.

#### hashtagExample

#### hashtagWhat does it do?

Specifies the global default value. This will be overwritten by a field's default value.

#### hashtagWhere does it go?

Indented underextract data from the documents.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replacexwith any value to use as the common default.

#### hashtagExample

#### hashtagWhat does it do?

Specifies the name of the OpenAI model to use to generate the response.

#### hashtagWhere does it go?

Indented underextract data from the documents.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replaceopenai-modelwith atextvalue containing the model'snamearrow-up-right. The default isgpt-4o-latest.

#### hashtagExample

#### hashtagWhat does it do?

Specifies the name of the Gemini model to use to generate the response.

#### hashtagWhere does it go?

Indented underextract data from the documents.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replacegemini-modelwith atextvalue containing the model'snamearrow-up-right. The default model isgemini-2.5-pro(US region only).

#### hashtagExample

#### hashtagWhat does it do?

Specifies a JSON or YAML schema that defines the fields to extract, their formats, rules, and default values. This allows programmatic field definition instead of using individual field syntax.

#### hashtagWhere does it go?

Indented underextract data from the documents.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replacexwith a stringified JSON, YAML string, or S3 URL pointing to a JSON file. JSON format: {"fields": [{"name": "field_name", "format": "string|number|date", "rule": "extraction rule", "default": "default_value"}], "common_default": "value"} S3 URL format: s3://bucket-name/path/to/schema.json

#### hashtagExample

#### hashtagWhat does it do?

Specifies an output format for the response.

#### hashtagWhere does it go?

Indented underextract data from the documents.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replaceoutput-formatwith a text value that is eithertableorjson.

#### hashtagExample

### hashtagExamples

#### hashtag1. Extract Multiple Fields from Multiple Documents

Returns a list of JSON objects, one for each document with extracted fields.

Last updated3 months ago

Was this helpful?
