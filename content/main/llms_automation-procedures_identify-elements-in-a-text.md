---
title: Identify Elements in a Text | LLMs | Kognitos Documentation
url: https://docs.kognitos.com/llms/automation-procedures/identify-elements-in-a-text
description: Finds a specified element within a given text using AI-powered text analysis.
---

# Identify Elements in a Text | LLMs | Kognitos Documentation

### hashtagOverview

This procedure searches for and extracts specific information from text strings. It can handle both singular and plural forms, work with multiple choice options, and answer questions about the content. The search is powered by AI to understand context and meaning beyond simple text matching.

Make sure to add theDocument Processing Bookto your agent before using this automation procedure.

### hashtagSyntax

Below is a line-by-line overview of the automation syntax. Expand each line to learn more.

#### hashtagWhat does it do?

Begins the search for the specified thing within the target string.

#### hashtagWhere does it go?

This phrase should be written on anew line.

#### hashtagIs it required?

✅ Yes — This phrase isrequired.

#### hashtagDoes it require data?

✅ Yes — Replacethe itemwith the item(s) to locate within the text, which can be singular or plural. This should be descriptive of the item(s) to find. Replacethe textwith the text to search in, which can be a sentence, a paragraph, or a reference to a previously defined value in the automation.

#### hashtagWhat does it do?

Provides a list of possible options to choose from.

#### hashtagWhere does it go?

Indented underfind {the item} in the text where.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replaceoption1,option2,option3, etc. with the available choices.

#### hashtagExample

#### hashtagWhat does it do?

Specifies a question to answer based on the text content.

#### hashtagWhere does it go?

Indented underfind {the item} in the text where.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replaceyour-questionwith the question you want answered.

#### hashtagExample

#### hashtagWhat does it do?

Specifies the desired format of the response.

#### hashtagWhere does it go?

Indented underfind {the item} in the text where.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replaceresponse-formatwith one of the following:string,text,date,table,list of texts,list of numbers,list of dates,list of records,structured data,json. The default isstring.

#### hashtagExample

### hashtagExamples

#### hashtag1. Simple Find

In this example, we are finding the word "fox" in the sentence.

the animal: "fox"

#### hashtag2. Find People in a Sentence

Here, the people John, Sarah, and Tim are looked for in the sentence.

the people: "John", "Sarah", "Tim"

#### hashtag3. Find with Options

In this example, a color is looked for in the sentence using the available options.

the color: "red"

#### hashtag4. Find Multiple Things

In this example, the sweet spots (Java House and Café Mocha) are looked for in the memo.

the sweet spots: "Java House", "Café Mocha"

Last updated5 months ago

Was this helpful?
