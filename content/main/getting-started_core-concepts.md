---
title: Core Concepts & Definitions | Kognitos Documentation
url: https://docs.kognitos.com/getting-started/core-concepts
description: Learn about the core concepts and components of Kognitos.
---

# Core Concepts & Definitions | Kognitos Documentation

### hashtagAgent

Anagentin Kognitos is a dedicated execution environment where your automations live and run. Each agent is equipped with its own set of learned knowledge, configurations, and connections to other tools, allowing it to operate independently and securely.

### hashtagAutomation

Anautomationis a series of instructions that tells Kognitos what to do. It can refer to either a draft workflow in thePlaygroundor a fully developed and reusableProcess.

### hashtagBook

Abookarrow-up-rightis a set of related automationprocedures. Books can be added to an agent to expand automation functionality and integrate with external tools. Kognitos offers a library of standard Books for common skills and integrations, including Microsoft Excel, Salesforce, and Slack.

### hashtagBook Development Kit (BDK)

TheBook Development Kitarrow-up-rightis a software toolkit for developing custom books in Kognitos. Using the BDK, developers can write code that translates plain English procedures in Kognitos to actions that a specific third-party application can understand.

### hashtagException

Anexception(question)arises when the system needs additional clarification to proceed with an automation. Exceptions are resolved by providing user guidance in theGuidance Center.

### hashtagGuidance Center

TheGuidance Centeris where you manage allexceptionsin one place. When an automation encounters an issue or requires additional context, it raises aquestionfor your input. Here, you can view and resolve exceptions across all processes in your agent.

### hashtagHistory

Kognitos tracks major changes to an Agent, allowing users to review and restore past versions through theHistorytab. You can click on any of the options displayed in the History tab to view the Agent at that point in time.

### hashtagKognitos AI Assistant

TheKognitos AI Assistant(KAIA) is used to answer questions, find guidance, or get in touch with our support team. You can use this tool to get help anytime by accessing it in the bottom left corner of the platform.

### hashtagLearnings

Learningsare rules that guide your automation’s decision-making. When you resolve anexception, you can teach the agent how to handle similar situations in the future. These learned responses are stored as "learnings, " allowing the automation to become more intelligent and autonomous over time.

### hashtagPlayground

ThePlaygroundis a dynamic development environment where you can create, test, and refine your automation workflows. It provides a flexible space to write procedures in plain English, run them to see the immediate results, and debug any issues before creating aprocess.

### hashtagProcedure

Aprocedureis a single automation task defined in plain English. Each procedure describes a specific action and follows a defined grammatical syntax that Kognitos understands, such asopen a file,extract data, orsend an email. These procedures are the building blocks for Kognitos automations.

### hashtagProcess

Aprocessis an automation workflow built using one or moreprocedures. It represents a complete business task, such as processing an invoice from receipt to payment.

Processes can be in aDraftstate during development and testing, or in aPublishedstate that is production-ready. Each version of a process is tracked, allowing for clear change management.

Arunis a single execution of an automation. All automations, whether a Playground, a Draft Process, or a Published Process, can be run manually. However, only published Processes support automatic triggers like email, API, or scheduled runs. Every time a process is triggered, either manually or by a scheduled event, it creates a new run.

### hashtagSubprocess

Asubprocessis a process that is called by another process. Learn morehere.

Last updated4 months ago

Was this helpful?
