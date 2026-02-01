---
title: Discoverable Procedures | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/oracle-fusion/discoverable-procedures
description: Discoverable procedures in the Oracle Fusion (BDK) Book.
---

# Discoverable Procedures | Books | Kognitos Documentation

Ensure that you have connected theOracle Fusionbook and then created a new playground before using these automation procedures.

## hashtagOverview

In Oracle Cloud Fusion, aresourceis any object or record type that stores business data, such as an invoice, purchase order, supplier, or customer. Resources define how information is structured, including the fields, relationships, and operations available for that data.

Discoveryscans your connected Oracle Cloud Fusion instance to identify these resources, their fields, and the actions they support. Each discovery generatesthree groupsof automation procedures for a given resource:

- Basic Operations: Create, Retrieve, Update, and Delete records

Basic Operations: Create, Retrieve, Update, and Delete records

- Child Operations: Retrieve and Create child records for a resource

Child Operations: Retrieve and Create child records for a resource

- Actions: Execute complex actions on specific records

Actions: Execute complex actions on specific records

## hashtagDiscovery

Use the following syntax todiscoverresources from your Oracle Cloud Fusion instance and generate automation procedures. ReplaceRESOURCEwith the resource type to be discovered:

#### hashtagOracle Cloud Fusion Resources

Common Oracle Cloud Fusion resources include:

- Financial:invoices,purchaseOrders,receipts,payments

Financial:invoices,purchaseOrders,receipts,payments

- Procurement:suppliers,supplierSites,requisitions

Procurement:suppliers,supplierSites,requisitions

- Projects:projects,projectTasks,projectExpenses

Projects:projects,projectTasks,projectExpenses

- Inventory:items,itemRevisions,itemCategories

Inventory:items,itemRevisions,itemCategories

- HCM:employees,workers,departments

HCM:employees,workers,departments

Resource Names

Oracle Cloud Fusion resource names typically usecamelCase:

- invoices(lowercase for simple resources)

invoices(lowercase for simple resources)

- purchaseOrders(camelCase for compound names)

purchaseOrders(camelCase for compound names)

#### hashtagExamples

## hashtagBasic Operation Procedures

After discovery, you can use thefourbasic operation procedures for that resource:

### hashtag1. Retrieve Records

Get a list of records from the discovered resource.

the limit is [NUMBER]

Maximum number of records to retrieve

the offset is [NUMBER]

Number of records to skip for pagination

whose [FIELD] is [VALUE]

Filter records by specific criteria.

Note:Use the "is" operator for exact matching.

Returns: A list of records from the Oracle Cloud Fusion resource.

Important: We advise setting a limit when retrieving records from resources that can have large quantities of data, as returning all records can cause performance issues.

### hashtag2. Create Record

Create a new record in the discovered resource.

the body is [DATA]

The data for the new record

Returns: The newly created record with all fields populated, including system-generated values.

Important Notes

- Only required and create-able fields need to be provided

Only required and create-able fields need to be provided

- Oracle Cloud Fusion will generate system fields like ID, creation date, etc.

Oracle Cloud Fusion will generate system fields like ID, creation date, etc.

### hashtag3. Update Record

Update an existing record in the discovered resource.

the record is [DATA]

The record with updated data(must include primary key)

Returns: The updated record with current values.

Important Notes:

- The record data must include a primary key field to identify which record to update

The record data must include a primary key field to identify which record to update

- Primary key fields vary by resource (e.g.,InvoiceIdfor invoices,PurchaseOrderIdfor purchase orders)

Primary key fields vary by resource (e.g.,InvoiceIdfor invoices,PurchaseOrderIdfor purchase orders)

### hashtag4. Delete Record

Delete an existing record from the discovered resource.

the record is [DATA]

The record to delete(must include primary key)

Important Notes:

- The record data must include a primary key field to identify which record to delete

The record data must include a primary key field to identify which record to delete

- Primary key fields vary by resource (e.g.,InvoiceIdfor invoices,PurchaseOrderIdfor purchase orders)

Primary key fields vary by resource (e.g.,InvoiceIdfor invoices,PurchaseOrderIdfor purchase orders)

## hashtagChild Operation Procedures

Resources can have child resources. For instance, records from theinvoicesresource have a list ofInvoiceLinesas children. Discovering a resource also enables procedures for working with its children.

### hashtag1. Retrieve Child Records

Retrieve existing child records from a resource record.

the limit is [NUMBER]

Maximum number of records to retrieve

the offset is [NUMBER]

Number of records to skip for pagination

whose [FIELD] is [VALUE]

Filter records by specific criteria

Returns: A list of child records for the specified resource record.

### hashtag2. Create Child Record

Create a new child record for a resource record.

the body is [DATA]

The data for the new child record

Returns: The newly created child record with all fields populated, including system-generated values.

## hashtagAction Procedures

Some resources support executing complex actions on their records. Discovering a resource will also allow the usage of procedures that execute these actions.

### hashtagExecute Action

Execute a specific action on a resource record.

the body is [DATA]

The data required for the action

*Some actions require a body with specific fields, while others do not.

Returns: The result of the action execution.

Important Notes:

- Different resources have different actions that can be executed

Different resources have different actions that can be executed

- Check the procedures returned when discovering a resource to see available actions

Check the procedures returned when discovering a resource to see available actions

- Some actions require specific data to be passed in the body

Some actions require specific data to be passed in the body

- Required body fields vary from action to action

Required body fields vary from action to action

## hashtagComplete Workflow Examples

### hashtag1. Working with Invoices

This example demonstrates discovering invoices, creating, retrieving, updating, and working with invoice lines:

### hashtag2. Working with Purchase Orders

This example shows how to work with purchase orders and their lines:

### hashtag3. Managing Suppliers

This example demonstrates working with suppliers:

## hashtagUnderstanding Procedure Groups

Oracle Cloud Fusion discovered resources havethree procedure groups:

Basic Operations

Create, Retrieve, Update, Delete

Standard CRUD operations on resource records

Managing main resource records like invoices, orders, suppliers

Child Operations

Retrieve, Create

Work with nested/related records within a parent resource

Managing invoice lines, order lines, and other child entities

Perform complex business operations

Validating invoices, approving orders, processing payments

#### hashtagTypical Workflow

- Discoverthe resource to generate all procedures

Discoverthe resource to generate all procedures

- UseBasic Operationsto manage parent records

UseBasic Operationsto manage parent records

- UseChild Operationsto manage related child records

UseChild Operationsto manage related child records

- UseActionsto execute business processes on records

UseActionsto execute business processes on records

#### hashtagBest Practices

- Always set appropriate limits when retrieving large datasets

Always set appropriate limits when retrieving large datasets

- Include primary key fields when updating or deleting records

Include primary key fields when updating or deleting records

- Check available actions after discovery to understand resource capabilities

Check available actions after discovery to understand resource capabilities

- Use filtering to retrieve specific records efficiently

Use filtering to retrieve specific records efficiently

- Handle pagination properly for large result sets

Handle pagination properly for large result sets

Last updated26 days ago

Was this helpful?
