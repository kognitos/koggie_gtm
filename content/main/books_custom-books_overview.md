---
title: Overview | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/custom-books/overview
description: An overview of the development kit used to create custom books.
---

# Overview | Books | Kognitos Documentation

In Kognitos, books can be added to an automation agent to expand functionality and integrate with external tools. Although Kognitos builds and maintains alibraryof books to address common use cases, there may be situations that require acustom book. Using our software toolkit, you can develop, deploy, and connect your own book to help with:

#### hashtag1. Integrations

Create procedures that interact with third-party APIs, databases, and external services. If your organization uses tools or services not natively integrated with Kognitos, you can build a custom book to integrate them directly into your automation workflows.

#### hashtag2. Extending Core Functionalities

Extend Kognitos’ features to support more complex scenarios beyond standard functionality. Whether you need to support advanced data manipulation or custom data validation, the toolkit provides the tools to create custom books that meet your unique requirements.

## hashtagComponents

The BDK is comprised of the following software components:

The core Python library for Book development.

A PythonCookiecutterarrow-up-righttemplate that simplifies the process of developing a new book.

A linting tool built as aPylintarrow-up-rightplugin. It analyzes code throughout development to identify potential issues and ensures books are implemented, documented, and annotated correctly.

Poetry Plugin

A Python dependency management and packaging tool that usesPoetryarrow-up-right. It manages dependencies, versioning, formatting, and documentation generation for a book.

A runtime that connects a book with the Kognitos platform. It is packaged as a Docker image that serves as the foundation for book containers.

## hashtagLifecycle

This lifecycle outlines the stages of software development for a new book and how the components interact throughout the process.

### hashtag1. Planning

The planning phase is where the book's functionality is defined. In this stage, you identify the external systems the book will integrate with and outline the workflows or automation goals. This stage clarifies objectives and requirements, setting the foundation for development.

### hashtag2. Development

The development phase is where the book’s functionality is implemented using theAPIand other tools:

- TheBook Templateprovides starter code to streamline setup.

TheBook Templateprovides starter code to streamline setup.

- TheLinterenforces coding standards and identifies potential issues.

TheLinterenforces coding standards and identifies potential issues.

- ThePoetry Pluginmanages dependencies, versioning, and documentation.

ThePoetry Pluginmanages dependencies, versioning, and documentation.

### hashtag3. Testing

The testing phase ensures that books perform as intended. TheTemplateincludes a testing framework for validating book functionality.

### hashtag4. Packaging & Deployment

In this stage, the book is packaged and prepared for deployment. The code is packaged with theRuntimeusing Docker and deployed externally.

### hashtag5. Execution

Once deployed, the book is ready to run in Kognitos, enabling you to extend your automations with custom workflows.

### hashtagExample Books

Book that integrates with the OpenWeather API.

Book that integrates with the Twilio API.

Book containing automation procedures that operate on YAML files.

Last updated1 month ago

Was this helpful?
