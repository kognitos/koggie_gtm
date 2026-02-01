---
title: Concepts | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/ec2/concepts
description: Concepts used in AWS EC2 book.
---

# Concepts | Books | Kognitos Documentation

The following documentation is forAWS EC2 v1.6.3(BDK).

### hashtagEc2 security group

Represents an EC2 security group.

The ID of the security group.

The name of the security group.

description

The description of the security group.

The ID of the VPC to which the security group belongs.

A list of tags associated with the security group.

list of aws tag

### hashtagAws tag

Represents an AWS tag.

The key of the tag.

The value of the tag.

### hashtagEc2 ip permission

Represents an IP permission for an EC2 security group.

ip_protocol

The IP protocol for the permission.

The start port for the permission.

The end port for the permission.

The list of IP ranges for the permission.

optional[list of json]

ipv6_ranges

The list of IPv6 ranges for the permission.

optional[list of json]

prefix_list_ids

The list of prefix list IDs for the permission.

optional[list of json]

### hashtagEc2 security group rule

Represents an EC2 security group rule.

The ID of the security group rule.

The ID of the security group.

group_owner_id

The AWS account ID of the security group owner.

Whether the rule is an egress rule (True) or ingress rule (False).

ip_protocol

The IP protocol for the rule.

The start port (or ICMP type) for the rule.

The end port (or ICMP code) for the rule.

A list of tags associated with the security group rule.

list of aws tag

The ARN of the security group rule.

The IPv4 CIDR range for the rule, if applicable.

optional[text]

#### hashtagConcept attribute specifications

ip_ranges (ec2 ip permission)

description

optional[text]

optional[text]

ipv6_ranges (ec2 ip permission)

description

optional[text]

optional[text]

prefix_list_ids (ec2 ip permission)

description

optional[text]

prefix_list_id

optional[text]

Last updated3 months ago

Was this helpful?
