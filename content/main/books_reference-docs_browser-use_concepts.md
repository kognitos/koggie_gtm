---
title: Concepts | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/browser-use/concepts
description: Concepts used in Browser Use book.
---

# Concepts | Books | Kognitos Documentation

The following documentation is forBrowser Use v1.14.0(BDK).

### hashtagBrowser instance

Represents attributes of an instance with browser support.

browser_name

The name of the browser instance (pod name or AWS session ID).

The Virtual Network Computing (VNC) URL to access the browser.

browser_type

The type of browser backend ("k8s" or "aws").

optional[text]

### hashtagBrowser task

Represents a browser automation task.

instructions

A natural language description of the task for the browser agent to perform (e.g., "Log into my account on example.com and check for new messages").

browser_task_id

Identifier for the browser task.

The desired structure or format of the results. It is recommended to use key-value pairs for clarity (e.g., {"key": "value"}). If specified, the agent will format the result accordingly.

optional[text]

Identifier for the Kognitos worker executing the task.

Identifier for the specific line/step in the Kognitos automation.

browser_task_version

Version of the browser task.

task_context

Optional additional context or data to assist in completing the task. Contains the resolved reference facts for the task.

optional[json]

credential_names

The names of the authentication credentials needed for the task.

optional[list of text]

The files to be uploaded to the browser.

optional[list of text]

Last updated5 days ago

Was this helpful?
