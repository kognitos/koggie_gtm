---
title: Context Based Learning | Kognitos Documentation
url: https://docs.kognitos.com/writing-automations/context-based-learning
description: 
---

# Context Based Learning | Kognitos Documentation

## hashtagOverview

Context Based Learning (CBL)is a powerful feature that translates key information in documents (ex: field names, column names, and large words) into numerical values. These values can then be compared between two documents to determine their similarity.

## hashtagHow Is It Useful?

CBL aims to make your document handling process as efficient and accurate as possible. It's designed to learn and adapt based on the documents it encounters, continually improving its performance over time. It can:

- Automatically classify between different document types

Automatically classify between different document types

- Handle new document types on demand, without the need for process modifications

Handle new document types on demand, without the need for process modifications

- Eliminate the need for complex if-else structures, reducing process length and complexity

Eliminate the need for complex if-else structures, reducing process length and complexity

- Provide learning suggestions for incoming exceptions, making your workflows smoother

Provide learning suggestions for incoming exceptions, making your workflows smoother

- Learn from user interactions and improve over time

Learn from user interactions and improve over time

## hashtagConfidence Scores

A confidence score is used to determine the similarity between documents. This score is essentially a measure of howidenticaltwo documents are(based on the numerical values assigned to their key information through vector embeddings).

The default confidence score set in CBL is95%. For a learning to be applied, the match between the current document and the learned document must be 95% or higher. This high threshold ensures that the applied learnings are highly relevant and accurate. However, if you need to adjust this percentage, here’s how:

### hashtagManual Configuration

Add the following line to your automation, replacing<percent>with the new threshold.

For example:

The above will set the similarity score to 0.92(the matching threshold would be 0.92 instead of 0.95).

Reducing the similarity below 0.90 is not recommended unless you have absolute certainty of the implications. This adjustment may result in false positives.

## hashtagHow to Use CBL

### hashtagSetup

To start using CBL, include the line"get the file as a scanned document"in your process.The modifier “scanned document” ensures that CBL will be applied for that line.

### hashtagWriting Processes

When writing processes, ensure all document extractions are written as a single line. The keyword “document” should always be present. For example:

## hashtagHandling Exceptions

In the event of an exception:

- If this is the first instance with no learnings, select the answer type from the drop-down.

If this is the first instance with no learnings, select the answer type from the drop-down.

- This will open aMini-Playground, where you can test and run modifications without affecting the primary process.

This will open aMini-Playground, where you can test and run modifications without affecting the primary process.

- If the result is as expected, clickNext. It will show the document if it's a CBL-based exception. You can learn the answer as usual, or just the answer for that instance. Next time, when the exception occurs for a similar document type (context), at the same step-path, the learning will be applied to the document automatically.

If the result is as expected, clickNext. It will show the document if it's a CBL-based exception. You can learn the answer as usual, or just the answer for that instance. Next time, when the exception occurs for a similar document type (context), at the same step-path, the learning will be applied to the document automatically.

Note: CBL will be applied to a learning if the exception occurs for any step that contains “document” as a keyword (except “get the file as a scanned document”).

## hashtagModifying CBL Learnings

CBL is designed to learn and adapt over time, but there may be instances where it doesn't yield the expected results. In such cases, you can manually correct it. Here's how:

- If a learning is applied using CBL and it fails to yield a value (learning fails):You can manually correct it by providing the value directly or trying out a new learning in the Mini-Playground.

If a learning is applied using CBL and it fails to yield a value (learning fails):You can manually correct it by providing the value directly or trying out a new learning in the Mini-Playground.

- If a learning is applied using CBL and yields an invalid value:This might have downstream effects where it will fail. In such cases, consider editing the technique to ensure it deals with both previous cases and the new ones.

If a learning is applied using CBL and yields an invalid value:This might have downstream effects where it will fail. In such cases, consider editing the technique to ensure it deals with both previous cases and the new ones.

## hashtagCompatibility of CBL

CBL is designed to work with OCR documents processed withAWS TextractandAzure Form Recognizer. The goal of CBL is to streamline your document handling process, regardless of the document type. As we continue to develop and improve CBL, we aim to expand its compatibility to include even more document types and data structures.

Last updated5 months ago

Was this helpful?
