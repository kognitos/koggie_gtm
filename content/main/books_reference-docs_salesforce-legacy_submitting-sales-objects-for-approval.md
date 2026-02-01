---
title: Submitting Sales Objects for Approval | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/salesforce-legacy/submitting-sales-objects-for-approval
description: 
---

# Submitting Sales Objects for Approval | Books | Kognitos Documentation

## hashtagUnderstanding Approval Processes

Approval processes in Salesforce are defined workflows that specify the steps required to approve a record. These processes can be applied to various Salesforce objects, such as Opportunities, Contacts, or custom objects, depending on the organization's needs. Approval processes typically involve one or more of the following components:

- Criteria for entering the process: Defines what records are eligible for approval. For example, an opportunity might need to have a value greater than $10,000 to require approval.

Criteria for entering the process: Defines what records are eligible for approval. For example, an opportunity might need to have a value greater than $10,000 to require approval.

- Approval steps: The sequence of approval actions that need to be taken. This can involve multiple approvers at different stages.

Approval steps: The sequence of approval actions that need to be taken. This can involve multiple approvers at different stages.

- Approval actions: Actions taken when a record is approved, rejected, or recalled, such as updating fields, sending email notifications, or executing custom logic.

Approval actions: Actions taken when a record is approved, rejected, or recalled, such as updating fields, sending email notifications, or executing custom logic.

## hashtagSubmitting Sales Objects for Approval

This is the syntax for submitting a Salesforce object for approval in Kognitos:

In this example, an opportunity is submitted for approval by specifying its ID and providing a comment to give context to the approver. Kognitos translates this command into the appropriate Salesforce operation, automating the submission process.

Last updated4 months ago

Was this helpful?
