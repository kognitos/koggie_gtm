---
title: Concepts | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/truckmate/concepts
description: Concepts used in TruckMate book.
---

# Concepts | Books | Kognitos Documentation

The following documentation is forTruckMate v1.1.7(BDK).

### hashtagTruckmate order

TruckMate order request concept.Orders refers to the freight bills created and managed by TruckMate for dispatch operations, billing, collections, and the General Ledger. Orders contain details about pickup, delivery, routing, load details, dangerous goods information, status history, trace numbers, rates, charges, extra charges, quotes, and more.

The date and time by which the pickup should be completed.

pick_up_by_end

The latest date and time by which the pickup can occur.

The expected delivery date and time.

deliver_by_end

The latest date and time for delivery to occur.

The person or entity initiating the order.

optional[json]

The entity or individual responsible for shipping the goods.

optional[json]

The recipient or destination entity for the goods.

optional[json]

other_contact

An additional contact for the shipment, if necessary.

optional[json]

Specifies an intermediary responsible for taking care of the shipment on behalf of the consignee.

optional[json]

The location where the goods should be picked up.

optional[json]

Any extra details related to the order or shipment.

optional[list of json]

user_fields

Custom user-defined fields for extra information about the order.

optional[json]

trace_numbers

A list of tracking numbers associated with the shipment.

optional[list of json]

dangerous_goods

Indicates whether the shipment contains dangerous or hazardous materials.

optional[list of json]

custom_defs

Custom definitions or specifications applied to the order.

optional[list of json]

Additional charges that may apply to the shipment.

optional[list of json]

ship_instructs

Special instructions for the shipper regarding the handling or transportation of the goods.

optional[list of json]

Additional notes or remarks related to the order.

optional[list of json]

A cross-reference code for tracking or identifying the order in another system.

optional[json]

Indicates whether the shipment involves multiple modes of transport (e.g., rail, truck).

optional[json]

Proof of delivery documents related to the order.

optional[list of json]

pick_up_appt_req

Specifies whether a pickup appointment is required.

optional[enum[false, true]?]

pick_up_appt

The scheduled pickup appointment time.

optional[datetime]

pick_up_appt_made

Indicates whether the pickup appointment has been made.

optional[enum[false, true]?]

delivery_appt

The scheduled delivery appointment time.

optional[datetime]

delivery_appt_made

Indicates whether the delivery appointment has been confirmed.

optional[enum[false, true]?]

delivery_appt_req

Specifies whether a delivery appointment is required.

optional[enum[false, true]?]

service_level

The level of service required for the shipment (e.g., standard, expedited).

optional[text]

The starting zone or region for the shipment.

optional[text]

The final destination zone or region for the shipment.

optional[text]

The unique identifier for the site related to this order.

optional[text]

The operation code associated with the order process.

optional[text]

bill_number

The billing number or invoice related to the order.

optional[text]

The entity responsible for payment of the order.

optional[enum[c, d, i, o, r, t]?]

bill_to_code

A code identifying the billing party.

optional[text]

declared_value

The declared monetary value of the shipment.

optional[number]

currency_code

The currency code used for monetary values (e.g., USD, EUR).

optional[text]

pickup_driver

The name or identifier of the driver responsible for picking up the shipment.

optional[text]

Indicates whether the order is processed without charge.

optional[enum[false, true]?]

interliners

Interline carriers involved in the shipment.

optional[list of json]

Indicates whether the shipment is under a CSA (Customs Self Assessment) program.

optional[enum[false, true]?]

Indicates whether the shipment is tarped for protection.

optional[enum[false, true]?]

Indicates whether the shipment qualifies for FAST (Free and Secure Trade) processing.

optional[enum[false, true]?]

is_exclusive

Specifies whether the shipment requires exclusive use of the vehicle.

optional[enum[false, true]?]

exclusive_override

Overrides the exclusive-use requirement if needed.

optional[enum[false, true]?]

The cash-on-delivery amount required for the shipment.

optional[number]

delivery_driver_1

The primary driver responsible for delivering the shipment.

optional[text]

delivery_driver_2

A secondary driver for the delivery.

optional[text]

delivery_power_unit_1

The primary vehicle power unit for the delivery.

optional[text]

delivery_power_unit_2

