---
title: Ask Koncierge to Extract Information From a Document | LLMs | Kognitos Documentation
url: https://docs.kognitos.com/llms/foundational-procedures/ask-koncierge-to-extract-information-from-a-document
description: Asks Koncierge to extract specific information from documents or text.
---

# Ask Koncierge to Extract Information From a Document | LLMs | Kognitos Documentation

### hashtagOverview

This procedure asksKonciergeto extract specific information from documents or text, or to perform tasks based on the provided content. It supports various response formats and can work with both text and visual document inputs. You can customize the extraction with specific rules, models, and formatting requirements.

Make sure to add theDocument Processing Bookto your agent before using this automation procedure.

Ask Koncierge to Extract Information from a Tableis a foundational automation procedure. Review thecomparisonarrow-up-rightto determine whether ask koncierge procedures or extract procedures better suit your use case.

### hashtagSyntax

Below is a line-by-line overview of the automation syntax. Expand each line to learn more.

#### hashtagWhat does it do?

Begins the request to Koncierge for extracting or processing information.

#### hashtagWhere does it go?

This phrase should be written on anew line.

#### hashtagIs it required?

✅ Yes — This phrase isrequired.

#### hashtagDoes it require data?

✅ Yes — Replacethe informationwith what you want to extract.

#### hashtagWhat does it do?

Specifies the document to process.

#### hashtagWhere does it go?

Indented underask koncierge for {the information} where.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — This line will prompt you to upload a document.

#### hashtagWhat does it do?

Specifies the task for Koncierge to perform.

#### hashtagWhere does it go?

Indented underask koncierge for {the information} where.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replaceyour-taskwith the specific task description.

#### hashtagExample

#### hashtagWhat does it do?

Specifies a question for Koncierge to answer.

#### hashtagWhere does it go?

Indented underask koncierge for {the information} where.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replaceyour-questionwith the question to be answered.

#### hashtagExample

#### hashtagWhat does it do?

Specifies a message for Koncierge to process.

#### hashtagWhere does it go?

Indented underask koncierge for {the information} where.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replaceyour-messagewith the message content.

#### hashtagExample

#### hashtagWhat does it do?

Specifies the desired format of the response.

#### hashtagWhere does it go?

Indented underask koncierge for {the information} where.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replaceresponse-formatwith one of the following:string,text,date,table,list of texts,list of numbers,list of dates,list of records,structured data,json. The default isstring.

#### hashtagExample

#### hashtagWhat does it do?

Specifies rules to be followed during processing.

#### hashtagWhere does it go?

Indented underask koncierge for {the information} where.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replaceyour-ruleswith specific rules or guidelines.

#### hashtagExample

#### hashtagWhat does it do?

Adjusts the creativity of the response.

#### hashtagWhere does it go?

Indented underask koncierge for {the information} where.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replacexwith a number between 0.0 and 1.0. Higher values produce more creative responses.

#### hashtagExample

#### hashtagWhat does it do?

Specifies the OpenAI model to use.

#### hashtagWhere does it go?

Indented underask koncierge for {the information} where.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replaceopenai-modelwith the name of an OpenAI model to use. The default isgpt-4o.

#### hashtagExample

#### hashtagWhat does it do?

Specifies the Gemini model to use.

#### hashtagWhere does it go?

Indented underask koncierge for {the information} where.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replacegemini-modelwith the name of the Gemini model to use. The default isgemini-2.5-pro.

#### hashtagExample

#### hashtagWhat does it do?

Provides system-level instructions to influence the response.

#### hashtagWhere does it go?

Indented underask koncierge for {the information} where.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replacesystem-commandwith specific system instructions.

#### hashtagExample

### hashtagExamples

#### hashtag1. Extract Invoice Date

#### hashtag2. Extract with Custom Model and Rules

#### hashtag3. Ask for Weather Forecast

#### hashtag4. Generate Content

Last updated5 months ago

Was this helpful?
