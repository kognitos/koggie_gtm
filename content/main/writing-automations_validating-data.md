---
title: Validating Data | Kognitos Documentation
url: https://docs.kognitos.com/writing-automations/validating-data
description: Learn how to validate data in your automations.
---

# Validating Data | Kognitos Documentation

## hashtagOverview

Data validation ensures that a process’ data is appropriate and logical, allowing it to be trusted for decision-making. In Kognitos, you can use theensurekeyword to specify conditions for data validation. When data cannot be validated, the automation will raise a question, allowing you to review, edit, and confirm values in a single location.

## hashtagWriting Validation Logic

#### hashtagensure

Theensurekeyword is used within avalidation statementthat:

- Begins withensure

Begins withensure

- Is indented withinvalidate the following

Is indented withinvalidate the following

- Uses an operation that:Operates on a data element(singular or plural)Evaluates to true to false(boolean operation)

Uses an operation that:

- Operates on a data element(singular or plural)

Operates on a data element(singular or plural)

- Evaluates to true to false(boolean operation)

Evaluates to true to false(boolean operation)

Supported TypesTheensurekeyword currently supports verification fortextandnumericdata only.

#### hashtagvalidate the following

The phrasevalidate the followinggroups multiple validation statements together. When a validation fails, the data from all statements will be aggregated into a single view.

#### hashtagExamples

1. Validating Text Data

2. Validating Numeric Data

3. Validating Multiple Data Elements

## hashtagEvaluation

Each validation statement evaluates toCondition Met(true)orCondition Not Met(false).

The automation proceeds when all validation statements have aCondition Met. However, if any statement has aCondition Not Met, the system raises a question, requiring you to provide guidance to proceed.

### hashtagSkipped Statements

A validation statement is marked asSkippedwhen the syntax is invalid. To avoid this, ensure the operation is a valid boolean operation supported in Kognitos.

For example, the statement above is skipped because the use of "has" is not supported in a Kognitos operation. Instead, the validation statement could be written using thecontainskeyword:ensure the vegetables contains "broccoli".

## hashtagProviding Guidance

When a validation statement withinvalidate the followinghas aCondition Not Met, a question is asked toPlease review the following facts.

### hashtagReviewing Data

Data is listed for review in the same order it appears in the validation statements. For conditions that arenotmet, a message will appear below the data value in red, stating the failed validation.

### hashtagManually Editing

You can manually edit and override data values as needed.

### hashtagFinalizing Your Review

Confirm your review by checking the box labeled "I have reviewed all values and they are accurate". Then, clickSubmit.

## hashtagSpot Check Percentage

Thespot check percentagecontrols the likelihood of a question being raised when all the validation statements evaluate to true. The percentagedoes notrepresent accuracy or error rate; it controls the probability of triggering a question.

#### hashtagSyntax

#### hashtagBehavior

- Ifanyvalidation statementfails, a question is always raised.

Ifanyvalidation statementfails, a question is always raised.

- Ifallvalidation statementspass, a question is raised based on the spot check percentage.Example: If the spot check percentage is 30, then there is a 30% chance that a question is raised when all the validation statements evaluate to true.

Ifallvalidation statementspass, a question is raised based on the spot check percentage.

- Example: If the spot check percentage is 30, then there is a 30% chance that a question is raised when all the validation statements evaluate to true.

Example: If the spot check percentage is 30, then there is a 30% chance that a question is raised when all the validation statements evaluate to true.

#### hashtagExample

In this example, there is a 50% chance that a question is still raised for review, since both validation statements evaluate to true.

Last updated10 months ago

Was this helpful?
