---
title: Concepts | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/dropbox/concepts
description: Concepts used in Dropbox book.
---

# Concepts | Books | Kognitos Documentation

The following documentation is forDropbox v1.0.4(BDK).

### hashtagDropbox folder metadata

Metadata for a folder in Dropbox.

The name of the folder.

The unique ID of the folder.

The type of the metadata object, always ".folder".

optional[text]

The lowercased path of the folder in the user's Dropbox (optional).

optional[text]

path_display

The display-friendly path of the folder in the user's Dropbox (optional).

optional[text]

property_groups

A list of property groups associated with the folder (optional).

optional[list of dropbox property group]

sharing_info

Sharing information for the folder (optional).

optional[dropbox folder sharing info]

### hashtagDropbox property group

A group of properties associated with a file.

template_id

The identifier of the property group template.

A list of property fields.

list of dropbox property group field

### hashtagDropbox folder sharing info

Sharing information for a folder.

True if the folder is read-only.

parent_shared_folder_id

The ID of the parent shared folder (optional).

optional[text]

shared_folder_id

The ID of the shared folder (optional).

optional[text]

traverse_only

True if the user can only traverse the folder (optional).

optional[boolean]

True if the user has no access to the folder (optional).

optional[boolean]

### hashtagDropbox file metadata

Metadata for a file in Dropbox.

The name of the file.

The unique ID of the file.

client_modified

The client's last modification timestamp (ISO 8601 UTC).

server_modified

The server's last modification timestamp (ISO 8601 UTC).

A unique revision identifier for the file.

The size of the file in bytes.

is_downloadable

True if the file is downloadable.

The type of the metadata object, always ".file".

optional[text]

The lowercased path of the file in the user's Dropbox (optional).

optional[text]

path_display

The display-friendly path of the file in the user's Dropbox (optional).

optional[text]

property_groups

A list of property groups associated with the file (optional).

optional[list of dropbox property group]

sharing_info

Sharing information for the file (optional).

optional[dropbox file sharing info]

has_explicit_shared_members

True if the file has explicitly shared members (optional).

optional[boolean]

content_hash

A hash of the file content (optional).

optional[text]

file_lock_info

File lock information if the file is locked (optional).

optional[dropbox file lock info]

### hashtagDropbox file sharing info

Sharing information for a file.

True if the file is read-only.

parent_shared_folder_id

The ID of the parent shared folder (optional).

optional[text]

modified_by

The ID of the last user to modify the file (optional).

optional[text]

### hashtagDropbox file lock info

Metadata for a file lock.

is_lockholder

True if the current user is the lockholder.

lockholder_name

The display name of the lockholder.

The time the lock was created (optional).

optional[text]

### hashtagDropbox deleted metadata

Metadata for a deleted item in Dropbox.

The name of the deleted item.

The unique ID of the deleted item.

The type of the metadata object, always ".deleted".

optional[text]

The lowercased path of the deleted item (optional).

optional[text]

path_display

The display-friendly path of the deleted item (optional).

optional[text]

property_groups

A list of property groups associated with the deleted item (optional).

optional[list of dropbox property group]

Last updated3 months ago

Was this helpful?
