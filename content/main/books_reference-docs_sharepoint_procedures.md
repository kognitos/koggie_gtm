---
title: Procedures | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/sharepoint/procedures
description: Automation procedures in the Microsoft SharePoint book.
---

# Procedures | Books | Kognitos Documentation

The following documentation is forMicrosoft SharePoint v2.2.2(BDK).

Make sure to add both theMicrosoft SharePointand theMicrosoft Office 365Books to your agent before using these automation procedures.

## hashtagto add a column to a slist

Adds a column to a given SharePoint list using the Microsoft Graph API.

For now, it will remain the same as the BCI version. In the future, we should try to support more col types, opening up the configuration for them.

Input Concepts

The list to which the column will be added.

sharepoint list

(no default)

The name of the column to be added.

(no default)

description

The description of the column to be added.

(no default)

## hashtagto add an (item) to a slist

Adds an item to a given SharePoint list using the Microsoft Graph API.

Input Concepts

The list to which the item will be added.

sharepoint list

(no default)

The item to be added to the list. The fields in the Dict should match the column names in the list.

(no default)

Output Concepts

sharepoint list item

## hashtagto copy an item to a folder

Copies an item (folder or file) to a given folder using the Microsoft Graph API.

Input Concepts

The item (folder or file) that will be copied.

sharepoint file referenceorsharepoint folder reference

(no default)

The destination folder where the file will be copied.

sharepoint folder reference

(no default)

The new name for the copy. If this isn't provided, the same name will be used as the original.

(no default)

conflict behavior

The behavior when a conflict occurs. Possible values are 'fail', 'replace', 'rename'.

Copy an item to a folder

## hashtagto create a (folder) in a document library

Creates a new folder at the root of the given SharePoint document library using the Microsoft Graph API.

Input Concepts

document library

The document library where the folder will be created.

sharepoint document library

(no default)

folder name

The name of the folder to be created.

(no default)

conflict behavior

The behavior when a conflict occurs. Possible values are 'fail', 'replace', 'rename'.

Output Concepts

A sharepoint document library folder representing the created folder.

sharepoint folder reference

Create a folder named "My New Folder" in the document library "My Documents" the folder name is "My New Folder"

## hashtagto create a (folder) in another folder

Creates a new folder at the given SharePoint document library item using the Microsoft Graph API.

Input Concepts

another folder

The folder under which the new folder will be created.

sharepoint folder reference

(no default)

folder name

The name of the folder to be created.

(no default)

conflict behavior

The behavior when a conflict occurs. Possible values are 'fail', 'replace', 'rename'.

Output Concepts

A sharepoint document library item representing the created folder.

sharepoint folder reference

Create a folder named "My New Folder" under the folder "My Folder"

## hashtagto create a list in a sharepoint site

Creates a new list in a given SharePoint site using the Microsoft Graph API.

Input Concepts

The site where the list will be created.

sharepoint site

(no default)

The name of the list to be created.

(no default)

Output Concepts

A SharepointList object representing the created list.

sharepoint list

## hashtagto delete a column from a list

Deletes a column from a given SharePoint list using the Microsoft Graph API.

Input Concepts

The column to be deleted.

sharepoint list column

(no default)

## hashtagto delete a slist

Deletes a list in a given SharePoint site using the Microsoft Graph API.

Input Concepts

The list to be deleted.

sharepoint list

(no default)

## hashtagto delete an item

Deletes an item (folder or file) within a given SharePoint document library using the Microsoft Graph API.

Input Concepts

The item (folder or file) to be deleted.

sharepoint file referenceorsharepoint folder reference

(no default)

Delete an item

## hashtagto delete an item from list

Deletes one or many items in a given SharePoint list using the Microsoft Graph API.

Input Concepts

The item or items to be deleted.

list of sharepoint list itemorsharepoint list item

(no default)

## hashtagto download a file

Downloads a file from a given SharePoint document library using the Microsoft Graph API.

Input Concepts

The SharePoint file that will be downloaded.

sharepoint file reference

(no default)

Output Concepts

The downloaded file

Download a file

## hashtagto edit an item

Edits an item in a given SharePoint list using the Microsoft Graph API.

Input Concepts

The item to be edited.

sharepoint list item

(no default)

The created item is a JSON or a SharepointListItem concept

## hashtagto get a (folder's items)

Retrieves all child items from the specified document library folder using the Microsoft Graph API.

Input Concepts

The document library folder from which to retrieve items.

sharepoint folder reference

(no default)

Output Concepts

folder's items

A list of items within the specified document library item.

sharepoint file referenceorsharepoint folder reference

Retrieve all items from the folder "My Folder"

