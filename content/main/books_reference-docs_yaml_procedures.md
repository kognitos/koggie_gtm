---
title: Procedures | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/yaml/procedures
description: Automation procedures in the YAML book.
---

# Procedures | Books | Kognitos Documentation

The following documentation is forYAML v1.3.11(BDK).

Ensure that you have installed or connected theYAMLbook and created a new playground before using these automation procedures.

## hashtagto convert ayamlto a (text)

Convert a YAML concept into text.

Input Concepts

The YAML concept

(no default)

Output Concepts

The serialized YAML concept

Example 1: Convert the YAML concept into text

## hashtagto delete or remove a (yaml)'s property

Remove a property in a YAML concept.

Input Concepts

The YAML concept which contains the property to be removed

(no default)

The name of the property to be removed

conceptualortext

(no default)

Output Concepts

The updated YAML concept

Example 1: Remove the Year property

## hashtagto get a (yaml's property)

Retrieve a property by name from a YAML concept.

Input Concepts

The YAML concept

(no default)

The name of the property that should be retrieved from the YAML

conceptualortext

(no default)

Output Concepts

yaml's property

The property that was retrieved from the YAML

booleanorlist of anyornumberortextoryaml

Example 1: Retrieve the Movies property using exact match on the name Example 2: Retrieve the Movies property using natural language

## hashtagto get ayamlas a (file)

Convert a YAML concept into a file.

Input Concepts

The YAML concept

(no default)

Output Concepts

The file containing the serialized YAML concept

Example 1: Convert the YAML concept into a file

## hashtagto get a file as a (yaml)

Convert a file into a YAML concept.

Input Concepts

The file that contains the serialized YAML concept

(no default)

Output Concepts

The YAML concept

Example 1: Convert the file into a YAML concept

## hashtagto get a text as a (yaml)

Convert a text into a YAML concept.

Input Concepts

The text to be converted

(no default)

Output Concepts

The YAML concept

Example 1: Convert the text into a YAML concept

## hashtagto merge a (yaml) to anotheryaml

Merge two YAML concepts into a YAML concept.

Input Concepts

The first YAML concept

(no default)

another yaml

The second YAML concept

(no default)

Output Concepts

The YAML concept that has been merged

Example 1: Merge the one YAML concept into another

## hashtagto set or change a (yaml)'s property to a value

Change a property in a YAML concept to a specific text value.

Input Concepts

The YAML concept which contains the property to be changed

(no default)

The name of the property to be changed

conceptualortext

(no default)

The concept to be used as value for the property to be changed

booleanorlist of anyornumberortextoryaml

(no default)

Output Concepts

The updated YAML concept

Example 1: Change the Year property to 2000

Last updated3 months ago

Was this helpful?
