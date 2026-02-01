---
title: Common Exceptions | Kognitos Documentation
url: https://docs.kognitos.com/exception-handling/common-exceptions
description: Explore the most common exceptions in Kognitos and discover best practices for handling them effectively.
---

# Common Exceptions | Kognitos Documentation

### hashtag1. Could not get a file as a scanned document

This exception occurs when the system fails to access a file due to formatting, permissions, or network errors.

Retry the failed automation step. This may be helpful if the exception was potentially caused by a network error or a timeout.

2. Upload files

If the original file is corrupted or in an unsupported format, use this method to reupload it.

3. Skip this step

Bypass this step in the automation.

Note:Skipping a step can lead to another exception if the step resolves data that is referenced later in the automation.

Example: An exception occurs with the message "Could not get a file as a scanned document". The user chooses theSkip this stepoption. Later, the automation attempts to reference the document, resulting in a new exception: "Please provide scanned document.

### hashtag2. Could not (something)

This exception occurs when the system is unable to complete a specific action. The exception message starts with"Could not"and describes the action that could not be completed. For example:

- Could not ask koncierge

Could not ask koncierge

- Could not dump a file

Could not dump a file

- Could not extract a table

Could not extract a table

- Could not convert a datetime to a text

Could not convert a datetime to a text

Retry the failed automation step. This may be helpful if the exception was potentially caused by a network error or a timeout.

2. Compute an answer

This method allows you to modify the automation to avoid the exception. Use theMini-Playgroundto test changes safely before applying them.

3. Skip this step

Bypass this step in the automation.

Note:Skipping a step can lead to another exception if the step resolves data that is referenced later in the automation.

Example: An exception occurs with the message "Could not get a file as a scanned document". The user chooses theSkip this stepoption. Later, the automation attempts to reference the document, resulting in a new exception: "Please provide scanned document.

### hashtag3. Please provide (something)

This exception occurs when the system cannot find a match for a specified field. The exception message starts with"Please provide"and describes the required data.

Example: "Please provide scanned document's arrival time"

If an automation includes the lineget the scanned document's arrival time, the system will attempt to extract the value forarrival time. An exception will be raised if the document contains a different field instead, such asestimated time of arrival. In this case, the system needs guidance to use that field in place ofarrival time.

For this exception type, it may be helpful to review and apply thelearning suggestions.

1. Select from Document

Manually choose the desired field from the document.

2. Write in Answer

Enter a value manually into the text box for the desired field.

Retry the failed automation step. This may be helpful if the exception was potentially caused by a network error or a timeout.

4. Compute an answer

This method allows you to modify the automation to avoid the exception. Use theMini-Playgroundto test changes safely before applying them.

5. No value

Indicate that no value is needed at this time. This option is useful when a value is unavailable or not applicable. A dash ("-") will replace the value as a placeholder.

6. Skip this step

Bypass the field extraction step.

Note:Skipping a step can lead to another exception if the step resolves data that is referenced later in the automation.

Example: An exception occurs with the message "Please provide the scanned document's arrival time". The user chooses theSkip this stepoption. Later, the automation attempts to reference the "arrival time" again, resulting in a new exception: "Please provide arrival," as the value was not established.

### hashtag4. The key does not exist. How would you like to proceed?

This exception occurs when attempting to access a key missing in the current context or data structure.

1. Pick suggested value

Choose eitherCreate new record with empty valueorSkip(recommended).

### hashtag5. I don't know how to (do something)

This exception occurs when the system doesn’t know how to proceed. For example:

- I don't know how to convert 'ADFB00' into a number

I don't know how to convert 'ADFB00' into a number

- I don't know how to process this billing code

I don't know how to process this billing code

- I don't know how to translate this to a string

I don't know how to translate this to a string

- I don't know how to transform a contact

I don't know how to transform a contact

It usually occurs due to one of the following issues:

- The agent doesn’t have the skills needed to perform the task(a missing Book).

The agent doesn’t have the skills needed to perform the task(a missing Book).

- The automation syntax is incorrect.

The automation syntax is incorrect.

- The data is in the wrong format or type.

The data is in the wrong format or type.

1. Check Your Agent for Missing Books

If the procedure belongs to a Book, make sure the Book is added to your agent with the correct credentials.

2. Compute an answer

This method allows you to modify the automation to resolve the exception. Use theMini-Playgroundto test changes safely before applying them. This is useful when the automation syntax is incorrect or when data is passed incorrectly.

### hashtag6. Which procedure should I use?

This exception occurs when there are multiple procedures with a similar syntax and the agent needs clarification on which one to use.

1. Pick suggested value

Choose the procedure that best matches your use case.

If the procedure is part of a Book, the dropdown choices will be presented in this format:

For example:

### hashtag7. The automation crashed in a previous run. Click 'Yes' if it's safe to continue

This exception occurs when an automation previously crashed during execution, and the system needs confirmation that it’s safe to resume.

1. Pick suggested value

SelectYesto confirm it’s safe to rerun the automation.

### hashtag8. Run had crashed. Do you want to restart?

This exception occurs when a previous run has crashed, and the system needs confirmation to restart the automation.

1. Pick suggested value

SelectYesto confirm it’s safe to rerun the automation.

Last updated3 months ago

Was this helpful?
