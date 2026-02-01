---
title: Defining Data | Kognitos Documentation
url: https://docs.kognitos.com/writing-automations/automation-basics/defining-data
description: Learn how to define data in Kognitos.
---

# Defining Data | Kognitos Documentation

## hashtagOverview

In Kognitos,defining datarefers to naming a specific piece of information, allowing it to be stored, referenced, updated, and passed between steps within an automation.

Everydata element(also referred to as afact) consists of two parts:

- Anamethat identifies and labels the data.

Anamethat identifies and labels the data.

- Avalue, which represents the information itself. Values can be singular or plural.

Avalue, which represents the information itself. Values can be singular or plural.

### hashtagDefining Singular Data

To define asingulardata element, use"is":

### hashtagDefining Plural Data

To define apluraldata element, use"are":

### hashtagExamples

- In this example,the customeris the data name. It is assigned the singular value"John Smith":

In this example,the customeris the data name. It is assigned the singular value"John Smith":

- Here,the itemsis the plural data name. It is assigned the plural value ofthe documents.

Here,the itemsis the plural data name. It is assigned the plural value ofthe documents.

- In this example,the fruitsis the plural data name. It is assigned a list(plural)of fruit values:

In this example,the fruitsis the plural data name. It is assigned a list(plural)of fruit values:

Make sure singular names pair with singular values, and plural names pair with plural values! For example, you wouldn’t write“the fruits is the orange”. Instead, you would write:“the fruits are the oranges”.

## hashtagData Names

Data names define how information is labeled and referenced. The following rules apply:

#### hashtag1. Begin with "the"

Data names must be prefaced withthe. For example:

#### hashtag2. Names can be Simple or Descriptive

Data names can be simple or descriptive. Adjectives can be used in descriptive names to provide additional clarity or context. For example:

Simple Name

Descriptive Name

## hashtagData Values

Data values can be singular or plural. Possible data types includenumbers,text,dates,lists,orreferences to other dataelements.

### hashtag1. Numbers

Numericvalues can be assigned to data such as age, balance, or rates. For example:

### hashtag2. Text

Textvalues can be words, sentences, or phrases. They can include any characters—letters, numbers, symbols, or spaces—as long as they are enclosed in double quotes (""). For example:

### hashtag3. Dates

Adatevalue represents a specific calendar day, such as a due date, birthday, or event date. Be sure to enclose date values in double quotes (""). For example:

### hashtag4. Lists

To define alist, separate the values by commas. For example:

### hashtag5. Referencing Other Data

The value of a data element can also be areference to another data element. In these cases, the data value is set to another data name. For example:

Note:You can only reference another data element if it has been defined earlier in the automation.

### hashtag6. The Above

When a data element's value is set tothe above, Kognitos makes acopy of the valuefrom the previous lines in the automation:

#### hashtagExamples

- In this example,the backup emailis assigned the value[email protected].

In this example,the backup emailis assigned the value[email protected].

- Here,the invoice totalis assigned the value150.

Here,the invoice totalis assigned the value150.

- In this example,the fileis assigned a copy of the above file in the automation.

In this example,the fileis assigned a copy of the above file in the automation.

## hashtagReassigning Data

Use theusekeyword to reassign a data element, whichcopies the referenceto the original data value:

#### hashtagWarning: Overwriting Data

Updating a referenced data element can overwrite previous data — see Example 2 for more details.

#### hashtagExamples

- In this example, theregistration dateis reassigned the value11-05-2024.

In this example, theregistration dateis reassigned the value11-05-2024.

- In this example,the order nameis assigned a copy of the reference tothe last name, meaning it will point to the same value.

In this example,the order nameis assigned a copy of the reference tothe last name, meaning it will point to the same value.

If the last name changes, the order name will also change, because it references the same value. When the last name changes toSmith-Brown(line #3), the order name also changes (line #4):

Last updated3 months ago

Was this helpful?
