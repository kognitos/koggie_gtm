---
title: Concepts | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/launch-darkly/concepts
description: Concepts used in LaunchDarkly book.
---

# Concepts | Books | Kognitos Documentation

The following documentation is forLaunchDarkly v1.0.3(BDK).

### hashtagLaunch darkly project

A project in Launch Darkly

The unique identifier of the project.

The human-readable name of the project.

The project key used to reference it in API calls and configurations.

### hashtagLaunch darkly flag

A feature flag in a Launch Darkly project

The human-readable name of the flag.

The unique key used to reference the flag.

description

A description of what the flag does or is used for.

optional[text]

project_key

The key of the project this flag belongs to. May be None if not yet assigned.

optional[text]

### hashtagLaunch darkly environment

An environment in a Launch Darkly project

The unique identifier of the environment.

The human-readable name of the environment.

The environment key used in API calls and feature flag configuration.

project_key

The key of the project this environment belongs to.

### hashtagLaunch darkly flag status

The status of a feature flag in a certain environment

environment

The environment in which the flag status is evaluated.

The feature flag whose status is being represented.

Indicates whether the flag is currently enabled (True) or disabled (False).

Last updated3 months ago

Was this helpful?
