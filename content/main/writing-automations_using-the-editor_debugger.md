---
title: Debugger | Kognitos Documentation
url: https://docs.kognitos.com/writing-automations/using-the-editor/debugger
description: Enhance your automation process development workflow with the debugger.
---

# Debugger | Kognitos Documentation

## hashtagWhat is the Debugger?

Thedebuggeris designed to simplify the debugging process. It allows you to add breakpoints to start and pause your automation as needed, enhancing your development workflow and experience.

## hashtagHow Do I Use the Debugger?

To use it, hover over the left side of the line where you want to add a debug point and click on the bug icon (🕷️) that appears. Two options appear: aStartand aPausepoint. Click to enable either one:

- Start:Will run the automationfromthis line.

Start:Will run the automationfromthis line.

- Pause:Will run the automationuntilthis line(execution will stop at the line before).

Pause:Will run the automationuntilthis line(execution will stop at the line before).

Add all debugging markersbeforerunning the automation. Markers added while the automation is running will not take effect until the next run.

## hashtagVisual Markers

These are the markers used in the interface to indicate different states of execution:

- Start:Agreendot marks where automation execution will begin.

Start:Agreendot marks where automation execution will begin.

- Stop:Areddot indicates that automation execution pauses before this line.Debugger Pause Point

Stop:Areddot indicates that automation execution pauses before this line.

- Paused:Ayellowline marks where the automation is currently paused.Debugger Paused Marker

Paused:Ayellowline marks where the automation is currently paused.

## hashtagImportant Notes

### hashtag1. Multiple Breakpoints

You can add multiple breakpoints within a single run. Utilizing multiple breakpoints can significantly enhance your development workflow, making it easier to identify and resolve issues within your automations.

### hashtag2. Execution Start Point

Execution is context-dependent and does not guarantee it will begin from a specified line. The system automatically adjusts the start point based on execution history and surrounding control structures.

For example, if the start point is inside a loop, the system can move the start point to the beginning of the loop.

Last updated4 months ago

Was this helpful?
