---
title: Trigger a Process by Email | Kognitos Documentation
url: https://docs.kognitos.com/processes/runs/trigger-a-process-by-email
description: Learn how to trigger an automation process run by email.
---

# Trigger a Process by Email | Kognitos Documentation

You don't have to trigger every automation run manually. Kognitos lets you trigger automations bysending an email— a powerful way to automate tasks like onboarding or invoice processing.

### hashtagHow Email Triggers Work

Aunique email addressis generated for every Kognitos process. When someonesends an emailto this address, it automatically starts a new process run and passes the email contents to the automation, including:

- Subject line

Subject line

- Sender address

Sender address

- Body (plain text or HTML)

Body (plain text or HTML)

- Attachments (files, spreadsheets, images, etc.)

Attachments (files, spreadsheets, images, etc.)

Kognitos doesnotmonitor your inbox for new emails. Email triggers work when emails are senttothe uniquely-generated email address for a process. You must manually configure email triggers for a process using the steps below.

### hashtagHow to Configure Email Triggers for a Process

Navigate to Processes

Navigate to theProcessestab via the left sidebar.

Select a Process

Click on the Process you want to set up email triggers for.

Open Email Trigger Settings

Click the menu⋮button on the right, then selectConfigure Email Trigger.

Configure Permissions

Choose who can send emails to trigger this Process:

- Collaborators: Only members of the agent can send emails to trigger this process. This is the default for new processes.Note: For processes created before July 3, 2025, the default setting is "Anyone".

Collaborators: Only members of the agent can send emails to trigger this process. This is the default for new processes.Note: For processes created before July 3, 2025, the default setting is "Anyone".

- Restricted: Only users listed under "People with permission to trigger" can send emails to trigger the process.

Restricted: Only users listed under "People with permission to trigger" can send emails to trigger the process.

- Anyone: Anyone can send emails to trigger this process, including non-Kognitos members.

Anyone: Anyone can send emails to trigger this process, including non-Kognitos members.

People with permission to triggerlets you specify additional users who can send emails to trigger the process, regardless of the general permission setting.

Copy the Email Address

Copy theEmail Triggeraddress. This is the email address that people will send emails to in order to start the process.

Save Your Changes

ClickDoneto save your configuration changes.

### hashtagHow to Trigger a Process Run

Once you've configured email triggers for your process, anyone with the proper permissions can start a process run by sending an email. Here's how:

- Compose a new emailin your email client (Gmail, Outlook, Apple Mail, etc.)

Compose a new emailin your email client (Gmail, Outlook, Apple Mail, etc.)

- Set the recipientto the unique email trigger address you copied during configuration.

Set the recipientto the unique email trigger address you copied during configuration.

- Write your emailwith any relevant information: subject line, email body, and attachments.

Write your emailwith any relevant information: subject line, email body, and attachments.

- Send the email— this immediately triggers a process run in Kognitos.

Send the email— this immediately triggers a process run in Kognitos.

As soon as your email is delivered, Kognitos automatically starts a run of that process. Your automation can access all parts of the email (subject, body, attachments, sender info).

### hashtagTroubleshooting

If your process isn't starting when emails are sent:

- Ensure the sender has adequatepermissionsto send emails that trigger the process.

Ensure the sender has adequatepermissionsto send emails that trigger the process.

- Double-check the triggeremail address— did the email go to the correct address?

Double-check the triggeremail address— did the email go to the correct address?

- Check if the emaildeliveredsuccessfully. If the email fails to deliver, the process won't trigger.

Check if the emaildeliveredsuccessfully. If the email fails to deliver, the process won't trigger.

- If you're using an emailforwarding rule, verify that it's active and correctly configured.

If you're using an emailforwarding rule, verify that it's active and correctly configured.

- Confirm the automation is apublished process. Email triggers donotwork with Playground automations.

Confirm the automation is apublished process. Email triggers donotwork with Playground automations.

### hashtagBest Practices

#### hashtagManaging Trigger Permissions

Use the most restrictive permission setting that meets your needs:

- Collaborators: Best for internal-only workflows.

Collaborators: Best for internal-only workflows.

- Restricted: Ideal when only a specific set of users should be able to trigger the process.

Restricted: Ideal when only a specific set of users should be able to trigger the process.

- Anyone: Use with caution & ensure the automation includes validation steps to prevent misuse.

Anyone: Use with caution & ensure the automation includes validation steps to prevent misuse.

#### hashtagValidate Incoming Emails

Add logic in your automation to validate the email content, such as checking for specific subject lines, senders, or attachments. For example, to access the attachments of an email that triggers a process, we would write:

This statement grabs each attachment from the email in order to take further action. You can also use the following phrases to get details about the email to use in your automation:

- get the text

get the text

- get the sender

get the sender

- get the recipients

get the recipients

- get the date

get the date

- get the subject

get the subject

- get the hyperlinks

get the hyperlinks

- get the attachments

get the attachments

- get the body as text

get the body as text

- get the body as html

get the body as html

Last updated4 months ago

Was this helpful?
