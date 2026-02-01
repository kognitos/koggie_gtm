---
title: Column Formulas | Tables | Kognitos Documentation
url: https://docs.kognitos.com/tables/columns/column-formulas
description: Use column formulas to dynamically populate and transform column data in your tables.
---

# Column Formulas | Tables | Kognitos Documentation

## hashtagOverview

Acolumn formulais an expression that defines how to calculate values for a table column. Column formulas use data from other columns, tables, or predefined logic to dynamically populate column values in a table. They are useful for:

- Data transformation— combining first and last names, extracting values from JSON.

Data transformation— combining first and last names, extracting values from JSON.

- Mathematical operations— calculating totals, differences, or conditional values.

Mathematical operations— calculating totals, differences, or conditional values.

- Sequence generation— creating ordered lists of numbers, dates, or time intervals.

Sequence generation— creating ordered lists of numbers, dates, or time intervals.

## hashtagHow to Add a Column Formula

- In your automation, write:

In your automation, write:

- Then, type a forward slash (/) to open the widget menu.

Then, type a forward slash (/) to open the widget menu.

- SelectColumn Formula.

SelectColumn Formula.

- Provide aDescriptionthat explains what the formula does.

Provide aDescriptionthat explains what the formula does.

- Enter the formula expression in theValuefield.

Enter the formula expression in theValuefield.

- ClickSaveto insert the formula into your automation.

ClickSaveto insert the formula into your automation.

## hashtagData Manipulation Formulas

### hashtag1.combine

Concatenates column values together using a specified delimiter.

The delimiter used to separate the values. Examples:" ",",",";"

The names of the columns to concatenate.

This example combines theFirst NameandLast Namecolumns with a space in between.

### hashtag2.extract_property_from_column

Extracts a property value from a JSON string in a specified column.

property_name

The property name to extract from the JSON.

column_name

The column containing JSON strings.

Suppose you have a table where each row contains structured data in theRow with GSTcolumn — a JSON string that includes the item name and its GST (Goods and Services Tax) amount. You want to extract the GST value from that JSON and insert it as a new, standalone column calledGST.

{"Item": "Book", "GST": 10.0}

{"Item": "Laptop", "GST": 100.0}

This command adds a new column namedGSTby parsing each row’s JSON string and extracting the value associated with the "GST" key.

{"Item": "Book", "GST": 10.0}

{"Item": "Laptop", "GST": 100.0}

### hashtag3.corresponding_value_from_other_table

Retrieves values from another table usingfuzzy matching. It returns the best match, even if that match is reused across multiple rows. Useful when you're okay with repeated matches and just want the closest available value.

query_column

Column in the current table containing the values to match.

other_table_match_column

Name of the column in the other table to use for matching.

other_table_return_column

Name of the column in the other table to retrieve values from once matched.

Suppose you are working with two tables from a spreadsheet:

Main Table(Sheet with headers: "Pokemon" to "Finishing Move")

Thunderbolt

Thunderbolt

Rating Table(Sheet with headers: "Name" to "Rating")

You want to add the Pokémon’s type from the Main Table to the Rating Table, even if there are small differences in names (e.g., extra spaces or capitalization). Here's how you can define the column:

the rating table

The fuzzy match finds both "Pikachu" rows in the main table and chooses the best match for each.

### hashtag4.corresponding_value_from_other_table_unique

Tries to assign each row aunique fuzzy matchfrom another table. It performs a row-by-row comparison, returning a value from a specified column in the second table when the values in a specified column match(depending on the match percentage).

Unlikecorresponding_value_from_other_table, this function tries to assign each row in the main table auniquematch from the other table. If no unused match is found, it falls back to the previously matched row. This is useful when you want to avoid duplicate matches where possible.

query_column

Column in the current table containing the values you want to match.

other_table_match_column

Name of the column in theothertable to compare against.

other_table_return_column

Name of the column in theothertable whose values you want returned.

match_percentage

Minimum match accuracy (0–100) required for values to be considered a match. Exact match = 100.

Suppose you are working with two tables from a spreadsheet:

Main Table(Sheet with headers: "Pokemon" to "Finishing Move")

