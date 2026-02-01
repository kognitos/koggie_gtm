---
title: Concepts | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/katana/concepts
description: Concepts used in Katana book.
---

# Concepts | Books | Kognitos Documentation

The following documentation is forKatana v1.1.0(BDK).

### hashtagKatana customer

Customer represents a customer within the Katana system, serving as a comprehensive record of customer information, contact details, and associated addresses. It provides essential information to manage customer relationships and process orders.

Unique identifier for the customer.

Customer's full name or business name.

An array of shipping and billing addresses associated with the customer.

optional[list of json]

Customer's first name.

optional[text]

Customer's last name.

optional[text]

Company name associated with the customer.

optional[text]

Customer's email address for communication.

optional[text]

Customer's phone number for contact.

optional[text]

Additional comments or notes about the customer.

optional[text]

Default currency code used for the customer's transactions.

optional[text]

reference_id

External reference identifier for integration purposes.

optional[text]

Customer category or classification for grouping.

optional[text]

discount_rate

Default discount rate applied to the customer's orders.

optional[number]

The timestamp when the customer was created.

optional[datetime]

The timestamp when the customer was last updated.

optional[datetime]

default_billing_id

ID of the default billing address from the addresses array.

optional[text]

default_shipping_id

ID of the default shipping address from the addresses array.

optional[text]

### hashtagKatana purchase order

PurchaseOrder represents a supplier order within the Katana system, serving as a comprehensive record of all order details, receiving status, and associated metadata. It provides essential information to track and manage supplier orders throughout their lifecycle.

Unique identifier for the object.

A unique, identifying string used in the UI and controlled by the user.

purchase_order_rows

An array of purchase order rows.

optional[list of json]

Status of the order.

optional[text]

billing_status

Status of generating the bill through accounting integration.

optional[text]

last_document_status

Status of the last e-mail sent from (O)PO card.

optional[text]

entity_type

Either "regular" or "outsourced", depending on the purchase order type.

optional[text]

supplier_id

ID of the supplier who this order belongs to.

optional[text]

Currency of the purchase order.

optional[text]

expected_arrival_date

The timestamp when the items are expected to arrive.

optional[datetime]

order_created_date

The timestamp of creating the document.

optional[datetime]

location_id

The ID of the location to which items are received.

optional[text]

The total value of the order (including taxes) in purchase order currency.

optional[number]

total_in_base_currency

The total value of the order (including taxes) in base currency.

optional[number]

The timestamp when the purchase order was created.

optional[datetime]

The timestamp when the purchase order was last updated.

optional[datetime]

additional_info

Internal comments, links to external files, additional instructions.

optional[text]

ingredient_availability

Status of ingredients for outsourced purchase orders.

optional[text]

ingredient_expected_date

Latest date for required ingredients on outsourced orders.

optional[datetime]

tracking_location_id

Location where ingredients are processed for outsourced orders.

optional[text]

### hashtagKatana sales order

SalesOrder represents a customer order within the Katana system, serving as a comprehensive record of all order details, fulfillment status, and associated metadata. It provides essential information to track and manage customer orders throughout their lifecycle.

Unique identifier for the object.

A unique, identifying string used in the UI and controlled by the user.

sales_order_rows

An array of sales order rows.

optional[list of json]

An array of shipping and billing addresses.

optional[list of json]

customer_id

ID of the customer who this order belongs to.

optional[text]

Indication of whether the sales order was created manually, by API or imported from somewhere else.

optional[text]

location_id

ID of the location from which the order is shipped by default.

optional[text]

Status of the order.

optional[text]

Currency of the sales order.

optional[text]

invoicing_status

Status of generating the invoice through accounting integration.

optional[text]

product_availability

Stock status for the products required by the sales order.

optional[text]

ingredient_availability

Stock status for ingredients required to produce the products.

optional[text]

production_status

Production status of the manufacturing order.

optional[text]

billing_address_id

The ID of the billing address of the sales order.

optional[text]

shipping_address_id

The ID of the shipping address of the sales order.

optional[text]

order_created_date

The timestamp of creating the document.

optional[datetime]

delivery_date

A timestamp when the items are required to be delivered to the customer.

optional[datetime]

conversion_date

The date of the conversion rate used.

optional[datetime]

conversion_rate

Currency rate used to convert from sales order currency into factory base currency.

optional[number]

The timestamp when the sales order was created.

optional[datetime]

The timestamp when the sales order was last updated.

optional[datetime]

total_in_base_currency

The total value of the order (including taxes) in base currency.

optional[number]

The total value of the order (including taxes) in sales order currency.

optional[number]

picked_date

The timestamp when delivery status was marked as "PACKED" or "DELIVERED".

optional[datetime]

additional_info

Internal comments, links to external files, additional instructions.

optional[text]

customer_ref

An identifier to reference the customer associated with the sales order.

optional[text]

ecommerce_order_type

Name of the ecommerce platform if imported from one.

optional[text]

ecommerce_store_name

Name of the ecommerce store if imported from ecommerce platform.

optional[text]

ecommerce_order_id

ID of the order in the source system if imported.

optional[text]

product_expected_date

Latest date of manufacturing/purchasing deadline for required products.

optional[datetime]

ingredient_expected_date

Latest date of manufacturing/purchasing deadline for required ingredients.

optional[datetime]

tracking_number

Deprecated - use tracking_number from sales order fulfillment instead.

optional[text]

tracking_number_url

Deprecated - use tracking_number_url from sales order fulfillment instead.

optional[text]

#### hashtagConcept attribute specifications

addresses (katana customer)

customer_id

optional[text]

entity_type

optional[text]

optional[boolean]

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

optional[datetime]

optional[datetime]

purchase_order_rows (katana purchase order)

optional[text]

optional[number]

price_per_unit

optional[number]

purchase_uom

optional[text]

purchase_uom_conversion_rate

optional[number]

optional[number]

total_in_base_currency

optional[number]

conversion_rate

optional[number]

conversion_date

optional[datetime]

optional[datetime]

optional[datetime]

tax_rate_id

optional[text]

batch_transactions

optional[json]

received_date

optional[datetime]

arrival_date

optional[datetime]

sales_order_rows (katana sales order)

optional[text]

conversion_rate

optional[text]

conversion_date

optional[datetime]

optional[datetime]

optional[datetime]

optional[number]

price_per_unit

optional[number]

price_per_unit_in_base_currency

optional[number]

total_in_base_currency

optional[number]

optional[number]

tax_rate_id

optional[text]

location_id

optional[text]

product_availability

optional[text]

product_expected_date

optional[datetime]

optional[number]

optional[json]

batch_transactions

optional[json]

serial_numbers

optional[text]

linked_manufacturing_order_id

optional[text]

addresses (katana sales order)

sales_order_id

optional[text]

entity_type

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

optional[datetime]

optional[datetime]

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

Last updated2 months ago

Was this helpful?
