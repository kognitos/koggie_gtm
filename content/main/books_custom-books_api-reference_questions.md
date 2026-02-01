---
title: Questions | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/custom-books/api-reference/questions
description: Learn how to implement questions in a custom book.
---

# Questions | Books | Kognitos Documentation

## hashtagOverview

In your Book, you may need toask the user for information. For example, if the book needs to know when a project should begin, it can ask the user, “What is the project start date?” Or if it needs a username, it can prompt the user with, “What is the username?”

When this happens, Kognitos surfaces aquestionto pause the automation and ask the user for information. A question is an exception that signals that the automation cannot move forward without user input. The toolkit provides an easy way to add and handle questions in your Book using theask()method.

## hashtagHow It Works

Theask()function is used toask a question. Here’s how it works:

#### hashtagask() is Called

ask()is called inside a procedure to ask a question.

#### hashtagKognitos Checks for an Answer

Each timeask()is called, Kognitos checks internally whether it has already stored an answer for that specific question before.

- If the answer to the questionexists,ask()returns the answer value itself.

If the answer to the questionexists,ask()returns the answer value itself.

- If the answer to the questiondoes not exist,ask()returns aQuestion.

If the answer to the questiondoes not exist,ask()returns aQuestion.

#### hashtagQuestion is Surfaced(if the answer is not present)

When aQuestionobject is returned from a procedure, Kognitos will:

- Forward the question to the user

Forward the question to the user

- Pause the automation and wait for a response

Pause the automation and wait for a response

- Store the answer internally

Store the answer internally

- Restart the procedure from the beginning automaticallyThe second time the procedure runs,ask()will be able to return the answer instead of a Question.

Restart the procedure from the beginning automatically

- The second time the procedure runs,ask()will be able to return the answer instead of a Question.

The second time the procedure runs,ask()will be able to return the answer instead of a Question.

Note:Kognitos only surfaces a question if it doesn’t have the answer stored internally. By remembering answers, it ensures the same questions aren’t unnecessarily presented to the user.

## hashtagUsage

concept_name

The unique name of the concept being asked for.

concept_type

The return type of the answer.

(Optional)A message to show the user when the question is prompted in Kognitos.

(Optional)A list of predefined options the user can choose from.

To useask()in your Book, follow these steps:

#### hashtagImport

Start by importing theask()function andQuestiontype from the API:

#### hashtagCall ask()

Call theask()function inside a method decorated with@procedure.

Provide theconcept_name(the unique name of the concept being asked for)and theconcept_type(the return type of the answer).

(Optional)Specifying the Question Text

You can specify atextto present to the user when the question is prompted in Kognitos. If the text is not specified, questions are presented asPlease provide the <concept_name>by default. For example:

(Optional)Specifying Choices

You can also guide users to select an answer from a predefined list by passing achoicesargument. When choices are set, Kognitos displays the question with a dropdown menu for the user to select from. For example:

#### hashtagHandle the Result of ask()

Theask()function can return eitherthe answeror aQuestionobject. To handle both cases, explicitly check the return type:

- Ifask()returns a value, that means the answer alreadyexistsinternally.

Ifask()returns a value, that means the answer alreadyexistsinternally.

- Ifask()returns aQuestion, that means the answerdoes not existinternally. What you do with theQuestionis up to you — the Book can return it, hold onto it for later, or ignore it entirely. If you want Kognitos to surface the question to the user, return theQuestionobject from the procedure. For example:

Ifask()returns aQuestion, that means the answerdoes not existinternally. What you do with theQuestionis up to you — the Book can return it, hold onto it for later, or ignore it entirely. If you want Kognitos to surface the question to the user, return theQuestionobject from the procedure. For example:

#### hashtagUse the Answer

Once theask()function returns a value(and not aQuestion), you can use the answer just like any other variable in Python — in calculations, conditions, etc. For example:

#### hashtagDeclare Return Types

Always includereturn typesin your procedure definitions. If your procedure may trigger aQuestion, the return type must reflect that so the system understands which concept(s) you may be asking for. Make sure to include both theconcept name(as a stringLiteralinnounphraseform) and theconcept typein the type hint. For example:

## hashtagExamples

### hashtag1. Asking a Question with Different Return Types

This example shows how to useask()with a set of mixed-type choices: a string, a datetime, and a float. The return type allows for any of those types, and also accounts for the case where aQuestionis returned.

### hashtag2. Asking Multiple Questions

Sometimes your book may need to collect more than one piece of information. You can callask()multiple times in the same procedure. Here’s an example:

#### hashtagHow This Works

- The first call toask()checks whether the answer forcoloris present.If not, it returns a Question.If answered, it stores the value and restarts the procedure.

The first call toask()checks whether the answer forcoloris present.

- If not, it returns a Question.

If not, it returns a Question.

- If answered, it stores the value and restarts the procedure.

If answered, it stores the value and restarts the procedure.

- Now that the answer for color is present, the procedure checks for theelephant’s name.If not, it returns a Question.If answered, it stores the value and restarts the procedure.

Now that the answer for color is present, the procedure checks for theelephant’s name.

- If not, it returns a Question.

If not, it returns a Question.

- If answered, it stores the value and restarts the procedure.

If answered, it stores the value and restarts the procedure.

- Once both values are available, the final result is returned.

Once both values are available, the final result is returned.

Last updated1 month ago

Was this helpful?
