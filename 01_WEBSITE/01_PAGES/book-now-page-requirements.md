---
title: Book Now Page Requirements
status: needs_content
phase: phase_02_core_pages
page: book_now
kpi:
  - booking_conversion
  - lead_quality
  - mobile_conversion
tags:
  - booking
  - conversion
  - mobile
  - needs_booking_system
  - needs_contact_info
---

# Book Now Page Requirements

The booking page should give visitors multiple clear booking paths without confusion.

## Primary Booking Flow

The `Book a Session` CTA should take visitors to a booking calendar. After choosing an available date/time or session path, the visitor fills out a request form.

On form submission:

- Checkmark Audio receives an EmailJS notification email with the inquiry details.
- The prospective client receives an EmailJS confirmation email.
- The inquiry should be clear enough for Checkmark Audio to respond, confirm details, request a deposit if needed, and finalize the session.

Implementation details still needed:

- Calendar tool or calendar component.
- EmailJS service ID.
- EmailJS template ID for Checkmark Audio notification.
- EmailJS template ID for client confirmation.
- Checkmark Audio recipient email.
- Confirmation message shown after submission.
- Error message shown if submission fails.

## Booking Paths

- Recording session.
- Studio rental.
- Mixing inquiry.
- Mastering inquiry.
- Full production inquiry.
- Band recording inquiry.
- Photography inquiry.
- School admissions call.
- General contact form.

## Booking Form Fields

- Name.
- Artist name.
- Phone number.
- Email.
- Service needed.
- Preferred date/time.
- Budget range.
- Project description.
- Links to music if available.
- File upload option if possible.
- Consent to be contacted.

## Content Needed

- Booking platform/access.
- Deposit explanation.
- Cancellation policy.
- Confirmation message.
- Correct recipient email.
