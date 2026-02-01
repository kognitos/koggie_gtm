---
title: Discoverable Procedures | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/postgres/discoverable-procedures
description: Discoverable procedures in the Postgres (BDK) Book.
---

# Discoverable Procedures | Books | Kognitos Documentation

## hashtagTable Discovery

You must firstdiscovera table to generate CRUD automation procedures for it:

- List: Retrieve multiple rows with optional filtering

List: Retrieve multiple rows with optional filtering

- Create: Insert a single row

Create: Insert a single row

- Bulk Insert: Insert multiple rows from a table/array

Bulk Insert: Insert multiple rows from a table/array

- Get: Retrieve a single row by primary key

Get: Retrieve a single row by primary key

- Update: Update a single row by primary key

Update: Update a single row by primary key

- Bulk Update: Update multiple rows from a table/array

Bulk Update: Update multiple rows from a table/array

- Delete: Delete a single row by primary key

Delete: Delete a single row by primary key

### hashtagHow Table Names are Processed

When youdiscovera table, the book "transforms" the table name to generate user-friendly procedures.

#### hashtag1. Sanitization

Table names are converted to PascalCase. For example:

- user_properties→UserProperties

user_properties→UserProperties

- dbo.sp_GetUsers→DboSpGetUsers

dbo.sp_GetUsers→DboSpGetUsers

- table_name→TableName

table_name→TableName

- hasShip→HasShip

hasShip→HasShip

#### hashtag2. Singularization

For certain operations, the system creates singular forms of table names:

- UserProperties→UserProperty

UserProperties→UserProperty

This means when you discovertable/user_properties, the generated procedures will reference it as "UserProperties" table, and individual items will be referred to as "UserProperty".

## hashtagBasic CRUD Operations

### hashtag1. Retrieve Items (List)

Get all items from a table:

Get items with filtering:

Get items with limit:

### hashtag2. Create Single Item

First, create a JSON object with the data:

### hashtag3. Bulk Insert

Insert multiple rows from an external data source (like Excel):

Note:contentshould be a table structure with multiple rows.

### hashtag4. Get Single Item by Primary Key

### hashtag5. Update Single Item

### hashtag6. Bulk Update

Update multiple rows from an external data source:

Note:contentshould include the primary key columns for matching existing rows and should be a table structure.

### hashtag7. Delete Single Item

## hashtagAdvanced Filtering

The book supports various filtering operations:

## hashtagStored Procedure Operations

Astored procedureis a pre-written set of SQL commands that's stored in the database server and can be executed as a single unit.Think of it as a function that lives in your database instead of your application code.

#### hashtagDiscovery

Discover a stored procedure to make it available for execution:

Or for procedures in the default schema:

#### hashtagExecution

Execute a discovered stored procedure:

- Parameter names are case-insensitive

Parameter names are case-insensitive

- Empty string values are converted to NULL

Empty string values are converted to NULL

- The procedure name in execution uses the sanitized English name generated during discovery

The procedure name in execution uses the sanitized English name generated during discovery

Last updated3 months ago

Was this helpful?
