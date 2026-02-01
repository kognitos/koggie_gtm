---
title: Procedures | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/box/procedures
description: Automation procedures in the Box book.
---

# Procedures | Books | Kognitos Documentation

The following documentation is forBox v1.0.5(BDK).

Ensure that you have installed or connected theBoxbook and created a new playground before using these automation procedures.

## hashtagto create a (folder) in another folder

Creates a new empty folder within the specified parent folder.

Input Concepts

folder name

The name for the new folder.

(no default)

another folder

A FolderReference for the parent folder.

box folder referenceorbox item base

(no default)

A list of attributes to include in the response.

(no default)

Output Concepts

A FolderReference object for the newly created folder.

box folder referenceorbox item base

## hashtagto delete an item and get an item reference

Deletes a file or folder by moving it to the trash. For folders, this is recursive.

Input Concepts

A FileReference or FolderReference object for the item to delete.

box file referenceorbox folder referenceorbox item baseorbox item base

(no default)

Output Concepts

item reference

The reference of the item targeted for deletion.

box file referenceorbox folder referenceorbox item baseorbox item base

## hashtagto download a file

Downloads the content of a file.

Input Concepts

A FileReference for the file to download.

box file referenceorbox item base

(no default)

The specific version ID of the file to download (optional).

(no default)

Output Concepts

An IO[bytes] object containing the file content.

## hashtagto list (items) in a folder

Retrieves a page of item references from the specified folder.

Input Concepts

A FolderReference object for the folder whose items are to be listed.

box folder referenceorbox item base

(no default)

A comma-separated list of attributes to include in the response for each item.

(no default)

Specifies whether to use marker-based pagination.

(no default)

Defines the position marker at which to begin returning results (for marker-based pagination).

(no default)

Output Concepts

A list of item references (FileReference, FolderReference, WebLinkMini).

box file referenceorbox folder referenceorbox item baseorbox item baseorbox item baseorbox web link mini

## hashtagto retrieve the (root folder reference)

Retrieves a reference to the root folder.

Input Concepts

A list of attributes to include in the response for the root folder reference.

(no default)

Output Concepts

root folder reference

A FolderReference object representing the root folder.

box folder referenceorbox item base

## hashtagto upload a file and get a file reference

Uploads a file to Box. For files over 50MB, consider chunked upload APIs.

Input Concepts

The content of the file as a byte stream.

(no default)

The name the file should have in Box.

(no default)

parent folder

A FolderReference for the parent folder.

box folder referenceorbox item base

(no default)

content created at

The RFC3339 timestamp of when the content was created.

(no default)

content modified at

The RFC3339 timestamp of when the content was last modified.

(no default)

Output Concepts

file reference

A FileReference object for the uploaded file.

box file referenceorbox item base

Last updated3 months ago

Was this helpful?
