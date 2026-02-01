---
title: Exception Routing | Kognitos Documentation
url: https://docs.kognitos.com/exception-handling/exception-routing
description: Learn how to configure assignment and notification rules for exceptions in Kognitos.
---

# Exception Routing | Kognitos Documentation

## hashtagOverview

Exception routingis a process configuration setting. It allows agent admins to configure assignment and notification rules for exceptions. When a process encounters anexception(a question requiring guidance),these rules ensure that the right person is automatically assigned to handle it and that the appropriate team members are notified.

## hashtagConfiguration

Agent adminscan configure exception routing for a given process, including the following settings:

Exception Assignment

Specifies who is automatically assigned to handle exceptions.

Email Notifications

Specifies who receives email alerts when exceptions need guidance.

### hashtagHow to Configure Exception Routing

Follow these steps to configure exception routing for a process:

Select a Process

Navigate toProcessesand click on the process to be configured.

Exception Routing

Click on the three-dot menu⋮in the top-right and selectException Routing.

The process must be indraftmode. If the process is published, clickEditfirst.

Exception Configurations

Configure the following details, which may be updated at any time:

Exception Assignee(Required)

The user(s) to assign to handle exceptions for this process. At least one user is required.

Notify Members(Optional)

The user(s) to notify via email when exceptions need guidance. This is optional and may be left blank.

Onlycollaboratorsof the agent can be selected as assignees.

To add additional users, go toSettings→Invite Users→Add Collaborator.

Save and Publish

PressSaveto apply your configuration changes. Then,publishyour process to make the changes live.

## hashtagExamples

### hashtag1. Basic Assignment

In this example, exceptions go to the process creator with no notification recipients.

Exception Assignee

[email protected](Process Creator)

Notification Recipients

### hashtag2. Specialized Handler with Team Notifications

Here, exceptions are assigned to the process creator while the team lead and backup get email notifications.

Exception Assignee

[email protected](Process Creator)

Notification Recipients

[email protected],[email protected]

### hashtag3. On-Call Assignment

Here, the current on-call person is assigned exceptions while the manager stays informed through email notifications.

Exception Assignee

[email protected](current on-call person)

Notification Recipients

[email protected]

Last updated3 months ago

Was this helpful?
