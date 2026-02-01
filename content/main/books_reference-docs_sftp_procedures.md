---
title: Procedures | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/sftp/procedures
description: Automation procedures in the SFTP book.
---

# Procedures | Books | Kognitos Documentation

The following documentation is forSFTP v1.4.11(BDK).

Ensure that you have installed or connected theSFTPbook and created a new playground before using these automation procedures.

## hashtagto copy an item to a folder

Copy an item to a folder

Input Concepts

The item (file or folder) to copy

sftp file referenceorsftp folder reference

(no default)

The folder to copy the item to

sftp folder reference

(no default)

conflict behavior

The behavior to use on conflict scenarios. It should be one of the following values: ('fail', 'replace', 'rename')

Copy a file on the SFTP server

## hashtagto create a (folder) in another folder

Create a (folder) in another folder

Input Concepts

another folder

The folder to create the (folder) in

sftp folder reference

(no default)

folder name

The name of the (folder) to create

(no default)

conflict behavior

The behavior to use on conflict scenarios. It should be one of the following values: ('fail', 'replace', 'rename')

Output Concepts

a folder reference to the created folder

sftp folder reference

Create a directory on the SFTP server

## hashtagto delete an item

Delete an item (file or folder)

Input Concepts

The item (file or folder) to delete

sftp file referenceorsftp folder reference

(no default)

Delete a file from the SFTP server

## hashtagto download a file

Download a file

Input Concepts

The file reference to the file to download

sftp file reference

(no default)

Output Concepts

the file as an IO object

Download a file from the SFTP server

## hashtagto get a (folder) at a path

Get a reference to a folder.

Input Concepts

The path to the folder

(no default)

Output Concepts

a folder reference

sftp folder reference

Get a folder at a path.

## hashtagto get a (root folder)

Get a reference to the root folder.

Output Concepts

root folder

a folder reference

sftp folder reference

Get the root folder

## hashtagto get some (folder's items)

Get items from a folder.

Input Concepts

The folder reference from which to list the items

sftp folder reference

(no default)

Output Concepts

folder's items

a list of Items (file or folder) containing the items in the folder

sftp file referenceorsftp folder reference

List files in a directory on the SFTP server

List files in a directory on the SFTP server with a filter expression

## hashtagto move an item to a folder

Move an item to a folder

Input Concepts

The item (file or folder) to move

sftp file referenceorsftp folder reference

(no default)

The folder to move the item to

sftp folder reference

(no default)

conflict behavior

The behavior to use on conflict scenarios. It should be one of the following values: ('fail', 'replace', 'rename')

Move a file on the SFTP server

## hashtagto rename an item to a name

Rename an item (file or folder) to a given name

Input Concepts

The item (file or folder) to rename

sftp file referenceorsftp folder reference

(no default)

The new name of the item

(no default)

conflict behavior

The behavior to use on conflict scenarios. It should be one of the following values: ('fail', 'replace', 'rename')

Rename a file on the SFTP server

## hashtagto upload a (file) to a folder

Upload a file to a folder

Input Concepts

The file to upload

(no default)

The folder to upload the file to

sftp folder reference

(no default)

The name of the file to upload

(no default)

conflict behavior

The behavior to use on conflict scenarios. It should be one of the following values: ('fail', 'replace', 'rename')

Output Concepts

a file reference to the uploaded file

sftp file reference

Upload a file to the SFTP server

Last updated10 days ago

Was this helpful?
