---
title: @connect | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/custom-books/api-reference/decorators/connect-decorator
description: 
---

# @connect | Books | Kognitos Documentation

## hashtagOverview

The@connectdecorator is used to wrap functions that handleconnectionsor authentication tasks. It defines the syntax for writing aconnection command, which instantiates the connection in Kognitos to the third-party API or service that's implemented in your Python function.

## hashtagSyntax

## hashtagKeyword Arguments

A name to associate with the connection. If not provided, it defaults to the function name.

noun_phrase

A unique label to identify the authentication method. If not provided, it will be inferred from the function name. Examples include, but are not limited to:

- noun_phrase="api keys"

noun_phrase="api keys"

- noun_phrase="client credentials"

noun_phrase="client credentials"

- noun_phrase="user password authentication"

noun_phrase="user password authentication"

## hashtagImplementation Example

This is an example implementation of connecting to the OpenWeather API using an API key:

Refer toconnectionsfor additional context and usage examples.

Last updated1 month ago

Was this helpful?
