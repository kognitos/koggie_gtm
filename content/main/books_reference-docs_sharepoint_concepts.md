---
title: Concepts | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/sharepoint/concepts
description: Concepts used in Microsoft SharePoint book.
---

# Concepts | Books | Kognitos Documentation

The following documentation is forMicrosoft SharePoint v2.2.2(BDK).

### hashtagSharepoint list

A SharePoint list is a structured collection of data within a SharePoint site. It provides a way to organize and manage information in a tabular format, with columns representing different data fields and rows containing specific data entries.Lists are commonly used for tasks like tracking project progress, managing contacts, or storing custom data.

The columns of the list.

list of text

created_date_time

The date and time the list was created.

display_name

The display name of the list.

The unique identifier for the list.

The name of the list.

The URL of the list.

The id of the site this list belongs to.

description

The description of the list.

optional[text]

### hashtagSharepoint list item

A SharePoint list item represents an individual entry within a SharePoint list. It contains specific data values corresponding to the columns defined in the list. List items are used to store and manage structured data within a SharePoint list, enabling efficient organization and retrieval of information.

The unique identifier for the list item.

The id of the list this item belongs to.

The id of the site this item belongs to.

The fields of the list item.

The URL of the list item.

### hashtagSharepoint file reference

A Sharepoint File Reference is a reference to a file in a SharePoint document library.

The unique identifier for the document library.

optional[text]

The name of the document library.

optional[text]

URL that either displays the resource in the browser (for Office file formats), or is a direct link to the file (for other formats).

optional[text]

parent_reference

Parent information, if the item has a parent.

optional[json]

Boolean flag indicating whenever this item is a folder or not.

optional[boolean]

The name of the file. Same as name.

optional[text]

### hashtagSharepoint folder reference

A Sharepoint Folder Reference is a reference to a folder in a SharePoint document library.

The unique identifier for the document library.

optional[text]

The name of the document library.

optional[text]

URL that either displays the resource in the browser (for Office file formats), or is a direct link to the file (for other formats).

optional[text]

parent_reference

Parent information, if the item has a parent.

optional[json]

Boolean flag indicating whenever this item is a folder or not.

optional[boolean]

folder_name

The name of the folder. Same as name.

optional[text]

### hashtagSharepoint site

A SharePoint site is a versatile web-based platform within Microsoft SharePoint designed for team collaboration,document management, and content sharing. It provides a centralized space where users can store and manage documents with version control, organize information in lists, create and publish web pages, and control permissions for different users.

The unique identifier for the site. Read-only.

The name of the site. Read-write.

optional[text]

display_name

The full title for the site. Read-only.

optional[text]

URL that either displays the resource in the browser (for Office file formats), or is a direct link to the file (for other formats). Read-only.

optional[text]

is_personal_site

Identifies whether the site is personal or not. Read-only.

optional[boolean]

description

Provides a user-visible description of the site. Optional.

optional[text]

### hashtagSharepoint document library

A SharePoint Document Library is a specialized storage location within a SharePoint site designed for storing, organizing,and managing documents. It supports advanced document management features such as version control, metadata tagging, and workflow automation, making it ideal for team collaboration and enterprise content management.

The unique identifier for the document library. Read-only.

Describes the type of drive represented by this resource. OneDrive personal drives will return personal. OneDrive for Business will return business. SharePoint document libraries will return documentLibrary. Read-only.

optional[text]

The name of the document library. Read-write.

optional[text]

URL that either displays the resource in the browser (for Office file formats), or is a direct link to the file (for other formats). Read-only.

optional[text]

description

Provides a user-visible description of the document library. Optional.

optional[text]

### hashtagSharepoint list column

A SharePoint list column definition represents the configuration and properties of a column within a SharePoint list.

The unique identifier for the column.

The type of the column.

The id of the list this column belongs to.

The id of the site this column belongs to.

general_definition

The general definition of the column.

type_specific_definition

The type specific definition of the column.

optional[json]

#### hashtagConcept attribute specifications

parent_reference (sharepoint file reference)

optional[text]

optional[text]

parent_reference (sharepoint folder reference)

optional[text]

optional[text]

Last updated10 days ago

Was this helpful?
