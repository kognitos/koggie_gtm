---
title: Discoverable Procedures | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/salesforce/discoverable-procedures
description: These procedures are created automatically when you discover specific Salesforce objects. Each discovery creates ten different procedures for that object.
---

# Discoverable Procedures | Books | Kognitos Documentation

## hashtagDiscovery Process

Command:discover [OBJECT_TYPE] from salesforce

It can be both a string or a noun phrase, where the Object Type is the Salesforce Object’s name.

#### hashtagEntity Name Pluralization

The Salesforce book automatically creates proper plural forms for discovered objects using intelligent pluralization rules.

create a contact

retrieve contacts

opportunity

create an opportunity

retrieve opportunities

create an account

retrieve accounts

create a case

retrieve cases

Finding Object Names

- Salesforce object names are typically lowercase (e.g., "contact", "opportunity")

Salesforce object names are typically lowercase (e.g., "contact", "opportunity")

- Custom objects usually end with "__c" (e.g., "custom_product__c")

Custom objects usually end with "__c" (e.g., "custom_product__c")

- Use Salesforce setup to find exact object API names if needed

Use Salesforce setup to find exact object API names if needed

## hashtagDiscoverable Procedures

After discovery, you can use these ten generated procedures for that object.

### hashtag1. Create a Single Record

Command:create a [object] in salesforce

Purpose: Create a new record of the discovered object type.

Required Parameters:

- the body is [DATA]- The data for the new record

the body is [DATA]- The data for the new record

Returns: The newly created record with all fields populated.

### hashtag2. Create Multiple Records

Command:create some [objects] in salesforce

Purpose: Create multiple records of the same object type in a single operation.

Required Parameters:

- the bodies are [DATA_LIST]- List of data for multiple records

the bodies are [DATA_LIST]- List of data for multiple records

Returns: List of newly created records.

Important Notes:

- If any record fails, all successfully created records are automatically rolled back

If any record fails, all successfully created records are automatically rolled back

- Provides transactional safety for bulk operations

Provides transactional safety for bulk operations

### hashtag3. Retrieve Records

Command:retrieve [objects] from salesforce

Purpose: Get a list of records from the discovered object type.

Optional Parameters:

- the limit is [NUMBER]- Maximum number of records to retrieve (default: 10)

the limit is [NUMBER]- Maximum number of records to retrieve (default: 10)

- the offset is [NUMBER]- Number of records to skip for pagination

the offset is [NUMBER]- Number of records to skip for pagination

- whose [FIELD] is [VALUE]- Filter records by specific criteria

whose [FIELD] is [VALUE]- Filter records by specific criteria

Returns: A list of records matching the criteria.

### hashtag4. Delete Single Record

Command:delete a [object] in salesforce

Purpose: Delete a specific record.

Required Parameters:

- the [object] is [RECORD]- The record to delete

the [object] is [RECORD]- The record to delete

Returns: None (deletes the record).

### hashtag5. Delete Multiple Records

Command:delete some [objects] in salesforce

Purpose: Delete multiple records in a single operation.

Required Parameters:

- the [objects] are [RECORD_LIST]- The records to delete

the [objects] are [RECORD_LIST]- The records to delete

Returns: None (deletes the records).

Important Notes:

- Reports any records that failed to delete

Reports any records that failed to delete

- Continues processing even if some deletions fail

Continues processing even if some deletions fail

### hashtag6. Update Record

Command:update a [object] in salesforce

Purpose: Update an existing record with new data.

Required Parameters:

- the [object] is [RECORD]- The record with updated data

the [object] is [RECORD]- The record with updated data

Returns: None (updates the record).

Important Notes:

- Automatically filters out non-updatable fields

Automatically filters out non-updatable fields

- Only sends changed data to Salesforce

Only sends changed data to Salesforce

### hashtag7. Upload Attachment

Command:upload an attachment to a [object]

Purpose: Attach a file to a Salesforce record.

Required Parameters:

- the [object] is [RECORD]- The record to attach the file to

the [object] is [RECORD]- The record to attach the file to

- the file is [FILE]- The file to upload

the file is [FILE]- The file to upload

- the file name is [NAME]- Name for the attached file

the file name is [NAME]- Name for the attached file

Returns: None (uploads the attachment).

### hashtag8. Download Attachments

Command:download attachments from a [object]

Purpose: Download all attachments from a Salesforce record.

Required Parameters:

- the [object] is [RECORD]- The record to download attachments from

the [object] is [RECORD]- The record to download attachments from

Optional Parameters:

- whose [FIELD] is [VALUE]- Filter attachments by criteria

whose [FIELD] is [VALUE]- Filter attachments by criteria

Returns: List of file attachments.

### hashtag9. Delete Attachments

Command:delete the attachments from a [object]

Purpose: Delete all attachments from a Salesforce record.

Required Parameters:

- the [object] is [RECORD]- The record to delete attachments from

the [object] is [RECORD]- The record to delete attachments from

Optional Parameters:

