---
title: BYOM | Kognitos Documentation
url: https://docs.kognitos.com/guides/automation-management/byom
description: Securely connect and manage your LLM providers with custom API credentials.
---

# BYOM | Kognitos Documentation

### hashtagOverview

Bring Your Own Model (BYOM)provides a secure way to add, connect, and manage API credentials for your preferred Large Language Model (LLM) providers. By default, Kognitos usesOpenAIandGemini, but BYOM allows you to configure alternative or custom providers at the agent level.

### hashtagSupported Providers

BYOM supports the following providers and models:

GPT-4o, GPT-4o Mini, gpt-4o-realtime-preview, gpt-4.1-mini

Google Gemini

Gemini 2.5 Pro, Gemini 2.0 Flash, gemini-2.5-flash, gemini-2.5-flash-lite

Google Vertex AI

Gemini 2.5 Pro, Gemini 2.0 Flash, gemini-2.5-flash, gemini-2.5-flash-lite

Anthropic Claude

claude-opus-4, claude-sonnet-4.5, claude-haiku-4.5

Any custom LLM modelnotlisted above

### hashtagConfiguration

Follow these steps to configure an LLM provider in Kognitos:

Note: BYOM must be configured separately for eachagent.

#### hashtagNavigate to BYOM

Click theuser icon👤 in the top right corner and selectBYOMfrom the dropdown menu.

#### hashtagChoose a Provider

UnderAdd an LLM provider, clickSet Upnext to the provider you wish to configure(e.g., OpenAI, Google Gemini, Anthropic Claude, Custom, etc.).

#### hashtagEnter API Credentials

Enter the required credentials for the selected provider(e.g., API key, service account JSON, project ID, region). Required fields vary by provider.

#### hashtagSave Configuration

ClickSave Changesto apply your configuration.

### hashtagUsage

After configuring models through BYOM, automations will use your stored credentials when executingLLM proceduresarrow-up-right.

#### hashtagStandard Providers

For standard providers like OpenAI, Google Gemini, or Anthropic, reference the model directly in your automation. The example below uses theextract dataarrow-up-rightprocedure with an OpenAI model:

#### hashtagCustom Providers

For custom models, specify theprovider ID, indented within the LLM procedure:

For example:

Retrieve the ID from the BYOM interface after saving a custom LLM configuration:

Last updated2 months ago

Was this helpful?
