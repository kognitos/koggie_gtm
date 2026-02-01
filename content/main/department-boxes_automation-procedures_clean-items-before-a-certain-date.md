---
title: Clean Items (Before a Certain Date) | Department Boxes | Kognitos Documentation
url: https://docs.kognitos.com/department-boxes/automation-procedures/clean-items-before-a-certain-date
description: Removes all the keys from the department box before a certain date.
---

# Clean Items (Before a Certain Date) | Department Boxes | Kognitos Documentation

### hashtagOverview

This procedure removes allthe keysfrom a department box(a storage unit within an agent)before a certain date. The date can be specified as a relative or absolute value.

### hashtagSyntax

Below is a line-by-line overview of the automation syntax. Expand each line to learn more.

#### hashtagWhat does it do?

Specifies a department box.

#### hashtagWhere does it go?

This phrase should be written on anew line.

#### hashtagIs it required?

✅ Yes — This phrase isrequired.

#### hashtagDoes it require data?

✅ Yes — Replacexwith the department box's name.

#### hashtagExample

#### hashtagWhat does it do?

Specifies the engine used for the department box. Options include:Amazon S3for large or unstructured data,Amazon DynamoDBfor fast key-value lookups, andAmazon OpenSearchfor advanced search and filtering capabilities.

#### hashtagWhere does it go?

This phrase should be written on anew line.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replacexwith one of the following values:s3,dynamodb,opensearch. The default iss3.

#### hashtagExample

#### hashtagWhat does it do?

Removes all keys from the department box before a certain date.

#### hashtagWhere does it go?

This phrase should be written on anew line.

#### hashtagIs it required?

✅ Yes — This phrase isrequired.

#### hashtagDoes it require data?

✅ Yes — Replacexwith the department box's name. Replacedatewith a text value or reference to a date or time, which can be relative or absolute.

#### hashtagExample

### hashtagExamples

#### hashtag1. Clean Before Relative Date

A relative date is based on the current time. The following removes all items from the department box that are older than 3 hours:

#### hashtag2. Clean Before Absolute Date

An absolute date is a fixed point in time. The following removes all items from the department box that were added before October 23, 2020:

Last updated6 months ago

Was this helpful?
