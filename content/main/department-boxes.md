---
title: Overview | Department Boxes | Kognitos Documentation
url: https://docs.kognitos.com/department-boxes
description: Learn how to operate on a department box.
---

# Overview | Department Boxes | Kognitos Documentation

## hashtagWhat is a Department Box?

Adepartment boxis a container within an agent that stores and manages items using a specific storage engine. The procedures in this section allow you to add, retrieve, remove, clean, and export items from a department box.

## hashtagStorage Engines

Department boxes support the following storage engines:S3,DynamoDB, andOpenSearch.

AWS S3 is ideal for storing large amounts of data where simple queries or direct retrievals are sufficient. It’s best when you don’t need complex search capabilities.

### hashtagDynamoDB

AWS DynamoDB is a good engine to use for fast key-value lookups and updates. Use DynamoDB when you need quick access to individual items.

### hashtagOpenSearch

AWS OpenSearch is designed for advanced searching and querying, including fuzzy matching, full-text search, and vector-based similarity queries. Choose OpenSearch when your use case requires sophisticated querying.

## hashtagUse Cases

### hashtagScenario 1: Data Sharing Between Separate Runs

When you need to share data between two separate runs where parallelization can be used, department boxes provide a reliable storage mechanism.

Example Use Case - Carrier Booking:A customer will send in a document from which you extract information. A few days later, they send a revised document and you need to determine the differences to keep your system updated. In this scenario:

- Store the initial document data in the department box.

Store the initial document data in the department box.

- When the revised document arrives, retrieve the original data.

When the revised document arrives, retrieve the original data.

- Compare the documents to identify changes.

Compare the documents to identify changes.

- Update the department box with the revised information.

Update the department box with the revised information.

### hashtagScenario 2: Data Retrieval

When you need to retrieve a constant data value based on other data, department boxes serve as an efficient lookup mechanism.

Example Use Case - Location Code Lookup: Extract a location from a document and use that location to find the corresponding location code in the department box. This is useful for:

- Address standardization

Address standardization

- Regional code mapping

Regional code mapping

- Regulatory compliance lookups

Regulatory compliance lookups

Last updated6 months ago

Was this helpful?
