---
title: Procedures | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/dropbox/procedures
description: Automation procedures in the Dropbox book.
---

# Procedures | Books | Kognitos Documentation

The following documentation is forDropbox v1.0.4(BDK).

Ensure that you have installed or connected theDropboxbook and created a new playground before using these automation procedures.

## hashtagto create a folder at a path

Creates a folder at the specified path in Dropbox.

Input Concepts

The absolute path for the new folder (e.g., "/New Folder Name").

(no default)

If true, Dropbox will automatically rename the folder if a conflict occurs. Defaults to False.

Output Concepts

The FolderMetadata of the newly created folder.

dropbox folder metadata

## hashtagto delete an item and get the item reference

Deletes a file or folder in Dropbox using its metadata and returns the metadata of the deleted item.

Input Concepts

The FileMetadata or FolderMetadata object representing the item to delete.

dropbox file metadataordropbox folder metadata

(no default)

Output Concepts

item reference

Metadata (FileMetadata, FolderMetadata, or DeletedMetadata) of the deleted item.

dropbox deleted metadataordropbox file metadataordropbox folder metadata

## hashtagto download a file

Downloads a file from Dropbox using its metadata.

Input Concepts

The FileMetadata object representing the file to download.

dropbox file metadata

(no default)

Output Concepts

An IO[bytes] object containing the file content.

## hashtagto upload a file and get the file reference

Uploads a file to a specific path in Dropbox and returns its metadata.

Max file size 150MB. For larger files, use upload sessions.

Input Concepts

The file content as a byte stream (IO).

(no default)

The name the file should have in Dropbox (e.g., "Matrices.txt").

(no default)

dropbox path

The destination folder path in Dropbox where the file will be uploaded (e.g., "/Homework/math" or "/Homework/math/").

(no default)

Selects what to do if a file already exists. Can be "add", "overwrite", or "update".

If there's a conflict, autorename the file.

Whether to mute notifications for this change.

client modified timestamp

The client's last modification timestamp (ISO 8601 UTC).

(no default)

strict conflict

If true, behaves like 'overwrite' but property groups are not updated.

Output Concepts

file reference

A FileMetadata object representing the uploaded file.

dropbox file metadata

Last updated3 months ago

Was this helpful?
