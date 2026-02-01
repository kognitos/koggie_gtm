---
title: Loops | Kognitos Documentation
url: https://docs.kognitos.com/writing-automations/automation-basics/loops
description: Learn about writing loops in Kognitos to repeat actions for multiple items.
---

# Loops | Kognitos Documentation

### hashtagOverview

A loop allows you to repeat actions for multiple items. In Kognitos, you can create a loop usingprocess each x as follows, wherexrepresents the item in a set. Loops are especially useful for batch processing, where you need to handle multiple items in a consistent manner.

### hashtagGeneral Syntax

To start a loop, use the following syntax:

By indenting the lines afterprocess each {item} as follows, Kognitos will know which instructions to follow for each item.

Indentation is Key

Remembering to indent when looping through objects in your automation is very important!

#### hashtagExample

### hashtagLooping with a Counter

To track the number of iterations in a loop, you can use a counter. A counter is a numeric data element that starts at an initial value(usually zero)and increments with each iteration of the loop. This allows you to keep track of how many times the loop has executed.

#### hashtagSyntax

Initialize the counterbeforestarting the loop. Within each iteration, increment the counter by 1.

#### hashtagExample

In this example, a loop is used to iterate through each page in a document. The counter is incremented after each page is processed.

Last updated6 months ago

Was this helpful?
