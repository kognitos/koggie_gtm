---
title: Procedures | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/amazon/procedures
description: Automation procedures in the Amazon Selling Partner book.
---

# Procedures | Books | Kognitos Documentation

The following documentation is forAmazon Selling Partner v1.0.0(BDK).

Ensure that you have installed or connected theAmazon Selling Partnerbook and created a new playground before using these automation procedures.

## hashtagto retrieve (orders)

Retrieve orders from Amazon Selling Partner API.

Input Concepts

marketplace

Amazon marketplace (e.g., US, CA, GB)

enum[ae, au, be, br, ca, de, eg, es, fr, gb, in, it, jp, mx, nl, pl, sa, sandbox, se, sg, tr, us, za]

{'class_name': 'Marketplace', 'name': 'US', 'value': 'US'}

createdafter

Filter orders created after this date (e.g., "2024-11-01T00:00:00Z")

(no default)

last updated

Filter orders last updated after this date (e.g., "2024-11-01T00:00:00Z")

(no default)

Output Concepts

List of Order objects

amazon order

Get orders created after a specific date

Get orders last updated after a specific date

## hashtagto retrieve an (order) fromamazon selling partner

Retrieve order details from Amazon Selling Partner API.

Input Concepts

marketplace

Amazon marketplace (e.g., US, CA, GB)

enum[ae, au, be, br, ca, de, eg, es, fr, gb, in, it, jp, mx, nl, pl, sa, sandbox, se, sg, tr, us, za]

(no default)

The Amazon order identifier (e.g., "123-4567890-1234567")

(no default)

Output Concepts

Order object with all available information

amazon order

Get a specific order by ID

Get order and check status

Get order and extract buyer email

Last updated2 months ago

Was this helpful?
