---
title: Retrieve Item | Department Boxes | Kognitos Documentation
url: https://docs.kognitos.com/department-boxes/automation-procedures/retrieve-item
description: Retrieve an item from a department box.
---

# Retrieve Item | Department Boxes | Kognitos Documentation

### hashtagOverview

This procedure retrieves a specific item from a department box(a storage unit within an agent). If the item does not exist, this procedure offers the option to create a new record with an empty value or to skip the retrieval.

### hashtagSyntax

Below is a line-by-line overview of the automation syntax. Expand each line to learn more.

#### hashtagWhat does it do?

Specifies a department box.

#### hashtagWhere does it go?

This phrase should be written on anew line.

#### hashtagIs it required?

✅ Yes — This phrase isrequired.

#### hashtagDoes it require data?

✅ Yes — Replacexwith the department box's name(in plural form).

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

Exports the department box to get the data.

#### hashtagWhere does it go?

This phrase should be written on anew line.

#### hashtagIs it required?

✅ Yes — This phrase isrequired.

#### hashtagDoes it require data?

✅ Yes — Replacexwith the department box's name(in plural form).

#### hashtagExample

#### hashtagWhat does it do?

Specifies a record to retrieve from a department box with a specific key.

#### hashtagWhere does it go?

This phrase should be written on anew line.

#### hashtagIs it required?

✅ Yes — This phrase isrequired.

#### hashtagDoes it require data?

✅ Yes — Replacethe department boxwith the name of the department box. Replacexwith a text value or reference that specifies the key.

#### hashtagExample

#### hashtagWhat does it do?

Retrieves the actual value at the key from the department box.

#### hashtagWhere does it go?

This phrase should be written on anew line.

#### hashtagIs it required?

✅ Yes — This phrase isrequired.

#### hashtagDoes it require data?

✅ Yes — Replacexwith the key. Replacethe department boxwith the name of the department box.

#### hashtagExample

### hashtagExamples

#### hashtag1. Example 1

This command retrieves the item with the key "announcement" from the HR department box.

#### hashtag2. Example 2

Last updated6 months ago

Was this helpful?
