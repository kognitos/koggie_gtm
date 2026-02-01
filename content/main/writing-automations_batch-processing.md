---
title: Batch Processing | Kognitos Documentation
url: https://docs.kognitos.com/writing-automations/batch-processing
description: Learn how to perform batch processing.
---

# Batch Processing | Kognitos Documentation

### hashtagOverview

Batch processingis a method of handling data by dividing it into smaller groups(batches)and processing each group separately. This is useful when working with large volumes of information such as customer records, invoices, or files as it improves efficiency and error handling.

#### hashtagHow It Works

When you create batches, the items are divided intogroupsof the specifiedbatch size. Each batch becomes a separate collection that you canprocess independently.

> Example:Instead of sending 1,000 customer emails all at once, you can create batches of 50 emails each, resulting in 20 manageable batches to process one at a time.

Example:Instead of sending 1,000 customer emails all at once, you can create batches of 50 emails each, resulting in 20 manageable batches to process one at a time.

Note: The last batch may contain fewer items if the total count doesn't divide evenly. For example, if you have 7 total items and specify a batch size of 3:

- Batch 1: Items 1, 2, 3

Batch 1: Items 1, 2, 3

- Batch 2: Items 4, 5, 6

Batch 2: Items 4, 5, 6

- Batch 3: Item 7

Batch 3: Item 7

### hashtagSyntax

Below is a line-by-line overview of the automation syntax. Expand each line to learn more.

What does it do?

Instructs the system to create batches from a collection or dataset.

Where does it go?

This phrase should be written on anew line.

Is it required?

✅ Yes — This phrase isrequiredin the syntax.

Does it require data?

✅ Yes — Replacethe collectionwith a reference to the dataset or objects you want to batch.

What does it do?

Specifies how many items should be included in each batch.

Where does it go?

Indented beneathcreate batches from the collection.

Is it required?

✅ Yes — This phrase isrequiredto define the batch size.

Does it require data?

✅ Yes — Replacexwith an integer value representing the number of items per batch.

After creating batches, process each one individually using:

Within the processing logic, reference the items in the current batch usingthe batch's <collection>. For example:

### hashtagExamples

#### hashtag1. Basic Batch Creation

The following example shows how to create batches from a simple list of numbers:

- Batch 1: [1, 2, 3]

Batch 1: [1, 2, 3]

- Batch 2: [4, 5, 6]

Batch 2: [4, 5, 6]

- Batch 3: [7]

Batch 3: [7]

#### hashtag2. Processing Customer Records

Here, the customers are processed in batches of 10.

#### hashtag3. Invoice Processing

In this example, the table's rows are broken up in batches. Then, each batch is processed in parallel usingrun parallelization.

Last updated3 months ago

Was this helpful?
