---
title: Procedures | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/azurekeyvault/procedures
description: Automation procedures in the Azure Key Vault book.
---

# Procedures | Books | Kognitos Documentation

The following documentation is forAzure Key Vault v1.3.2(BDK).

Ensure that you have installed or connected theAzure Key Vaultbook and created a new playground before using these automation procedures.

## hashtagto get (key vaults)

Lists all Key Vaults accessible to the authenticated principal.

Output Concepts

A list of Azure Key Vault references matching the filter expression (if provided).

azure key vault reference

Get all the key vaults in an Azure subscription

Get a specific key vault in an Azure subscription

## hashtagto get a (secret) from a key vault

Gets a secret from a Key Vault.

Input Concepts

The Key Vault from which to retrieve the secret.

azure key vault reference

(no default)

secret name

The name of the secret to retrieve from the Key Vault.

(no default)

Output Concepts

The retrieved secret's value

Get a secret from a Key Vault

## hashtagto list (secrets) in a key vault

Lists all secrets in a Key Vault.

Input Concepts

The Key Vault from which to list secrets.

azure key vault reference

(no default)

Output Concepts

A list of secret names

List all secrets in a Key Vault

Last updated3 months ago

Was this helpful?