A secondary vehicle power unit for the delivery.

optional[text]

delivery_trailer_1

The primary trailer used for the delivery.

optional[text]

delivery_trailer_2

A secondary trailer used for the delivery.

optional[text]

destination_spot_trailer

The trailer used for spotting at the delivery destination.

optional[enum[false, true]?]

origin_spot_trailer

The trailer used for spotting at the pickup location.

optional[enum[false, true]?]

pickup_driver_2

A secondary driver responsible for picking up the shipment.

optional[text]

pickup_power_unit_1

The primary vehicle power unit for the pickup.

optional[text]

pickup_power_unit_2

A secondary vehicle power unit for the pickup.

optional[text]

pickup_trailer_1

The primary trailer used for the pickup.

optional[text]

pickup_trailer_2

A secondary trailer used for the pickup.

optional[text]

is_approved

Specifies whether the order has been approved for processing.

optional[enum[false, true]?]

additional_properties

Additional Properties for the order.

optional[json]

#### hashtagConcept attribute specifications

caller (truckmate order)

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

postal_code

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

additional_properties

optional[json]

shipper (truckmate order)

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

postal_code

optional[text]

optional[text]

zone_description

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

additional_properties

optional[json]

consignee (truckmate order)

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

postal_code

optional[text]

optional[text]

zone_description

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

additional_properties

optional[json]

other_contact (truckmate order)

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

postal_code

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

additional_properties

optional[json]

care_of (truckmate order)

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

postal_code

optional[text]

optional[text]

zone_description

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

additional_properties

optional[json]

pickup_at (truckmate order)

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

postal_code

optional[text]

optional[text]

zone_description

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

additional_properties

optional[json]

details (truckmate order)

optional[number]

optional[text]

optional[text]

optional[number]

optional[text]

dangerous_goods

optional[enum[false, true]?]

description

optional[text]

optional[number]

optional[number]

distance_units

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

optional[number]

optional[number]

optional[number]

optional[number]

optional[number]

optional[number]

optional[number]

optional[number]

optional[number]

optional[number]

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

optional[number]

height_units

optional[text]

optional[number]

length_units

optional[text]

optional[number]

pallet_units

optional[text]

optional[number]

pieces_units

optional[text]

optional[number]

optional[text]

optional[number]

requested_equipment

optional[text]

optional[number]

temperature_controlled

optional[enum[false, true]?]

temperature

optional[number]

temperature_units

optional[text]

optional[number]

optional[text]

optional[number]

volume_units

optional[text]

optional[number]

width_units

optional[text]

optional[number]

weight_units

optional[text]

optional[number]

optional[text]

optional[enum[false, true]?]

manually_rated

optional[enum[false, true]?]

user_field_int_1

optional[number]

user_field_int_2

optional[number]

user_field_int_3

optional[number]

user_field_int_4

optional[number]

user_field_int_5

optional[number]

user_field_int_6

optional[number]

estimated_cube

optional[number]

estimated_height

optional[number]

estimated_length

optional[number]

estimated_pallets

optional[number]

estimated_pieces

optional[number]

estimated_weight

optional[number]

estimated_width

optional[number]

estimated_volume

optional[number]

optional[enum[false, true]?]

optional[number]

optional[number]

optional[json]

additional_properties

optional[json]

user_fields (truckmate order)

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

additional_properties

optional[json]

trace_numbers (truckmate order)

trace_number

ref_qualifier

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

additional_properties

optional[json]

dangerous_goods (truckmate order)

optional[text]

optional[text]

compatibility_group

optional[enum[a, b, c, d, e, f, g, h, j, k, l, n, s]?]

packing_group

optional[enum[i, ii, iii]?]

optional[number]

volume_units

optional[text]

optional[number]

optional[text]

explosive_quantity

optional[number]

explosive_units

optional[text]

optional[number]

control_temp

optional[number]

emergency_temp

optional[number]

marine_pollutant

optional[enum[p, pp]?]

required_quantity

optional[enum[false, true]?]

marine_pollutant_print_req

optional[enum[false, true]?]

limited_quantity

optional[enum[false, true]?]

inhalation_hazard_zone

optional[enum[false, true]?]

inhalation_hazard_zone_type

optional[enum[a, b, c, d, e]?]

