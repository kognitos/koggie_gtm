---
title: Calling Other Processes | Kognitos Documentation
url: https://docs.kognitos.com/writing-automations/calling-other-processes
description: Learn how one process can call another process in Kognitos.
---

# Calling Other Processes | Kognitos Documentation

## hashtagOverview

In Kognitos, one process can call and run another process. The called process is referred to as asubprocess. There are many advantages of using subprocesses:

- Modularity:Decomposing automations into smaller processes enhances structure and organization.

Modularity:Decomposing automations into smaller processes enhances structure and organization.

- Readability:Well-organized automations are easier to read and understand.

Readability:Well-organized automations are easier to read and understand.

- Scalability:Automations can be scaled to handle multiple tasks.

Scalability:Automations can be scaled to handle multiple tasks.

- Maintainability:Isolated processes simplify debugging and updating individual components.

Maintainability:Isolated processes simplify debugging and updating individual components.

## hashtagMechanisms

There are several ways to call another process in Kognitos:

- Run a Subprocess: This method is ideal for single-run scenarios where you need to capture the result and status of a subprocess.

Run a Subprocess: This method is ideal for single-run scenarios where you need to capture the result and status of a subprocess.

- Invoke a Subprocess: This method is useful for scenarios where the parent process can continue executing without waiting for the subprocess's status or completion.

Invoke a Subprocess: This method is useful for scenarios where the parent process can continue executing without waiting for the subprocess's status or completion.

- Start Parallel Runs: This method provides control over parallel execution when handling multiple subprocesses simultaneously.

Start Parallel Runs: This method provides control over parallel execution when handling multiple subprocesses simultaneously.

### hashtagComparison

Execution Style

Sequential Processing

Sequential Processing

Parallel Processing

Performance

Slower overall (each subprocess runs separately)

Slower overall (each subprocess runs separately)

Faster for many items (since runs happen in parallel)

General Usage

When tasks or items are independent and you want the result / status of a run

When tasks or items are independent and you don't need the result / status or a run

When tasks or items are dependent or rely on one another

Document Processing

Use when each document is independent and can be processed in isolation

Use when each document is independent and can be processed in isolation

Use when documents are dependent on one another, or the final outputs need to be aggregated

Last updated3 months ago

Was this helpful?
