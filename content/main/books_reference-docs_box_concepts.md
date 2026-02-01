---
title: Concepts | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/box/concepts
description: Concepts used in Box book.
---

# Concepts | Books | Kognitos Documentation

The following documentation is forBox v1.0.5(BDK).

### hashtagBox folder reference

Represents a folder, often used in lists or as a parent reference (Folder--Mini like).

ALSO :box item base

The unique identifier for this folder.

The type of this resource, typically "folder". (Set by this class)

optional[text]

The name of this folder.

optional[text]

The HTTP ETag of this folder.

optional[text]

sequence_id

A numeric identifier of the most recent event applied to this folder.

optional[text]

### hashtagBox file reference

Reference to a file, containing key identifying information from list views (File--Mini like).

ALSO :box item base

The unique identifier for this file.

The type, typically "file". (Set by this class)

optional[text]

The name of this file.

optional[text]

The ETag of this file.

optional[text]

sequence_id

The sequence ID of this file.

optional[text]

The SHA1 hash of the file.

optional[text]

file_version

Mini representation of the file version.

optional[box file version mini]

The parent folder of this file.

box item base]oroptional[box folder reference

### hashtagBox file version mini

Minimal representation of a file version.

The unique identifier for this file version.

The type of this resource, typically "file_version".

The SHA1 hash of this version of the file.

optional[text]

### hashtagBox item base

Mini representation of a web link.

ALSO :box web link mini

The unique identifier for this web link.

The type of this resource, typically "web_link". (Set by this class)

optional[text]

The name of this web link.

optional[text]

The HTTP ETag of this web link.

optional[text]

sequence_id

A numeric identifier of the most recent event applied to this web link.

optional[text]

The URL this web link points to.

optional[text]

Last updated3 months ago

Was this helpful?
