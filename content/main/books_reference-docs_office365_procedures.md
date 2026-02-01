---
title: Procedures | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/office365/procedures
description: Automation procedures in the Microsoft Office 365 book.
---

# Procedures | Books | Kognitos Documentation

The following documentation is forMicrosoft Office 365 v2.2.2(BDK).

Ensure that you have installed or connected theMicrosoft Office 365book and created a new playground before using these automation procedures.

## hashtagto get a (group's members) fromoffice365

Retrieves members of an Office 365 group accessible via the Microsoft Graph API.

It requires the following permissions on the application: Directory.Read.All, Group.Read.All, Group.ReadWrite.All, GroupMember.ReadWrite.All

Input Concepts

The Office 365 group whose members are to be retrieved.

office group

(no default)

Output Concepts

group's members

A list of Office 365 users who are members of the specified group.

office user

Retrieve all members of the specified group

## hashtagto get some (groups) fromoffice365

Get Office 365 groups accessible via the Microsoft Graph API.

It requires the following permissions on the application: Group.ReadWrite.All, Directory.Read.All, Directory.ReadWrite.All, Group.Read.All

Output Concepts

A list of Office 365 groups.

office group

Retrieve all groups

Retrieve a group whose email matches the specified email.

## hashtagto get some (users) fromoffice365

Get Office 365 users accessible via the Microsoft Graph API.

It requires the following permissions on the application: User.Read.All, User.ReadWrite.All, Directory.Read.All, Directory.ReadWrite.All

Output Concepts

A list of Office 365 users.

office user

Retrieve all users

Retrieve a user whose email matches the specified email address

Last updated11 days ago

Was this helpful?
