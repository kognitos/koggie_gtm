---
title: Procedures | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/googlecalendar/procedures
description: Automation procedures in the Google Calendar book.
---

# Procedures | Books | Kognitos Documentation

The following documentation is forGoogle Calendar v2.0.1(BDK).

Ensure that you have installed or connected theGoogle Calendarbook and created a new playground before using these automation procedures.

## hashtagto create an (event)

Create a new Google Calendar event.

Input Concepts

The event details to create

google calendar event

(no default)

calendar id

The calendar ID to create the event in (default: "primary")

Output Concepts

The created event with its ID and other fields set by Google Calendar

google calendar event

## hashtagto get some (events)

Get events from Google Calendar, optionally filtered by time range.

Input Concepts

Optional start time to filter events

(no default)

Optional end time to filter events

(no default)

calendar id

The calendar ID to get events from (default: "primary")

max results

Maximum number of events to retrieve (default: 100)

Output Concepts

A list of calendar events

google calendar event

Get calendar events

Last updated10 days ago

Was this helpful?
