---
title: Procedures | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/opensearch/procedures
description: Automation procedures in the OpenSearch book.
---

# Procedures | Books | Kognitos Documentation

The following documentation is forOpenSearch v2.0.1(BDK).

Ensure that you have installed or connected theOpenSearchbook and created a new playground before using these automation procedures.

## hashtagto create a (document) inopensearch

Create a document in opensearch

Input Concepts

The name of the index.

(no default)

The document to be indexed.

(no default)

document id

The optional ID for the document.

(no default)

Output Concepts

the result of the operation

opensearch document

create a document in opensearch

create a document in opensearch with a specific id

## hashtagto delete a document fromopensearch

Delete a document from opensearch

Input Concepts

The document to delete.

opensearch document

(no default)

## hashtagto get a (document) fromopensearch

Get a document from opensearch by its ID

Input Concepts

The name of the index.

(no default)

document id

The ID of the document to retrieve.

(no default)

Output Concepts

the OpensearchDocument object

opensearch document

get an document from opensearch

## hashtagto query some (documents) fromopensearch

Query documents from Opensearch

Input Concepts

single index name, or comma separated index or aliases to search on.

(no default)

the type of query to perform

enum[fuzzy, match, prefix, simple, term]

{'class_name': 'QueryType', 'name': 'MATCH', 'value': 'match'}

Output Concepts

the list of OpensearchDocument objects

opensearch document

query some documents from opensearch

query some documents from opensearch with filter expression

query some documents from opensearch with filter expression and fuzzy query type

## hashtagto update a (document) inopensearch

Update a document in opensearch

Input Concepts

The document to update.

opensearch document

(no default)

Output Concepts

the updated document

opensearch document

Last updated11 days ago

Was this helpful?
