---
title: Discoverable Procedures | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/netsuite/discoverable-procedures
description: Discoverable procedures in the NetSuite (BDK) Book.
---

# Discoverable Procedures | Books | Kognitos Documentation

Ensure that you have connected theNetSuitebook and then created a new playground before using these automation procedures.

## hashtagOverview

In NetSuite, anentityis any object or record type that stores business data, such as a customer, employee, sales order, or custom record. Entities define how information is structured, including the fields, relationships, and operations available for that data.

Discoveryscans your connected NetSuite account to identify these entities, their fields, and the actions they support. Each discovery generates thesefiveautomation procedures for a given entity:

- Create: Add new records to NetSuite.

Create: Add new records to NetSuite.

- Retrieve: Fetch preview lists of records.

Retrieve: Fetch preview lists of records.

- Retrieve Record Details: Get full record details including nested data.

Retrieve Record Details: Get full record details including nested data.

- Update Record: Modify existing records with new data.

Update Record: Modify existing records with new data.

- Upload File Attachment: Upload files to NetSuite and link them to records.

Upload File Attachment: Upload files to NetSuite and link them to records.

## hashtagDiscovery

Use the following syntax todiscoverentities from your NetSuite instance and generate automation procedures. ReplaceENTITYwith the entity type to be discovered:

#### hashtagNetSuite Entities

To view all discoverable entities, use:

Common NetSuite entities include:

- People:customer,employee,vendor,partner,contact

People:customer,employee,vendor,partner,contact

- Items:item,inventoryItem,serviceItem,kitItem

Items:item,inventoryItem,serviceItem,kitItem

- Transactions:salesOrder,invoice,purchaseOrder

Transactions:salesOrder,invoice,purchaseOrder

- Support:supportCase,task,phoneCall

Support:supportCase,task,phoneCall

- Custom Records: Your custom record types (e.g.,customrecord_myrecord)

Custom Records: Your custom record types (e.g.,customrecord_myrecord)

Entity Names

NetSuite entity names usecamelCase:

- customer(lowercase for simple entities)

customer(lowercase for simple entities)

- salesOrder(camelCase for compound names)

salesOrder(camelCase for compound names)

Check outNetSuite's REST API documentationarrow-up-rightfor additional details.

#### hashtagExamples

## hashtagProcedures

After discovery, you can use thefivegenerated procedures for that entity:

### hashtag1. Create Record

Create a new record of the discovered entity type.

the body is [DATA]

The data for the new record

Returns: The newly created record with preview fields populated(includes ID and basic information).

Important Notes

- Only required and create-able fields need to be provided

Only required and create-able fields need to be provided

- NetSuite will generate system fields like ID, creation date, etc.

NetSuite will generate system fields like ID, creation date, etc.

- The returned record is a "preview" version with essential fields

The returned record is a "preview" version with essential fields

### hashtag2. Retrieve Records

Get a list of records from the discovered entity type using SuiteQL queries.

the limit is [NUMBER]

Maximum number of records to retrieve(default: 10)

the offset is [NUMBER]

Number of records to skip for pagination(must be a multiple of the limit)

whose [FIELD] is [VALUE]

Filter records by specific criteria.

Note:Filter expressions are case-sensitive (e.g., "KOGNITOS" ≠ "Kognitos"). Use the "has" operator for partial matching, "is" for exact matching.

Returns: A list of preview records matching the criteria.

Important Notes:

- Uses SuiteQL for efficient querying

Uses SuiteQL for efficient querying

- Returns "preview" records(lighter weight with essential fields)

Returns "preview" records(lighter weight with essential fields)

- Offset must be a multiple of the limit

Offset must be a multiple of the limit

- For full record details, use the "retrieve details" procedure

For full record details, use the "retrieve details" procedure

### hashtag3. Retrieve Record Details

Get the complete, detailed information for a specific record. Use this procedure when you needallthe record information and not just the preview fields.

the record is [RECORD]

The preview record to get full details for

Returns: The complete record with all fields and nested data.

### hashtag4. Update Record

Update an existing record with new data.

the record is [RECORD]

The record with updated data(must include ID)

Returns: The updated record with current values.

Important Notes:

- Only sends fields that have changed(differential update)

Only sends fields that have changed(differential update)

- Automatically fetches remote record to compute differences

Automatically fetches remote record to compute differences

- More efficient than sending entire record

More efficient than sending entire record

### hashtag5. Upload File Attachment

Upload a file to NetSuite's File Cabinet and attach it to a record. For this procedure, you need to select the folder in which the attachments will be saved.

the record is [RECORD]

The record to attach the file to

the file is [FILE]

The file to upload

the file name is "[NAME]"

Name for the uploaded file

the folder id is "[FOLDER_ID]"

Specific File Cabinet folder to upload to

Returns: The file ID of the uploaded attachment.

Important Notes:

- Requires a File Cabinet folder ID (either in call or configured globally)In order to configure a folder ID, you can do:

Requires a File Cabinet folder ID (either in call or configured globally)

- In order to configure a folder ID, you can do:

In order to configure a folder ID, you can do:

- Uses SOAP API for file operations

Uses SOAP API for file operations

- If attachment fails, the uploaded file is automatically deleted (cleanup)

If attachment fails, the uploaded file is automatically deleted (cleanup)

- File is first uploaded to File Cabinet, then linked to the record

File is first uploaded to File Cabinet, then linked to the record

## hashtagComplete Workflow Examples

### hashtag1. Retrieving Message Attachments

This example shows how to retrieve messages and download their attachments:

### hashtag2. Comprehensive Record Management

This example demonstrates schema retrieval, filtering, creating, and updating records:

## hashtagUnderstanding Record Types

NetSuite hasthree record viewsfor discovered entities:

- Preview Records

Preview Records

Retrieve Records, Create Record

Essential fields like ID, name, basic information

Lightweight for listing and selection

Fast — efficient for bulk operations

- Detail Records

Detail Records

Retrieve Record Details

All fields including nested data and relationships

Complete record information

Slower — use when you need everything

- Create Records

Create Records

Create Record

Only create-able fields

Defines what you can set when creating

Excludes system-generated and read-only fields

#### hashtagTypical Workflow

- Useretrieveto get preview records(fast)

Useretrieveto get preview records(fast)

- User selects a specific record

User selects a specific record

- Useretrieve detailsto get complete information(when needed)

Useretrieve detailsto get complete information(when needed)

Last updated3 months ago

Was this helpful?
