---
title: Procedures | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/s3/procedures
description: Automation procedures in the AWS S3 book.
---

# Procedures | Books | Kognitos Documentation

The following documentation is forAWS S3 v1.6.3(BDK).

Ensure that you have installed or connected theAWS S3book and created a new playground before using these automation procedures.

## hashtagto copy an item to a folder

Copy an item to a folder

Input Concepts

The item (file or folder) to copy

s3 file referenceors3 folder reference

(no default)

The folder to copy the item to

s3 folder reference

(no default)

conflict behavior

The behavior to use on conflict scenarios. It should be one of the following values: ('fail', 'replace', 'rename')

Copy an item to new folder in AWS S3

## hashtagto create a (folder) in another folder

Create a (folder) in another folder

Input Concepts

another folder

The folder to create the (folder) in

s3 folder reference

(no default)

folder name

The name of the (folder) to create

(no default)

conflict behavior

The behavior to use on conflict scenarios. It should be one of the following values: ('fail', 'replace', 'rename')

Output Concepts

a folder reference to the created folder

s3 folder reference

Create a folder in another folder in AWS S3

## hashtagto delete an item

Delete an item (file or folder)

Input Concepts

The item (file or folder) to delete

s3 file referenceors3 folder reference

(no default)

Delete an item (file/folder) from AWS S3

## hashtagto download a file

Download a file

Input Concepts

The file reference to the file to download

s3 file reference

(no default)

Output Concepts

the file as an IO object

Download an item from AWS S3

## hashtagto get (buckets) froms3

Get the list of the AWS buckets

Output Concepts

List of the aws buckets

Get the buckets list from AWS S3

## hashtagto get a (file) at a path

Gets a reference to a file.

Input Concepts

The path to the file

(no default)

Output Concepts

a file reference

s3 file reference

Retrieve the file at a path

## hashtagto get a (folder) at a path

Gets a reference to a folder.

Input Concepts

The path to the folder

(no default)

Output Concepts

a folder reference

s3 folder reference

Retrieve the folder at a path

## hashtagto get a (root folder) from a bucket

Gets a reference to the root folder.

Input Concepts

The path to the folder

(no default)

Output Concepts

root folder

a folder reference

s3 folder reference

Retrieve the root folder of the AWS BUcket

## hashtagto get some (folder's items)

Lists items from a folder reference

Input Concepts

The folder reference from which to list the items

s3 folder reference

(no default)

Output Concepts

folder's items

a list of Items (file or folder) containing the items in the folder

s3 file referenceors3 folder reference

Get the list of the folder items from AWS S3

## hashtagto move an item to a folder

Move an item to a folder

Input Concepts

The item (file or folder) to move

s3 file referenceors3 folder reference

(no default)

The folder to move the item to

s3 folder reference

(no default)

conflict behavior

The behavior to use on conflict scenarios. It should be one of the following values: ('fail', 'replace', 'rename')

Move an item (file/folder) to another folder in AWS S3

## hashtagto rename an item to a name

Rename an item (file or folder) to a given name

Input Concepts

The item (file or folder) to rename

s3 file referenceors3 folder reference

(no default)

The new name of the item

(no default)

conflict behavior

The behavior to use on conflict scenarios. It should be one of the following values: ('fail', 'replace', 'rename')

Rename an item (file/folder) in AWS S3

## hashtagto upload a (file) to a folder

Upload a file to a folder

Input Concepts

The file to upload

(no default)

The folder to upload the file to

s3 folder reference

(no default)

The name of the file to upload

(no default)

conflict behavior

The behavior to use on conflict scenarios. It should be one of the following values: ('fail', 'replace', 'rename')

Output Concepts

a file reference to the uploaded file

s3 file reference

Upload a file to folder in AWS S3

Last updated3 months ago

Was this helpful?
