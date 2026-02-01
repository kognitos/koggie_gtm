---
title: Add Items | Department Boxes | Kognitos Documentation
url: https://docs.kognitos.com/department-boxes/automation-procedures/add-items
description: Add item(s) to a department box.
---

# Add Items | Department Boxes | Kognitos Documentation

### hashtagOverview

This procedure adds specified items to a department box(a storage unit within an agent). Using this procedure, you can insert individual items or bulk data, including tables.

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

Specifies an item to add to a department box.

#### hashtagWhere does it go?

This phrase should be written on anew line.

#### hashtagIs it required?

✅ Yes — This phrase isrequired.

#### hashtagDoes it require data?

✅ Yes — Replacethe itemwith an item (value or table object) to be added. Replacethe department boxwith the name of a department box.

#### hashtagExample

#### hashtagWhat does it do?

Specifies the key under which the item(s) will be stored in the department box. If the item to be added to the department box is a table, "the key" represent the name of the column that holds the keys.

#### hashtagWhere does it go?

Indented underadd the item to the department box.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replacexwith a text value or reference.

#### hashtagExample

#### hashtagWhat does it do?

Specifies the name of the column that holds the values, if the item to be added to the department box is a table. If this isnotspecified when adding a table, all columns except the key column will be stored as a dictionary value. This enables bulk upload of complex records where each row becomes a key-value pair with the value being a dictionary of all remaining column data. When the value is specified, traditional single-column mode is used.

#### hashtagWhere does it go?

Indented underadd the item to the department box.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replacexwith a text value or reference. The default isvalue.

#### hashtagExample

#### hashtagWhat does it do?

Specifies the number of items to process in each batch, improving I/O performance by reducing the number of database calls.

#### hashtagWhere does it go?

Indented underadd the item to the department box.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replacexwith anumericvalue or reference. The default is1000.

#### hashtagExample

### hashtagExamples

#### hashtag1. Add a Singular Entry

#### hashtag2. Add Multiple Entries

#### hashtag3. Traditional Single-Column Approach

#### hashtag4. Traditional Table with Key-Value Columns

#### hashtag5. Multi-Column Table Upload

Last updated6 months ago

Was this helpful?
