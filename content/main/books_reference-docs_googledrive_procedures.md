---
title: Procedures | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/googledrive/procedures
description: Automation procedures in the Google Drive book.
---

# Procedures | Books | Kognitos Documentation

The following documentation is forGoogle Drive v2.0.1(BDK).

Ensure that you have installed or connected theGoogle Drivebook and created a new playground before using these automation procedures.

## hashtagto copy an item to a folder

Copy an item to a folder

Input Concepts

The item (file or folder) to copy

google drive file referenceorgoogle drive folder reference

(no default)

The folder to copy the item to

google drive folder reference

(no default)

conflict behavior

The behavior to use on conflict scenarios. It should be one of the following values: ('fail', 'replace', 'rename')

(no default)

Copy an item to a folder

Copy an item to a folder with a conflict behavior

## hashtagto create a (folder) in another folder

Create a (folder) in another folder

Input Concepts

another folder

The folder to create the (folder) in

google drive folder reference

(no default)

folder name

The name of the (folder) to create

(no default)

conflict behavior

The behavior to use on conflict scenarios. It should be one of the following values: ('fail', 'replace', 'rename')

(no default)

Output Concepts

a folder reference to the created folder

google drive folder reference

Create a folder in Google Drive

Create a folder in Google Drive, with 'rename' as the conflict behavior

## hashtagto delete an item

Delete an item (file or folder)

Input Concepts

The item (file or folder) to delete

google drive file referenceorgoogle drive folder reference

(no default)

Delete an item

## hashtagto download a file

Download a file

Input Concepts

The file reference to the file to download

google drive file reference

(no default)

Output Concepts

the file as an IO object

Download a file

## hashtagto get a (folder) at a path

Gets a reference to a folder.

Google Drive allows for multiple folders with the same name in a parent folder. For now, as the blueprint interface returns only one reference, it is returning the first item on the returned list. In case there are more than one folder with the same name, an error will be raised. In the future, this may change to a list of FolderReferences.

Input Concepts

The path to the folder

(no default)

Output Concepts

a folder reference

google drive folder reference

Get a folder at the path 'The Folder/The Subfolder'

## hashtagto get a (root folder)

Gets a reference to the root folder.

Output Concepts

root folder

a folder reference

google drive folder reference

Get a root folder

## hashtagto get some (folder's items)

Lists items from a folder reference

Input Concepts

The folder reference from which to list the items

google drive folder reference

(no default)

Output Concepts

folder's items

a list of Items (file or folder) containing the items in the folder

google drive file referenceorgoogle drive folder reference

List items in a folder

## hashtagto move an item to a folder

Move an item to a folder

Input Concepts

The item (file or folder) to move

google drive file referenceorgoogle drive folder reference

(no default)

The folder to move the item to

google drive folder reference

(no default)

conflict behavior

The behavior to use on conflict scenarios. It should be one of the following values: ('fail', 'replace', 'rename')

(no default)

Move an item to a folder

Move an item to a folder with a conflict behavior

## hashtagto rename an item to a name

Rename an item (file or folder) to a given name

Input Concepts

The item (file or folder) to rename

google drive file referenceorgoogle drive folder reference

(no default)

The new name of the item

(no default)

conflict behavior

The behavior to use on conflict scenarios. It should be one of the following values: ('fail', 'replace', 'rename')

(no default)

Rename an item to a new name

Rename an item to a new name, with 'rename' as the conflict behavior

## hashtagto upload a (file) to a folder

Upload a file to a folder

Input Concepts

The file to upload

(no default)

The folder to upload the file to

google drive folder reference

(no default)

The name of the file to upload

(no default)

conflict behavior

The behavior to use on conflict scenarios. It should be one of the following values: ('fail', 'replace', 'rename')

(no default)

Output Concepts

a file reference to the uploaded file

google drive file reference

Upload a file to a folder

Upload a file to a folder with a conflict behavior

Last updated10 days ago

Was this helpful?