## hashtagto get a (folder) at a path

Retrieves the root folder of a given SharePoint document library using the Microsoft Graph API.

Input Concepts

The path to the folder to retrieve with the following format: ////...

(no default)

Output Concepts

A sharepoint document library item representing the folder at the specified path.

sharepoint folder reference

Retrieve the root folder of the document library "My Documents" in the site "My Site"

Retrieve the folder "My Folder" within the document library "My Documents" in the site "My Site"

## hashtagto get a (root folder) from a document library

Retrieves the root folder of a given SharePoint document library using the Microsoft Graph API.

Input Concepts

document library

The document library from which to retrieve the root folder.

sharepoint document library

(no default)

Output Concepts

root folder

The root folder of the specified document library.

sharepoint folder reference

Retrieve the root folder of the document library "My Documents"

## hashtagto get some (items) from a document library

Retrieves all items within a given SharePoint document library using the Microsoft Graph API.

Input Concepts

document library

The document library from which to retrieve items.

sharepoint document library

(no default)

Output Concepts

A list of items within the specified document library.

sharepoint file referenceorsharepoint folder reference

## hashtagto get some (site's document libraries)

Retrieves all document libraries within a given SharePoint site using the Microsoft Graph API.

Input Concepts

A SharePointSite object representing the site from which to retrieve document libraries.

sharepoint site

(no default)

Output Concepts

site's document libraries

A list of document libraries within the specified site.

sharepoint document library

## hashtagto get some (sites) fromsharepoint

Get SharePoint sites accessible via the Microsoft Graph API.

Output Concepts

A list of sharepoint sites.

sharepoint site

Retrieve accessible sites from SharePoint

Retrieve a single site by name

## hashtagto get some (slist's items)

Retrieves all items within a given SharePoint list using the Microsoft Graph API.

When using it, it is very important to mark the item you are working with as a "slist" (Sharepoint list) so that the Brain matches this procedure.

Input Concepts

The list from which to retrieve items.

sharepoint list

(no default)

include empty columns

Whether to include empty columns in the table.

The maximum number of items to retrieve.

(no default)

Output Concepts

slist's items

A list of items within the specified list.

sharepoint list item

Get the items in a list

Get the items in a list filtered by a column

Get the items in a list filtered by a column and include empty columns

## hashtagto move an item to a folder

Moves an item (folder or file) to a given folder using the Microsoft Graph API.

Input Concepts

An item (folder or file) that will be moved.

sharepoint file referenceorsharepoint folder reference

(no default)

The destination folder where the item will be moved.

sharepoint folder reference

(no default)

The new name for the move. If this isn't provided, the same name will be used as the original.

(no default)

conflict behavior

The behavior when a conflict occurs. Possible values are 'fail', 'replace', 'rename'.

Move an item to a folder

## hashtagto rename a (slist)

Renames a list in a given SharePoint site using the Microsoft Graph API.

Input Concepts

The list to be renamed.

sharepoint list

(no default)

The new name for the list.

(no default)

Output Concepts

the renamed slist

sharepoint list

## hashtagto rename a column in a list

Edits a column in a given SharePoint list using the Microsoft Graph API.

IMPORTANT: This rename does not affect the internal name of the column, only the display name.

Input Concepts

The name of the column to be edited.

sharepoint list column

(no default)

new column name

The new name for the column.

(no default)

description

The new description for the column.

Output Concepts

sharepoint list column

## hashtagto rename an item to a name

Renames a folder or a file using the Microsoft Graph API.

Input Concepts

A SharePoint file that will be renamed.

sharepoint file referenceorsharepoint folder reference

(no default)

The new name for the file.

(no default)

conflict behavior

The behavior when a conflict occurs. Possible values are 'fail', 'replace', 'rename'.

Rename a file

## hashtagto retrieve a (document library) at a url

Retrieves a SharePoint document library by its web URL using the Microsoft Graph API.

URL Structure: https://{tenant}.sharepoint.com/sites/{sitename}/{libraryname} Example: https://contoso.sharepoint.com/sites/bdk-testing/Shared%20Documents/Forms/AllItems.aspx Note: The library name is extracted from the URL path. Extra path segments like "Forms/AllItems.aspx" are ignored.

Input Concepts

The web URL of the document library to retrieve.

(no default)

Output Concepts

document library

A SharePoint document library object.

sharepoint document library

Retrieve a document library by its URL

Get a document library by URL and list its contents

## hashtagto retrieve a (file) at a url

Retrieves a SharePoint file by its web URL using the Microsoft Graph API.

