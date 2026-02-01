---
title: Procedures | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/servicenow/procedures
description: Automation procedures in the ServiceNow book.
---

# Procedures | Books | Kognitos Documentation

The following documentation is forServiceNow v2.0.0(BDK).

Ensure that you have installed or connected theServiceNowbook and created a new playground before using these automation procedures.

## hashtagto create a (record) in a table name

Creates a new record in a ServiceNow account.

Input Concepts

The ServiceNow Record object to be created.

servicenow record

(no default)

The table name in which the record will be created.

(no default)

Output Concepts

A ServiceNow Record object representing the newly created record.

servicenow record

Create a new incident in the 'incident' table with the specified attributes.

## hashtagto delete some records

Deletes records from ServiceNow using batch processing.

Input Concepts

The records to be deleted.

servicenow record

(no default)

Delete incidents in the 'incident' table.

## hashtagto retrieve some (records) fromservicenow

Retrieves a list of ServiceNow records based on the specified filters.

Input Concepts

The table name from which to retrieve records.

(no default)

The limit of objects brought by the call.

(no default)

Output Concepts

List of ServiceNow Records based on the specified filters.

servicenow record

Retrieve all incidents from the 'incident' table.

Retrieve all incidents from the 'incident' table whose number is 'INC0010001'.

Retrieve all incidents from the 'incident' table whose created date is after '2022-01-01'.

Retrieve 5 incidents from the 'incident' table.

## hashtagto update a record

Updates a record in ServiceNow, identified by its incident number, with specified attributes and their new values.

Input Concepts

The ServiceNow Record object to be updated.

servicenow record

(no default)

Output Concepts

The updated record from ServiceNow.

servicenow record

Update an incident in the 'incident' table with the specified attributes.

Last updated1 month ago

Was this helpful?
