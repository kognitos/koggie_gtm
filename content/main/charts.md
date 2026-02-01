---
title: Create Chart | Charts & Plots | Kognitos Documentation
url: https://docs.kognitos.com/charts
description: Generates a bar or pie chart.
---

# Create Chart | Charts & Plots | Kognitos Documentation

### hashtagOverview

This procedure creates categorical data visualizations. Bar charts display categories along one axis with corresponding values, and can be oriented horizontally or vertically. Pie charts show proportional relationships as slices of a circle. Legends are supported only for pie charts.

### hashtagSyntax

Below is a line-by-line overview of the automation syntax. Expand each line to learn more.

#### hashtagWhat does it do?

Begins a chart definition block.

#### hashtagWhere does it go?

This phrase should be written on anew line.

#### hashtagIs it required?

✅ Yes — This phrase isrequired.

#### hashtagDoes it require data?

✅ Yes — Replace the adjective withbarorpie.

#### hashtagExample

#### hashtagWhat does it do?

Provides category labels for the chart.

#### hashtagWhere does it go?

Indented undercreate a {bar|pie} chart where.

#### hashtagIs it required?

✅ Yes — This phrase isrequired.

#### hashtagDoes it require data?

✅ Yes — Replacecwith a list of texts or a reference to table data.

#### hashtagExample

#### hashtagWhat does it do?

Provides numeric values corresponding to each category.

#### hashtagWhere does it go?

Indented undercreate a {bar|pie} chart where.

#### hashtagIs it required?

✅ Yes — This phrase isrequired.

#### hashtagDoes it require data?

✅ Yes — Replacevwith a list of numbers or reference to table data.

#### hashtagExample

#### hashtagWhat does it do?

Sets the chart title.

#### hashtagWhere does it go?

Indented undercreate a {bar|pie} chart where.

#### hashtagIs it required?

✅ Yes — This phrase isrequired.

#### hashtagDoes it require data?

✅ Yes — Replacechart-titlewith a text string.

#### hashtagExample

#### hashtagWhat does it do?

Labels the x-axis.

#### hashtagWhere does it go?

Indented undercreate a bar chart where.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replacex-labelwith a text string to label the x-axis. The default isCategories.

#### hashtagExample

#### hashtagWhat does it do?

Labels the y-axis.

#### hashtagWhere does it go?

Indented undercreate a bar chart where.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replacey-labelwith a text string to label the y-axis. The default isValues.

#### hashtagExample

#### hashtagWhat does it do?

Sets bar chart orientation.

#### hashtagWhere does it go?

Indented undercreate a bar chart where.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Set the text as eitherhorizontalorvertical. The default isvertical.

#### hashtagExample

#### hashtagWhat does it do?

Displays a legend with category names.

#### hashtagWhere does it go?

Indented undercreate a pie chart where.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Set the text as eitherenabledordisabled. The default isdisabled.

#### hashtagExample

#### hashtagWhat does it do?

Sets the color scheme for the chart.

#### hashtagWhere does it go?

Indented undercreate a {bar|pie} chart where.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replacecolor-palettewith one ofkognitos,lavender,rocket, or anyHTML named colorarrow-up-right(e.g.,red,blue,green,purple,orange, etc.). The default iskognitos.

#### hashtagExample

#### hashtagWhat does it do?

Sets the seaborn chart style.

#### hashtagWhere does it go?

Indented undercreate a {bar|pie} chart where.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replacechart-stylewith one ofwhite,darkgrid,whitegrid,dark,ticks. The default iswhite.

#### hashtagExample

#### hashtagWhat does it do?

Sets the font family for all text.

#### hashtagWhere does it go?

Indented undercreate a {bar|pie} chart where.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replacefont-namewith a font name. The default isRaleway Light.

#### hashtagExample

### hashtagExamples

#### hashtag1. Bar Chart with Direct Values

#### hashtag2. Pie Chart with Legend

#### hashtag3. Horizontal Bar Chart from Table Data

#### hashtag4. Pie Chart with color palette

Last updated5 months ago

Was this helpful?
