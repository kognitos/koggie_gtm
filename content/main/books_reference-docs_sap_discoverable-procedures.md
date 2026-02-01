---
title: Discoverable Procedures | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/sap/discoverable-procedures
description: These procedures are created automatically when you discover specific entities. Each discovery creates three types of procedures for that entity.
---

# Discoverable Procedures | Books | Kognitos Documentation

## hashtagDiscovery Process

Command:discover "[SERVICE_NAME]/[ENTITY_NAME]" from sap

After discovery, you can use the three generated procedures for that entity:

### hashtagEntity Name Normalization

When you discover an entity, the system automatically converts the technical SAP entity name into a more user-friendly format for use in your procedures.

How Normalization Works:

- Underscores (_) are removed

Underscores (_) are removed

- The name becomes easier to read and type

The name becomes easier to read and type

- The functionality remains exactly the same

The functionality remains exactly the same

A_SalesOrder

ASalesOrder

retrieve some ASalesOrder records from sap

C_MfgQualifnCertBPAssgmt

CMfgQualifnCertBPAssgmt

retrieve some CMfgQualifnCertBPAssgmt records from sap

retrieve some Warehouse records from sap

Finding the Normalized Name:

- When you runretrieve some entities from sap, look for the "reference" field in the results

When you runretrieve some entities from sap, look for the "reference" field in the results

- This shows you exactly what name to use in your procedures

This shows you exactly what name to use in your procedures

- The "discover_call" field also shows the exact command to use

The "discover_call" field also shows the exact command to use

Example from entity retrieval:

In this case, you would useASalesOrderin your procedures after discovery.

### hashtag1. Retrieve Records

Command:retrieve some [EntityName] records from sap

Purpose: Get a list of records from the discovered entity.

Optional Parameters:

- the limit is [NUMBER]- Maximum number of records to retrieve.IMPORTANT: We advise setting a limit when we know a certain entity can have a large quantity of records, since returning all of them can cause the UI to crash.

the limit is [NUMBER]- Maximum number of records to retrieve.IMPORTANT: We advise setting a limit when we know a certain entity can have a large quantity of records, since returning all of them can cause the UI to crash.

- the offset is [NUMBER]- Number of records to skip (for pagination)

the offset is [NUMBER]- Number of records to skip (for pagination)

This procedure follows the filtering way of other KLang procedures. You can use awhoseclause to define the property to filter by.

Returns: A list of records from the SAP entity.

### hashtag2. Create Records

Command:create a [EntityName] record in sap

Purpose: Create a new record in the discovered entity.

Required Parameters:

- the body is [DATA]- The data for the new record

the body is [DATA]- The data for the new record

Returns: The newly created record with all fields populated, including system-generated values.

### hashtag3. Update Records

WARNING: As this is not part of the core Amgen POV, this was implemented in the beginning but has not been thoroughly tested as create and retrieve

Command:update a [EntityName] record in sap

Purpose: Update an existing record in the discovered entity.

Required Parameters:

- the body is [DATA]- The data to update (must include the record ID as it comes from the create and retrieve procedures)

the body is [DATA]- The data to update (must include the record ID as it comes from the create and retrieve procedures)

Returns: The updated record data.

Important Notes:

- Entities with complex keys asidare not yet supported

Entities with complex keys asidare not yet supported

- Update of nested entities is not yet supported.

Update of nested entities is not yet supported.

- The record data must include anidfield to identify which record to update

The record data must include anidfield to identify which record to update

- Only the fields that have changed will be sent to SAP

Only the fields that have changed will be sent to SAP

- The system uses concurrency control to prevent conflicts

The system uses concurrency control to prevent conflicts

Last updated3 months ago

Was this helpful?
