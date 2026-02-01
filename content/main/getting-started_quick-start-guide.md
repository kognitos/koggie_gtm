---
title: Quick Start Guide | Kognitos Documentation
url: https://docs.kognitos.com/getting-started/quick-start-guide
description: Learn how to start your automation journey in Kognitos.
---

# Quick Start Guide | Kognitos Documentation

## hashtagOverview

Kognitos empowers you to write automations in plain English, turning natural-language instructions into executable workflows. This guide will walk you through core concepts, the development lifecycle, and the basics of writing an automation.

Make sure you're allset upbefore jumping in!

## hashtagCore Concepts

Let’s kick things off with two important ideas:agentsandautomations.

### hashtagAgents

Anagentis a dedicated execution environment. Each agent comes with its own skills and settings, enabling it to operate independently. Agents are created to handle specific business tasks and can contain one or moreautomationsto complete them.

### hashtagAutomations

Anautomationis a set of instructions that tells Kognitos what to do — process data, work with documents, send emails, call other processes, and more. These are workflows that can take the form of an early idea(playground)or a complete process.

## hashtagAutomation Lifecycle

Automations come in different forms as they evolve from early ideas into production-ready processes, following thislifecycle:

Every automation starts as aplayground. These are initial automation workflows used to explore, create, and test new ideas.

Draft Process

Once a playground automation is working as intended, solidify it as adraft process. Drafts let you refine and test the workflow in a structured way before finalizing it for production.

Published Process

When your automation is finalized and production-ready, promote it to apublished process. These workflows are reliable, secure, and fully ready to execute business tasks.

## hashtagStart in the Playground

Start inthe Playground— your initial workspace for writing and testing automations.

### hashtagCreate a New Playground

Create a new Playground by navigating toPlayground, then click on+ New Playground.

### hashtagWrite Your Automation

The input area of the editor is where you can define your automation workflow.

Looking forAuto-Write? Describe your intent in plain English and let auto-write draft the workflow for you.

## hashtagWriting Automations

Kognitos automations are written in English. They are composed of small, readable steps calledprocedures. By combining multiple procedures, you can form a complete automation workflow.

### hashtagWhat is a Procedure?

Aprocedureis a single automation task. Each procedure describes a specific action and follows a defined grammatical syntax that Kognitos understands, such asextract data,create a table, orsend an email. Procedures are the building blocks for Kognitos automations.

### hashtagBuilding a Workflow

Combine procedures to create an end-to-end automation. For example, you might extract fields from a receipt, summarize them in a table, and then email the result:

### hashtagAuto-Write (HAL)

With Kognitos’Hyperautomation Lifecycle (HAL), you can describe what you want in plain English and let the platformauto-writethe automation for you. No need to worry about syntax or structure; write naturally (e.g., “extract date and total from a receipt and email me a summary”).

HAL interprets your intent, selects the right actions, and produces a draft workflow that you can run or edit as needed, allowing you to move from idea to execution faster.

- Navigate toSettings > Preferences > Department.

Navigate toSettings > Preferences > Department.

- FindAI-Assisted Hyperautomation Lifecycle (HAL).

FindAI-Assisted Hyperautomation Lifecycle (HAL).

- Toggle the switchon.

Toggle the switchon.

Once HAL is enabled, clicking on+ New Playgroundwill open a menu, allowing you to select atemplateorstart from scratch. Then describe your task in plain English, andAuto-Writewill generate the automation for you.

### hashtagLanguage & Logic

Beyond procedures, usekeywords,comments,conditionals, and other elements to write and structure automations in Kognitos. Learn more below:

Defining Data

Learn how to define data.

Learn about the basic keywords, their usage, and examples.

Use comments to add notes or disable parts of your automation.

Check outWriting Automationsarrow-up-rightfor additional topics andAutomation Areasto discover procedures by category.

## hashtagBooks

Abookarrow-up-rightis a set of related automation procedures(actions)that can extend an agent’s capabilities. Adding a book to an agent enables the agent to learn new skills and integrate with external tools. Kognitos offers many Books that can be added to your agents, which are built around either:

- A specific domain(Document Processing, HTML)

A specific domain(Document Processing, HTML)

- An integration(Microsoft Excel, Slack, Salesforce, etc.)

An integration(Microsoft Excel, Slack, Salesforce, etc.)

We recommend adding the following Books to your agent for common automation tasks:

- Document Processing: enables data extraction, redaction of information, and more.

Document Processing: enables data extraction, redaction of information, and more.

- Email:allows you to send emails from Kognitos, extract attachments, etc.

Email:allows you to send emails from Kognitos, extract attachments, etc.

Last updated3 months ago

Was this helpful?
