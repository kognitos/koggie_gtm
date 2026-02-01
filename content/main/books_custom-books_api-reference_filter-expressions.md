---
title: Filter Expressions | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/custom-books/api-reference/filter-expressions
description: Learn about implementing filter expressions in your custom book project.
---

# Filter Expressions | Books | Kognitos Documentation

## hashtagOverview

Filter expressionsenable you to define filter criteria for your procedures using thewhosekeyword. These expressions allow you to filter data based on conditions such as equality, comparisons, and more. For example:

## hashtagImplementation

### hashtag1. Include thefilter_expressionparameter

To implement a filter expression, you need to provide the specialfilter_expressionparameter in your procedure method definition. For example:

### hashtag2. Implement Visitors

TheFilterExpressionVisitorclass is an abstract base class that defines methods for visiting different types of filter expressions. Each type of filter expression (binary, unary, value, noun phrase) is defined as a subclass ofFilterExpression. You will need to define a class that implements these methods to handle filter expressions. For example:

Below is an example implementation of theFilterExpressionVisitorclass in the Twilio book:

### hashtag3. Processing Filter Expressions

Once you’ve defined your visitor class, you need to pass an instance of it to the filter expression. This is done by callingacceptonfilter_expression. For example:

## hashtagExample

In this example, a filter expression is used in theread some SMS messagesprocedure:

Last updated1 month ago

Was this helpful?
