---
title: Sending Emails | Kognitos Documentation
url: https://docs.kognitos.com/writing-automations/sending-emails
description: Learn how to send emails from Kognitos.
---

# Sending Emails | Kognitos Documentation

## hashtagOverview

Kognitos simplifies email automation. With just a few lines of natural language syntax, you can send emails directly within your automated workflows — no configuration or server management is required.

## hashtagBehavior

By default, Kognitos sends emails using the senderKognitos Automation. The sender address follows the format<id>@app.kognitos.com, where theidcorresponds to the ID of your Playground or Process run.

The ID is visible in the URL:

Playgrounds

Alternatively, you can add theMicrosoft Outlook Book(BDK)to your agent to connect to your Outlook account andsend emailsfrom your own domain.

## hashtagSyntax

Below is a line-by-line overview of the automation syntax. Expand each line to learn more.

What does it do?

Instructs the system to send an email from Kognitos.

Where does it go?

This phrase should be written on anew line.

Is it required?

✅ Yes — This phrase isrequired.

Does it require data?

✅ Yes —ifspecified in the syntax:

- Replace{message}with aTextvalue or reference.

Replace{message}with aTextvalue or reference.

- Replace{recipient}with aTextvalue or reference.

Replace{recipient}with aTextvalue or reference.

SeeExample 1for more details.

What does it do?

Specifies the email subject line.

Where does it go?

Indented beneath one of the following:

- send an email where

send an email where

- send an email to {recipient} where

send an email to {recipient} where

- send {message} to {recipient} where

send {message} to {recipient} where

Is it required?

❌ No — This phrase isoptionalin the syntax.

If no subject is specified, the default subject line is “Message for <recipient>”.

Does it require data?

✅ Yes — Replaceswith an email subject line.

What does it do?

Specifies the email message.

Where does it go?

Indented beneath one of the following:

- send an email where

send an email where

- send an email to {recipient} where

send an email to {recipient} where

Is it required?

❌ No — This phrase isoptionalin the syntax.

Does it require data?

✅ Yes — Replacemwith an email message.

What does it do?

Specifies the email attachments.

Where does it go?

Indented beneath one of the following:

- send an email where

send an email where

- send an email to {recipient} where

send an email to {recipient} where

- send {message} to {recipient} where

send {message} to {recipient} where

Is it required?

❌ No — This phrase isoptionalin the syntax.

Does it require data?

✅ Yes — Replacexwith one or more references to data objects. Useisto specify a singular attachment or useandto specify multiple attachments.

What does it do?

Specifies the email recipient to whom the message will be delivered.

Where does it go?

Indented beneathsend an email where.

Is it required?

❌ No — This phrase isoptionalin the syntax.

Does it require data?

✅ Yes — Replacexwith an email recipient. Useisto specify a singular recipient or useandto specify multiple recipients.

What does it do?

Specifies the recipients who will receive a carbon copy (CC) of the email.

Where does it go?

Indented beneath one of the following:

- send an email where

send an email where

- send an email to {recipient} where

send an email to {recipient} where

- send {message} to {recipient} where

send {message} to {recipient} where

Is it required?

❌ No — This phrase isoptionalin the syntax.

Does it require data?

✅ Yes — Replacexwith one or more email recipients.

What does it do?

Specifies the recipients who will receive a blind carbon copy (BCC) of the email.

Where does it go?

Indented beneath one of the following:

- send an email where

send an email where

- send an email to {recipient} where

send an email to {recipient} where

- send {message} to {recipient} where

send {message} to {recipient} where

Is it required?

❌ No — This phrase isoptionalin the syntax.

Does it require data?

✅ Yes — Replacexwith one or more email recipients.

## hashtagExamples

### hashtag1. Basic Syntax

The following syntax formats are all supported equivalents and produce the same results.

Syntax:send an email

Syntax:send an email to {recipient}

Syntax:send {message} to {recipient}

We're happy to have you here! Let's automate!

### hashtag2. Sending Emails with Attachments

#### hashtagSingle Attachments

Attached below is the invoice summary for July 2025.

📎Attachments: 1 file

Here is your table

📎Attachments: 1 file

#### hashtagMultiple Attachments

Here are your onboarding materials!

📎Attachments: 3 files

### hashtag3. Sending Multiple Messages

When multiple messages are specified, Kognitos sends a single email containing all of them:

instructions:

- Log into Kognitos

Log into Kognitos

- Build your automation in the Playground

Build your automation in the Playground

### hashtag4. Specifying CC and BBC on Emails

cc:[email protected],[email protected]&#xNAN;bcc:[email protected]

Last updated3 months ago

Was this helpful?
