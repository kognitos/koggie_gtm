---
title: Procedures | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/http/procedures
description: Automation procedures in the HTTP book.
---

# Procedures | Books | Kognitos Documentation

The following documentation is forHTTP v1.6.18(BDK).

Ensure that you have installed or connected theHTTPbook and created a new playground before using these automation procedures.

## hashtagto delete a url

Make a DELETE request to the specified url.

Input Concepts

The URL to make the DELETE request to.

(no default)

The headers to include in the request. For example {"Authorization": "Bearer "}. Note: If connect is set, "Authorization" header will be added automatically to the request and manually set "Authorization" header will be ignored.

(no default)

Output Concepts

The response from the DELETE request.

`` orfileorlist ofortext

Delete a post with the following details

Delete a post with Authentication header

## hashtagto head a url

Make a HEAD request to the specified url.

Input Concepts

The URL to make the HEAD request to.

(no default)

The headers to include in the request. For example {"Authorization": "Bearer "}. Note: If connect is set, "Authorization" header will be added automatically to the request and manually set "Authorization" header will be ignored.

(no default)

Output Concepts

The response from the HEAD request.

`` orfileorlist ofortext

Get the headers of a post with the following details

Get the headers of a post with Authentication header

## hashtagto patch payload on a url

Make a PATCH request to the specified url.

Input Concepts

The URL to make the PATCH request to.

(no default)

The payload to include in the request.

`` orfileorlist ofortext

(no default)

The headers to include in the request. For example {"Authorization": "Bearer "}. Note: If connect is set, "Authorization" header will be added automatically to the request and manually set "Authorization" header will be ignored.

(no default)

Output Concepts

The response from the PATCH request.

`` orfileorlist ofortext

Update a post with the following details

Update a post with Authentication header

## hashtagto post payload to a url

Make a POST request to the specified url.

Input Concepts

The URL to make the POST request to.

(no default)

The payload to include in the request.

`` orfileorlist ofortext

(no default)

The headers to include in the request. For example {"Authorization": "Bearer "}. Note: If connect is set, "Authorization" header will be added automatically to the request and manually set "Authorization" header will be ignored.

(no default)

Output Concepts

The response from the POST request.

`` orfileorlist ofortext

Create a new post with the following details

Create a new post with Authentication header

## hashtagto put payload on a url

Make a PUT request to the specified url.

Input Concepts

The URL to make the PUT request to.

(no default)

The payload to include in the request.

`` orfileorlist ofortext

(no default)

The headers to include in the request. For example {"Authorization": "Bearer "}. Note: If connect is set, "Authorization" header will be added automatically to the request and manually set "Authorization" header will be ignored.

(no default)

Output Concepts

The response from the PUT request.

`` orfileorlist ofortext

Update a post with the following details

Update a post with Authentication header

## hashtagto retrieve a url

Make a GET request to the specified url.

Input Concepts

The URL to make the GET request to.

(no default)

The headers to include in the request. For example {"Authorization": "Bearer "}. Note: If connect is set, "Authorization" header will be added automatically to the request and manually set "Authorization" header will be ignored.

(no default)

Output Concepts

The response from the GET request.

`` orfileorlist ofortext

Retrieve all posts

Retrieve a post with id 1

Retrieve all posts by a user with id 1

Retrieve all posts with Authenticated header

Last updated1 month ago

Was this helpful?
