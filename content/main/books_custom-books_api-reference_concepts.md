---
title: Concepts | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/custom-books/api-reference/concepts
description: Understand concepts and how they are utilized in procedures.
---

# Concepts | Books | Kognitos Documentation

## hashtagWhat are Concepts?

Conceptsdefine how data flows in and out of a procedure:

- Input conceptsrepresent the inputs that a procedure requires.

Input conceptsrepresent the inputs that a procedure requires.

- Output conceptsrepresent the results that a procedure generates.

Output conceptsrepresent the results that a procedure generates.

## hashtagConcept Types

Input and output concepts can be defined as eitherstandardorcustomtypes.

### hashtagStandard Types

The following Python data types can be used to define concepts:

datetime.datetime,datetime.date,datetime.time

pyarrow.Table,arro3.core.Table,nanoarrow.ArrayStream

List[str],List[int]

Dict[str, Any]

> Note:Anycan be any of the other supported types.

Note:Anycan be any of the other supported types.

### hashtagCustom Types

Concepts can also becustomtypes. Custom concepts must be marked with the@conceptdecorator. Using adataclassarrow-up-rightis recommended. For example:

## hashtagConcepts vs. Parameters

Conceptsandparametersare two different entities that are closely related.

### hashtagConcepts

Conceptsare operated on by Kognitos procedures. Some concepts are included in thenameof the@proceduredecorator.

### hashtagParameters

Parametersare operated on by Python functions. They are defined in a function's signature and are specific to the function's implementation.

#### hashtagHow Are They Related?

An internal mapping is created between a Python function and a Kognitos procedure. To ensure a correct mapping, concepts and parameters mustmatch.

## hashtagConcept-Parameter Matching

Concepts and parameter names mustmatchto ensure they are properly mapped internally.

### hashtagGuidelines

Match concepts to parameters by following these guidelines:

- Replace spaces with underscores.

Replace spaces with underscores.

- Drop possessive constructions('s).

Drop possessive constructions('s).

- Consider each connectednoun phraseas a separate parameter. Non-essential noun phrases (e.g., "field," "value") included to clarify context do not require a corresponding parameter.

Consider each connectednoun phraseas a separate parameter. Non-essential noun phrases (e.g., "field," "value") included to clarify context do not require a corresponding parameter.

- Don't map articles('an', 'a', 'the') to parameters; only the nouns they connect should be considered.

Don't map articles('an', 'a', 'the') to parameters; only the nouns they connect should be considered.

- Define optional parametersin cases where the input concept is not explicitly defined in the procedure name.

Define optional parametersin cases where the input concept is not explicitly defined in the procedure name.

### hashtagExample 1

In this example, the conceptred carmaps to the parameterred_car. The space is replaced with an underscore.

### hashtagExample 2

In the example below:

- servicenow's ticketmaps toticket

servicenow's ticketmaps toticket

- fieldmaps tofield

fieldmaps tofield

- outlook's standard usermaps tostandard_user

outlook's standard usermaps tostandard_user

### hashtagExample 3

In this example, the conceptticketmaps to the parameterticket. The possessive construct ('s) is dropped and the word "field" is ignored.

### hashtagExample 4

In the example below, the concept ofpriorityis not explicitly stated in the procedure name. It maps to the optional function parameter,priority.

### hashtagExample 5

In this example:

- the citymaps to the parametercity

the citymaps to the parametercity

- the unitmaps to the optional parameterthe unit

the unitmaps to the optional parameterthe unit

The output concept,current temperature, is wrapped in parentheses in the procedure name.

Last updated1 month ago

Was this helpful?
