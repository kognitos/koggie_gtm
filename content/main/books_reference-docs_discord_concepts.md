---
title: Concepts | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/discord/concepts
description: Concepts used in Discord book.
---

# Concepts | Books | Kognitos Documentation

The following documentation is forDiscord v1.1.3(BDK).

### hashtagDiscord guild

Represents a Discord guild (server) with its basic properties.This class encapsulates information about a Discord server including its ID, name, ownership status, permissions, features, and visual elements like icons and banners.

ALSO :discord server

The unique identifier of the guild.

The name of the guild.

Whether the current user is the owner of the guild.

permissions

The permissions the current user has in the guild.

List of guild features enabled for this guild.

list of text

Hash of the guild's icon image.

optional[text]

Hash of the guild's banner image.

optional[text]

### hashtagDiscord channel

Represents a Discord channel within a guild.This class encapsulates information about a Discord channel including its ID, type, name, guild association, position in the channel list, and parent channel if applicable.

ALSO :discord guild channel

The unique identifier of the channel.

The type of the channel as an integer.

The name of the channel.

optional[text]

The ID of the guild this channel belongs to.

optional[text]

The position of the channel in the guild's channel list.

optional[number]

The ID of this channel's parent category.

optional[text]

### hashtagDiscord guild member

Represents a member of a Discord guild (server).This class encapsulates guild_member_json specific to a user's membership in a guild, such as their nickname, roles, join date, and the base User object.

ALSO :discord member

The User object containing the member's base user information.

The member's guild-specific nickname.

optional[text]

The member's guild-specific avatar hash.

optional[text]

List of role IDs the member has in the guild.

list of text

Timestamp when the user joined the guild.

premium_since

Timestamp when the user started boosting the guild.

optional[datetime]

Whether the member is deafened in voice channels.

Whether the member is muted in voice channels.

The member's guild flags.

Whether the member has passed membership screening.

optional[boolean]

communication_disabled_until

Timestamp when timeout will be removed.

optional[datetime]

The member's guild-specific banner hash.

optional[text]

unusual_dm_activity_until

Timestamp for unusual DM activity timeout.

optional[datetime]

### hashtagDiscord user

Represents a Discord user with their profile information.This class encapsulates information about a Discord user including their ID, username, global name, discriminator, and various profile customization elements like avatars, banners, and decorations.

The unique identifier of the user.

The user's username on Discord.

global_name

The user's global display name.

optional[text]

discriminator

The user's discriminator number.

accent_color

The user's profile accent color.

optional[number]

Hash of the user's avatar image.

optional[text]

avatar_decoration_data

Data for the user's avatar decorations.

optional[any?]

Hash of the user's profile banner image.

optional[text]

banner_color

The user's banner color.

optional[text]

Information about the user's clan.

optional[any?]

collectibles

The user's collectible items.

optional[any?]

The user's account flags.

optional[number]

primary_guild

The ID of the user's primary guild.

optional[text]

public_flags

The user's public account flags.

optional[number]

### hashtagDiscord message body

Represents the content of a message to be sent to Discord.This class provides a simplified structure for constructing message payloads, supporting both plain text content and rich embeds.

The text content of the message to be sent.

optional[text]

List of embedded rich content to be included in the message.

optional[list of json]

### hashtagDiscord message

Represents a Discord message with its core properties.This class encapsulates information about a Discord message including its ID, content text, and any rich embeds that may be part of the message.

The unique identifier of the message.

The text content of the message.

optional[text]

List of embedded rich content in the message.

optional[list of json]

Last updated3 months ago

Was this helpful?
