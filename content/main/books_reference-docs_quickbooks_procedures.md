---
title: Procedures | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/quickbooks/procedures
description: Automation procedures in the QuickBooks book.
---

# Procedures | Books | Kognitos Documentation

The following documentation is forQuickBooks v2.6.0(BDK).

Ensure that you have installed or connected theQuickBooksbook and created a new playground before using these automation procedures.

## hashtagto attach a file to the (bill) and get the attachment

Upload an attachment to an existing bill in QuickBooks.

Input Concepts

The Bill concept object to attach the file to.

quickbooks bill

(no default)

The file-like object to upload.

(no default)

The name of the file to be attached.

(no default)

Optional note to add to the attachment.

(no default)

Output Concepts

The Attachment concept object with updated attachment information.

quickbooks attachment

## hashtagto create a bill

Create a new bill in QuickBooks from the provided bill details.

Input Concepts

A BillInput object containing all bill details.

quickbooks bill input

(no default)

Output Concepts

The newly created bill.

quickbooks bill

Create a bill with mixed line items.

Create a bill with all optional fields for item-based line items.

Create a bill with account-based line items.

## hashtagto create a bill from a (purchase order)

Create a new bill in QuickBooks based on an existing purchase order.

Input Concepts

purchase order

The purchase order to convert into a bill.

quickbooks purchase order

(no default)

Output Concepts

purchase order

The newly created bill.

quickbooks bill

Create a bill for a specific purchase order by doc number.

## hashtagto create an invoice

Create a new invoice in QuickBooks from the provided invoice details.

Input Concepts

An InvoiceInput object containing all invoice details.

quickbooks invoice input

(no default)

Output Concepts

The newly created invoice.

quickbooks invoice

Create an invoice with sales item line.

Create an invoice with all optional fields.

Create an invoice with description-only lines.

## hashtagto delete an (invoice)

Delete/void an invoice in QuickBooks.

QuickBooks marks invoices as inactive rather than hard deleting them.

Input Concepts

The Invoice concept object to delete.

quickbooks invoice

(no default)

Output Concepts

## hashtagto delete an invoice by id

Delete/void an invoice in QuickBooks by invoice ID.

QuickBooks marks invoices as inactive rather than hard deleting them.

Input Concepts

The invoice ID to delete.

(no default)

## hashtagto edit a bill

Edit an existing bill in QuickBooks by updating it with new information.

Input Concepts

The Bill concept object containing the updated bill information.

quickbooks bill

(no default)

Output Concepts

The updated bill from QuickBooks.

quickbooks bill

## hashtagto edit an (invoice)

Edit an existing invoice in QuickBooks by updating it with new information.

Input Concepts

The Invoice concept object containing the updated invoice information.

quickbooks invoice

(no default)

Output Concepts

The updated invoice from QuickBooks.

quickbooks invoice

## hashtagto retrieve (bills)

Retrieve bills in QuickBooks from the company.

Input Concepts

The maximum number of bills to retrieve.

(no default)

The number which starts the bills to retrieve.

(no default)

Output Concepts

The bills associated with the company.

quickbooks bill

## hashtagto retrieve (customers)

Retrieve customers in QuickBooks from the company.

Input Concepts

The maximum number of customers to retrieve.

(no default)

The number which starts the customers to retrieve.

(no default)

Output Concepts

The customers associated with the company.

quickbooks customer

## hashtagto retrieve (invoices)

Retrieve invoices in QuickBooks from the company.

Input Concepts

The maximum number of invoices to retrieve.

(no default)

The number which starts the invoices to retrieve.

(no default)

Output Concepts

The invoices associated with the company.

quickbooks invoice

## hashtagto retrieve (items)

Retrieve items in QuickBooks from the company.

Input Concepts

The maximum number of items to retrieve.

(no default)

The number which starts the items to retrieve.

(no default)

Output Concepts

The items associated with the company.

quickbooks item

## hashtagto retrieve (purchase orders)

Retrieve purchase orders in QuickBooks from the company.

Input Concepts

The maximum number of purchase orders to retrieve.

(no default)

The number which starts the purchase orders to retrieve.

(no default)

Output Concepts

purchase orders

The purchase orders associated with the company.

quickbooks purchase order

## hashtagto retrieve (vendors)

Retrieve vendors in QuickBooks from the company.

Input Concepts

The maximum number of messages to retrieve.

(no default)

The number which starts the messages to retrieve.

(no default)

Output Concepts

The vendors associated with the company.

quickbooks vendor

## hashtagto retrieve a (report)

Retrieve a specific report from QuickBooks.

This procedure handles both summary and detail AR/AP reports.

Input Concepts

report type

The type of report to retrieve (AR summary, AR detail, AP summary, AP detail, account list detail, or transaction list).

enum[account_list_detail, ap_detail, ap_summary, ar_detail, ar_summary, transaction_list]

(no default)

Predefined date range (e.g., "All", "This Month", "Last Quarter"). Mutually exclusive with start_date/end_date.

(no default)

Start date for custom range in YYYY-MM-DD format. Must be used with end_date.

(no default)

End date for custom range in YYYY-MM-DD format. Must be used with start_date.

(no default)

Output Concepts

A Report object containing the report header, columns, and grouped table sections.

quickbooks report

## hashtagto update an (item)

Update an existing item in QuickBooks.

Input Concepts

The Item concept object containing the updated item information.

quickbooks item

(no default)

Output Concepts

The updated item from QuickBooks.

quickbooks item

Last updated11 days ago

Was this helpful?
