---
title: Working with Data & Files | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/browser-use/working-with-data-and-files
description: Learn how to exchange data and files with browser automations in Kognitos.
---

# Working with Data & Files | Books | Kognitos Documentation

New to browser automation? Get up and running with ourGetting Startedguide.

## hashtagOverview

Browser tasks in Kognitos can work with data from your automation, making your web automations both dynamic and flexible. You can pass information to browser tasks and retrieve results back to your automation, including downloaded files and extracted data.

## hashtagInput Data

Pass data to your browser tasks bydefining factsarrow-up-rightin your automation. Reference these facts in theTask Instructionsof aBrowser Automation widgetarrow-up-rightusingcurly brackets{}.

You can pass data types like text, numbers, lists, and files. The browser agent automatically detects and uses these values during execution.

### hashtagExample 1: Passing Text

In this example, we definethe search termandthe product nameas facts with text values. These data elements are used to instruct the browser agent:

#### hashtagDefine Data

#### hashtagProvision a Browser

#### hashtagPerform Task and Reference Data

Replace[the task]with a widget by typing/in the editor and selectingBrowser Automation. Reference the facts in theTask Instructionsusing curly brackets:

Search for Product

Task Instructions

Go to www.google.com and search for {the search term}. Look through the results and find information about {the product name}. Return the average price found.

Information References Detected

the search term, the product name

The browser agent will use "best wireless headphones 2025" forthe search termand "Sony WH-1000XM5" forthe product namewhen it executes the task.

### hashtagExample 2: Uploading a File

In this example, we upload an invoice file to a vendor portal by passing a file fact to the browser task.

#### hashtagDefine Data

Definethe invoice fileas a fact:

When the automation runs, an exception will be raised prompting you toplease provide the invoice file. Using theUpload filesresolution method, you can upload a file to Kognitos.

#### hashtagProvision a Browser

#### hashtagPerform Task and Reference Data

Replace[the task]with a widget by typing/in the editor and selectingBrowser Automation. Referencethe invoice filein theTask Instructionsusing curly brackets:

Upload Invoice

Task Instructions

Go to https://vendor-portal.example.com, navigate to the upload section, and upload {the invoice file}.

Information References Detected

the invoice file

## hashtagOutput Data

Browser tasks can return information to your automation, including extracted data and downloaded files, allowing you to process web data and integrate it into your workflows.

### hashtagResults

Extracted data is returned asthe result, which can include information like prices, inventory status, account details, or any other data visible on a web page. To retrieve the result, explicitly request it when performing the browser task:

Specify theOutput Formatin the Browser Automation widget to define the structure of the data you want returned. This ensures predictable results that are easy to work with.

#### hashtagExample: Extracting Product Information

#### hashtagDefine Data

#### hashtagProvision a Browser

#### hashtagPerform Task and Extract Data

Replace[the task]with a widget by typing/in the editor and selectingBrowser Automation. Reference the facts in theTask Instructionsusing curly brackets:

Get Product Details

Task Instructions

Go to {the product page} and extract the price and availability.

Output Format

{"Price": "", "Availability": ""}

Information References Detected

the product page

#### hashtagUse the Result

When the task completes, it returns structured data like this:

You can access the complete result or individual fields:

### hashtagBrowser Files

When a browser task downloads one or more files during execution, they are automatically returned to your automation asthe browser files. This allows you to use them in subsequent automation steps. You can use downloaded files for:

- Document Processing: Extract data using Intelligent Document Processing

Document Processing: Extract data using Intelligent Document Processing

- Email Attachments: Send emails with file attachments

Email Attachments: Send emails with file attachments

- Further Browser Tasks: Upload to another website

Further Browser Tasks: Upload to another website

To retrieve the downloaded file(s), you must explicitly request them when performing the task:

Always usethe browser files(plural), instead ofthe browser file(singular), regardless of how many files are downloaded.

#### hashtagExample: Downloading and Processing Files

#### hashtagProvision Browser

#### hashtagDownload Files from the Web

Replace[the task]with a Browser Automation widget by typing/and selectingBrowser Automation:

Download PDF

Task Instructions

Navigate to https://smallpdf.com/blog/sample-pdf and download the PDF file.

#### hashtagUse the Downloaded Files

After the task completes, access the downloaded file(s) in your automation:

#### hashtagFile Naming

When downloading PDFs from a PDF viewer, you can specify a custom filename in your task instructions:

However, files downloaded directly from web applications will retain the name assigned by the web application.

Last updated3 months ago

Was this helpful?
