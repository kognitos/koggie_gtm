---
title: Setup | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/custom-books/setup
description: Learn how to set up your custom book project.
---

# Setup | Books | Kognitos Documentation

## hashtagPrerequisites

Ensure the following prerequisites are met and dependencies are installed before proceeding.

1.Python 3.11+arrow-up-right

Pyenv manages Python versions and project dependencies with thepyenv-virtualenvplugin.

- Follow the installation steps forpyenvarrow-up-right.

Follow the installation steps forpyenvarrow-up-right.

- Follow the installation steps forpyenv-virtualenvarrow-up-right.

Follow the installation steps forpyenv-virtualenvarrow-up-right.

Python can be installed with pyenv in the following way:

2.Gitarrow-up-right

3.Dockerarrow-up-right

4.pipxarrow-up-right

5.Poetryarrow-up-right

6.Cookiecutterarrow-up-right

## hashtagSetting Up Your Project

Set up your project using theTemplate, a tool designed to simplify the creation of books.

### hashtag1. Clone and Initialize

Clone theTemplatearrow-up-rightfrom GitHub and initialize your project with Cookiecutter:

Enter the following project details or pressEnterto keep the defaults:

Project Name

The name of your project.

Sample Book

Project Slug

A URL-friendly version of the project name. If not provided, this will be derived from the project name.

sample_book

Project Description

A short description of the project.

A short description of the project.

Author Name

You or your organization's name.

Initial Version

Initial project version.

### hashtag2. Enter Project Directory

Navigate into the new project directory. Replaceproject_slugwith your ownProject Slugfrom the previous step:

### hashtag3. Create a Virtual Environment(recommended)

We recommend creating a virtual environment to isolate and manage your project dependencies.

1.Configure Poetryarrow-up-rightto create the virtual environment inside the project’s root directory:

2. Create a virtual environment:

If you are using pyenv and encounter the following error:

Run the following command to set the local pyenv version for the current directory:

3. Activate the virtual environment

Runpoetry shellormanuallyactivate the environmentarrow-up-rightusing the following commands:

> Note:To later exit the virtual environment later, rundeactivate.

Note:To later exit the virtual environment later, rundeactivate.

4. Install dependencies

Last updated1 month ago

Was this helpful?
