---
title: Procedures | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/reddit/procedures
description: Automation procedures in the Reddit book.
---

# Procedures | Books | Kognitos Documentation

The following documentation is forReddit v1.0.2(BDK).

Ensure that you have installed or connected theRedditbook and created a new playground before using these automation procedures.

## hashtagto get a (subreddit's latest posts)

Gets the latest (newest) post from a specified subreddit.

Input Concepts

The subreddit to get the post from

reddit subreddit

(no default)

Output Concepts

subreddit's latest posts

A list of the latest reddit posts

reddit post

Get the latest 10 posts from the 'announcements' subreddit.

## hashtagto get a (subreddit's top posts)

Gets the top posts from a specified subreddit.

Input Concepts

The subreddit to get the posts from

reddit subreddit

(no default)

Output Concepts

subreddit's top posts

A list of RedditPost concepts

reddit post

Get the top 10 posts from the 'announcements' subreddit.

## hashtagto get a (subreddit)

Gets information about a subreddit.

Input Concepts

The name of the subreddit (without the r/ prefix)

(no default)

Output Concepts

A Subreddit concept with information about the subreddit

reddit subreddit

Get the 'announcements' subreddit. the name is "announcements"

## hashtagto get some (subreddit's posts)

Gets a Reddit post by its ID.

Input Concepts

The subreddit to get the post from

reddit subreddit

(no default)

Output Concepts

subreddit's posts

A list of reddit posts matching the filters (if provided)

reddit post

Get 10 posts from the 'announcements' subreddit.

Last updated3 months ago

Was this helpful?
