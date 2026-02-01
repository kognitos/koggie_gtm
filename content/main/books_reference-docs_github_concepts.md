---
title: Concepts | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/github/concepts
description: Concepts used in GitHub book.
---

# Concepts | Books | Kognitos Documentation

The following documentation is forGitHub v2.0.1(BDK).

### hashtagGithub issue

GitHub Issue Wrapper class.

The number of the issue. Optional since is None in case of creating an issue.

optional[number]

The title of the issue. Optional since can be None in case of editing an issue.

optional[text]

The body of the issue. Optional since can be None in case of editing an issue.

optional[text]

The state of the issue. Optional since is None in case of creating an issue.

optional[text]

The labels of the issue. Optional since can be None in case of editing an issue.

optional[list of github label]

The user of the issue. Optional since is None in case of creating an issue.

optional[github user]

### hashtagGithub label

GitHub Label Wrapper class.

The color of the label.

description

The description of the label.

optional[text]

The name of the label.

The URL of the label.

### hashtagGithub user

GitHub User Wrapper class.

The login of the user.

optional[text]

The ID of the user.

optional[number]

The type of the user.

optional[text]

### hashtagGithub pull request

GitHub Pull Request Wrapper class.

The number of the pull request. Optional since is None in case of creating a pull request.

optional[number]

The head of the pull request. Optional since can be None in case of editing a pull request.

optional[github pull request part?ortext]

The title of the pull request. Optional since can be None in case of editing a pull request.

optional[text]

The base of the pull request. Optional since can be None in case of editing a pull request.

optional[github pull request part?ortext]

The body of the pull request. Optional since can be None in case of editing a pull request.

optional[text]

The state of the pull request. Optional since is None in case of creating a pull request.

optional[text]

### hashtagGithub commit

GitHub Commit Wrapper class.

The commit.

optional[github git commit]

The SHA of the commit.

optional[text]

The commit stats.

optional[github commit stats]

The URL of the commit.

optional[text]

### hashtagGithub git commit

GitHub Git Commit Wrapper class.

The author of the commit.

optional[github git author]

The committer of the commit.

optional[github git author]

The message of the commit.

optional[text]

The SHA of the commit.

optional[text]

### hashtagGithub commit stats

GitHub Commit Stats Wrapper class.

The total number of commits.

The number of deletions.

The number of additions.

### hashtagGithub repository

GitHub Repository Wrapper class.

branches_url

The branches URL.

commits_url

The commits URL.

description

The description of the repository.

git_commits_url

The git commits URL.

git_tags_url

The git tags URL.

The git URL.

The name of the repository.

### hashtagGithub team

GitHub Team Wrapper class.

The ID of the team.

The URL of the team.

The name of the team.

The slug of the team.

description

The description of the team.

The privacy of the team.

The permission of the team.

The members of the team.

optional[list of github user]

members_url

The members URL of the team.

optional[text]

repositories_url

The repositories URL of the team.

Last updated11 days ago

Was this helpful?
