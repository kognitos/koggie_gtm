---
title: Procedures | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/ec2/procedures
description: Automation procedures in the AWS EC2 book.
---

# Procedures | Books | Kognitos Documentation

The following documentation is forAWS EC2 v1.6.3(BDK).

Ensure that you have installed or connected theAWS EC2book and created a new playground before using these automation procedures.

## hashtagto attach a rule to a security group

Adds an ingress or egress rule to a security group.

Input Concepts

security group

A security group to authorize

ec2 security group

(no default)

The type of rule to add (ingress or egress)

conceptualortext

(no default)

ip permissions

A list of IpPermission objects representing the permissions to authorize

ec2 ip permission

(no default)

## hashtagto get (security groups) fromec2

Gets security groups from EC2

Output Concepts

security groups

A list of security groups.

Get all security groups from EC2

Get security groups filtered by name

## hashtagto get some (security group's rules)

Gets security group rules from EC2

Input Concepts

security group

The security group to get rules for.

ec2 security group

(no default)

Output Concepts

security group's rules

A list of security group rules.

ec2 security group rule

Get security group rules from a specific security group

## hashtagto revoke a security group rule

Revokes egress from a security group

Input Concepts

security group rule

A security group rule to be revoked

ec2 security group rule

(no default)

Revoke all existing security group rules from a security group

Last updated3 months ago

Was this helpful?