- whose [FIELD] is [VALUE]- Filter which attachments to delete

whose [FIELD] is [VALUE]- Filter which attachments to delete

Returns: None (deletes the attachments).

### hashtag10. Submit for Approval

Command:submit a [object] for approval

Purpose: Submit a record to a Salesforce approval process.

Required Parameters:

- the [object] is [RECORD]- The record to submit (must have Id and OwnerId)

the [object] is [RECORD]- The record to submit (must have Id and OwnerId)

- the process is [PROCESS_NAME]- Name of the approval process

the process is [PROCESS_NAME]- Name of the approval process

Optional Parameters:

- the comment is [COMMENT]- Comment to include with submission

the comment is [COMMENT]- Comment to include with submission

Returns: None (submits for approval).

Important Notes:

- Record must have both Id and OwnerId fields

Record must have both Id and OwnerId fields

- Process name must match exactly with Salesforce approval process

Process name must match exactly with Salesforce approval process

- Will error if record is already in an approval process

Will error if record is already in an approval process

## hashtagTips for Success

#### hashtagObject Discovery

- Use lowercase object names: "contact", "opportunity", "account"

Use lowercase object names: "contact", "opportunity", "account"

- For custom objects, include the "__c" suffix: "custom_product__c"

For custom objects, include the "__c" suffix: "custom_product__c"

- Discover objects before using their specific procedures

Discover objects before using their specific procedures

#### hashtagWorking with Data

- Usecreate a jsonto build record structures

Usecreate a jsonto build record structures

- Useset the [variable]'s "[field]" to "[value]"to populate fields

Useset the [variable]'s "[field]" to "[value]"to populate fields

- Check Salesforce field requirements (required vs optional fields)

Check Salesforce field requirements (required vs optional fields)

#### hashtagBulk Operations

- Use plural procedures for efficiency with multiple records

Use plural procedures for efficiency with multiple records

- Bulk create operations provide automatic rollback on failure

Bulk create operations provide automatic rollback on failure

- Bulk delete continues processing even if individual records fail

Bulk delete continues processing even if individual records fail

#### hashtagAttachments

- Attachments are stored using Salesforce's ContentDocument system

Attachments are stored using Salesforce's ContentDocument system

- File name parameter is required for uploads

File name parameter is required for uploads

- Downloads return all attachments as separate files

Downloads return all attachments as separate files

#### hashtagApprovals

- Records need the Id and OwnerId fields for approval submission

Records need the Id and OwnerId fields for approval submission

- Process names must match exactly with the Salesforce setup

Process names must match exactly with the Salesforce setup

- Check the approval process configuration in Salesforce admin

Check the approval process configuration in Salesforce admin

#### hashtagReports

- Export options include Excel files and data tables

Export options include Excel files and data tables

- Data table export is useful for further data processing

Data table export is useful for further data processing

- Report filters use standard Salesforce field names

Report filters use standard Salesforce field names

## hashtagTroubleshooting

#### hashtagConnection Issues

- Username/Password: Verify credentials and security token are current

Username/Password: Verify credentials and security token are current

- Permissions: In case of authorization errors, check user has appropriate Salesforce permissions

Permissions: In case of authorization errors, check user has appropriate Salesforce permissions

#### hashtagDiscovery Issues

- Use exact Salesforce API object names (usually lowercase)

Use exact Salesforce API object names (usually lowercase)

- Check object exists and is accessible to your user

Check object exists and is accessible to your user

- Custom objects need "__c" suffix

Custom objects need "__c" suffix

#### hashtagRecord Operations

- Required Fields: Check Salesforce object setup for required fields

Required Fields: Check Salesforce object setup for required fields

- Field Names: Use exact API field names (case-sensitive)

Field Names: Use exact API field names (case-sensitive)

- Permissions: Ensure user can create/update/delete specific objects

Permissions: Ensure user can create/update/delete specific objects

#### hashtagAttachment Issues

- File Size Limits: Salesforce has file size restrictions

File Size Limits: Salesforce has file size restrictions

- File Types: Some file types may be blocked by organization settings

File Types: Some file types may be blocked by organization settings

- Storage Limits: Check available file storage in Salesforce

Storage Limits: Check available file storage in Salesforce

#### hashtagApproval Issues

- Process Names: Must match approval process exactly as configured

Process Names: Must match approval process exactly as configured

- Record State: Records already in approval can't be resubmitted

Record State: Records already in approval can't be resubmitted

- Required Fields: Record must have both Id and OwnerId populated

Required Fields: Record must have both Id and OwnerId populated

#### hashtagEmail Issues

- Email Addresses: All recipients must be valid email addresses

Email Addresses: All recipients must be valid email addresses

- Email Deliverability: Check Salesforce email deliverability settings

Email Deliverability: Check Salesforce email deliverability settings

- Permissions: User must have permission to send emails through Salesforce

Permissions: User must have permission to send emails through Salesforce

Last updated4 months ago

Was this helpful?
