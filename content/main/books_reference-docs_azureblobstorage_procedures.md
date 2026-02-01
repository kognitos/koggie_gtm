---
title: Procedures | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/azureblobstorage/procedures
description: Automation procedures in the Azure Blob Storage book.
---

# Procedures | Books | Kognitos Documentation

The following documentation is forAzure Blob Storage v1.3.2(BDK).

Ensure that you have installed or connected theAzure Blob Storagebook and created a new playground before using these automation procedures.

## hashtagto copy an item to a folder

Copy an item to a folder

Input Concepts

The item (file or folder) to copy

azure file referenceorazure folder reference

(no default)

The folder to copy the item to

azure folder reference

(no default)

conflict behavior

The behavior to use on conflict scenarios. It should be one of the following values: ('fail', 'replace', 'rename')

updated name

The new name to replace with

(no default)

Copy an item (file/folder) to another folder in Azure Blob Storage

## hashtagto create a (folder) in another folder

Create a (folder) in another folder

Input Concepts

another folder

The folder to create the (folder) in

azure folder reference

(no default)

folder name

The name of the (folder) to create

(no default)

conflict behavior

The behavior to use on conflict scenarios. It should be one of the following values: ('fail', 'replace', 'rename')

Output Concepts

a reference to the created folder

azure folder reference

Create a folder in another folder in Azure Blob Storage

## hashtagto delete an item

Delete an item (file or folder)

Input Concepts

The item (file or folder) to delete

azure file referenceorazure folder reference

(no default)

Delete an item (file/folder) from Azure Blob Storage

## hashtagto download a file

Download a file

Input Concepts

The file reference to the file to download

azure file reference

(no default)

Output Concepts

the file as an IO object

Download an item from Azure Blob storage

## hashtagto get a (folder) at a path

Gets a reference to a folder.

Input Concepts

The path to the folder

(no default)

Output Concepts

a folder reference

azure folder reference

Retrieve the folder at a path

## hashtagto get a (root folder) from a container

Gets a reference to the root folder.

Input Concepts

The path to the folder

(no default)

Output Concepts

root folder

a folder reference

azure folder reference

Retrieve the root folder of the Azure Container

## hashtagto get some (folder's items)

Lists items from a folder reference

Input Concepts

The folder reference from which to list the items

azure folder reference

(no default)

Output Concepts

folder's items

a list of Items (file or folder) containing the items in the folder

azure file referenceorazure folder reference

Get the list of the folder items from Azure Blob Storage

Get a filtered list of the folder items from Azure Blob Storage

## hashtagto move an item to a folder

Move an item to a folder

Input Concepts

The item (file or folder) to move

azure file referenceorazure folder reference

(no default)

The folder to move the item to

azure folder reference

(no default)

conflict behavior

The behavior to use on conflict scenarios. It should be one of the following values: ('fail', 'replace', 'rename')

Move an item (file/folder) to another folder in AWS S3

## hashtagto rename an item to a name

Rename an item (file or folder) to a given name

Input Concepts

The item (file or folder) to rename

azure file referenceorazure folder reference

(no default)

The new name of the item

(no default)

conflict behavior

The behavior to use on conflict scenarios. It should be one of the following values: ('fail', 'replace', 'rename')

Rename an item (file/folder) in Azure Blob Storage

## hashtagto sign a (blob)

Sign a blob

Input Concepts

The item (file or folder) to sign

azure file referenceorazure folder reference

(no default)

expiry hours

The number of hours the signature should be valid for. Default is 1 hour

Output Concepts

the item signed with the SAS URL

azure file referenceorazure folder reference

Sign a blob in Azure Blob Storage

## hashtagto upload a (file) to a folder

Upload a file to a folder

Input Concepts

The file to upload

(no default)

The folder to upload the file to

azure folder reference

(no default)

The name of the file to upload

(no default)

conflict behavior

The behavior to use on conflict scenarios. It should be one of the following values: ('fail', 'replace', 'rename')

Output Concepts

the reference to the uploaded file

azure file reference

Upload a file to folder in Azure Blob Storage

Last updated3 months ago

Was this helpful?
