---
title: Convert a Table to JSON | Tables | Kognitos Documentation
url: https://docs.kognitos.com/tables/conversions/convert-a-table-to-json
description: Converts a table into JSON.
---

# Convert a Table to JSON | Tables | Kognitos Documentation

### hashtagOverview

This procedure transforms a given table into its JSON representation. It accepts a table as input and outputs a JSON that represents the table's structure and content.

### hashtagSyntax

Below is a line-by-line overview of the automation syntax. Expand each line to learn more.

#### hashtagWhat does it do?

Instructs the system to convert the table to a JSON string.

#### hashtagWhere does it go?

This phrase should be written on anew line.

#### hashtagIs it required?

✅ Yes — This phrase isrequired.

#### hashtagDoes it require data?

✅ Yes — A reference tothe tablemust be provided.

#### hashtagWhat does it do?

Defines the format used to represent datetime values when converting table data to JSON.

#### hashtagWhere does it go?

Indented underconvert the table to a json.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replaceyour-formatwith your desired datetime format.

#### hashtagExample

### hashtagExamples

#### hashtag1. Convert a Sample Table to JSON

- Address: 123 east street City: San Francisco Name: john Number: + 1 (415) 691 9426

Address: 123 east street City: San Francisco Name: john Number: + 1 (415) 691 9426

- Address: 321 west street City: San Jose Name: joe Number: + 1 (415) 691 1234

Address: 321 west street City: San Jose Name: joe Number: + 1 (415) 691 1234

- Address: 213 north street City: San Francisco Name: jack Number: + 1 (415) 691 4595

Address: 213 north street City: San Francisco Name: jack Number: + 1 (415) 691 4595

#### hashtag2. Convert a Table to JSON with Date & Time Data

Consider the following table that is stored in a.xlsxfile:

- Harvest Date: 01-15-2025 Harvest Time: '14:30:00' Quantity (kg): 150 Vegetable: Carrot

Harvest Date: 01-15-2025 Harvest Time: '14:30:00' Quantity (kg): 150 Vegetable: Carrot

- Harvest Date: 03-20-2025 Harvest Time: '09:00:00' Quantity (kg): 85 Vegetable: Broccoli

Harvest Date: 03-20-2025 Harvest Time: '09:00:00' Quantity (kg): 85 Vegetable: Broccoli

### hashtagDetails

The table below lists common datetime codes that can be combined to specify a format string.

Each directive represents a specific component of a date or time, such as year, month, day, etc.

4-digit year

2-digit year

Month (01-12)

Full month name

Abbreviated month name

Day (01-31)

Hour (24-hour, 00-23)

Hour (12-hour, 01-12)

Minute (00-59)

Second (00-59)

Microsecond (000000-999999)

UTC offset (+HHMM)

Timezone name

Day of year (001-366)

Week number (Sun first day)

Week number (Mon first day)

Locale date & time

Tue Jun 18 14:30:00 2025

Locale date

Locale time

Last updated5 months ago

Was this helpful?
