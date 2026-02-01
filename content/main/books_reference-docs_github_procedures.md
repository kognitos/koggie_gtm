---
title: Procedures | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/github/procedures
description: Automation procedures in the GitHub book.
---

# Procedures | Books | Kognitos Documentation

The following documentation is forGitHub v2.0.1(BDK).

Ensure that you have installed or connected theGitHubbook and created a new playground before using these automation procedures.

## hashtagto create a (pull request) in a repository source

Create a pull request for a specified GitHub repository.

Input Concepts

repository source

The source of the repository. It is a combination of the owner and the repository name, separated by a forward slash. For example, 'torvalds/linux'.

conceptualortext

(no default)

pull request

The details required to create a pull request. It includes the title, head, base, and body.

github pull request

(no default)

Output Concepts

pull request

The pull request just created.

github pull request

Create a pull request from a repository

## hashtagto create an (issue) in a repository source

Create an issue for a specified GitHub repository.

Input Concepts

repository source

The source of the repository. It is a combination of the owner and the repository name, separated by a forward slash. For example, 'torvalds/linux'.

conceptualortext

(no default)

The details required to create an issue. It includes the title, and can contain body.

github issue

(no default)

Output Concepts

The issue just created.

github issue

Create an issue from a repository

## hashtagto get the (commits) from a repository source

Get the commits from a GitHub repository.

Input Concepts

repository source

The source of the repository. It is a combination of the owner and the repository name, separated by a forward slash. For example, 'torvalds/linux'.

conceptualortext

(no default)

The branch to fetch commits from. Defaults to 'main'.

Output Concepts

A list of commits with details such as commit message, author, and date.

github commit

Retrieve the list of commits from the main branch of a repository

Retrieve the list of commits from a specific branch of a repository

Retrieve the list of commits that were committed in the specified time period

## hashtagto get the (issues) from a repository source

Get the issues from a GitHub repository.

Input Concepts

repository source

The source of the repository. It is a combination of the owner and the repository name, separated by a forward slash. For example, 'torvalds/linux'.

conceptualortext

(no default)

The state of the issues to fetch. Defaults to 'open'.

Output Concepts

A list of issues with details such as title, description, and URL.

github issue

Retrieve the list of issues from a repository

Retrieve the list of closed issues from a repository

## hashtagto get the (pull request) from a repository source

Get a pull request from a GitHub repository.

Input Concepts

repository source

The source of the repository. It is a combination of the owner and the repository name, separated by a forward slash. For example, 'torvalds/linux'.

conceptualortext

(no default)

The number of the pull request to fetch.

(no default)

Output Concepts

pull request

A pull request with details such as title, description, and URL.

github pull request

Retrieve the list of open pull requests from a repository

## hashtagto get the (pull requests) from a repository source

Get the pull requests from a GitHub repository.

Input Concepts

repository source

The source of the repository. It is a combination of the owner and the repository name, separated by a forward slash. For example, 'torvalds/linux'.

conceptualortext

(no default)

The state of the pull requests to fetch. Defaults to 'open'.

Output Concepts

pull requests

A list of pull requests with details such as title, description, and URL.

github pull request

Retrieve the list of pull requests from a repository

Retrieve the list of open pull requests from a repository

## hashtagto get the (repositories) from a source organization

Get the repositories from a GitHub organization.

Input Concepts

source organization

The source organization to fetch repositories from.

conceptualortext

(no default)

Output Concepts

repositories

A list of repositories with details such as repository name, description, and URL.

github repository

Retrieve the list of repositories from an organization

## hashtagto get the (team) from a source organization

Get a team from a GitHub organization.

Input Concepts

source organization

The source organization to fetch team from.

conceptualortext

(no default)

The slug of the team to fetch.

(no default)

Output Concepts

A team with details such as team name.

github team

Retrieve the team from an organization

## hashtagto get the (teams) from a source organization

Get the teams from a GitHub organization.

Input Concepts

source organization

The source organization to fetch teams from.

conceptualortext

(no default)

Output Concepts

A list of teams with details such as team name.

github team

Retrieve the list of teams from an organization

## hashtagto get the (user) from a name

Get a user from GitHub.

Input Concepts

The name of the user to fetch.

conceptualortext

(no default)

Output Concepts

The user details such as name, login, and email.

github user

Retrieve the details of a user

## hashtagto request reviewers for a (pull request)

Request reviewers for a pull request in a specified GitHub repository.

Input Concepts

pull request

The pull request.

github pull request

(no default)

repository source

The source of the repository. It is a combination of the owner and the repository name, separated by a forward slash. For example, 'torvalds/linux'.

(no default)

The list of reviewers to request.

(no default)

The list of team reviewers to request. Defaults to None.

(no default)

Output Concepts

pull request

The pull request with the reviewers just requested.

github pull request

Request reviewers for a pull request to request reviewers for a github pull request the user names are "ignacio-kognitos", "other-user" the team names are "kognitos-team"

## hashtagto update a (pull request) in a repository source

Update a pull request for a specified GitHub repository.

Input Concepts

repository source

The source of the repository. It is a combination of the owner and the repository name, separated by a forward slash. For example, 'torvalds/linux'.

conceptualortext

(no default)

pull request

The details required to update a pull request. It includes the pull request number and can contain title, body, and state.

github pull request

(no default)

Output Concepts

pull request

The pull request just updated.

github pull request

Update a pull request from a repository

## hashtagto update an (issue) in a repository source

Update an issue for a specified GitHub repository.

Input Concepts

repository source

The source of the repository. It is a combination of the owner and the repository name, separated by a forward slash. For example, 'torvalds/linux'.

conceptualortext

(no default)

The details required to update an issue. It includes the issue number and can contain title, body, and state.

github issue

(no default)

Output Concepts

The issue just updated.

github issue

Update an issue from a repository

Last updated11 days ago

Was this helpful?
