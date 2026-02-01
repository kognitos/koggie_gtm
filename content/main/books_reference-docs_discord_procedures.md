---
title: Procedures | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/discord/procedures
description: Automation procedures in the Discord book.
---

# Procedures | Books | Kognitos Documentation

The following documentation is forDiscord v1.1.3(BDK).

Ensure that you have installed or connected theDiscordbook and created a new playground before using these automation procedures.

## hashtagto get some (channels) from a guild

Retrieves all channels from a specific guild.

Input Concepts

The Guild object representing the server to get channels from.

discord guildordiscord server

(no default)

Output Concepts

A list of Channel objects containing information about each channel.

discord channelordiscord guild channel

Get all channels from a specific guild:

Get channels by name:

## hashtagto get some (guilds)

Retrieves all guilds (servers) that the bot is a member of.

Output Concepts

A list of Guild objects representing the servers the bot has access to.

discord guildordiscord server

Get all guilds the bot is in:

Get guilds and use them in further operations:

Get the guilds with specific names:

## hashtagto get some (members) from a guild

Retrieves all members from a specific guild.

Input Concepts

The reference to the Guild that the bot is in.

discord guildordiscord server

(no default)

Output Concepts

A list of GuildMember objects containing information about each member.

discord guild memberordiscord member

Get all members from a specific guild:

Get members by nick:

## hashtagto send a (new message) to a channel

Sends a message to a specific channel.

Input Concepts

The Channel object representing where to send the message.

discord channelordiscord guild channel

(no default)

new message

The MessageBody object containing the message content and any embeds.

discord message body

(no default)

Output Concepts

new message

A Message object representing the sent message.

discord message

Get channels and send a message:

Last updated3 months ago

Was this helpful?
