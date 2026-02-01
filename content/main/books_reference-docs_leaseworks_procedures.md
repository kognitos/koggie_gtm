---
title: Procedures | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/leaseworks/procedures
description: Automation procedures in the LeaseWorks book.
---

# Procedures | Books | Kognitos Documentation

The following documentation is forLeaseWorks v1.2.2(BDK).

Ensure that you have installed or connected theLeaseWorksbook and created a new playground before using these automation procedures.

## hashtagto create a leaseworks monthend report

Create a monthend report.

Creates a monthend Report for a utilization and assembly parts

Input Concepts

utilization

the utilization for the monthend report

leaseworks utilization

(no default)

assembly parts

the assembly parts used to generate the report

leaseworks assembly part

(no default)

Output Concepts

A monthend report.

leaseworks monthend report

Create a monthend report with the utilization

Create a monthend report with the assembly parts

## hashtagto create a utilization in leaseworks

Create an aircraft utilization in Leaseworks.

Creates an aircraft Utilization in Leaseworks.

Input Concepts

the payload to include in the request.

`` orfileorlist ofortext

(no default)

Output Concepts

the response from the request

Create a new utilization with the following details

## hashtagto retrieve some (aircrafts) fromleaseworks

Retrieve aircraft information from Leaseworks.

Retrieves Aircraft information from Leaseworks. It allows users to pass filters for the query.

Output Concepts

List of aircrafts

leaseworks aircraft

Get all aircrafts from leaseworks

Retrieve aircrafts with filter

Retrieve aircrafts with filter

## hashtagto retrieve some (assembly parts) fromleaseworks

Retrieve assembly parts for a utilization.

Retrieves assembly parts for a certain Utilization

Input Concepts

utilization

the utilization for the assembly part

leaseworks utilization

(no default)

Output Concepts

assembly parts

List of assembly parts

leaseworks assembly part

Get some assembly parts from leaseworks

Last updated3 months ago

Was this helpful?
