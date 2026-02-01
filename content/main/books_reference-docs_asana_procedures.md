---
title: Procedures | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/asana/procedures
description: Automation procedures in the Asana book.
---

# Procedures | Books | Kognitos Documentation

The following documentation is forAsana v1.0.6(BDK).

Ensure that you have installed or connected theAsanabook and created a new playground before using these automation procedures.

## hashtagto create a (task) in a project

Create a task in a project.

Input Concepts

The project in which to create the task.

asana project

(no default)

A Task object, used for its 'name' and optionally 'html_notes' attribute.

(no default)

Output Concepts

The newly created task as returned by the API.

## hashtagto delete a task

Delete a task in Asana.

Input Concepts

The task to be deleted. Must have a valid GID.

(no default)

## hashtagto get some (project's tasks)

Get tasks from a project.

Input Concepts

The project to get tasks from

asana project

(no default)

Output Concepts

project's tasks

A list of tasks in the project

## hashtagto get some projects fromasana

Get projects from Asana.

Output Concepts

A list of projects

asana project

Last updated3 months ago

Was this helpful?
