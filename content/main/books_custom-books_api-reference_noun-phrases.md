---
title: Noun Phrases | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/custom-books/api-reference/noun-phrases
description: Learn about the concept of a noun phrase.
---

# Noun Phrases | Books | Kognitos Documentation

## hashtagOverview

Anoun phraseis a group of words centered around a noun. It consists of:

- Head:The main noun representing the fact.

Head:The main noun representing the fact.

- Modifiers:Optional words providing additional context to the head noun.

Modifiers:Optional words providing additional context to the head noun.

TheNounPhaseclass can be used to represent a noun phrase.

## hashtagModifiers

Amodifieris an optional part of a noun phrase that provides additional detail about theheadnoun. It appears before the head and refines the fact being referenced.

#### hashtagExample: Creating a Noun Phrase with Modifiers

In this example:

- Modifiers:"big", "white"

Modifiers:"big", "white"

The resulting noun phrase is "big white dog".

## hashtagParameters as Noun Phrases

Parameters can be defined asNounPhrasetypes to tell the system to use a fact'snameinstead of itsvalue.

### hashtagExample: Defining a Parameter as a Noun Phrase

Consider the following procedure method definition, where thecityparameter is defined as aNounPhrase:

This procedure can be called in an automation whereLondonis a fact with a specific value:

In this example, whenLondonis specified as the city parameter, the system uses the name of the fact (London) instead of its value ("windy").

Last updated1 month ago

Was this helpful?
