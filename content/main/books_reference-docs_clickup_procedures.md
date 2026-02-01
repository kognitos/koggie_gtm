---
title: Procedures | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/clickup/procedures
description: Automation procedures in the ClickUp book.
---

# Procedures | Books | Kognitos Documentation

The following documentation is forClickUp v1.0.0(BDK).

Ensure that you have installed or connected theClickUpbook and created a new playground before using these automation procedures.

## hashtagto create a (task) in a (list)

Creates a new task in a list

Input Concepts

The list to create the task in

clickup list

(no default)

The input for the new task

clickup create task input

(no default)

Output Concepts

The created task

clickup task

Create a task in a list

## hashtagto get a (list) from (list url)

Gets a list from its url

Input Concepts

The URL of the list

(no default)

Output Concepts

The ClickUp list concept

clickup list

Get a list from a url

## hashtagto get some (list's tasks)

Gets all tasks in a list

Input Concepts

The list to retrieve the tasks from

clickup list

(no default)

Output Concepts

list's tasks

The tasks from the list

clickup task

Get all tasks in a list

Get a task by name from a list

Get tasks in a given status from a list

## hashtagto get some (list's users)

Gets the users that have access to a list

Input Concepts

The list concept to retrieve the users from

clickup list

(no default)

Output Concepts

list's users

The users from the list

clickup user

Get all users in a list

Get a user by name from a list

## hashtagto update a (task)

Updates an existing task in ClickUp

Input Concepts

The task concept with updated fields to apply

clickup task

(no default)

Output Concepts

The updated task

clickup task

Update a task

Last updated2 months ago

Was this helpful?
