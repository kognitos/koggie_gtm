---
title: Procedures | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/secretsmanager/procedures
description: Automation procedures in the AWS Secrets Manager book.
---

# Procedures | Books | Kognitos Documentation

The following documentation is forAWS Secrets Manager v1.6.3(BDK).

Ensure that you have installed or connected theAWS Secrets Managerbook and created a new playground before using these automation procedures.

## hashtagto get a (secret) fromsecrets manager

Retrieves a secret from AWS Secrets Manager

Input Concepts

secret name

The name or ARN of the secret to retrieve

(no default)

Output Concepts

the secret: The secret value as a dictionary

## hashtagto list (secrets) fromsecrets manager

Lists all secrets available in AWS Secrets Manager

Input Concepts

max results

The maximum number of secrets to return (default: 100)

Output Concepts

A list of Secret objects (without the actual secret values)

aws secret information

Last updated3 months ago

Was this helpful?
