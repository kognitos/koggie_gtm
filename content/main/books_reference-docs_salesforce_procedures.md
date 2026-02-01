---
title: Procedures | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/salesforce/procedures
description: Automation procedures in the Salesforce book.
---

# Procedures | Books | Kognitos Documentation

The following documentation is forSalesforce v2.0.3(BDK).

Ensure that you have installed or connected theSalesforcebook and created a new playground before using these automation procedures.

## hashtagto create a report insalesforce

Creates a report in Salesforce.

Input Concepts

A CreateSalesforceReportBody to create a Report with in Salesforce

salesforce create report body

(no default)

Output Concepts

The id of the created report

Create a basic Salesforce Report

Create a Report with a filter

## hashtagto export a report as aexcel

Exports a report as an Excel file.

Input Concepts

A SalesforceReport to export as an Excel file

salesforce report

(no default)

Output Concepts

The Excel file as an IO object.

## hashtagto export a report as a table

Exports a report as a Pyarrow Table.

Input Concepts

A SalesforceReport to export as a Pyarrow Table

salesforce report

(no default)

Output Concepts

The report represented as a Pyarrow Table.

## hashtagto retrieve some (reports) fromsalesforce

Retrieves reports from Salesforce.

Output Concepts

The reports retrieved from Salesforce.

salesforce report

Retrieve reports from Salesforce

Retrieve reports from Salesforce, filtering by name

## hashtagto send an email insalesforce

Sends an email in Salesforce.

Input Concepts

The receivers of the email.

(no default)

The subject of the email.

(no default)

The body of the email.

(no default)

Send an email in Salesforce

Last updated1 month ago

Was this helpful?
