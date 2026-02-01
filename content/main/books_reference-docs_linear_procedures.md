---
title: Procedures | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/linear/procedures
description: Automation procedures in the Linear book.
---

# Procedures | Books | Kognitos Documentation

The following documentation is forLinear v1.1.0(BDK).

Ensure that you have installed or connected theLinearbook and created a new playground before using these automation procedures.

## hashtagto create an issue

Create an issue in Linear.

Input Concepts

The title of the issue.

(no default)

description

The description of the issue.

(no default)

The team in which you want to create the issue.

linear team

(no default)

Output Concepts

the issue: The created issue.

linear team

## hashtagto get the (issues)

Fetch the issues matching the filters (if any).

Output Concepts

the list of issues

linear team

## hashtagto get the (teams)

Fetch the teams matching the filters (if any).

Output Concepts

the list of teams

linear team

## hashtagto get the (users) from a team

Get the users from a team.

Input Concepts

The linear team from which you want to get the users.

linear team

(no default)

Output Concepts

the users: The list of users in the team.

linear user

Last updated11 days ago

Was this helpful?
