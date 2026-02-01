---
title: Planning | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/custom-books/planning
description: A checklist to guide the planning of your custom book project, covering key requirements and considerations.
---

# Planning | Books | Kognitos Documentation

## hashtagSoftware Requirements

Ensure you have access to the following software requirements.

- GitHub Accountarrow-up-right

GitHub Accountarrow-up-right

- Dockerarrow-up-right

Dockerarrow-up-right

- Cookiecutterarrow-up-right

Cookiecutterarrow-up-right

- Python 3.11+arrow-up-right

Python 3.11+arrow-up-right

## hashtagDesign

Booksare collections of procedures that define specific actions within an automation. Eachprocedurerepresents an automation task or step contributing to a larger process.

Designing a Book involves defining these procedures to ensure they align with the automation’s objectives. To guide this process, take into account the following considerations:

### hashtag1. Functionality

Identify the specific procedures needed for the Book. Each procedure should have a clear and specific automation purpose.

#### hashtagQuestions

- What actions does the user need to automate in Kognitos?

What actions does the user need to automate in Kognitos?

- Can the actions be broken down into individual steps?

Can the actions be broken down into individual steps?

#### hashtagExamples

Consider these procedures for a Weather book:

- Get the current temperature in a specific city.

Get the current temperature in a specific city.

- Check the current air quality index (AQI).

Check the current air quality index (AQI).

- Determine delays or disruptions caused by severe weather for shipping and transportation.

Determine delays or disruptions caused by severe weather for shipping and transportation.

- Notify attendees of weather-related changes for events.

Notify attendees of weather-related changes for events.

### hashtag2. Data

Clearly define each procedure's inputs, outputs, and processing steps.

#### hashtagQuestions

- What input or parameters are needed for each procedure?

What input or parameters are needed for each procedure?

- What output or data should each procedure return upon completion?

What output or data should each procedure return upon completion?

- How will data be transformed, manipulated, or processed in each procedure?

How will data be transformed, manipulated, or processed in each procedure?

#### hashtagExamples

Consider an procedure thatgets the temperature in a specific city:

- Temperature (°F)

Temperature (°F)

- Timestamp when the temperature was recorded

Timestamp when the temperature was recorded

Processing Steps

- Validate the city name.

Validate the city name.

- Use an API request to get weather data for the specified city.

Use an API request to get weather data for the specified city.

- Parse the response to extract the temperature value and timestamp.

Parse the response to extract the temperature value and timestamp.

- Format the temperature reading to the appropriate unit (Fahrenheit).

Format the temperature reading to the appropriate unit (Fahrenheit).

### hashtag3. Error Handling

Consider common error scenarios and define how they will be handled.

#### hashtagQuestions

- What are the potential error scenarios that could occur?

What are the potential error scenarios that could occur?

- How will these errors be handled and/or logged?

How will these errors be handled and/or logged?

#### hashtagExamples

Consider the following error scenarios for a Weather Book:

1. Invalid Input

- A user enters a non-existent city name (e.g., "Atlantis").

A user enters a non-existent city name (e.g., "Atlantis").

- The system receives a blank input for the city name.

The system receives a blank input for the city name.

2. API Unavailability

- The weather API is temporarily down or unreachable.

The weather API is temporarily down or unreachable.

- A network timeout occurs during an API call.

A network timeout occurs during an API call.

## hashtagIntegrations

If you plan to integrate with an external API in your book, it’s important to assess the target service's requirements, limitations, and authentication mechanisms. The following considerations will ensure your chosen API aligns with your automation needs and integrates seamlessly into your BDK project.

### hashtag1. Authentication & Authorization

Understand the authentication requirements for your target integration. BDK supports standard API authentication methods, including API keys, OAuth 2.0, client credentials, etc.

#### hashtagQuestions

- Does the API require authentication? If so, what kind?

Does the API require authentication? If so, what kind?

- Are there specific permissions or roles required to access certain API endpoints?

Are there specific permissions or roles required to access certain API endpoints?

- Can you obtain the necessary access and permissions for all required credentials?\

Can you obtain the necessary access and permissions for all required credentials?\

### hashtag2. Functionality & Data Flow

Identify which API endpoints will be used and define the data that will be exchanged.

#### hashtagQuestions

- Which API endpoints will your Book use?

Which API endpoints will your Book use?

- What data will be sent or received?

What data will be sent or received?

### hashtag3. Rate Limits and Usage

Review the API’s rate limits and usage quotes. Ensure they can handle your expected request volume and check for additional costs or restrictions.

#### hashtagQuestions

- Are there API rate limits or usage quotes?

Are there API rate limits or usage quotes?

- Does the API’s rate limit support the expected request volume for your workflows?

Does the API’s rate limit support the expected request volume for your workflows?

- Are there additional costs or restrictions for exceeding usage limits?

Are there additional costs or restrictions for exceeding usage limits?

### hashtag4. Documentation and Support

Evaluate if the API documentation is clear and if provider support is accessible.

#### hashtagQuestions

- Is the API documentation comprehensive and easy to follow?

Is the API documentation comprehensive and easy to follow?

- Does the API provider offer support?

Does the API provider offer support?

### hashtag5. Scalability

Plan for future scalability and consider how the API will handle growing request needs.

#### hashtagQuestions

- Can the API handle increasing request volumes as workflows grow?

Can the API handle increasing request volumes as workflows grow?

- Does the API support additional functionality that might be required in future Books?

Does the API support additional functionality that might be required in future Books?

## hashtagDeployment

Prepare to deploy and manage a Docker container

#### hashtagConsiderations

- Ensure the required infrastructure is in place to deploy a Docker container in the cloud, on-premises, or in a hybrid environment.

Ensure the required infrastructure is in place to deploy a Docker container in the cloud, on-premises, or in a hybrid environment.

- Plan strategies for:Managing the container lifecycle, including scaling, networking, and security.Implementing logging to track container activityMonitoring container health and performanceUpdating Docker images for new releases with clear versioning and testing practices.

Plan strategies for:

- Managing the container lifecycle, including scaling, networking, and security.

Managing the container lifecycle, including scaling, networking, and security.

- Implementing logging to track container activity

Implementing logging to track container activity

- Monitoring container health and performance

Monitoring container health and performance

- Updating Docker images for new releases with clear versioning and testing practices.

Updating Docker images for new releases with clear versioning and testing practices.

Last updated1 month ago

Was this helpful?
