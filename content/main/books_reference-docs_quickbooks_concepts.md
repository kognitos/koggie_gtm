---
title: Concepts | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/quickbooks/concepts
description: Concepts used in QuickBooks book.
---

# Concepts | Books | Kognitos Documentation

The following documentation is forQuickBooks v2.6.0(BDK).

### hashtagQuickbooks bill input

Input data for creating a QuickBooks Bill with mixed line item types.

The vendor in QuickBooks.

List of line items (can be item-based or account-based).

list of list of any

Optional sales terms name.

optional[text]

The bill date in YYYY-MM-DD format.

optional[text]

The due date in YYYY-MM-DD format.

optional[text]

Optional bill number.

optional[text]

### hashtagQuickbooks vendor

A comprehensive representation of a QuickBooks Vendor.

The unique identifier for the vendor.

display_name

The display name of the vendor.

company_name

The company name of the vendor.

optional[text]

The first name of the vendor contact person.

optional[text]

The last name of the vendor contact person.

optional[text]

print_on_check_name

The name to print on checks.

optional[text]

The primary email address of the vendor.

optional[text]

The primary phone number of the vendor.

optional[text]

The vendor's website URL.

optional[text]

billing_address

The billing address of the vendor.

optional[quickbooks address]

account_number

The vendor's account number.

optional[text]

The current balance owed to the vendor.

optional[number]

default_terms

The default payment terms for the vendor.

optional[text]

is_1099_contractor

Whether the vendor is a 1099 contractor.

optional[boolean]

Whether the vendor is currently active.

optional[boolean]

### hashtagQuickbooks bill

A created QuickBooks Bill.

The unique identifier of the bill in QuickBooks.

The document number of the bill.

vendor_name

The name of the vendor.

total_amount

The total amount of the bill.

The current balance of the bill from QuickBooks.

The bill date.

optional[text]

The due date.

optional[text]

The payment terms reference with id and name.

optional[json]

The department/location reference with id and name.

optional[json]

List of bill line items.

optional[list of list of quickbooks itemorquickbooks account based line?]

custom_fields

List of custom fields associated with the bill.

optional[list of quickbooks custom field]

attachment_ref

The attachment reference if an attachment was uploaded.

optional[quickbooks attachment]

created_time

When the bill was created.

optional[text]

last_updated

When the bill was last updated

optional[text]

### hashtagQuickbooks custom field

Represents a custom field in QuickBooks.

definition_id

The unique identifier for the custom field definition.

The name of the custom field.

The type of the custom field (e.g., 'StringType').

string_value

The string value of the custom field.

optional[text]

### hashtagQuickbooks attachment

An attachment to a QuickBooks bill.

The unique identifier of the attachment in QuickBooks.

The name of the attached file.

Optional note associated with the attachment.

optional[text]

content_type

The MIME type of the attachment.

optional[text]

The size of the attachment in bytes.

optional[number]

### hashtagQuickbooks purchase order

A created QuickBooks Purchase Order.

The unique identifier of the purchase order in QuickBooks.

The document number of the purchase order.

vendor_name

The name of the vendor.

total_amount

The total amount of the purchase order.

The status of the purchase order (e.g., "Open", "Closed").

optional[text]

The purchase order date.

optional[text]

The due date.

optional[text]

Memo or notes for the purchase order.

optional[text]

private_note

Private note for the purchase order.

optional[text]

The payment terms reference.

optional[json]

The department/location.

optional[json]

ship_method

The shipping method.

optional[text]

vendor_address

The vendor address for the purchase order.

optional[text]

ship_address

The shipping address.

optional[text]

exchange_rate

The exchange rate used.

optional[number]

global_tax_calculation

The tax calculation method.

optional[text]

List of purchase order line items.

optional[list of list of any?]

custom_fields

List of custom fields associated with the purchase order.

optional[list of quickbooks custom field]

created_time

When the purchase order was created.

optional[text]

last_updated

When the purchase order was last updated.

optional[text]

### hashtagQuickbooks invoice input

Input data for creating a QuickBooks Invoice with mixed line item types.

The customer in QuickBooks.

List of line items (can be sales-item or description-only).

list of list of any

