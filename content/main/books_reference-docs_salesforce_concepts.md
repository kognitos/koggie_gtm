---
title: Concepts | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/salesforce/concepts
description: Concepts used in Salesforce book.
---

# Concepts | Books | Kognitos Documentation

The following documentation is forSalesforce v2.0.3(BDK).

### hashtagSalesforce create report body

Information sent to Salesforce to create a report.

report_metadata

The metadata of the report.

### hashtagSalesforce report

A Salesforce report, modeled as the Salesforce Object (SObject)and defined as a set of data that meets certain criteria, displayed in an organized way. Specified here: https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_report.htm

The ID of the report.

The ID of the owner of the report.

The name of the report.

developer_name

The unique name of the object in the API.

description

The description of the report. Limit: 255 characters.

optional[text]

folder_name

The name of the folder that contains the report.

optional[text]

namespace_prefix

The namespace prefix of the report.

optional[text]

Indicates the format of the report. Can have one of these values: Tabular, Summary, Matrix, or Joined.

optional[text]

Indicates whether the report is deleted.

optional[boolean]

created_date

The date and time when the report was created.

optional[datetime]

created_by_id

The ID of the user who created the report.

optional[text]

last_modified_date

The date and time when the report was last modified.

optional[datetime]

last_modified_by_id

The ID of the user who last modified the report.

optional[text]

last_referenced_date

The date and time when the report was last referenced.

optional[datetime]

last_run_date

The date and time when the report was last run.

optional[datetime]

last_viewed_date

The date and time when the report was last viewed.

optional[datetime]

Last updated1 month ago

Was this helpful?
