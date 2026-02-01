---
title: Concepts | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/slack/concepts
description: Concepts used in Slack book.
---

# Concepts | Books | Kognitos Documentation

The following documentation is forSlack v2.0.0(BDK).

### hashtagSlack channel

Represents a reference to a channel in Slack.

The ID of the channel.

channel_name

The name of the channel.

### hashtagSlack user

Represents a reference to a channel in Slack.

The ID of the user.

The name of the user.

The ID of the IM channel with the current user/bot.

### hashtagSlack message

Represents a reference to a message in the Slack

The message.

The timestamp of the message.

Metadata of the message

### hashtagSlack action block

Represents an action block in Slack.

The ID of the block.

optional[text]

The elements of the action.

optional[list of list of slack button elementorslack checkbox elementorslack date picker elementorslack image elementorslack markdown element?orslack overflow elementorslack static select element]

### hashtagSlack context block

Represents a context block in Slack.

The ID of the block.

optional[text]

The elements of the context block.

optional[list of list of slack button elementorslack checkbox elementorslack date picker elementorslack image elementorslack markdown element?orslack overflow elementorslack static select element]

### hashtagSlack divider block

Represents a divider block in Slack.

The ID of the block.

optional[text]

### hashtagSlack header block

Represents a header block in Slack.

The text of the header.

The ID of the block.

optional[text]

### hashtagSlack image block

Represents an image block in Slack.

The URL of the image.

The alt text for the image.

The ID of the block.

optional[text]

### hashtagSlack markdown block

Represents a markdown block in Slack.

The text of the markdown block.

The ID of the block.

optional[text]

### hashtagSlack section block

Represents a section block in Slack.

The text of the section.

optional[text]

The fields of the section.

optional[slack markdown element?ortext]

The accessory of the section.

optional[slack button elementorslack checkbox elementorslack date picker elementorslack image elementorslack markdown element?orslack overflow elementorslack static select element]

The ID of the block.

optional[text]

### hashtagSlack attachment

Represents a reference to an attachment in the Slack

The name of the attachment.

The File object

Last updated26 days ago

Was this helpful?
