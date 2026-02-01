---
title: @concept | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/custom-books/api-reference/decorators/concept-decorator
description: 
---

# @concept | Books | Kognitos Documentation

## hashtagOverview

The@conceptdecorator designates a class as aconcept, allowing it to be used as a custom data type for defining procedure inputs and outputs.

## hashtagSyntax

## hashtagKeyword Arguments

str,List[str]

The name of the custom concept to be referred to in the Kognitos platform.*

Specifies a default value to represent an unset state for the concept.

> *In the case of aList, each element would correspond to anoun phrase(a noun and its adjectives) in the hierarchy of possessives. For example:is_a=["red dragon", "big house", "wooden door"]= red dragons's big house's wooden door

*In the case of aList, each element would correspond to anoun phrase(a noun and its adjectives) in the hierarchy of possessives. For example:

is_a=["red dragon", "big house", "wooden door"]= red dragons's big house's wooden door

## hashtagExample

The following example demonstrates the usage of the@conceptdecorator to define the custom conceptsms message:

Last updated1 month ago

Was this helpful?
