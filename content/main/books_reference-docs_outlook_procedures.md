---
title: Procedures | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/outlook/procedures
description: Automation procedures in the Microsoft Outlook book.
---

# Procedures | Books | Kognitos Documentation

The following documentation is forMicrosoft Outlook v2.2.2(BDK).

Make sure to add both theMicrosoft Outlookand theMicrosoft Office 365Books to your agent before using these automation procedures.

## hashtagto delete some emails

Delete specific emails from an Outlook account.

It requires the following permissions on the scopes: Mail.ReadWrite, Mail.ReadWrite.Shared

Input Concepts

The emails to be deleted

outlook email

(no default)

Delete the specified emails

## hashtagto download an attachment

Download an attachment from an event or email.

It requires the following permissions on the application: Calendars.ReadBasic, Calendars.Read, Calendars.ReadWrite

Input Concepts

The attachment that will be downloaded

outlook attachment

(no default)

Output Concepts

The attachment as a file object

Download the attachment for the specified event

## hashtagto forward an email to a recipient

Forward an email to a specified recipient or group of recipients.

It requires the following permissions on the scopes: Mail.ReadWrite, Mail.ReadWrite.Shared, Mail.Send

Input Concepts

The email to be forwarded

outlook email

(no default)

The recipient or recipients of the email

list of textortext

(no default)

The subject of the forwarded email

(no default)

cc recipients

The cc recipients of the forwarded email

list of textortext

(no default)

bcc recipients

The bcc recipients of the forwarded email

list of textortext

(no default)

attachments

The attachments to be sent with the forwarded email

(no default)

Forward the specified email to the specified recipients

Forward the specified email to the specified recipients with custom subject

Forward the specified email to the specified recipients with custom cc recipients

Forward the specified email to the specified recipients with custom bcc recipients

Forward the specified email to the specified recipients with attachments

## hashtagto get a (group's events) fromoutlook

Get all the events from a group's calendar.

It requires the following permissions on the application: Calendars.Read, Calendars.ReadWrite

Input Concepts

The user's or group's calendar from where the events will be retrieved from

office group

(no default)

start date time

The start date and time of the events to be retrieved

(no default)

end date time

The end date and time of the events to be retrieved

(no default)

Output Concepts

group's events

All the events for the group

outlook event

Retrieve all events for the specified group

Retrieve all events for the specified group whose subject matches the specified one

## hashtagto get a (user's event's attachments)

Get all the attachments from a user's event.

It requires the following permissions on the application: Calendars.ReadBasic, Calendars.Read, Calendars.ReadWrite

Input Concepts

The user's calendar from where the event attachments will be retrieved from

office user

(no default)

The event from where the attachments will be retrieved from

outlook event

(no default)

Output Concepts

user's event's attachments

All the attachments for the event

outlook attachment

Retrieve all attachments for the specified event

## hashtagto get a (user's events) fromoutlook

Get all the events from a user's calendar.

It requires the following permissions on the application: Calendars.ReadBasic, Calendars.Read, Calendars.ReadWrite

Input Concepts

The user's calendar from where the events will be retrieved from

office user

(no default)

Output Concepts

user's events

All the events for the user

outlook event

Retrieve all events for the specified user

Retrieve all events for the specified user whose subject matches the specified one

Retrieve all events whose start date is after Jul 7, 2022 12:30 UTC

## hashtagto get an email folder's subfolders

Get all the subfolders from an email folder.

It requires the following permissions on the scopes: Mail.Read, Mail.ReadWrite, Mail.ReadBasic, Mail.ReadBasic.All, Mail.ReadWrite.Shared

Input Concepts

email folder

The email folder from where the child folders will be retrieved

outlook email folder

(no default)

Output Concepts

All the child email folders for the email folder

outlook email folder

Retrieve all child folders for the specified email folder

Retrieve all child folders for the specified email folder that match provided name

## hashtagto get some (email folder's emails)

Get emails from an Outlook folder based on specified filters.

It requires the following permissions on the scopes: Mail.Read, Mail.ReadWrite, Mail.ReadBasic, Mail.ReadBasic.All, Mail.ReadWrite.Shared

Input Concepts

email folder

The email folder from where the emails will be retrieved

outlook email folder

(no default)

The maximum number of emails to retrieve

(no default)

Output Concepts

email folder's emails

All the emails for the email folder

outlook email

Retrieve all emails for the specified email folder

