---
title: Platform Capacities | Kognitos Documentation
url: https://docs.kognitos.com/automation-management/platform-capacities
description: Reference the currently supported capacities of the Kognitos platform to confidently design, deploy, and manage automations.
---

# Platform Capacities | Kognitos Documentation

### hashtagAgents

Anagentis a dedicated execution environment within your organization. You can create multiple agents, and each agent can manage many playground and process automations.

Agents(per organization)

Up to 100 agents

Playgrounds(per agent)

Up to 200 playgrounds

Processes(per agent)

Up to 200 processes

Optimal capacity values arerecommendations. You can create additional agents, playgrounds, and processes, but these ranges help ensure the best automation performance and user experience. SeeWhat happens if I exceed the recommended numbers?for details.

### hashtagAutomation Design

Aplaygroundorprocessautomation should be written within the following capacity guidelines:

1-200 lines

Great — Fastest execution and easiest to maintain

200-500 lines

High — Suitable for more complex workflows

500-1200 lines

Moderate — Can be optimized by breaking into subprocesses

1200+ lines

Needs Optimization — Should be broken into smaller subprocesses

Number of Loops

Up to 200 loops

Split large automations intosubprocessesarrow-up-rightto improve performance and maintainability.

### hashtagRuns

Arunis a single execution instance of a process.Concurrent runsrefer to the total number of runs executing at the same time across your organization. Runs can be started manually, triggered via email or API, or scheduled. The platform can support the following number of concurrent runs:

Concurrent Runs

The total number of actively running instances across your entire organization. This includes all process runs (you can run the same process multiple times), parallel child runs, and test suite runs.

Parallel Runs

50 runs(per process)

The maximum number of child processes that a parent process can call and run at the same time. These count toward the concurrent run capacity.

Test Suite Runs

The maximum number of test runs that can execute simultaneously in the Test Suite when validating process changes. Test runs also count toward the concurrent run capacity.

SeeFAQ #4for more details.

### hashtagLearnings

Learnings are rules that guide your automation's decision-making. Learnings are isolated to each agent, with no limit on the total number of learnings per agent.

Learning Length

15,000 characters

For optimal performance, we recommend keeping the total number of learnings under 500 per agent.

### hashtagEmails

Kognitos supports sending and receiving emails with attachmentsup to 20 MB. Outgoing emails with oversized attachments are handled using download links. These limits apply only to native email functionality and not to Books (e.g., Outlook, Gmail).

20 MB(including attachments)

For larger input files, use theREST APIarrow-up-rightto trigger new runs.

### hashtagFiles

The platform supports uploading and processing the following file types:

.jpeg, .jpg, .png, .tif, .tiff

.txt, .yml, .yaml, .csv

.docx, .doc

.html, .htm

.wav, .mp3, .mp4, .mov, .avi

.xlsx, .xls, .xlsb, .xlsm

250 MB(.xlsx and .xlsm)150 MB(.xlsb and .xls)

1 GB*

While uploads up to 1 GB are supported, files larger than100 KBcan't be fully displayed in the interface. These can be downloaded to view the complete content locally.

### hashtagExtraction from Documents

When extracting data or tables from documents usingLLMsarrow-up-right, the maximum supported document size depends on the model provider:

50 MB(per document)

512 MB(per document)

Note: Standardfile upload limitsstill apply.

For large documents, consider processing them in smaller chunks (e.g., 50-100 pages at a time) to improve performance and reliability. You can usesubdocument extractionarrow-up-rightto split documents into manageable sections.

### hashtagDepartment Boxes

Store structured information at scale with capacities designed for fast retrieval and updates.

150,000(per department box)

## hashtagFrequently Asked Questions

### hashtag1. What if I need more capacity?

These capacities reflect current performance levels and will continue to expand as the platform grows. If your workload requires higher limits, please reach out to our support team viain-app chat(preferred)or email us at[email protected].

### hashtag2. What's the difference between agents and automations?

Agentsare dedicated execution environments that contain and manage your automations. Each agent is dedicated to your organization, with its own skills and settings, and can hold multiple automations.

Automationsare sets of instructions that tell Kognitos what to do — process data, work with documents, send emails, call other processes, and more. These are workflows that can take the form of an early idea (playground) or a completeprocess. Both playgrounds and processes are considered automations.

### hashtag3. What happens if I exceed the recommended number of agents, playgrounds, or processes?

The optimal capacity recommendations (100 agents, 200 playgrounds, 200 processes) are guidelines, not hard limits. You can create unlimited agents, playgrounds, and processes. However, exceeding these recommendations may slow down the user interface, causing delays when loading dashboards, navigating lists, or accessing settings. For the best experience, we recommend staying within these ranges.

### hashtag4. What's the difference between concurrent, parallel, and test suite runs?

Concurrent runsrefer to the total number of active runs across your entire organization. You can run the same process multiple times, and each run counts as one concurrent slot.

> Example: With a 150 concurrent run limit, you could run the same process 150 times, or 75 runs each of two different processes, or any other combination up to 150 total running instances.

Example: With a 150 concurrent run limit, you could run the same process 150 times, or 75 runs each of two different processes, or any other combination up to 150 total running instances.

Parallel runsrefer to child processes that a single automation spawns to execute simultaneously. One parent process can spawn up to 50 parallel children at once. These parallel runs count toward your concurrent run capacity.

> Example: If one process spawns 50 parallel children, it uses 51 concurrent slots (1 parent + 50 children).

Example: If one process spawns 50 parallel children, it uses 51 concurrent slots (1 parent + 50 children).

Test suite runsare special runs used to validate process changes by comparing results against expected outcomes. You can run up to 40 test runs simultaneously. Test suite runs also count toward the concurrent run capacity.

### hashtag5. What types of runs count toward the concurrent run capacity?

Onlyactive runscount toward the concurrent run capacity. Process runs doNOTcount when:

- Waiting for user input (exceptions)

Waiting for user input (exceptions)

- Waiting to retry after an error

Waiting to retry after an error

- Completed (successfully, failed, or stopped)

Completed (successfully, failed, or stopped)

When a process pauses for user input, it releases capacity for other processes to run.

### hashtag6. Does it matter how I start a run for it to count toward the capacity limit?

No. All runs count toward the run limit regardless of how they're started — whether triggered manually, via API, by email, or on a schedule.

### hashtag7. What happens when I reach the concurrent run limit?

When you reach the capacity limit for concurrent runs:

- API calls to trigger new runs may return 403 errors or "Resource Not Available" messages

API calls to trigger new runs may return 403 errors or "Resource Not Available" messages

- Process crashes may occur and require reruns or retries

Process crashes may occur and require reruns or retries

- Processes beyond the capacity threshold may experience failures

Processes beyond the capacity threshold may experience failures

### hashtag8. Can I retry a process that was rejected due to exceeding capacity?

Yes. If a process is rejected due to exceeding capacity, you can retry it once capacity becomes available. We recommend staying within the capacity thresholds to prevent unexpected behavior.

### hashtag9. Are API requests limited?

Yes, API endpoints all share the same rate limit pool, including both trigger and query operations (such as status checks). Rate limits differ by region. To check your rate limits, go toAPI Keys→ click on the menu (⋮) to the right of an API key →Usage.

Last updated2 months ago

Was this helpful?
