---
title: API Keys | Kognitos Documentation
url: https://docs.kognitos.com/account-management/api-keys
description: Learn how to create and manage API keys in Kognitos.
---

# API Keys | Kognitos Documentation

## hashtagOverview

Kognitos provides a self-service console for creating and managing API keys. Keys can be scoped to an entireorganizationor a specificagent, depending on the level of access required.

## hashtagCreating and Managing API Keys

API keys can be created and managed by:

- Organization Admins: Can create and manage organization-level and agent-level keys.

Organization Admins: Can create and manage organization-level and agent-level keys.

- Agent Admins: Can create and manage only agent-level keys.

Agent Admins: Can create and manage only agent-level keys.

### hashtagAPI Key Creation

An organization can have up to10 API keysin total, including organization-level and agent-level keys. Follow these steps to create a new one:

Navigate to API Keys

Click on theuser iconin the top right, then navigate toAPI Keys.

New API Key

Click onNew API Key.

Configure and Create

Configure your key'sNameandScope. If scoping the key to an agent, select the agent from the dropdown menu. Then, click onCreateto generate your secret key.

Secure Your Secret Key

Copy and save your secret key. Then, click onDone.

For security reasons, the secret won’t be accessible again through Kognitos. If you lose it, you'll need to generate a new one.

### hashtagAPI Key Management

Click the three-dot menu (⋮) to the right of an API key to access management options. From there, you canedit,delete, or check theusageof an existing key.

#### hashtagEdit

API keys can be renamed at any time. However, a key'sscope(organization or agent) cannot be changed after creation.

#### hashtagUsage

Usage displays the rate limits, quotas, and utilization details for a given key.

#### hashtagDelete

API keys do not expire automatically. If a key is no longer needed, you can delete it to revoke access immediately.

## hashtagTroubleshooting

### hashtag1. Error: "access not permitted" orstatusCode: 401

This error typically means your API key is invalid or has been revoked. If a key was working previously but is now returning this error, it may have been deleted by an administrator.

Contact yourAdminto confirm the status of your key. They can verify if the key is still active and provide you with a new one if needed.

### hashtag2. Unable to create a new API key

If you're an admin and can't create new API keys, you may have reached your organization's limit. An organization can have up to10 API keysin total, including organization-level and agent-level keys. You'll need to delete an existing, unused API key to free up a slot before you can create a new one.

Here to Help!

If you have questions or need assistance with API Keys, please contact our support team at[email protected]envelopeor via our platform'sSupport AI Assistance Chat(preferred).

Last updated4 months ago

Was this helpful?
