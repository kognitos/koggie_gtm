---
title: Working with Salesforce Objects | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/salesforce-legacy/working-with-salesforce-objects
description: 
---

# Working with Salesforce Objects | Books | Kognitos Documentation

## hashtagOverview

Interacting with Salesforce objects is a core functionality when integrating Salesforce with Kognitos. This section covers how to fetch data, create and modify Salesforce objects, and delete them when necessary.

## hashtagFetching Data using custom SQL queries

To fetch data from Salesforce using custom SQL queries:

## hashtagFetching Data using Direct Queries

To fetch data from Salesforce using direct queries:

## hashtagCreating and Modifying Salesforce Objects

### hashtagAdding New Records

To add a new record to Salesforce, you need to specify the type of object you're creating and provide the necessary field values. Example:

This creates a new opportunity named "New Deal" with a close date and stage specified.

### hashtagUpdating Existing Records

To update an existing Salesforce object, you must identify the object by its ID and specify the fields you want to update. Example:

This updates the stage of the specified opportunity to "Closed Won".

### hashtagDeleting Salesforce Objects

#### hashtagSingle Deletion

To delete a specific Salesforce object, you need to specify the object and its ID.

This command deletes the sales object with the specified ID.

### hashtagCreating a new lead in Salesforce

To create a new lead in Salesforce:

Last updated4 months ago

Was this helpful?
