---
title: Procedures | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/sqs/procedures
description: Automation procedures in the AWS SQS book.
---

# Procedures | Books | Kognitos Documentation

The following documentation is forAWS SQS v1.6.3(BDK).

Ensure that you have installed or connected theAWS SQSbook and created a new playground before using these automation procedures.

## hashtagto delete a (message) from a queue

Deletes a message from an SQS queue.

Input Concepts

The sqs message to delete

sqs message

(no default)

Output Concepts

## hashtagto get (queues) fromsqs

Lists all queues available in SQS.

Output Concepts

A list of queue URLs

## hashtagto receive (messages) from a queue

Receives messages from an SQS queue.

Input Concepts

The URL of the Amazon SQS queue to receive messages from

(no default)

Maximum number of messages to return

visibility timeout

The duration in seconds that the received messages are hidden

(no default)

Output Concepts

A list of messages from the queue

sqs message

## hashtagto send a message to a queue

Sends a message to an SQS queue.

Input Concepts

The URL of the Amazon SQS queue to send a message to

(no default)

The message to send

(no default)

Message attributes for the message

(no default)

Output Concepts

Information about the sent message including MessageId

Last updated3 months ago

Was this helpful?
