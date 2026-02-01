---
title: Procedures | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/zendesk/procedures
description: Automation procedures in the Zendesk book.
---

# Procedures | Books | Kognitos Documentation

The following documentation is forZendesk v3.3.0(BDK).

Ensure that you have installed or connected theZendeskbook and created a new playground before using these automation procedures.

## hashtagto add a comment to a (ticket)

Adds a comment to an existing ticket in Zendesk with an optional single file attachment.

Note: If the attachment is specified, it must include the attachment_name with extension.

Input Concepts

The ticket to which the comment will be added.

zendesk ticket

(no default)

The comment to add to the ticket.

zendesk comment

(no default)

The file to attach to the comment.

(no default)

attachment name

The name of the attachment.

(no default)

Output Concepts

The updated ZendeskTicket object with the new comment.

zendesk ticket

Add a simple comment

Add a comment with an attachment

## hashtagto create a (ticket) inzendesk

Creates a new ticket in Zendesk with the specified properties.

Input Concepts

The ticket to be created in Zendesk, represented as a ZendeskTicket concept.

zendesk ticket

(no default)

Output Concepts

A zendesk concept representing the created ticket.

zendesk ticket

Create a Ticket

## hashtagto delete a ticket inzendesk

Deletes a specified ticket in Zendesk.

Input Concepts

The ticket concept to delete.

zendesk ticket

(no default)

Delete a ticket

## hashtagto download an (attachment)

Downloads an attachment from Zendesk.

Input Concepts

The ZendeskAttachment to download.

zendesk attachment

(no default)

Output Concepts

A file-like object (BytesIO) containing the attachment content.

Download an attachment from a comment

## hashtagto get a (ticket) inzendesk

Retrieves a specific ticket from Zendesk by its ID using direct API access.

This method uses the direct ticket API (not search) so it works immediately after ticket creation without waiting for search index updates.

Input Concepts

The ID of the ticket to retrieve.

(no default)

Output Concepts

A ZendeskTicket object representing the retrieved ticket.

zendesk ticket

Get a ticket

## hashtagto get a (user) inzendesk

Retrieves a specific user from Zendesk by their ID.

Input Concepts

The ID of the user to retrieve.

(no default)

Output Concepts

A ZendeskUser object representing the retrieved user.

zendesk user

## hashtagto get some (ticket's audits) inzendesk

Retrieves all audits for a specific ticket in Zendesk.

Input Concepts

The ticket to get audits for.

zendesk ticket

(no default)

Output Concepts

ticket's audits

A list of ZendeskAudit objects representing the audit trail.

zendesk audit

Get audits for a ticket

## hashtagto get some (ticket's comments) inzendesk

Retrieves all comments for a specific ticket in Zendesk.

Input Concepts

The ticket to get comments for.

zendesk ticket

(no default)

Output Concepts

ticket's comments

A list of ZendeskComment objects representing the retrieved comments.

zendesk comment

Get comments for a ticket

## hashtagto get some (users) inzendesk

Retrieves users from Zendesk using search functionality with optional filter expressions.

Input Concepts

Number of results to skip for pagination. Default is 0.

(no default)

Maximum number of users to return. Default is 10.

(no default)

Output Concepts

A list of ZendeskUser objects representing the retrieved users.

zendesk user

Get all users

Get users with filter expression

Get users with pagination

## hashtagto get ticket fields inzendesk

Retrieves all available ticket field definitions from Zendesk.

This method can be used to resolve the fields and custom fields information.

Output Concepts

A list of Zendesk Ticket fields representing all available fields and custom fields.

zendesk ticket field

Get all ticket fields

## hashtagto search some (tickets) inzendesk

Retrieves tickets from Zendesk using search functionality with optional filter expressions.

NOTE: This method uses the search API, which might not return immediately updated data after ticket creation. It may take up to some minutes to index newly created tickets. If you need immediate access to the ticket data, use the get_ticket_by_id method instead. If you want the custom fields names and values use the get_ticket_fields method

Input Concepts

Number of results to skip for pagination.

(no default)

Maximum number of tickets to return.

(no default)

Output Concepts

A list of ZendeskTicket objects representing the retrieved tickets.

zendesk ticket

Get some tickets

Get tickets with filter expression

Get tickets with pagination

## hashtagto update a (ticket) inzendesk

Updates a specific ticket in Zendesk with the provided information.

Input Concepts

The ticket to be updated in Zendesk, represented as a ZendeskTicket object.

zendesk ticket

(no default)

Output Concepts

The updated ticket information as returned by Zendesk.

zendesk ticket

Update a ticket's status and priority

Last updated22 days ago

Was this helpful?
