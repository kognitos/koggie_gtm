---
title: Microsoft Office 365 | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/office365
description: Overview of the Microsoft Office 365 book.
---

# Microsoft Office 365 | Books | Kognitos Documentation

The following documentation is forMicrosoft Office 365 v2.2.2(BDK).

## hashtagOverview

Microsoft Office 365 provides comprehensive productivity suite with cloud-based collaboration and communication tools. This integration enables automated workflow management across Word, Excel, PowerPoint, and other Office applications. Enhance productivity and streamline business processes through integrated Microsoft ecosystem automation.

## hashtagPrerequisites

### hashtag1. Required Books

The following Book(s) need to be added to your agent so it can learn and understand the automation procedures defined within them:

- Microsoft Office 365

Microsoft Office 365

#### hashtagHow to Add the Book(s)

- Go toBooks→All Books.

Go toBooks→All Books.

- Search for the name of the book and click on it.

Search for the name of the book and click on it.

- Click onInstallorAdd Connectionto add the book to your agent.

Click onInstallorAdd Connectionto add the book to your agent.

- If adding a connection, you'll be prompted forconnectivitydetails.

If adding a connection, you'll be prompted forconnectivitydetails.

### hashtag2. Permissions

When usingclient credentialsauthentication, you need to have the followingapplication permissionsin Microsoft Graph:

Application permissions are used when an app runs without a signed-in user(such as with a client credentials flow). These permissions give the app organization-wide access and must be granted by an administrator in your Microsoft organization. For additional details, refer to Microsoft'sguidesarrow-up-right.

#### hashtagUser and Directory Access

- User.Read.All

User.Read.All

- User.ReadWrite.All

User.ReadWrite.All

- Directory.Read.All

Directory.Read.All

- Directory.ReadWrite.All

Directory.ReadWrite.All

#### hashtagMail Operations

- Mail.ReadWrite

Mail.ReadWrite

- Mail.ReadBasic

Mail.ReadBasic

- Mail.ReadBasic.All

Mail.ReadBasic.All

- Mail.ReadWrite.Shared

Mail.ReadWrite.Shared

#### hashtagCalendar Operations

- Calendars.ReadBasic

Calendars.ReadBasic

- Calendars.Read

Calendars.Read

- Calendars.ReadWrite

Calendars.ReadWrite

## hashtagConnectivity

This section outlines the available methods for connecting to the Book, along with the required configuration details for each.

### hashtagConnect using Client ID, Client Secret and Tenant ID

Connect to the Microsoft Graph API using the provided client credentials.

The client ID of the application registered in Azure AD.

Client Secret

The client secret of the application registered in Azure AD.

The tenant ID of the Azure AD directory.

### hashtagConnect using Client ID, Certificate and Tenant ID

Connect to the Microsoft Graph API using certificate credentials.

The client ID of the application registered in Azure AD.

Certificate

PEM-encoded X.509 certificate string containing both the certificate and private key.

The tenant ID of the Azure AD directory.

### hashtagConnect using Client ID, Certificate, Private Key and Tenant ID

Connect to the Microsoft Graph API using certificate and private key.

The client ID of the application registered in Azure AD.

Certificate

PEM-encoded certificate string.

Private Key

PEM-encoded private key string.

The tenant ID of the Azure AD directory.

Last updated11 days ago

Was this helpful?
