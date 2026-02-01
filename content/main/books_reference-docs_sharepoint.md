---
title: Microsoft SharePoint | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/sharepoint
description: Overview of the Microsoft SharePoint book.
---

# Microsoft SharePoint | Books | Kognitos Documentation

The following documentation is forMicrosoft SharePoint v2.2.2(BDK).

## hashtagOverview

Microsoft SharePoint offers enterprise content management and collaboration platform for document sharing and team sites. This integration enables automated document workflows, content management, and team collaboration processes. Enhance organizational knowledge sharing and streamline document management.

## hashtagPrerequisites

### hashtag1. Required Books

The following Book(s) need to be added to your agent so it can learn and understand the automation procedures defined within them:

- Microsoft SharePoint

Microsoft SharePoint

- Microsoft Office 365

Microsoft Office 365

Note: TheMicrosoft SharePointbook depends on theMicrosoft Office 365Book for core Microsoft integration capabilities.

#### hashtagHow to Add the Book(s)

- Go toBooks→All Books.

Go toBooks→All Books.

- Search for the name of the book and click on it.

Search for the name of the book and click on it.

- Click onInstallorAdd Connectionto add the book to your agent.

Click onInstallorAdd Connectionto add the book to your agent.

- If adding a connection, you'll be prompted forconnectivitydetails.

If adding a connection, you'll be prompted forconnectivitydetails.

### hashtag2. Credentials & Permissions

To use the Microsoft SharePoint Book, you need to create an app registration in Microsoft Entra ID (formerly Azure AD) to obtaincredentialsand configure the appropriatepermissions.

Sign in to the Azure Portal

Navigate toportal.azure.comarrow-up-rightwith an account that has permissions to manage applications. From the main dashboard, selectMicrosoft Entra ID(underAzure Services).

Create a New App Registration

- Click on+ Addand selectApp registration.

Click on+ Addand selectApp registration.

- Enter aNamefor the app. For example: "Kognitos SharePoint Book Integration".

Enter aNamefor the app. For example: "Kognitos SharePoint Book Integration".

- UnderSupported account types, choose "Accounts in this organizational directory only".

UnderSupported account types, choose "Accounts in this organizational directory only".

- Leave theRedirect URIfield blank.

Leave theRedirect URIfield blank.

- Click onRegisterto create the app.

Click onRegisterto create the app.

Capture the Client ID and Tenant ID

After creating the app, you'll land on itsOverviewpage. Copy theApplication (client) IDandDirectory (tenant) IDfrom this page.

Generate a Client Secret

- Click onManageon the left.

Click onManageon the left.

- SelectCertificates and Secretsfrom the dropdown menu.

SelectCertificates and Secretsfrom the dropdown menu.

- UnderClient Secrets, click on+ New client secret.

UnderClient Secrets, click on+ New client secret.

- Enter a description for the secret and choose an expiration period.

Enter a description for the secret and choose an expiration period.

- ClickAdd. Copy the Secret'sValueas yourClient Secret.

ClickAdd. Copy the Secret'sValueas yourClient Secret.

Client secret values cannot be viewed except immediately after creation. Be sure to save the secret when it is created before leaving the page!

Assign API Permissions

- Click onManageon the left.

Click onManageon the left.

- SelectCertificates and Secretsfrom the dropdown menu.

SelectCertificates and Secretsfrom the dropdown menu.

- Click on+ Add a permission, then selectMicrosoft Graph.

Click on+ Add a permission, then selectMicrosoft Graph.

- ChooseApplication permissions, as the Book will access SharePoint without a signed-in user.

ChooseApplication permissions, as the Book will access SharePoint without a signed-in user.

- Search for and select the following permissions:Sites.Read.AllSites.FullControl.AllSites.Manage.AllSites.ReadWrite.All

Search for and select the following permissions:

- Sites.Read.All

Sites.Read.All

- Sites.FullControl.All

Sites.FullControl.All

- Sites.Manage.All

Sites.Manage.All

- Sites.ReadWrite.All

Sites.ReadWrite.All

For more restricted access, you can use theSites.Selectedpermission, but this requires additional configuration to grant access to specific SharePoint sites.

- Click onAdd permissions.

Click onAdd permissions.

Grant Admin Consent

On theAPI permissionsscreen, click onGrant admin consent for [Your Organization Name]button, then selectYes. This authorizes the application to use the permissions you assigned across your organization.

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
