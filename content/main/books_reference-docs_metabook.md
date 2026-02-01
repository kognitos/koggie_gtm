---
title: Kognitos Meta | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/metabook
description: Overview of the Kognitos Meta book.
---

# Kognitos Meta | Books | Kognitos Documentation

The following documentation is forKognitos Meta v1.0.4(BDK).

## hashtagOverview

Kognitos Meta is an intelligent automation book that executes actions based on natural language prompts using Large Language Models (LLMs). This dynamic integration can generate and execute Python code to fulfill complex automation requests that go beyond standard book capabilities.

## hashtagPrerequisites

### hashtag1. Required Books

The following Book(s) need to be added to your agent so it can learn and understand the automation procedures defined within them:

- Kognitos Meta

Kognitos Meta

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

### hashtagConnect using Gemini API Key, Credential, AWS Access Key ID, AWS Secret Access Key, AWS Region and AWS Bucket Name

Connects to an API using the provided API key.

Gemini API Key

The Gemini API key to be used for connecting to LLM

The credentials to be used for connecting to the external API. This has to be a JSON String. If no credentials are required, fill in with '{}'.

AWS Access Key ID

The AWS access key id to be used for connecting to the external API.

AWS Secret Access Key

The AWS secret access key to be used for connecting to the external API.

The AWS region to be used for connecting to the external API.

AWS Bucket Name

The AWS bucket name to be used for connecting to the external API.

## hashtagConfiguration

The following table details all the available configuration options for this book.

cache prefix

The prefix to be used for the cache keys.

department id

The kognitos department id.

(no default)

llm model name

The LLM model name to be used for the code generation.

gemini/gemini-2.0-flash

Configuration can be set or retrieved as shown in the following examples:

Last updated3 months ago

Was this helpful?
