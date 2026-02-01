---
title: Procedures | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/sns/procedures
description: Automation procedures in the AWS SNS book.
---

# Procedures | Books | Kognitos Documentation

The following documentation is forAWS SNS v1.6.3(BDK).

Ensure that you have installed or connected theAWS SNSbook and created a new playground before using these automation procedures.

## hashtagto get a (topic)

Gets a specific SNS topic by its ARN.

Input Concepts

The ARN of the SNS topic to retrieve

(no default)

Output Concepts

The SNS topic.

## hashtagto list (topics)

Lists the SNS topics in the AWS account that match the filter (if any).

Output Concepts

A list of SNS topics.

## hashtagto publish a message to a topic

Publishes a message to an SNS topic.

Input Concepts

The SNS topic to publish to

(no default)

The message to publish

(no default)

Optional subject for the message (for email subscriptions)

(no default)

message attributes

Optional message attributes

(no default)

Output Concepts

the message id of the published message

Last updated3 months ago

Was this helpful?
