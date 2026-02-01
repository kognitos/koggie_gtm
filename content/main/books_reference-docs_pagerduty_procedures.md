---
title: Procedures | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/pagerduty/procedures
description: Automation procedures in the PagerDuty book.
---

# Procedures | Books | Kognitos Documentation

The following documentation is forPagerDuty v1.0.3(BDK).

Ensure that you have installed or connected thePagerDutybook and created a new playground before using these automation procedures.

## hashtagto create an (incident) inpagerduty

Create an incident in PagerDuty.

Input Concepts

The data for the incident to create.

pagerduty incident creation payload

(no default)

Output Concepts

The created incident.

pagerduty incident

Create an incident in PagerDuty

## hashtagto get some (incidents) frompagerduty

Get incidents from PagerDuty using a Filter Expression.

Output Concepts

A list of incidents.

pagerduty incident

Get all incidents from PagerDuty

## hashtagto manage an (incident) inpagerduty

Manage an incident in PagerDuty.

Manage (update) an incident in PagerDuty. The 'From' header with a valid user email may be required by PagerDuty for this operation, depending on what was the authentication method used.

Input Concepts

The ID of the incident to update.

pagerduty incident

(no default)

The data to update for the incident.

pagerduty incident update payload

(no default)

The email of the PagerDuty user for 'From' header in write operations.

(no default)

Output Concepts

The updated incident.

pagerduty incident

Manage an incident in PagerDuty

Last updated3 months ago

Was this helpful?
