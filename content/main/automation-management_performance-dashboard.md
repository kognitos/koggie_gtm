---
title: Performance Dashboard | Kognitos Documentation
url: https://docs.kognitos.com/automation-management/performance-dashboard
description: A guide to understanding the Performance Dashboard in Kognitos.
---

# Performance Dashboard | Kognitos Documentation

## hashtagOverview

ThePerformance Dashboardprovides a centralized view of your automation performance. It also calculates and displays yourreturn on investment (ROI), giving you a clear picture of the value your automations are generating. To access the dashboard, click onPerformancein the top navigation bar.

## hashtagDaily Updates

The dashboard is updated daily to ensure you have access to the latest metrics.

(Updates occur every day at midnight UTC.)

## hashtagFilters

The dashboard can be filtered by agents, published processes, or date ranges.

### hashtag🗃️ Agent Filter

The agent filter allows you to narrow metrics by specific agents. By default, it includes all agents.

### hashtag⚙️ Process Filter

The process filter allows you to narrow metrics by specific processes. By default, it includes all processes from all agents.

### hashtag📅 Date Range Filter

The date range filter allows you to narrow metrics by time period. Filter options include:

- 6M: Last 6 months, including the current month

6M: Last 6 months, including the current month

- 12M: Last 12 months, including the current month(default)

12M: Last 12 months, including the current month(default)

- YTD: Year-to-Date, including the current date

YTD: Year-to-Date, including the current date

- Custom range: A custom range within a 2-year period

Custom range: A custom range within a 2-year period

## hashtagDashboard Components

### hashtag1. Value Insights

Value Insights offers an overview of the time and money saved by using Kognitos. These insights are calculated using the agents and processes selected in thedashboard filters.The summation (Σ) is taken across all selected processes using the date ranges selected.

Configuration Required

Value Insights are based on user-submitted cost and time estimates. Process owners need toconfigure these estimatesfor their processes to generate these insights. Click onRequest Estimateto send an email notification to process creators, or click onConfigureto set them up.

Click onMoney SavedorTime Savedto update the visualizations for either category. Use the toggle on the right to switch betweenCumulative TotalandBy Processviews for these insights.

#### hashtagMoney Saved

A calculation of your dollar savings based on cost estimates configured for your processes.

> Money Saved ($)= Σ (Total Completed Published Runs × Average Money Saved per Run)

Money Saved ($)= Σ (Total Completed Published Runs × Average Money Saved per Run)

#### hashtagTime Saved

A calculation of your time savings based on the time estimates configured for your processes.

> Time Saved (Hours)= Σ ((Total Completed Published Runs × Average Time Saved per Run) ÷ 60)

Time Saved (Hours)= Σ ((Total Completed Published Runs × Average Time Saved per Run) ÷ 60)

### hashtag2. Usage

Usageshows the total number of published process runs (regardless of completion status). The number is calculated based on the agents and date ranges selected in thedashboard filters. You can view usageOver TimeorBy Processby choosing the corresponding filter.

### hashtag3. Completion

Completion metrics track the success of your published process runs. They are calculated using the agents and date ranges selected in thedashboard filters.

#### hashtagCompletion Rate

Thecompletionrate is the percentage of published process runs that have successfully completed out of the total number of published runs. It accounts for:

- Runs that completed automatically (STP)

Runs that completed automatically (STP)

- Runs that completed with user intervention (Guidance Provided)

Runs that completed with user intervention (Guidance Provided)

> Completion Rate (%)= (Total Completed Published Runs ÷ Total Published Runs) × 100

Completion Rate (%)= (Total Completed Published Runs ÷ Total Published Runs) × 100

#### hashtagEfficiency

This metric calculates theStraight Through Processing (STP)rate, which is a measure of the runs that completed without user intervention. The STP rate is translated to anefficiencyscore, which represents how much more work can be completed with the same resources due to automation.

> Efficiency Score= 100 ÷ (100 - STP)

Efficiency Score= 100 ÷ (100 - STP)

- An 80% STP results in 5x efficiency.

An 80% STP results in 5x efficiency.

- With 80% STP, only 20% of the work remains manual.

With 80% STP, only 20% of the work remains manual.

- The same resources can handle 5 times more work.

The same resources can handle 5 times more work.

### hashtag4. Contract Details

Contractdetails provide an overview of your current contract, including:

#### hashtag📅 Key Dates

- Start date: Date your contract began

Start date: Date your contract began

- End date:Date your contract ends

End date:Date your contract ends

- Expiration:Remaining days until your contract expires(e.g., 35 days)

Expiration:Remaining days until your contract expires(e.g., 35 days)

#### hashtag📊 Usage Summary

- Runs Used:Total number of published and test runs used(e.g., 151)

Runs Used:Total number of published and test runs used(e.g., 151)

- Runs Remaining:Total number of published and test runs still available(e.g., 349)

Runs Remaining:Total number of published and test runs still available(e.g., 349)

- Total Allowed Runs:Maximum number of runs permitted under your contract(e.g., 500)

Total Allowed Runs:Maximum number of runs permitted under your contract(e.g., 500)

If you have questions about your contract or need assistance, please contact our support team at[email protected]envelopeor via our platform's Support AI Chat.

## hashtagDownloading and Exporting Data

Kognitos makes it easy to share insights from your dashboard, without the hassle of screenshots or manual copy-and-pasting.

### hashtagSave Images

You can download aPNG imageof any individual metric directly from the dashboard:

- Hover over any section(Value Insights, Usage, or Completion).

Hover over any section(Value Insights, Usage, or Completion).

- A download icon labeled "Download this section as an image" will appear in the top-right corner.

A download icon labeled "Download this section as an image" will appear in the top-right corner.

- Click on the icon to download a.pngof that section to your device.

Click on the icon to download a.pngof that section to your device.

### hashtagExport Data

Click onExport Datato export an Excel report of your dashboard data. Kognitos will automatically email the.xlsxfile to you. This feature is great for in-depth analysis, reporting, or sharing insights in spreadsheet format.

Note:The exported data will reflect the filters you currently have applied on the dashboard.

## hashtagConfiguring Your Dashboard for Value Insights

Value Insightsare generated off user-submitted cost and time estimates. While it's not required to provide estimates for every process, these metrics are only generated when the data is configured.

### hashtagConfiguring Process Estimates

To configure process estimates, follow these steps:

- Click onConfigurein the top right corner. This will open up a menu showing all your processes across agents.

Click onConfigurein the top right corner. This will open up a menu showing all your processes across agents.

- For a given process, enter in the following details:Time: Average time saved per process run (in minutes).Cost: Average cost savings per run (in dollars).

For a given process, enter in the following details:

- Time: Average time saved per process run (in minutes).

Time: Average time saved per process run (in minutes).

- Cost: Average cost savings per run (in dollars).

Cost: Average cost savings per run (in dollars).

Handling Invoked Process Estimates

If the process invokes another process, please exclude the invoked process estimates from the parent process estimates.

- ClickSaveto apply your configuration.

ClickSaveto apply your configuration.

### hashtagSetting Quarterly Goals

You can set quarterly goals for Value Insight metrics. To do this:

- Click onSet Goalunderneath eitherMoney SavedorTime Saved.

Click onSet Goalunderneath eitherMoney SavedorTime Saved.

- Enter your goal(dollars or hours).

Enter your goal(dollars or hours).

Last updated5 months ago

Was this helpful?