URL Structure: SharePoint sharing link format with a file type indicator: https://{tenant}.sharepoint.com/:{type}:/s/{sitename}/{encoded-file-id}?e={share-token} File type indicators:❌(Excel), :w: (Word), :p: (PowerPoint),⭕(OneNote), :u: (other) Example: https://contoso.sharepoint.com/❌/s/bdk-testing/IQBeb0d3aEHrQ6FjalfpQ0YMAaGJLzwchRkDm49QQonv9Zs?e=kMch0g To get this URL: Right-click on the file in SharePoint and select "Copy link".

Input Concepts

The web URL (sharing link) of the file to retrieve.

(no default)

Output Concepts

A SharePoint file reference object.

sharepoint file reference

Retrieve a file by its URL

Get a file by URL and download it

## hashtagto retrieve a (folder) at a url

Retrieves a SharePoint folder by its web URL using the Microsoft Graph API.

URL Structure: SharePoint sharing link format with :f: indicating a folder: https://{tenant}.sharepoint.com/:f:/s/{sitename}/{encoded-folder-id}?e={share-token} Example: https://contoso.sharepoint.com/:f:/s/bdk-testing/IgAu9BS6my2MRKogPH9TanUJAdITnMhz9MC63mh2yYcQofw?e=Qg73q2 To get this URL: Right-click on the folder in SharePoint and select "Copy link".

Input Concepts

The web URL (sharing link) of the folder to retrieve.

(no default)

Output Concepts

A SharePoint folder reference object.

sharepoint folder reference

Retrieve a folder by its URL

Get a folder by URL and list its contents

## hashtagto retrieve a (site) at a url

Retrieves a SharePoint site by its web URL using the Microsoft Graph API.

URL Structure: https://{tenant}.sharepoint.com/sites/{sitename} Example: https://contoso.sharepoint.com/sites/bdk-testing

Input Concepts

The web URL of the SharePoint site to retrieve.

(no default)

Output Concepts

A SharePoint site object.

sharepoint site

Retrieve a site by its URL

Get a site by URL and then retrieve its lists

## hashtagto retrieve a (slist) at a url

Retrieves a SharePoint list by its web URL using the Microsoft Graph API.

URL Structure: https://{tenant}.sharepoint.com/sites/{sitename}/Lists/{listname}/AllItems.aspx Example: https://contoso.sharepoint.com/sites/bdk-testing/Lists/BDK%20Test%20List%201/AllItems.aspx Note: The list name is extracted from the path segment after "Lists/". The "/AllItems.aspx" suffix is optional and ignored if present.

Input Concepts

The web URL of the SharePoint list to retrieve.

(no default)

Output Concepts

A SharePoint list object.

sharepoint list

Retrieve a list by its URL

Get a list by URL and retrieve its items

## hashtagto retrieve a slist as a (table)

Retrieve a sharepoint list as a table.

Input Concepts

The reference to the sharepoint list.

sharepoint list

(no default)

include empty columns

Whether to include empty columns in the table.

Output Concepts

The list as a table.

## hashtagto retrieve some (column definitions) from a slist

Retrieves the column definitions of a given SharePoint list using the Microsoft Graph API.

Input Concepts

The list from which the schema will be retrieved.

sharepoint list

(no default)

Output Concepts

column definitions

A list of column definitions in the specified list.

sharepoint list column

## hashtagto retrieve some (site's lists)

Retrieves all lists within a given SharePoint site using the Microsoft Graph API.

Input Concepts

A SharePointSite object representing the site from which to retrieve document libraries.

sharepoint site

(no default)

The maximum number of lists to retrieve.

(no default)

Output Concepts

site's lists

A list of SharePoint lists within the specified site.

sharepoint list

## hashtagto retrieve some (site's subsites)

Retrieves all subsites within a given SharePoint site using the Microsoft Graph API.

Input Concepts

A SharePointSite object representing the site from which to retrieve subsites.

sharepoint site

(no default)

Output Concepts

site's subsites

A list of SharePoint subsites within the specified site.

sharepoint site

Retrieve subsites from a SharePoint site.

## hashtagto upload a file to a folder and get the file reference

Uploads a file to a given SharePoint document library using the Microsoft Graph API.

Input Concepts

The document library folder where the file will be uploaded.

sharepoint folder reference

(no default)

The content of the file to be uploaded as bytes.

(no default)

The name of the file to be uploaded.

(no default)

conflict behavior

The behavior when a conflict occurs. Possible values are 'fail', 'replace', 'rename'.

Output Concepts

file reference

An item representing the uploaded file.

sharepoint file reference

Upload a file named "My File.txt" to the folder "My Folder" the file name is "My File.txt"

Last updated10 days ago

Was this helpful?
