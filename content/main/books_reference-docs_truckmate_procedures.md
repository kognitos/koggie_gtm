---
title: Procedures | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/truckmate/procedures
description: Automation procedures in the TruckMate book.
---

# Procedures | Books | Kognitos Documentation

The following documentation is forTruckMate v1.1.7(BDK).

Ensure that you have installed or connected theTruckMatebook and created a new playground before using these automation procedures.

## hashtagto create an order in truckmate and get the order number and the bill number

Create a new order in Truckmate.

Input Concepts

The Truckmate order request (acc to openAPI spec)

truckmate order

(no default)

Output Concepts

order number

Order ID of the created order

bill number

Bill Number of the created order

Create the order in Truckmate

## hashtagto update an order intruckmate

Update an order in TruckMate.

For now, it only updates the trace number.

Input Concepts

The Order ID of the truckmate order

(no default)

Type of the Trace Freight

(no default)

trace number

Trace Freight Number

(no default)

Output Concepts

Details of the trace number attached to order successfully

Update the trace numbers of the truckmate order

Last updated3 months ago

Was this helpful?
