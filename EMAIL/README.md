# Checkmark Audio Email Templates

## Replacement-Website Role

These EmailJS templates belong to the independent CheckmarkAudio.com replacement, not to a permanent Wix workflow.

The booking path is an embedded Cal.com calendar on the replacement website (`index.html`, `#book` section). The current EmailJS plan only supports two templates, so **the same two templates below are reused for both the inquiry form and Cal.com bookings** — `style` and `message` carry booking-specific wording (date, time, studio address) instead of dedicated booking fields. The wiring, service ID, template IDs, and public key live in `index.html`, not in this folder.

Do not expose private EmailJS or Cal.com credentials beyond the public key, which is meant to be visible in browser code.

## Service Inquiry Notification

`service-inquiry-notification-mobile.html` is the internal EmailJS notification template for new website inquiries **and** new Cal.com bookings.

It is a single responsive, no-logo HTML template that works for both phone and desktop email views. Template variables:

- `{{name}}`
- `{{email}}`
- `{{time}}`
- `{{message}}`
- `{{reply_to}}`
- `{{phone}}`
- `{{style}}`

Use `{{style}}` for the service or project type (recording, mixing, mastering, studio rental, music education) on inquiry submissions, or `"Consultation Booking"` on Cal.com bookings. Use `{{message}}` for the free-text inquiry, or a sentence describing the booked date/time on Cal.com bookings.

Suggested subject line:

```text
New Checkmark Audio request from {{name}}
```

## Client Inquiry / Booking Received

`client-inquiry-received.html` is the outbound confirmation email for clients — after they submit the inquiry form, or after they book a Cal.com consultation. The wording was made generic on purpose ("here's your receipt... if you booked a specific time, we'll see you then; if this was a general inquiry, we'll follow up soon") so the same template reads correctly either way. Configure this template's **To Email** field as `{{email}}`; keep `{{reply_to}}` available for displaying the client's submitted address and for the internal notification flow.

Same variables as the internal template above. On Cal.com bookings, `{{message}}` is populated with a full confirmation sentence (date, time, studio address).

Suggested subject line:

```text
We received your Checkmark Audio request
```

## Client Booking Confirmed (not currently wired)

`client-booking-confirmed.html` is a dedicated booking-confirmation template with `{{booking_date}}`, `{{booking_time}}`, `{{studio_address}}`, and `{{booking_notes}}` fields. It is **not** currently connected — the EmailJS plan doesn't have room for a third template. If the plan is upgraded, this can replace `client-inquiry-received.html` for the Cal.com booking path specifically, giving bookings their own dedicated wording and fields again.

## Timestamp

Use `{{time}}` for the moment the form or confirmation email is submitted/sent, set client-side via `new Date().toLocaleString()`.
