---
title: Procedures | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/slack/procedures
description: Automation procedures in the Slack book.
---

# Procedures | Books | Kognitos Documentation

The following documentation is forSlack v2.0.0(BDK).

Ensure that you have installed or connected theSlackbook and created a new playground before using these automation procedures.

## hashtagto read the (item's messages)

Read messages from a channel.

Input Concepts

The channel or user to read messages from

slack channelorslack user

(no default)

Output Concepts

item's messages

List of messages retrieved successfully

slack message

Read messages from Slack

## hashtagto retrieve a (channel) from slack

Retrieve a channel from Slack.

Input Concepts

channel name

The name of the channel to retrieve

(no default)

Output Concepts

Details of the channel retrieved successfully

slack channel

Retrieve the channel from Slack

## hashtagto retrieve a (user) from slack

Retrieve a user from Slack.

Input Concepts

The name of the user to retrieve

(no default)

Output Concepts

Details of the user retrieved successfully

Retrieve the user from Slack

## hashtagto send message to an item

Send a message to a channel or user.

Input Concepts

The channel or user to send the message to

slack channelorslack user

(no default)

The message to send

(no default)

The blocks to send

slack action blockorslack context blockorslack divider blockorslack header blockorslack image blockorslack markdown blockorslack section block

(no default)

attachments

The attachments to send

slack attachment

(no default)

Output Concepts

Details of the message sent successfully

slack message

Send a message to Slack

Last updated26 days ago

Was this helpful?