actual_name

optional[text]

contact_name

optional[text]

contact_number

optional[text]

country_code

optional[text]

additional_properties

optional[json]

custom_defs (truckmate order)

custom_label

custom_value

numberortext

custom_def_id

optional[number]

additional_properties

optional[json]

a_charges (truckmate order)

a_charge_code

optional[number]

optional[number]

optional[number]

optional[number]

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

optional[text]

additional_properties

optional[json]

ship_instructs (truckmate order)

instruction_id

additional_properties

optional[json]

notes (truckmate order)

enum[b, c, d, o, s, value_6, value_7, value_8, w]

additional_properties

optional[json]

xref_code (truckmate order)

optional[text]

shipper_qualifier

optional[text]

consignee_id

optional[text]

consignee_qualifier

optional[text]

other_contact_id

optional[text]

other_contact_qualifier

optional[text]

optional[text]

care_of_qualifier

optional[text]

pickup_at_id

optional[text]

pickup_at_qualifier

optional[text]

additional_properties

optional[json]

intermodal (truckmate order)

movement_type

enum[dom_ib, dom_ob, empty_repo, export, imc, import, other]

container_code

optional[text]

container_number

optional[text]

container_size

optional[text]

container_type

optional[text]

container_owner

optional[text]

container_iso

optional[text]

optional[text]

optional[text]

bill_to_code

optional[text]

chassis_termination

optional[text]

chassis_pickup

optional[text]

empty_disposition

optional[text]

empty_origin

optional[text]

card_number

optional[text]

seal_number

optional[text]

optional[text]

optional[text]

booking_number

optional[text]

export_destination

optional[text]

empty_notify_date

optional[text]

loaded_date

optional[text]

check_digit

optional[text]

user_date_time_1

optional[text]

user_date_time_2

optional[text]

user_date_time_3

optional[text]

user_date_time_4

optional[text]

user_date_time_5

optional[text]

user_string_1

optional[text]

user_string_2

optional[text]

user_string_3

optional[text]

user_string_4

optional[text]

user_string_5

optional[text]

user_string_6

optional[text]

user_string_7

optional[text]

user_string_8

optional[text]

user_string_9

optional[text]

user_string_10

optional[text]

optional[number]

optional[number]

optional[number]

optional[number]

optional[number]

user_double_1

optional[number]

user_double_2

optional[number]

user_double_3

optional[number]

user_double_4

optional[number]

user_double_5

optional[number]

user_trace_1

optional[text]

user_trace_2

optional[text]

optional[text]

chassis_billing_delivery_date

optional[text]

chassis_billing_dispatch_date

optional[text]

chassis_billing_end_date

optional[text]

chassis_billing_fb_pickup_date

optional[text]

chassis_billing_start_date

optional[text]

chassis_billing_trip_date

optional[text]

export_vessel_cutoff

optional[text]

delivery_order_date

optional[text]

optional[text]

containerlast_free_date

optional[text]

container_available_date

optional[text]

optional[text]

container_return_date

optional[text]

optional[text]

shipment_number

optional[text]

optional[text]

wo_reference

optional[text]

optional[text]

customer_order

optional[text]

optional[text]

pickup_number

optional[text]

port_of_exit

optional[text]

container_pool_client

optional[text]

optional[enum[false, true]?]

optional[enum[false, true]?]

agriculture_hold

optional[enum[false, true]?]

additional_properties

optional[json]

pods (truckmate order)

enum[drop, linehaul, pick]

description

optional[text]

driver_counted

optional[enum[false, true]?]

receiver_signed

optional[enum[false, true]?]

signed_clean

optional[enum[false, true]?]

copy_received

optional[enum[false, true]?]

optional[text]

optional[text]

optional[text]

optional[text]

driver_external

optional[enum[false, true]?]

optional[text]

interliner_external

optional[enum[false, true]?]

additional_properties

optional[json]

interliners (truckmate order)

interliner_id

movement_type

optional[enum[advance, beyond, crossdock, linehaul, other]?]

optional[text]

optional[text]

optional[text]

optional[text]

charges_type

optional[enum[intercompany, nocharge, payable, receivable]?]

additional_properties

optional[json]

Last updated3 months ago

Was this helpful?
