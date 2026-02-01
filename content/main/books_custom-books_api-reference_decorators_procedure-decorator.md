---
title: @procedure | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/custom-books/api-reference/decorators/procedure-decorator
description: 
---

# @procedure | Books | Kognitos Documentation

## hashtagOverview

The@proceduredecorator is used to denote a method within a Book class as a procedure. This links a method to a specificprocedurein the Kognitos platform.

## hashtagSyntax

### hashtagGuidelines

1. Naming Conventions

Names must begin withto. This defines the action or intent of the procedure. For example:

- @procedure("to capitalize a (string)"

@procedure("to capitalize a (string)"

- @procedure("to get the (current temperature)")

@procedure("to get the (current temperature)")

- @procedure("to send an *SMS* message")

@procedure("to send an *SMS* message")

2. Output Concepts

Output conceptsare wrapped in parentheses(). For example:

3. Proper Nouns

Proper nouns are wrapped between asterisks**. For example:

In this example,office365is considered a proper noun. The procedure is referred to as 'get some users from office365' rather thanthe office365.

## hashtagParameters

A description that reflects the action or purpose of the procedure. See the syntaxguidelinesfor details.

## hashtagKeyword Arguments

connection_required

A boolean that indicates whether a connection to the service is required to execute the procedure. If not specified, it defaults toNone.

noun_phrase

A string that represents the noun phrase for the procedure.

## hashtagExamples

### hashtag1. Capitalizing a String

This method implements a procedure that capitalizes a string with one input concept and one output concept.

### hashtag2. Creating an Order in Truckmate

This method implements a procedure that creates an order in Truckmate. It has one input concept and two output concepts.

### hashtag3. Reading SMS messages using the Twilio API

The following method implements a procedure that reads SMS messages using the Twilio API. In this example,SMSis a proper noun.

Last updated1 month ago

Was this helpful?
