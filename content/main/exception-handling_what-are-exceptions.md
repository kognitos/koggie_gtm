---
title: What are Exceptions? | Kognitos Documentation
url: https://docs.kognitos.com/exception-handling/what-are-exceptions
description: Learn what exceptions are and why they keep your automations accurate.
---

# What are Exceptions? | Kognitos Documentation

## hashtagOverview

In Kognitos,exceptionsoccur when an automation cannot proceed without additional context or clarification. Instead of making an assumption that could lead to errors, the system raises aquestion(also called an exception)and routes it to a human for review.

This human-in-the-loop design ensures that business processes remain accurate, reliable, and trustworthy. Exceptions arenotsystem failures — they are intentional checkpoints that keep automations accurate and reliable.

## hashtagWhy Do Exceptions Occur?

Exceptions can arise in Kognitos for a variety of reasons. The most common include:

#### hashtagAmbiguity

Multiple possible interpretations are possible, and the system cannot determine which is the correct one without user input.

> Example:An email approval workflow asks, “Approved?” but doesn’t specify if it refers to cost, vendor, or timeline, so an exception is raised for review.

Example:An email approval workflow asks, “Approved?” but doesn’t specify if it refers to cost, vendor, or timeline, so an exception is raised for review.

#### hashtagMissing Information

A required data input is not available, preventing the automation from completing the step.

> Example:While processing an employee expense report, the system detects that a hotel receipt is missing the check-in date, so it raises an exception for confirmation.

Example:While processing an employee expense report, the system detects that a hotel receipt is missing the check-in date, so it raises an exception for confirmation.

#### hashtagDocument Variability

The information exists in the document, but appears in an unexpected format or structure. This makes it difficult to extract with certainty.

> Example:An invoice shows thetotal amountas “$5,000 (including VAT)” in a note at the bottom instead of in the standard “Total” field, so the system raises an exception for review.

Example:An invoice shows thetotal amountas “$5,000 (including VAT)” in a note at the bottom instead of in the standard “Total” field, so the system raises an exception for review.

#### hashtagBusiness Rules

A step requires human decision-making, often due to risk, compliance, or policy considerations.

> Example:While reviewing a contract, the automation extracts a clause about early termination fees. Because company policy requires legal review of any termination penalties above $10,000, the system raises an exception so a human can confirm how to proceed.

Example:While reviewing a contract, the automation extracts a clause about early termination fees. Because company policy requires legal review of any termination penalties above $10,000, the system raises an exception so a human can confirm how to proceed.

## hashtagHow to Resolve Exceptions

Exceptions in Kognitos are resolved byproviding guidance— giving the system the input it needs to understand how to proceed. This can include clarifying ambiguous values, pointing to the correct information in a document, or confirming a decision.

TheGuidance Centermakes this process efficient by allowing you to review open exceptions across automations in one place and provide the necessary clarification or correction. Once guidance is provided, the automation resumes where it left off.

Guidance Examples:

- Identifying the correct field in a scanned invoice that represents the “Total Amount Due.”

Identifying the correct field in a scanned invoice that represents the “Total Amount Due.”

- Selecting the correct shipping address from a document that lists multiple locations.

Selecting the correct shipping address from a document that lists multiple locations.

- Confirming the contract start date when it appears in narrative text instead of a standard date field(e.g., “services commence on June 1st”).

Confirming the contract start date when it appears in narrative text instead of a standard date field(e.g., “services commence on June 1st”).

- Verifying the correct vendor name when variations or abbreviations appear across different documents(e.g., “Northstar Technologies” vs. “Northstar Tech LLC”).

Verifying the correct vendor name when variations or abbreviations appear across different documents(e.g., “Northstar Technologies” vs. “Northstar Tech LLC”).

## hashtagSummary

Exceptions in Kognitos are not errors; they are intentional checkpoints that safeguard accuracy. By providing guidance in theGuidance Center, you ensure that automations continue smoothly, learn from your input, and become more resilient over time.

Last updated4 months ago

Was this helpful?
