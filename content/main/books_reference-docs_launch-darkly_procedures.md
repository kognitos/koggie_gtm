---
title: Procedures | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/launch-darkly/procedures
description: Automation procedures in the LaunchDarkly book.
---

# Procedures | Books | Kognitos Documentation

The following documentation is forLaunchDarkly v1.0.3(BDK).

Ensure that you have installed or connected theLaunchDarklybook and created a new playground before using these automation procedures.

## hashtagto create a flag in a project

Create a new feature flag within a given project.

Input Concepts

the project in which the new flag will be created

launch darkly project

(no default)

the flag object containing the configuration for the new feature flag

launch darkly flag

(no default)

Output Concepts

the newly created feature flag

launch darkly flag

## hashtagto get some (flag's status)

Get the status of a feature flag in a specific environment.

Input Concepts

the feature flag whose status will be retrieved

launch darkly flag

(no default)

environment

the environment in which to check the flag's status

launch darkly environment

(no default)

Output Concepts

flag's status

a flag status indicating whether the flag is enabled (on) or disabled (off)

launch darkly flag status

## hashtagto get some (project's environments)

Get the environments of a project

Input Concepts

a Launch Darkly project

launch darkly project

(no default)

Output Concepts

project's environments

a list of retrieved environments

launch darkly environment

Get a single environment with name Test. It can also be filtered by environment key.

## hashtagto get some (project's flags)

Get the flags of a project

Input Concepts

a Launch Darkly project

launch darkly project

(no default)

Output Concepts

project's flags

a list of retrieved flags

launch darkly flag

Get a single flag with key new-test-flag. It can also be filtered by flag name.

## hashtagto get some (projects)

Get the projects in Launch Darkly

Output Concepts

a list of retrieved projects

launch darkly project

Get a single project with name "Kognitos - Test Project". It can also be filtered by project key.

## hashtagto toggle some flag

Toggle the state of a feature flag in a specific environment.

Input Concepts

the feature flag to be toggled

launch darkly flag

(no default)

environment

the environment in which to toggle the flag

launch darkly environment

(no default)

a boolean indicating the desired state; True to enable the flag, False to disable it

(no default)

Output Concepts

the updated status of the feature flag

launch darkly flag status

Last updated3 months ago

Was this helpful?
