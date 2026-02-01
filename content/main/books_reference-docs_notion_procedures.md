---
title: Procedures | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/notion/procedures
description: Automation procedures in the Notion book.
---

# Procedures | Books | Kognitos Documentation

The following documentation is forNotion v1.2.3(BDK).

Ensure that you have installed or connected theNotionbook and created a new playground before using these automation procedures.

## hashtagto create a (new page) innotion

Create a new page in Notion, following the BDK NotionPage model as an input.

Input Concepts

The new page to be created.

notion page

(no default)

Output Concepts

notion page

Create a new minimal page in Notion

## hashtagto query some (pages) fromnotion

Retrieves pages from Notion.

It will return a list of NotionPage objects, that are BDK representations of the Notion Page model.

Input Concepts

The text to search for in the title of the pages.

(no default)

Output Concepts

Notion Pages

notion page

Query pages from notion Query pages from notion with a query text the query text is "BDK Test Page"

Last updated25 days ago

Was this helpful?
