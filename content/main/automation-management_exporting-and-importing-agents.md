---
title: Exporting and Importing Agents | Kognitos Documentation
url: https://docs.kognitos.com/automation-management/exporting-and-importing-agents
description: Learn how to export and import automation agents.
---

# Exporting and Importing Agents | Kognitos Documentation

## hashtagOverview

Kognitos supports the ability toexportautomation agents from one environment andimportthem into another. This allows you to move published automation content across agents in a controlled way.

## hashtagExporting an Agent

Exporting lets you download a snapshot of an agent’spublished state. The export includes only published processes, learnings, and books — draft processes, playgrounds, and configuration credentials arenotexported. Anyone with access to the agent can export it.

### hashtagHow to Export an Agent

Navigate to Agents

Open the agent menu and selectView All.

Select an Agent

Check the box next to the agent you want to export.

Start Export

Click onActions, then selectExportfrom the dropdown.

Confirm Export

In the confirmation popup, click onExportagain. This will download a.jsonfile containing the agent's current state, which can be later imported into a new or existing agent.

## hashtagImporting an Agent

You can import an agent using a.jsonfile generated from the export process. There are two ways to do this — into anew agentorinto an existing agent. All imported items are added asdrafts. The agent's published content isnotaffected unless you review and publish the imported content.

#### hashtag1. Import into a New Agent

Use this option to create anew agent.

#### hashtag2. Import into an Existing Agent

This option allows you to update anexisting agentand is available only to agentadmins.

### hashtagHow to Import an Agent

Navigate to Agents

Open the agent menu and selectView All.

Start Import

Click onImportto start the import.

Add Import Details

- Upload a.jsonfile of an exported agent.

Upload a.jsonfile of an exported agent.

- Chooseoneof the following options:SelectCreate New Agentand provide a name for the new agent.SelectImport to Existing Agentand select an existing agent from the dropdown menu.Note: This option is only available to agent admins.

Chooseoneof the following options:

- SelectCreate New Agentand provide a name for the new agent.

SelectCreate New Agentand provide a name for the new agent.

- SelectImport to Existing Agentand select an existing agent from the dropdown menu.Note: This option is only available to agent admins.

SelectImport to Existing Agentand select an existing agent from the dropdown menu.Note: This option is only available to agent admins.

- ClickNextto continue.

ClickNextto continue.

Review and Confirm

Review the summary of the import and clickImportto finish importing.

By default, all items are selected for import. You can uncheck items to exclude them.

Last updated5 months ago

Was this helpful?
