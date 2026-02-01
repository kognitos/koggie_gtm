---
title: Procedures | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/gmail/procedures
description: Automation procedures in the Gmail book.
---

# Procedures | Books | Kognitos Documentation

The following documentation is forGmail v2.0.1(BDK).

Ensure that you have installed or connected theGmailbook and created a new playground before using these automation procedures.

## hashtagto add a label to an (email)

Add a label to one or more emails.

Input Concepts

The label to add.

(no default)

the email or emails to add the label to

gmail emailorlist of gmail email

(no default)

Output Concepts

the email: The email or emails with the label added

gmail emailorlist of gmail email

Add a label to emails

## hashtagto download an (email's attachments)

Get an email attachment as an IO object.

Input Concepts

The email containing the attachment

gmail email

(no default)

Output Concepts

email's attachments

The attachment as an IO object

gmail attachment

Download an attachment

## hashtagto forward an email

Forward an email to new recipients.

Input Concepts

The email to forward

gmail email

(no default)

The recipients to forward the email to

list of textortext

(no default)

Optional additional message to include

(no default)

Optional additional HTML message to include

(no default)

cc recipients

Optional CC recipients

list of textortext

(no default)

bcc recipients

Optional BCC recipients

list of textortext

(no default)

Output Concepts

The sent email

gmail email

Forward an email to someone

Forward an email with additional message

## hashtagto get some (label's emails)

Get emails from a specified label in Gmail.

Input Concepts

The name of the label from which to retrieve emails.

(no default)

max result count

Maximum number of emails to retrieve (default: 10).

Output Concepts

label's emails

the label's emails: List of GmailEmail objects representing the retrieved emails.

gmail email

Retrieve all emails from inbox

Retrieve emails with specific subject

## hashtagto list (labels)

Get all labels from the user's Gmail account.

Output Concepts

A list of all labels.

List all labels

## hashtagto remove a label from an (email)

Remove a label from one or more emails.

Input Concepts

The label to remove.

(no default)

The email or emails to remove the label from.

gmail emailorlist of gmail email

(no default)

Output Concepts

the email: The email or emails with the label removed

gmail emailorlist of gmail email

Remove a label from an email

## hashtagto reply an email

Reply to an email.

Input Concepts

The email to reply to

gmail email

(no default)

The body of the reply

(no default)

The html body of the reply

(no default)

additional recipients

Additional recipients to include in the reply

list of textortext

(no default)

attachments

Optional list of attachments to include in the reply

gmail attachment

(no default)

Output Concepts

The sent email

gmail email

Reply to an email

## hashtagto send an email

Send an email using Gmail API.

Input Concepts

The list of recipient email addresses.

list of textortext

(no default)

The subject line of the email.

(no default)

The plain text content of the email.

(no default)

The HTML content of the email.

(no default)

cc recipients

Optional list of CC recipients.

list of textortext

(no default)

bcc recipients

Optional list of BCC recipients.

list of textortext

(no default)

attachments

Optional list of file attachments.

gmail attachment

(no default)

Output Concepts

The sent email

gmail email

Send a basic email

Send an email with CC and BCC

Last updated11 days ago

Was this helpful?