Retrieve all emails for the specified email folder whose subject matches the specified one

Retrieve all emails for the specified email folder whose received date is after Feb 25, 2024 12:30 UTC

Retrieve all emails for the specified email folder whose sender matches the specified one

Retrieve all emails for the specified email folder whose read status matches the specified one

## hashtagto get the (attachments) from an email

Get the attachments from an email.

It requires the following permissions on the scopes: Mail.Read, Mail.ReadWrite, Mail.ReadBasic, Mail.ReadBasic.All, Mail.ReadWrite.Shared

Input Concepts

The email from where the attachments will be retrieved

outlook email

(no default)

Output Concepts

attachments

All the attachments for the email

outlook attachment

Retrieve all attachments for the specified email

## hashtagto mark some emails

Mark specified emails as read or unread.

It requires the following permissions on the scopes: Mail.ReadWrite, Mail.ReadWrite.Shared

Input Concepts

The emails to be marked

outlook email

(no default)

The status to mark the emails as. True for read, False for unread.

Mark the specified emails as read

Mark the specified emails as unread

## hashtagto move an email to a target folder

Move emails to a target folder.

It requires the following permissions on the scopes: Mail.ReadWrite, Mail.ReadWrite.Shared

Input Concepts

The email or emails that will be moved

list of outlook emailoroutlook email

(no default)

target folder

The folder where the emails will be moved

outlook email folder

(no default)

Move the specified emails to the target folder

## hashtagto reply an email

Reply to an email through Outlook with the specified details and attachments.

It requires the following permissions on the scopes: Mail.ReadWrite, Mail.ReadWrite.Shared, Mail.Send

Input Concepts

The email to be replied

outlook email

(no default)

message body

The body of the reply

(no default)

The subject of the reply

(no default)

The recipients of the reply

list of textortext

(no default)

cc recipients

The cc recipients of the reply

list of textortext

(no default)

bcc recipients

The bcc recipients of the reply

list of textortext

(no default)

attachments

The attachments to be sent with the reply

(no default)

Reply to the specified email

Reply to the specified email with custom subject

Reply to the specified email with custom cc recipients

Reply to the specified email with custom bcc recipients

Reply to the specified email with attachments

## hashtagto retrieve some (email folders) fromoutlook

Get all the email folders from the authenticated user's mailbox.

It requires the following permissions on the scopes: Mail.Read, Mail.ReadWrite, Mail.ReadBasic, Mail.ReadBasic.All, Mail.ReadWrite.Shared

Output Concepts

email folders

All the email folders for the authenticated user

outlook email folder

Retrieve all email folders for the authenticated user

Retrieve all email folders for the authenticated user that match provided name

## hashtagto retrieve some (user's email folders)

Get all the email folders from a user's mailbox.

It requires the following permissions on the application: Mail.Read, Mail.ReadWrite, Mail.ReadBasic, Mail.ReadBasic.All, Mail.ReadWrite.Shared

Input Concepts

The user whose email folders will be retrieved

office user

(no default)

Output Concepts

user's email folders

All the email folders for the user

outlook email folder

Retrieve all email folders for the specified user

Retrieve all email folders for the specified user that match provided name

## hashtagto send an email to a recipient

Send an email through Outlook with the specified details and attachments.

It requires the following permissions on the scopes: Mail.ReadWrite, Mail.ReadWrite.Shared, Mail.Send

Input Concepts

The email to be sent

outlook email

(no default)

The recipient or recipients of the email

list of textortext

(no default)

cc recipients

The cc recipients of the email

list of textortext

(no default)

bcc recipients

The bcc recipients of the email

list of textortext

(no default)

attachments

The attachments to be sent with the email

(no default)

The user sending the email. Required for client credentials, otherwise, the user is the authenticated user.

office user

(no default)

Send an email to the specified recipients

Send an email to the specified recipients as a user

Send an email to the specified recipients with custom cc recipients

Send an email to the specified recipients with custom bcc recipients

Send an email to the specified recipients with attachments

## hashtagto set an entity's event's body to a text

Update the body of a calendar event.

It requires the following permissions on the application: Calendars.ReadWrite

Input Concepts

The user's or group's calendar who owns the event

office grouporoffice user

(no default)

The event that will be updated

outlook event

(no default)

The content of the body

(no default)

Update the body of the specified user event

Update the body of the specified group event

Last updated11 days ago

Was this helpful?
