---
title: Concepts | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/pagerduty/concepts
description: Concepts used in PagerDuty book.
---

# Concepts | Books | Kognitos Documentation

The following documentation is forPagerDuty v1.0.3(BDK).

### hashtagPagerduty incident creation payload

Payload for creating a PagerDuty incident.Payload for creating an incident

The title of the incident.

The service the incident is associated with.

The type of the incident.

optional[text]

The priority of the incident.

optional[json]

The urgency of the incident.

optional[text]

The body of the incident.

optional[json]

incident_key

The incident key.

optional[text]

assignments

The assignments of the incident.

optional[list of json]

escalation_policy

The escalation policy of the incident.

optional[json]

conference_bridge

The conference bridge of the incident.

optional[json]

incident_type_name

The incident type name.

optional[text]

### hashtagPagerduty incident

PagerDuty incident data model.A PagerDuty incident.

The ID of the incident.

The type of the incident.

The summary of the incident.

optional[text]

The self URL of the incident.

optional[text]

The HTML URL of the incident.

optional[text]

incident_number

The incident number.

optional[number]

The title of the incident.

optional[text]

The creation time of the incident.

optional[text]

The last update time of the incident.

optional[text]

The status of the incident.

optional[text]

incident_key

The incident key.

optional[text]

The service the incident is associated with.

optional[json]

assignments

The assignments of the incident.

optional[list of json]

assigned_via

The assigned via of the incident.

optional[text]

last_status_change_at

The last status change time of the incident.

optional[text]

resolved_at

The resolution time of the incident.

optional[text]

first_trigger_log_entry

The first trigger log entry of the incident.

optional[json]

alert_counts

The alert counts of the incident.

optional[json]

is_mergeable

Whether the incident is mergeable.

optional[boolean]

incident_type

The type of the incident.

optional[json]

escalation_policy

The escalation policy of the incident.

optional[json]

The teams of the incident.

optional[list of json]

pending_actions

The pending actions of the incident.

optional[list of json]

acknowledgements

The acknowledgements of the incident.

optional[list of json]

last_status_change_by

The last status change by of the incident.

optional[json]

The priority of the incident.

optional[json]

conference_bridge

The conference bridge of the incident.

optional[json]

The urgency of the incident.

optional[text]

The body of the incident.

optional[json]

### hashtagPagerduty incident update payload

Payload for updating a PagerDuty incident.Payload for updating an incident (subset of fields)

The status of the incident.

optional[text]

The resolution of the incident.

optional[text]

The title of the incident.

optional[text]

The priority of the incident.

optional[json]

escalation_level

The escalation level of the incident.

optional[number]

assignments

The assignments of the incident.

optional[list of json]

incident_type_name

The incident type name.

optional[text]

escalation_policy

The escalation policy of the incident.

optional[json]

The urgency of the incident.

optional[text]

conference_bridge

The conference bridge of the incident.

optional[json]

#### hashtagConcept attribute specifications

priority (pagerduty incident creation payload)

optional[text]

optional[text]

optional[text]

optional[text]

body (pagerduty incident creation payload)

optional[text]

optional[any?]

assignments (pagerduty incident creation payload)

optional[text]

optional[json]

escalation_policy (pagerduty incident creation payload)

optional[text]

optional[text]

optional[text]

optional[text]

conference_bridge (pagerduty incident creation payload)

conference_number

optional[text]

conference_url

optional[text]

service (pagerduty incident)

optional[text]

optional[text]

optional[text]

optional[text]

assignments (pagerduty incident)

optional[text]

optional[json]

first_trigger_log_entry (pagerduty incident)

optional[text]

optional[text]

optional[text]

optional[text]

alert_counts (pagerduty incident)

optional[number]

optional[number]

optional[number]

incident_type (pagerduty incident)

optional[text]

escalation_policy (pagerduty incident)

optional[text]

optional[text]

optional[text]

optional[text]

teams (pagerduty incident)

optional[text]

optional[text]

optional[text]

optional[text]

pending_actions (pagerduty incident)

optional[text]

acknowledgements (pagerduty incident)

optional[text]

acknowledger

optional[json]

last_status_change_by (pagerduty incident)

optional[text]

optional[text]

optional[text]

priority (pagerduty incident)

optional[text]

optional[text]

optional[text]

optional[text]

conference_bridge (pagerduty incident)

conference_number

optional[text]

conference_url

optional[text]

body (pagerduty incident)

optional[text]

optional[any?]

priority (pagerduty incident update payload)

optional[text]

optional[text]

optional[text]

optional[text]

assignments (pagerduty incident update payload)

optional[text]

optional[json]

escalation_policy (pagerduty incident update payload)

optional[text]

optional[text]

optional[text]

optional[text]

conference_bridge (pagerduty incident update payload)

conference_number

optional[text]

conference_url

optional[text]

Last updated3 months ago

Was this helpful?
