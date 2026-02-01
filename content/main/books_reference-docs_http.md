---
title: HTTP | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/http
description: Overview of the HTTP book.
---

# HTTP | Books | Kognitos Documentation

The following documentation is forHTTP v1.6.18(BDK).

## hashtagOverview

HTTP integration provides fundamental web communication capabilities for API interactions and web service calls. This integration supports GET, POST, PUT, DELETE, and other HTTP methods for seamless API integration. Enable your workflows to communicate with any REST API or web service.

## hashtagPrerequisites

### hashtag1. Required Books

The following Book(s) need to be added to your agent so it can learn and understand the automation procedures defined within them:

#### hashtagHow to Add the Book(s)

- Go toBooks→All Books.

Go toBooks→All Books.

- Search for the name of the book and click on it.

Search for the name of the book and click on it.

- Click onInstallorAdd Connectionto add the book to your agent.

Click onInstallorAdd Connectionto add the book to your agent.

- If adding a connection, you'll be prompted forconnectivitydetails.

If adding a connection, you'll be prompted forconnectivitydetails.

## hashtagConnectivity

This section outlines the available methods for connecting to the Book, along with the required configuration details for each.

### hashtagConnect using Username and Password

Connect to the HTTP server using basic authentication. Note: If connect is set, "Authorization" header will be added automatically to the request and manually set "Authorization" header will be ignored.

The username for basic authentication.

The password for basic authentication.

### hashtagConnect using Token URL, Client ID and Client Secret

Connect to the HTTP server using client credentials method. Note: If connect is set, "Authorization" header will be added automatically to the request and manually set "Authorization" header will be ignored.

The token URL for client credentials.

The client ID for client credentials.

Client Secret

The client secret for client credentials.

### hashtagConnect using Username and Password

Connect to the HTTP server using digest authentication. Note: If connect is set, "Authorization" header will be added automatically to the request and manually set "Authorization" header will be ignored.

The username for digest authentication.

The password for digest authentication.

### hashtagConnect using Token URL, Username, Password, Client ID and Client Secret

Connect to the HTTP server using password grant method. Note: If connect is set, "Authorization" header will be added automatically to the request and manually set "Authorization" header will be ignored.

The token URL for password grant.

The username for password grant.

The password for password grant.

The client ID for password grant.

Client Secret

The client secret for password grant.

## hashtagConfiguration

The following table details all the available configuration options for this book.

Get the value of the timeout.

offload threshold

The size in MB of the maximum payload size that will be returned in the response as it comes from the server.

allow insecure transport

Get the value of the allow insecure transport.

Configuration can be set or retrieved as shown in the following examples:

Last updated1 month ago

Was this helpful?
