---
title: Connections | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/guides/connections
description: Learn how to add, manage, and switch connections for books.
---

# Connections | Books | Kognitos Documentation

### hashtagWhat is a Connection?

Aconnectionis a book that's added to an agent with a set of authentication credentials. While some books can be installed without credentials, those that integrate with an external service or API may require authentication, so Kognitos can securely access and interact with the service.

### hashtagConnect in Multiple Ways

Certain books can be connected using more than one set of credentials. For example, the GitHub book can be configured to access multiple organizations, or the Excel book can connect to workbooks from different accounts.

You can switch between API keys, access tokens, or login details by creating separate connections for each supported authentication method. This provides flexible access to the same book in multiple ways.

### hashtagManaging Connections

To view and manage your connections:

- Navigate toBooks → Connections.

Navigate toBooks → Connections.

- You'll see a list of all configured connections, including:Connection nameBook nameBook versionAuthentication methodConnection status

You'll see a list of all configured connections, including:

- Connection name

Connection name

- Book version

Book version

- Authentication method

Authentication method

- Connection status

Connection status

This page makes it easy to monitor, update, and troubleshoot your connections in one place.

### hashtagAdding a New Connection

You can add a connection either fromAll Booksor directly fromthe Connections section.

- Navigate toBooks → All Books.

Navigate toBooks → All Books.

- Find the book you'd like to add and click on it.

Find the book you'd like to add and click on it.

- On theBook Detailspage, clickAdd Connection.

On theBook Detailspage, clickAdd Connection.

- Configure the connection by providing the name and authentication details, then clickConnect.

Configure the connection by providing the name and authentication details, then clickConnect.

- Navigate toBooks → Connections.

Navigate toBooks → Connections.

- Click on+ New Connection.

Click on+ New Connection.

- Select the book you'd like to connect to from the dropdown menu.

Select the book you'd like to connect to from the dropdown menu.

- Configure the connection by providing the name and authentication details, then clickConnect.

Configure the connection by providing the name and authentication details, then clickConnect.

- If this is the first connection for the book, the connection name will be set todefault.

If this is the first connection for the book, the connection name will be set todefault.

- CheckUse same credentials for Draft and Publishedto apply the same authentication details to both draft and published processes. If unchecked, draft changes will use test credentials.

CheckUse same credentials for Draft and Publishedto apply the same authentication details to both draft and published processes. If unchecked, draft changes will use test credentials.

### hashtagSwitching Connections

Agents will use thedefaultconnection for a given book, unless otherwise specified. You can switch the connection by using the following syntax in your playground or process:

Replacebook namewith the book name andconnection namewith the name given to your connection. In the example below, the credentials are switched to those for the secondary GitHub organization.

Last updated2 months ago

Was this helpful?
