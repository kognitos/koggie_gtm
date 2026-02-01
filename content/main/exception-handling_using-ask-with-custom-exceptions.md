---
title: Using Ask with Custom Exceptions | Kognitos Documentation
url: https://docs.kognitos.com/exception-handling/using-ask-with-custom-exceptions
description: Learn how to use the ask keyword to create custom exceptions.
---

# Using Ask with Custom Exceptions | Kognitos Documentation

## hashtagOverview

Theaskkeyword allows automations to prompt the user with acustom question. These prompts are raised as customexceptionsduring execution.

## hashtagSyntax

Write the keywordaskfollowed by your question in quotation marks. When raising an exception, Kognitos will use this text for the question:

Optionally, you can provide a set of answerchoices. Kognitos will display these options in a dropdown menu where the user can select a value for guidance.

## hashtagExamples

### hashtagWithout Choices

### hashtagSpecifying Choices

#### hashtagExample 1

In this example, the automation will raise an exception askingWhat is the notification method?and the user will be presented a list of dropdown choices includingEmail,SMS, andPush Notification.

#### hashtagExample 2

Here, the automation will raise an exception askingWhat is the preferred language?The user will be presented with a list of dropdown choices that containEnglish,Spanish,Hindi, andFrench.

## hashtagProviding Guidance

When Kognitos raises a custom exception with theaskkeyword, you’ll need to guide the automation by choosing how to respond. The resolution methods depend on whether the exception includeschoices.

### hashtagWhen Choices Are Provided

In this case, the recommended resolution method is toPick a Suggested Value.This will allow the user to select one of the predefined options from the dropdown list. This is the safest and most reliable way to resolve the exception.

### hashtagWhen Choices AreNotProvided

#### hashtag1. Write in an Answer

Type a value directly into the text box for the requested field.

#### hashtag2. No Value

Indicate that no value should be used for now. A dash (-) will be inserted as a placeholder. This is best used when the information is unavailable or not relevant.

#### hashtag3. Skip this Step

Bypass the current step entirely.

Be cautious: skipping may cause additional exceptions later if other steps depend on the missing data.

#### hashtag4. Compute an Answer

Modify the automation syntax to avoid this exception. Use theMini-Playgroundto test changes safely before applying them.

Last updated4 months ago

Was this helpful?
