---
title: Keywords | Kognitos Documentation
url: https://docs.kognitos.com/writing-automations/automation-basics/keywords
description: Learn about the basic keywords in Kognitos, their usage, and examples.
---

# Keywords | Kognitos Documentation

### hashtag1.theKeyword

Introduces a new object, concept, or data element.

In this example, we are introducing afileto Kognitos.

### hashtag2.getKeyword

Used to retrieve objects or to obtain values from a document.

In these examples, we are first retrieving a document, and then retrieving theidanddatevalues from the document.

### hashtag3.findKeyword

Used to search for and obtain details from a document.

Here, we are searching for a document'sdateandinvoice number.

### hashtagThe difference betweengetandfind

Bothgetandfindcan be used to obtain information from a document:

The difference between the two is how they handle exceptions when a specified item is not found in the document:

- Thegetkeyword raises aQuestionand pauses execution.

Thegetkeyword raises aQuestionand pauses execution.

- Thefindkeyword returnsNot Foundand continues execution.

Thefindkeyword returnsNot Foundand continues execution.

### hashtag4.useKeyword

Use theusekeyword to reassign a data element, whichcopies the referenceto the original data value:

#### hashtagWarning: Overwriting Data

Updating a referenced data element can overwrite previous data — see Example 2 for more details.

#### hashtagExamples

- In this example, theregistration dateis reassigned the value11-05-2024.

In this example, theregistration dateis reassigned the value11-05-2024.

- In this example,the order nameis assigned a copy of the reference tothe last name, meaning it will point to the same value.

In this example,the order nameis assigned a copy of the reference tothe last name, meaning it will point to the same value.

If the last name changes, the order name will also change, because it references the same value. When the last name changes toSmith-Brown(line #3), the order name also changes (line #4):

### hashtag5.sayKeyword

Outputs the value of a data element or text.

### hashtag6.stopKeyword

Halts a run or process from progressing further.

In this example,say "Goodbye!"will not run.

### hashtag7.imagineKeyword

Theimaginekeyword is used to declare a data element as a placeholder.

### hashtag8.setKeyword

Assigns a specific value to a data element.

In the example above,the nameis assigned the valueJohn Smith.

### hashtag9.removeKeyword

Used to delete specified elements, such as characters, words, or items, from a variable or dataset.

### hashtag10.convertKeyword

Transforms data from one format to another.

### hashtag11.addKeyword

Theaddkeyword is used to combine, extend, or append data to an existing set or structure. This includes both mathematical addition and data aggregation in various formats.

Arithmetic Addition

Used to add two numerical values to produce a single sum.

Date and Time Addition

Used to add a specified time duration to a given date.

Data Aggregation

Used to expand datasets by adding new items, rows, or entries.

### hashtag12.containsKeyword

Used to check if a string, list, or dataset includes a specific value.

Example 1: Strings

In this example,containsis used to check if the surnameSmithis present in the full nameJohn Smith.

Example 2: Sets

In this example,containsis used to check iforangesis present in the set of values.

Example 3: Tables

Thecontainskeyword can be used with tables to retrieve rows whose columns include a specific value.

Consider the following table that lists various zoo animals, their ages, and their favorite foods.

Thecontainskeyword is used to retrieve the rows where theFavorite Foodcolumn includes the valueFruits.

### hashtag13.askKeyword

Theaskkeyword is used to ask a question to the user. The question will be raised as acustom exception. Additionally, you can specify answers as a set of choices.

#### hashtagExamples

### hashtag14.the aboveKeyphrase

When a data element's value is set tothe above, Kognitos makes acopy of the valuefrom the previous lines in the automation:

#### hashtagExamples

- In this example,the backup emailis assigned the value[email protected].

In this example,the backup emailis assigned the value[email protected].

- Here,the invoice totalis assigned the value150.

Here,the invoice totalis assigned the value150.

- In this example,the fileis assigned a copy of the above file in the automation.

In this example,the fileis assigned a copy of the above file in the automation.

Last updated3 months ago

Was this helpful?
