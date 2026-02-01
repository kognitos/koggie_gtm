---
title: Get Column Stats | Tables | Kognitos Documentation
url: https://docs.kognitos.com/tables/columns/get-column-stats
description: Calculates an aggregate value of a table column.
---

# Get Column Stats | Tables | Kognitos Documentation

### hashtagOverview

This procedure is used to calculate an aggregate value for a table column. It can be used to apply a function to a column and get its sum, mean, average, count, minimum, maximum, standard deviation, or sample variance.

### hashtagInput Concepts

table's column

The column to perform the aggregation on.

aggregate function

The function to use for aggregation. Valid options are:sum,mean,average,count,min,max,median,std,var.

### hashtagOutput Concepts

aggregate value

The result of the aggregation.

### hashtagExamples

In the following examples,the columnrefers to theAmtcolumn in the table below.

Note: This sample table can be generated using thecreate an integer tableprocedure.

#### hashtag1. Get the Column Count

#### hashtag2. Get the Column Average

#### hashtag3. Get the Column's Maximum

Last updated9 months ago

Was this helpful?
