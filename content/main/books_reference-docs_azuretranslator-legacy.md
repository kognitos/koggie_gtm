---
title: Azure Translator (Legacy) | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/azuretranslator-legacy
description: 
---

# Azure Translator (Legacy) | Books | Kognitos Documentation

This reference documentation is for theLegacyAzure Translator book. Refer to the latest versionhere.

## hashtagOverview

TheAzure TranslateBook integrates with Azure Translate, allowing you to automate language translation in your processes.

## hashtagPrerequisites

### hashtag1. Learning the Translator Book

To work with these operations, you must firstlearnthe Translator Book in Kognitos. To do so:

- In the left sidebar, click onBooks → All Books.

In the left sidebar, click onBooks → All Books.

- Search forTranslatorand click on the book.

Search forTranslatorand click on the book.

- Click onInstall.

Click onInstall.

### hashtag2. Azure Setup

These are prerequisite steps for configuration within Azure.

#### hashtagCreate an Azure Storage Account

- Open theAzure Portaland go toStorage accountsfrom the menu.

Open theAzure Portaland go toStorage accountsfrom the menu.

- ClickCreate.

ClickCreate.

- Provide the necessary details, including:SubscriptionResource GroupStorage Account NameRegion

Provide the necessary details, including:

- Subscription

Subscription

- Resource Group

Resource Group

- Storage Account Name

Storage Account Name

- UnderPerformance, selectStandard.

UnderPerformance, selectStandard.

- ForRedundancy, chooseLRS (Locally Redundant Storage).

ForRedundancy, chooseLRS (Locally Redundant Storage).

- In theAdvancedtab, enable:Secure transferAnonymous access to individual containersStorage account key access

In theAdvancedtab, enable:

- Secure transfer

Secure transfer

- Anonymous access to individual containers

Anonymous access to individual containers

- Storage account key access

Storage account key access

- Review your settings, then clickReview + Createto finalize.

Review your settings, then clickReview + Createto finalize.

#### hashtagCreate a Container in Azure

- Navigate to your new storage account in theAzure Portal.

Navigate to your new storage account in theAzure Portal.

- In the left menu of the storage account, scroll to theData storagesection and selectContainers.

In the left menu of the storage account, scroll to theData storagesection and selectContainers.

- Click on+ Container.

Click on+ Container.

- Provide a name for your container.

Provide a name for your container.

- Set the level of anonymous access for the containers and blobs.

Set the level of anonymous access for the containers and blobs.

#### hashtagCreate a Translator in Azure

- Open the portal menu and go toAll Services.

Open the portal menu and go toAll Services.

- Search for"Translators". SelectTranslatorunder Azure AI services.

Search for"Translators". SelectTranslatorunder Azure AI services.

- Click onCreate Translator.

Click onCreate Translator.

- Fill in theProject DetailsandInstance Detailsfor your translator.

Fill in theProject DetailsandInstance Detailsfor your translator.

- Click onReview + create.

Click onReview + create.

- After your translator has been created, you will need to retrieve your translator key fromKeys and Endpoint.

After your translator has been created, you will need to retrieve your translator key fromKeys and Endpoint.

### hashtag3. Connecting to the Translator in Kognitos

After the Book is learned and the translator infrastructure is set up in Azure, you’ll need to connect to the translator within the Kognitos platform. Add the following lines to your Playground or Processes to establish the connection.

#### hashtagParameters

- translator name: The name of the Azure translator.

translator name: The name of the Azure translator.

- translator key: The key for the Azure translator.

translator key: The key for the Azure translator.

- storage account name: The name of the Azure storage account.

storage account name: The name of the Azure storage account.

- storage account key: The key for the Azure storage account.

storage account key: The key for the Azure storage account.

- container name: The name of the Azure container.

container name: The name of the Azure container.

Kognitos will attempt to connect to the translation service using the provided credentials. If the connection is successful, you can proceed with translation operations. Otherwise, please verify your credentials and try again.

Last updated4 months ago

Was this helpful?
