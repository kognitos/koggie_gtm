---
title: Concepts | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/zendesk/concepts
description: Concepts used in Zendesk book.
---

# Concepts | Books | Kognitos Documentation

The following documentation is forZendesk v3.3.0(BDK).

### hashtagZendesk ticket

A ticket in Zendesk.

The ID of the ticket.

optional[number]

The assignee of the ticket.

optional[zendesk user]

The creation date of the ticket.

optional[datetime]

custom_fields

List of custom fields as dictionaries with 'id' and 'value' keys.

optional[list of json]

description

The description of the ticket.

optional[text]

The due date of the ticket.

optional[datetime]

The priority of the ticket.

optional[text]

requester_id

The ID of the requester.

optional[number]

The submitter of the ticket.

optional[zendesk user]

The status of the ticket.

optional[text]

The subject of the ticket.

optional[text]

The tags of the ticket.

optional[list of text]

The type of the ticket.

optional[text]

The URL of the ticket.

optional[text]

### hashtagZendesk user

A user in Zendesk.

The ID of the user.

optional[number]

The email of the user.

optional[text]

The name of the user.

optional[text]

### hashtagZendesk comment

A comment in Zendesk.

The ID of the comment.

optional[number]

The content/text of the comment.

optional[text]

The user who created the comment.

optional[zendesk user]

When the comment was created.

optional[datetime]

Whether the comment is public (true) or an internal note (false).

optional[boolean]

The type of comment (Comment, VoiceComment, etc.).

optional[text]

attachments

List of ZendeskAttachment objects.

optional[list of zendesk attachment]

### hashtagZendesk attachment

An attachment in Zendesk.

The ID of the attachment.

optional[number]

The name of the file.

optional[text]

content_url

The URL to download the attachment content.

optional[text]

content_type

The MIME type of the attachment.

optional[text]

The size of the attachment in bytes.

optional[number]

### hashtagZendesk audit

An audit record for a ticket in Zendesk.

The ID of the audit.

optional[number]

The ID of the ticket this audit belongs to.

optional[number]

When the audit was created.

optional[datetime]

The ID of the user who performed the action.

optional[number]

Additional metadata about the audit.

optional[json]

List of events in this audit (changes, comments, etc.).

optional[list of list of any?]

### hashtagZendesk ticket field

A custom field definition for Zendesk tickets.

The ID of the ticket field.

The human-readable title of the field.

optional[text]

The type of the field (text, textarea, checkbox, dropdown, etc.).

optional[text]

description

The description of the field.

optional[text]

The actual value for this field on a specific ticket.

optional[any?]

Last updated22 days ago

Was this helpful?
