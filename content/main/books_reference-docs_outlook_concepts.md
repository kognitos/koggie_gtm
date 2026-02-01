---
title: Concepts | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/outlook/concepts
description: Concepts used in Microsoft Outlook book.
---

# Concepts | Books | Kognitos Documentation

The following documentation is forMicrosoft Outlook v2.2.2(BDK).

### hashtagOutlook email

An Outlook Email represents an email message in Microsoft Graph.

The unique identifier for the email.

optional[text]

The unique identifier for the folder containing the email.

optional[text]

The subject of the email.

optional[text]

The body of the email.

optional[text]

The recipients of the email.

optional[list of text]

The state of the email (e.g., sent, received, draft, deleted, archived, unread).

optional[text]

sent_date_time

The date and time the email was sent.

optional[datetime]

received_date_time

The date and time the email was received.

optional[datetime]

The sender of the email.

optional[text]

cc_recipients

The cc recipients of the email.

optional[list of text]

bcc_recipients

The bcc recipients of the email.

optional[list of text]

The id of the authenticated user making the requests. If it is None, the user is the using the "me" endpoints meaning delegated access.

optional[text]

has_attachments

Whether the email has attachments or not.

optional[boolean]

### hashtagOutlook attachment

An Outlook Attachment represents a file or item attached to a calendar event in Microsoft Graph. It includes the attachment name and content type.

attachment_id

The unique identifier for the attachment.

optional[text]

The OData type of the attachment.

optional[text]

The user ID of the attachment.

optional[text]

The name of the attachment.

optional[text]

The ID of the event to which the attachment is attached.

optional[text]

The ID of the email to which the attachment is attached.

optional[text]

### hashtagOutlook email folder

OutlookEmailFolder represents a folder within an Outlook mailbox, providing a way to organize and manage emails. It serves as a utility to group emails based on specific criteria, facilitating efficient email management and retrieval.

The unique identifier for the folder.

optional[text]

The name of the folder.

optional[text]

The id of the authenticated user making the requests.

optional[text]

### hashtagOffice user

An Office User represents a user in the Microsoft Graph. It includes key user details such as display name,email address, and job title.

The unique identifier for the user.

display_name

The name displayed in the address book for the user.

optional[text]

email_address

The user's email address (usually their user principal name).

optional[text]

The user's job title.

optional[text]

### hashtagOutlook event

An Outlook Calendar Event is a scheduled occurrence within an Outlook calendar that is managed through theMicrosoft Graph API. The event object includes essential details such as the subject, start and end times, attendees, and location, and supports advanced features like reminders, recurrence patterns, and time zone adjustments.

The unique identifier for the event. Read-only.

The text of the event's subject line.

optional[text]

body_preview

The preview of the message associated with the event. It is in text format.

optional[text]

The start date, time, and time zone of the event. By default, the start time is in UTC.

optional[datetime]

The date, time, and time zone that the event ends. By default, the end time is in UTC.

optional[datetime]

The location of the event.

optional[outlook event location]

The locations where the event is held or attended from. The location and locations properties always correspond with each other. If you update the location property, any prior locations in the locations collection would be removed and replaced by the new location value.

optional[list of outlook event location]

The organizer of the event.

optional[outlook email address]

The collection of attendees for the event.

optional[list of outlook event attendee]

### hashtagOutlook event location

An Outlook Event Location represents a specific location associated with a calendar event or meeting inMicrosoft Graph. It includes properties like the display name, address, coordinates, and location type, enabling precise identification and use of locations within calendar-related functionalities.

display_name

The name associated with the location.

optional[text]

email_address

Optional email address of the location.

optional[text]

The type of location. The possible values are: default, conferenceRoom, homeAddress, businessAddress,geoCoordinates, streetAddress, hotel, restaurant, localBusiness, postalAddress. Read-only.

optional[text]

Optional URI representing the location.

optional[text]

### hashtagOutlook email address

Represents an email address associated with a contact or calendar item inMicrosoft Graph. It includes only the name and email address fields.

The display name associated with the email address.

optional[text]

The email address.

optional[text]

### hashtagOutlook event attendee

An Outlook Event Attendee represents an attendee of a calendar event in Microsoft Graph. It includes the name, email address, attendee type, and response status fields.

The display name associated with the attendee.

optional[text]

email_address

The email address of the attendee.

optional[text]

The type of attendee as a string. Possible values are: required, optional, resource.

optional[text]

The response status of the attendee as a string. Possible values are: accepted, declined, tentative, etc.

optional[text]

response_time

The datetime when the response was recorded.

optional[datetime]

### hashtagOffice group

An Office Group represents a group in the Microsoft Graph. It includes key user details such as display name,and email address.

The unique identifier for the group.

display_name

The name displayed in the address book for the group.

optional[text]

email_address

The group's email address.

optional[text]

Last updated11 days ago

Was this helpful?
