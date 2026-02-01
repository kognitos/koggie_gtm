---
title: Fill in a Template File | Files & Documents | Kognitos Documentation
url: https://docs.kognitos.com/files/templates/fill-in-a-template-file
description: Fills in a template with provided placeholder values.
---

# Fill in a Template File | Files & Documents | Kognitos Documentation

#### hashtagOverview

This procedure fills in a template with provided values. Currently, only.txtand.docxfile types are supported for use as template files. This procedure is helpful in automation workflows where documents need to be dynamically generated, such as invoices, contracts, letters, certificates, or reports.

#### hashtagUse Cases

Customer Invoices

Automatically create invoices from billing data

{date},{customer_name},{total_amount}

Employment Contracts

Generate contracts for new hires based on HR forms

{employee_name},{start_date},{role}

Appointment Reminders

Send personalized reminders to patients or clients

{patient_name},{appointment_time}

Event Certificates

Create custom certificates for attendees

{participant_name},{event_name}

Purchase Confirmations

Generate confirmation emails or documents for online purchases

{order_id},{product_name},{price}

Service Agreements

Populate service agreements with client and project info

{client_name},{service_description}

#### hashtagInput Concepts

The.txtor.docxfile to be filled in.

placeholder values

The text that will fill in the placeholders in the template. These must be enclosed in quotes. For example:the name is "Jane Doe"

Text / String

template marker

The characters used to mark the placeholders in the template. Must be exactly two characters.

#### hashtagOutput Concepts

The file with the specified placeholders replaced by the provided values.

#### hashtagAutomation Example

Consider the following.txtfile, containing placeholders enclosed in< >symbols:

Note:Line 1 will raise a question, prompting you to provide or uploadthe templatefile itself.

Last updated6 months ago

Was this helpful?
