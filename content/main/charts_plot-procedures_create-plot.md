---
title: Create Plot | Charts & Plots | Kognitos Documentation
url: https://docs.kognitos.com/charts/plot-procedures/create-plot
description: Generates a scatter, line, or box plot.
---

# Create Plot | Charts & Plots | Kognitos Documentation

### hashtagOverview

This procedure can createscatter,line, orboxplots. The plot type is determined by the adjective used("scatter", "line", or "box"). Scatter and line plots require both x and y values, while box plots need only a single list of values.

### hashtagSyntax

Below is a line-by-line overview of the automation syntax. Expand each line to learn more.

#### hashtagWhat does it do?

Begins a plot definition block.

#### hashtagWhere does it go?

This phrase should be written on anew line.

#### hashtagIs it required?

✅ Yes — This phrase isrequired.

#### hashtagDoes it require data?

✅ Yes — Replace the adjective withscatter,line, orbox.

#### hashtagExample

#### hashtagWhat does it do?

Provides x-axis data points.

#### hashtagWhere does it go?

Indented undercreate a {scatter|line} plot where.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replacex-valueswith a list of numbers or reference to table data. This is required when creatingscatterorlineplots.

#### hashtagExample

#### hashtagWhat does it do?

Provides y-axis data points.

#### hashtagWhere does it go?

Indented undercreate a {scatter|line} plot where.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replacey-valueswith a list of numbers or reference to table data. This is required when creatingscatterorlineplots.

#### hashtagExample

#### hashtagWhat does it do?

Provides data for box plot distribution analysis.

#### hashtagWhere does it go?

Indented undercreate a box plot where.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replaceplot-valueswith a list of numbers or reference to table data. This is required when creatingboxplots.

#### hashtagExample

#### hashtagWhat does it do?

Sets the plot title.

#### hashtagWhere does it go?

Indented undercreate a {scatter|line|box} plot where.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replaceplot-titlewith a text string to be used as the plot title.

#### hashtagExample

#### hashtagWhat does it do?

Labels the x-axis.

#### hashtagWhere does it go?

Indented undercreate a {scatter|line|box} plot where.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replacex-labelwith a text string to label the x-axis.

#### hashtagExample

#### hashtagWhat does it do?

Labels the y-axis.

#### hashtagWhere does it go?

Indented undercreate a {scatter|line|box} plot where.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replacey-labelwith a text string to label the y-axis.

#### hashtagExample

#### hashtagWhat does it do?

Sets the color scheme for the plot.

#### hashtagWhere does it go?

Indented undercreate a {scatter|line|box} plot where.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replacecolor-palettewith one ofkognitos,lavender,rocket, or anyHTML named colorarrow-up-right(e.g.,red,blue,green,purple,orange, etc.). The default iskognitos.

#### hashtagExample

#### hashtagWhat does it do?

Sets the seaborn plot style.

#### hashtagWhere does it go?

Indented undercreate a {scatter|line|box} plot where.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replaceswith one ofwhite,darkgrid,whitegrid,dark,ticks. The default iswhite.

#### hashtagExample

#### hashtagWhat does it do?

Sets the font family for all text.

#### hashtagWhere does it go?

Indented undercreate a {scatter|line|box} plot where.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replacefwith a font name. The default isRaleway Light.

#### hashtagExample

#### hashtagWhat does it do?

Sets output image resolution.

#### hashtagWhere does it go?

Indented undercreate a {scatter|line|box} plot where.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replacedwith a numeric value (dots per inch). The default is600.

#### hashtagExample

#### hashtagWhat does it do?

Sets the title font size.

#### hashtagWhere does it go?

Indented undercreate a {scatter|line|box} plot where.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replaceswith a numeric value. The default is20.

#### hashtagExample

#### hashtagWhat does it do?

Sets the x-axis label font size.

#### hashtagWhere does it go?

Indented undercreate a {scatter|line|box} plot where.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replaceswith a numeric value. The default is15.

#### hashtagExample

#### hashtagWhat does it do?

Sets the y-axis label font size.

#### hashtagWhere does it go?

Indented undercreate a {scatter|line|box} plot where.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replaceswith a numeric value. The default is15.

#### hashtagExample

#### hashtagWhat does it do?

Adds a trendline to scatter plots.

#### hashtagWhere does it go?

Indented undercreate a scatter plot where.

#### hashtagIs it required?

❌ No — This phrase isoptional.

#### hashtagDoes it require data?

✅ Yes — Replacetypewithlinear,quadratic,none, ordisabled.

#### hashtagExample

### hashtagExamples

#### hashtag1. Scatter Plot with Direct Values

#### hashtag2. Line Plot with Table Data

#### hashtag3. Box Plot with Direct Values

Last updated5 months ago

Was this helpful?
