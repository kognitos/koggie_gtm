---
title: Truncate a Number | Numbers | Kognitos Documentation
url: https://docs.kognitos.com/numbers/main/truncate-a-number
description: Truncates a decimal number to a specified precision without rounding.
---

# Truncate a Number | Numbers | Kognitos Documentation

### hashtagOverview

This procedure removes digits from a decimal number beyond a specified number of decimal places, effectively shortening the number without rounding it up or down. If no precision is provided, the number is truncated to an integer (zero decimal places).

### hashtagSyntax

Below is a line-by-line overview of the automation syntax. Expand each line to learn more.

What does it do?Starts the truncation operation.

Where does it go?This phrase should be written on a new line.

Is it required?✅ Yes — This phrase isrequiredin the syntax.

Does it require input data?⛔ No — This phrase doesnotrequire input data.

What does it do?Specifies a decimal number to be truncated. This is optional ifthe numberis already defined earlier in the automation.

Where does it go?This phrase should be indented beneathtruncate the number with.

Is it required?🌟 No — This phrase isoptionalin the syntax.

Does it require input data?✅ Yes — ADecimalvalue should be specified.

Example:the number is 123.45678

What does it do?Specifies the number of decimal places to truncate to. If not specified, the number will be truncated to an integer.

Where does it go?This phrase should be indented beneathtruncate the number with.

Is it required?🌟 No — This phrase isoptionalin the syntax.

Does it require input data?✅ Yes — AIntegervalue should be specified.

Example:the precision is 2

### hashtagExamples

#### hashtag1. Truncate a Number (No Specified Precision)

the number123.0

#### hashtag2. Truncate a Number with Precision 3

the number123.456

#### hashtag3. Truncate a Number with Precision 0

the number3.0

#### hashtag4. Truncate a Negative Decimal

the number-3.141

#### hashtag5. Truncate a Number (Alternative Syntax)

the number123.45

Last updated7 months ago

Was this helpful?
