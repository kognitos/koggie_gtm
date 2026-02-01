---
title: Retrieving Database Records | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/database-legacy/retrieving-database-records
description: Automate database record retrieval with the Database Book.
---

# Retrieving Database Records | Books | Kognitos Documentation

### hashtagOverview

These procedures allow you to get and retrieve records from a database. You can automate tasks like fetching individual records, retrieving all records from a table, or applying conditions to return specific results. These capabilities support data-driven workflows, allowing you to retrieve and use database records to automate tasks and keep information in sync across systems.

These procedures are part of the First EditionDatabase Book. Be sure your agent has learned this Book before using these procedures in an automation.

### hashtagRetrieving All Records

To retrieve all the records from a specific table in your database, use the following syntax, replacingobjectwith the name of the object you want to retrieve.

#### hashtagSyntax

#### hashtagExamples

#### hashtagSpecifying Table Names

When retrieving all the records from a database table in Kognitos, the system tries to infer the table name from the sentence. This works when the table name is plural, such asemployees,orders, orproducts.

However, if your table name is singular (likeemployee), and you're retrieving multiple records from the database, you should explicitly specify the table name using this syntax:

For example, suppose your table name isemployee(singular), and you want to retrieve a list of employees:

This tells the system:

- You're asking for multiple employees (using the plural noun,employees).

You're asking for multiple employees (using the plural noun,employees).

- You're explicitly pointing to the correct table name (employee).

You're explicitly pointing to the correct table name (employee).

Note:If the database table name is plural and matches the object in your sentence, you don't need to explicitly specify it.

### hashtagRetrieving Specific Records

To retrieve specific records from a database table, you can specify filter conditions. There are two ways to do this.

#### hashtag1. Usingwhose

You can use thewhosekeyword to add filter conditions when retrieving specific records. The following filter operations are supported:

is not,is not equal

Not equal (!=)

is greater than

Greater than (>)

is less than

Less than (<)

is greater than or equal

Greater than or equal (>=)

is less than or equal

Less than or equal (<=)

is not less

Greater than or equal (>=)

is not greater

Less than or equal (<=)

You can combine up totwofilters conditions using theandkeyword:

#### hashtag2. Usingquery filter

Aquery filteruses SQL syntax to define filter conditions and offers greater flexibility compared towhosefilters. This method supportsany valid SQL condition, including:

- Complex expressions

Complex expressions

- Multiple conditions withAND/OR

Multiple conditions withAND/OR

- Wildcards withLIKE

Wildcards withLIKE

- Advanced comparisons and functions

Advanced comparisons and functions

### hashtagHandling Empty Tables

By default, retrieving records from an empty database table will raise an exception in Kognitos. However, you can explicitly tell the system to permit empty results without raising an exception by writing the following line:

#### hashtagExamples

In the example below, the table name is singular (employee).

### hashtagStoring Retrieved Records

After retrieving records from the database, you can store them in an automation for later reference. To do this, use the following phrase, replacingplural data namewith any meaningful plural term.

To reference a specific record within the retrieved database records, write an additional line using positional keywords likefirst,second, etc.

#### hashtagExample

In the following example:

- All the retrieved database records from the query are stored asthe records.

All the retrieved database records from the query are stored asthe records.

- Only the first database record is stored asthe employee.

Only the first database record is stored asthe employee.

Last updated4 months ago

Was this helpful?
