---
title: Widgets | Kognitos Documentation
url: https://docs.kognitos.com/writing-automations/using-the-editor/widgets
description: Add dynamic and structured content to your automations using widgets.
---

# Widgets | Kognitos Documentation

## hashtagMenu

Access thewidget menuby typing/when editing a playground or process automation. A dropdown will appear, allowing you to select from the available widgets.

Some widgets are not available in all agents by default. Please reach out to our support team for access and assistance.

## hashtagAvailable Widgets

### hashtag1. Markdown

InsertMarkdowncontent into your automation, including headings, bold/italic text, lists, etc.

### hashtag2. Link

Add alinkinto your automation to embed references.

### hashtag3. Column Formula

Add acolumn formula, used to dynamically populate and transform data in a table. When using this widget, provide aDescriptionthat explains what the formula does and enter the formula expression in theValuefield.

### hashtag4. Selection Formula

A widget forfiltering databased on certain conditions. When using this widget, provide aDescriptionthat explains what the formula does and enter the formula expression in theValuefield.

### hashtag5. Process

Embed anotherprocessinto your automation. This enables you tocall other processes. Select the process to call from the process dropdown menu.

### hashtag6. Transform Table

Apply atransformationto an existing table. This is useful when preparing data before applying further logic or formulas.

### hashtag7. Browser Automation

This widget enables you to describe abrowser automation taskfor a web-based agent to execute.

SelectChoose an Existing Taskor configure a new task by providing the following details:

A short, descriptive name for the task (e.g.,Check Website for Updates).

Task Instructions

Describe what you want the browser to do in plain English (e.g.,Go to example.com, log in, and check for new messages).

Output Format(Optional)

Define how you want the results formatted. It is recommended to use key-value pairs for clarity (e.g., {"key": "value"}). If specified, the agent will format the result accordingly.

Credentials(Optional)

If your task requires access to a secure website or account, provide the necessary credentials(e.g., username and password). You can select from existing connections in your agent or add a new connection.

Check out theBrowser Usebook for additional details on browser automation and task configuration.

Last updated3 months ago

Was this helpful?