Thunderbolt

Rating Table(Sheet with headers: "Name" to "Rating")

You want to add aPTypecolumn to the Rating Table that looks up the corresponding Type for each Pokémon from the Main Table. Here, the formula will populate thePTypecolumn in the Rating Table with the matching type from the Main Table, based on Pokémon names.

the rating table

### hashtag5.sequence_of_numbers

Generates a number sequence that increases by a specified interval.

The first number in the sequence.

The interval (difference) between consecutive numbers.

This example generates a column of numbers that starts at 10 and increases by 5 for each row.

### hashtag6.conditional_column_copy

Conditionally copies a column value based on a specified condition.

column_value

The value to potentially copy.

The condition used to decide whether to copy the value.

This example copies values from the "Quantity" column into a new "First Type" column, but only if the value is greater than 12.

### hashtag7. Sum

Adds two or more columns together. Each column is separated by a space and a+symbol.

#### hashtagParameters

The name of the first column to add.

The name of the second column to add.

The name of the third column to add.

#### hashtagExample

In this example, a table is created with three integer columns:Amt,Min, andMaxusing theCreate an Integer Tablearrow-up-rightprocedure.

A column formula is then applied to sum the values from these columns, and the result is stored in a new column namedTotal.

## hashtagDate and Time Formulas

### hashtag1.elapsed_time_between_two_date_columns

Calculates the elapsed time between two date columns in specified units.

#### hashtagParameters

date_column1

The name of the first date column.

date_column2

The name of the second date column.

The unit of time to calculate (days,hours,minutes,seconds).

#### hashtagExample

This example calculates the number of days between aStart Dateand anEnd Datecolumn:

### hashtag2.construct_date

Returnsthe datefrom the row's day, month, and year in a specified format.

#### hashtagSyntax

#### hashtagParameters

The day component.

The month component.

The year component.

date_format

The format for the output date string(default: "%Y/%m/%d").

#### hashtagExample

### hashtag3.sequence_of_dates

Generates asequence of datesthat increment by a specified number of days.

#### hashtagSyntax

#### hashtagParameters

Starting date in YYYY-MM-DD format.

interval_days

Number of days between consecutive dates.

The format in which to display the date(default: "%Y-%m-%d").

#### hashtagExample

This example creates a column of dates with weekly intervals that start from January 1, 2024.

### hashtag4.sequence_of_times

Generates asequence of timesthat increment by a specified number of minutes.

#### hashtagSyntax

#### hashtagParameters

Starting time in HH:MM format.

interval_minutes

Number of minutes between consecutive times.

Format string for the output time(default: '%I:%M %p').

#### hashtagExample

This example generates a column of times that starts at 12:30 AM and increases by 30-minute intervals.

### hashtag5.sequence_of_months

Generates asequence of monthsthat increments by a specified number of months.

#### hashtagSyntax

#### hashtagParameters

start_month

Starting month in YYYY-MM format.

interval_months

Number of months between consecutive dates.

Format string for the output month(default: '%Y-%m').

#### hashtagExample

This example generates a column of months that starts from January 2024 and increments by 2 months.

### hashtag6.sequence_of_mondays

Generates asequence of Mondaysthat increments by a specified number of weeks.

#### hashtagSyntax

#### hashtagParameters

start_monday

Starting Monday date in YYYY-MM-DD format.

interval_weeks

Number of weeks between consecutive Mondays.

Format string for the output date(default: '%Y-%m-%d').

#### hashtagExample

This example generates a column of Mondays that starts from January 1, 2024 and increments by 2 weeks.

### hashtag7.sequence_of_weekdays

Generates asequence of weekdays(Monday to Friday) that start from a given date(skipping weekends).

#### hashtagSyntax

#### hashtagParameters

Starting date in YYYY-MM-DD format.

interval_weekdays

Number of weekdays between consecutive dates.

Format string for the output date(default: '%Y-%m-%d').

#### hashtagExample

This example generates a column of weekdays that starts from January 1, 2024 (Monday) and increments by 2 weekdays.

Last updated5 months ago

Was this helpful?
