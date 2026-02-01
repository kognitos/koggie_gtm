---
title: Concepts | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/amazon/concepts
description: Concepts used in Amazon Selling Partner book.
---

# Concepts | Books | Kognitos Documentation

The following documentation is forAmazon Selling Partner v1.0.0(BDK).

### hashtagAmazon order

Amazon Selling Partner order information.

amazon_order_id

The unique Amazon order identifier.

order_status

The current status of the order.

purchase_date

The date when the order was purchased.

last_update_date

The date when the order was last updated.

marketplace_id

The Amazon marketplace identifier.

optional[text]

fulfillment_channel

The fulfillment channel (e.g., MFN, AFN).

optional[text]

The type of order.

optional[text]

shipment_service_level_category

The shipment service level category.

optional[text]

earliest_ship_date

The earliest ship date.

optional[text]

latest_ship_date

The latest ship date.

optional[text]

earliest_delivery_date

The earliest delivery date.

optional[text]

latest_delivery_date

The latest delivery date.

optional[text]

shipping_address

The shipping address.

optional[json]

default_ship_from_location_address

The default ship from location address.

optional[json]

number_of_items_shipped

The number of items shipped.

optional[number]

number_of_items_unshipped

The number of items unshipped.

optional[number]

payment_method

The payment method.

optional[text]

payment_method_details

List of payment method details.

optional[list of text]

Buyer information.

optional[json]

is_business_order

Whether this is a business order.

optional[boolean]

Whether this is a Prime order.

optional[boolean]

is_global_express_enabled

Whether global express is enabled.

optional[boolean]

is_premium_order

Whether this is a premium order.

optional[boolean]

is_sold_by_ab

Whether sold by Amazon Business.

optional[boolean]

Whether this is an IBA order.

optional[boolean]

Whether this is an ISPU order.

optional[boolean]

is_access_point_order

Whether this is an access point order.

optional[boolean]

fulfillment_instruction

Fulfillment instructions.

optional[json]

automated_shipping_settings

Automated shipping settings.

optional[json]

sales_channel

The sales channel.

optional[text]

order_channel

The order channel.

optional[text]

ship_service_level

The ship service level.

optional[text]

order_total

The order total amount.

optional[json]

payment_execution_detail

Payment execution details.

optional[list of json]

#### hashtagConcept attribute specifications

shipping_address (amazon order)

optional[text]

address_line1

optional[text]

address_line2

optional[text]

address_line3

optional[text]

optional[text]

optional[text]

optional[text]

state_or_region

optional[text]

municipality

optional[text]

postal_code

optional[text]

country_code

optional[text]

optional[text]

address_type

optional[text]

default_ship_from_location_address (amazon order)

optional[text]

address_line1

optional[text]

address_line2

optional[text]

address_line3

optional[text]

optional[text]

optional[text]

optional[text]

state_or_region

optional[text]

municipality

optional[text]

postal_code

optional[text]

country_code

optional[text]

optional[text]

address_type

optional[text]

buyer_info (amazon order)

buyer_email

optional[text]

optional[text]

buyer_county

optional[text]

buyer_tax_info

optional[json]

purchase_order_number

optional[text]

fulfillment_instruction (amazon order)

fulfillment_supply_source_id

optional[text]

automated_shipping_settings (amazon order)

has_automated_shipping_settings

optional[boolean]

automated_carrier

optional[text]

automated_ship_method

optional[text]

Last updated2 months ago

Was this helpful?
