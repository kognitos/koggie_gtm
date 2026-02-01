---
title: Connections | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/custom-books/api-reference/connections
description: Learn how to connect with third-party tools and services in your custom book project.
---

# Connections | Books | Kognitos Documentation

## hashtagImplementing Connections

Connectionsenable you to connect to third-party tools and services in your custom Book. To implement a connection, define a Python function in your Book class and decorate it with the@connectdecorator. This decorated function serves as the connection handler and defines the syntax for writing aconnection command.

Note:Implementing anOAuthconnection in a custom BDK Book is not supported at this time.

### hashtagMultiple Connections

You can define multiple connections within a Book, each with its own handler method. Use thenoun_phrasekeyword argument in the@connectdecorator to assign a unique label to each connection and differentiate between authentication methods.

### hashtagMethod Docstrings

In your connection method docstring, include the following sections in addition to a brief summary:

#### hashtag1. Arguments

Specify the Python function's parameters.

#### hashtag2. Labels

Define labels for the connection arguments (e.g., API key, credentials) that will be used in yourconnection command. Labels correspond to parameters in your function's definition.

When a label is provided in the docstring, the lowercase form is used in a connection command. Whennotprovided, the label will be inferred from the Python variable name.

In this example,API Keyis the label for theapi_keyconnection argument. The lowercase version of the label is used in a connection command (api key):

Additional Examples

- api_key: ApI kEy

api_key: ApI kEy

In this example, the connection command uses the lowercase form ofApI kEy:

- api_key: aPi_KeY

api_key: aPi_KeY

In this example, the connection command uses the lowercase version ofaPi_KeY:

If a label is not provided in the docstring, it is inferred from the Python variable name,api_key:

Last updated1 month ago

Was this helpful?
