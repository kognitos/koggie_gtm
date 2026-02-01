---
title: Users, Roles and Permissions | Kognitos Documentation
url: https://docs.kognitos.com/account-management/users-roles-and-permissions
description: An overview of users, roles, and permissions in Kognitos.
---

# Users, Roles and Permissions | Kognitos Documentation

#### hashtagEnhanced Role-Based Access Control

This document describes ournew enhanced RBAC system, which is currently being rolled out to organizations gradually. If your organization hasn't been migrated yet, see theLegacy Roles & Permissionssection at the bottom of this page. Contact our support team at[email protected]or via ourin-app chat(preferred)for more information.

## hashtagOverview

Kognitos uses arole-based access control (RBAC)system to manage who can access your automations and what actions they can perform. Roles can be assigned at two levels:organization-wide, which grants access and permissions across all agents in the organization, oragent-specific, which limits access and permissions to individual agents.

## hashtagUser Management

Auserin Kognitos is an individual who is a member of an organization and has been granted access to interact with the platform. Users are assigned specific roles that determine their permissions and what actions they can perform.

To manage an agent's users, click on theuser icon(👤) in the top-right →Users.

OnlyOrganization Owners,CXOs, andAdminscan add, edit, or remove users.

### hashtagAdding Users

To add a new user, click on theuser icon(👤) in the top-right →Users→Invite User. Select the user'sroleand enter theiremail address. They will receive an email invitation to join your agent.

### hashtagEditing & Removing Users

To change a user's role or remove a user, click on the user icon in the top-right👤→Users. Then click on the menu (⋮) next to a user and select eitherChange RoleorRemove from Agent.

## hashtagRoles & Permissions

### hashtagOrganization-Level Roles

Organization-level roles provide broad access across all agents in an organization. These roles are designed for executives, administrators, and support personnel who need organization-wide visibility and control for management, oversight, and troubleshooting.

#### hashtag1. Organization Owner

AnOrganization Ownerhas complete administrative control over the entire organization and all its agents. This person can perform all actions across the organization, including creating the first agent and managing agents, users, processes, connections, and integrations.

This role is automatically assigned to whoever owns the organization and cannot be manually assigned to other users. However, ownership can betransferredby either the current owner or the Kognitos support team.

#### hashtag2. Support

TheSupportrole provides near-complete administrative access for troubleshooting and managing your organization. Users with this role have the same permissions as Organization Owners, with one exception: they cannot create new agents. This ensures support personnel can assist with configuration, user management, process debugging, and operational issues without modifying the organization's agent structure.

#### hashtag3. CXO

AnCXOhas high-level oversight across the organization with read-only access to analytics, metrics, and dashboards. This role is designed for those who need visibility into organizational performance, rather than operational access.

#### hashtagOrganization-Level Permissions

View Agents

Create Agents

Edit Agents

Delete Agents

Manage Users(Add, Edit, Remove)

Manage Connections(Add, Edit, Remove)

Manage Books(Add, Edit, Remove)

Manage Playgrounds(Create, Edit, Delete)

View Processes

Manage Processes(Create, Delete, Edit)

Manage Runs(View, Start, Edit, Archive)

Manage Exceptions(View, Resolve)

Manage Learnings(Create, Edit, Delete)

View Dashboard

Manage ROI Goals

Manage Agent-Level API Keys(View, Add, Edit, Remove)

Manage Org-Level API Keys(View, Add, Edit, Remove)

### hashtagAgent-Level Roles

Agent-level roles are scoped to individual agents. Unlike organization-level roles that span the entire organization, users within an agent can have different roles based on their responsibilities in the automation workflow.

#### hashtag1. Admin

AnAdminhas complete control within an agent. This role can manage all aspects of the agent, making them responsible for overall administration and configuration.

#### hashtag2. Author

AnAuthorfocuses on developing and testing automations within their agent. This role can create, edit, and test automations, manage integrations, and work with learnings, but cannot publish processes, create or update credentials, or access dashboards and API keys.

#### hashtag3. Operator

AnOperatorcan run and monitor automation processes. This role is focused on day-to-day execution, resolving exceptions, and managing learnings without the ability to modify the processes themselves.

#### hashtag4. Integrator

AnIntegratormanages connections, credentials, and integrations within their agent. This role has no access to processes, runs, dashboards, or learnings, ensuring clear separation between integration management and process execution.

#### hashtagAgent-Level Permissions

Edit/Delete Agent

Manage Users(Add, Edit, Remove)

Manage API Keys(View, Add, Edit, Remove)

View Connections

Manage Connections(Add, Edit, Remove)

Manage Books(Add, Edit, Remove)

View/Create Playgrounds

Edit/Delete Playgrounds

View Processes

Manage Processes(Create, Edit, Delete)

Archive Draft Runs

Archive Published Runs

Manage Exceptions(View, Resolve)

Manage Learnings(Create, Edit, Delete)

Manage Test Suites(Add, Edit)

View Dashboard

Manage Agent-Level API Keys(View, Add, Edit, Remove)

Manage Org-Level API Keys(View, Add, Edit, Remove)

## hashtagOrganization Ownership Transfer

Organization ownership can be transferred to another user when needed, such as during personnel changes or organizational restructuring. Transfers can be initiated by either the current Organization Owner or requested through the Kognitos support team. When ownership is transferred, the previous owner is automatically assigned theAdminrole across all agents in the organization, ensuring continuity while transitioning control to the new owner.

## hashtagLegacy Roles & Permissions

This section describes thelegacy role systemthat is being phased out. If your organization has been migrated to the new RBAC system, refer to theRoles & Permissionssection above.

The legacy system used a simplified two-role model at the agent level:AdminandMember. Admins had full control over the agent, while Members could draft automations, run processes, and handle exceptions, but had limited access to administrative functions.

#### hashtagRole Comparison

Can add new users to an Agent

Cannot add new users to an Agent

Playgrounds

View, create, edit, delete, configure routing

View, create, edit, delete

View, handle, archive

View, handle, archive

View, learn, edit, delete

View, create, edit, delete

View, create, edit, delete, activate, deactivate, duplicate

Process Versions

View and restore process versions

Agent Management

Publish, export, import

Export, import(into new agents only)

Preferences

Enable beta features in user settings

Cannot update preferences

Last updated1 month ago

Was this helpful?