custom_fields

Optional list of custom fields for the invoice.

optional[list of quickbooks custom field]

Optional sales terms name.

optional[text]

invoice_date

The invoice date in YYYY-MM-DD format.

optional[text]

The due date in YYYY-MM-DD format.

optional[text]

Optional invoice number.

optional[text]

### hashtagQuickbooks customer

A comprehensive representation of a QuickBooks Customer.

The unique identifier for the customer.

display_name

The display name of the customer.

company_name

The company name of the customer.

optional[text]

The first name of the customer contact person.

optional[text]

The last name of the customer contact person.

optional[text]

print_on_check_name

The name to print on checks.

optional[text]

The primary email address of the customer.

optional[text]

The primary phone number of the customer.

optional[text]

The customer's website URL.

optional[text]

billing_address

The billing address of the customer.

optional[quickbooks address]

shipping_address

The shipping address of the customer.

optional[quickbooks address]

account_number

The customer's account number.

optional[text]

The current balance owed by the customer.

optional[number]

default_terms

The default payment terms for the customer.

optional[text]

Whether the customer is currently active.

optional[boolean]

### hashtagQuickbooks invoice

A created QuickBooks Invoice.

The unique identifier of the invoice in QuickBooks.

The document number of the invoice.

customer_name

The name of the customer.

total_amount

The total amount of the invoice.

The current balance of the invoice from QuickBooks.

invoice_date

The invoice date.

optional[text]

The due date.

optional[text]

The sales terms name.

optional[text]

List of invoice line items.

optional[list of list of quickbooks sales item lineorquickbooks description only line?]

custom_fields

List of custom fields associated with the invoice.

optional[list of quickbooks custom field]

created_time

When the invoice was created.

optional[text]

last_updated

When the invoice was last updated

optional[text]

### hashtagThing

No description

### hashtagQuickbooks item

A QuickBooks item (product, service, or category).

The unique identifier for the item

The name of the item

The type of item (Service, Inventory, NonInventory, Category, etc.)

The SKU code for the item

optional[text]

description

Description of the item

optional[text]

The unit price for sales

optional[number]

purchase_cost

The cost to purchase the item

optional[number]

qty_on_hand

Quantity on hand (for inventory items)

optional[number]

income_account_ref

Reference to the income account

optional[json]

expense_account_ref

Reference to the expense account

optional[json]

asset_account_ref

Reference to the asset account

optional[json]

Reference to the parent category (for sub-categories)

optional[json]

Whether the item is active

optional[boolean]

The sync token for updates

optional[text]

created_time

The timestamp when the item was created

optional[text]

last_updated

The timestamp when the item was last updated

optional[text]

Whether the item is taxable

optional[boolean]

fully_qualified_name

The fully qualified name of the item

optional[text]

purchase_desc

Purchase description of the item

optional[text]

track_qty_on_hand

Whether to track quantity on hand

optional[boolean]

inv_start_date

The inventory start date (for inventory items)

optional[text]

The domain of the item

optional[text]

Whether the item is sparse

optional[boolean]

### hashtagQuickbooks report

A QuickBooks report with its header, columns, and grouped table sections.This concept represents quickbooks reports, where data is organized into logical groupings.

report_type

The type of report that was generated

enum[account_list_detail, ap_detail, ap_summary, ar_detail, ar_summary, transaction_list]

Header information containing report metadata

Column definitions for the report

list of json

List of table sections, each representing a grouped data section

list of json

#### hashtagConcept attribute specifications

terms (quickbooks bill)

optional[text]

optional[text]

location (quickbooks bill)

optional[text]

optional[text]

terms (quickbooks purchase order)

optional[text]

optional[text]

location (quickbooks purchase order)

optional[text]

optional[text]

income_account_ref (quickbooks item)

optional[text]

optional[text]

expense_account_ref (quickbooks item)

optional[text]

optional[text]

asset_account_ref (quickbooks item)

optional[text]

optional[text]

parent_ref (quickbooks item)

optional[text]

optional[text]

columns (quickbooks report)

optional[json]

tables (quickbooks report)

optional[text]

optional[json]

Last updated11 days ago

Was this helpful?
