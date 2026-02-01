---
title: Concepts | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/leaseworks/concepts
description: Concepts used in LeaseWorks book.
---

# Concepts | Books | Kognitos Documentation

The following documentation is forLeaseWorks v1.2.2(BDK).

### hashtagLeaseworks aircraft

Aircraft data model.A Aircraft Object

the aircraft id

the aircraft name

optional[text]

the custom leaseworks msn number

optional[text]

type_attribute

the type attribute

optional[text]

the url attribute

optional[text]

### hashtagLeaseworks utilization

Utilization data model.A Utilization Object

the utilization id

### hashtagLeaseworks assembly part

Assembly Part data model.A Assembly Report Object

the aircraft id

the aircraft name

optional[text]

type_attribute

the type attribute

optional[text]

the url attribute

optional[text]

tsn_at_month_start_f

the tsn at month start

optional[number]

running_hours_during_month

the running hours during month

optional[number]

tsn_at_month_end

the tsn at month end

optional[number]

csn_at_month_start_f

the csn at month start

optional[number]

cycles_during_month

the cycles during month

optional[number]

csn_at_month_end

the csn at month end

optional[number]

serial_number

the serial number of the constituent assembly

optional[text]

### hashtagLeaseworks monthend report

MonthEnd report data model.A MonthEnd Report Object

optional[leaseworks report section]

the first engine info

optional[leaseworks report section]

the second engine info

optional[leaseworks report section]

landing_gear_nose

the nose landing gear

optional[leaseworks report section]

landing_gear_left_main

the left landing gear

optional[leaseworks report section]

landing_gear_right_main

the right landing gear

optional[leaseworks report section]

### hashtagLeaseworks report section

Report section data model.A report section object

a dictionary containing report attributes

optional[json]

Last updated3 months ago

Was this helpful?
