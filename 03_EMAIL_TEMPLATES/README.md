# Checkmark Audio Email Templates

## Service Inquiry Notification

`service-inquiry-notification-mobile.html` is the final internal EmailJS notification template for new website service inquiries.

It is a single responsive, no-logo HTML template that works for both phone and desktop email views. It keeps the current template variables:

- `{{name}}`
- `{{time}}`
- `{{message}}`
- `{{reply_to}}`
- `{{phone}}`
- `{{style}}`

Use `{{style}}` for the service or project type field, such as recording, mixing, mastering, studio rental, or music education.

Suggested subject line:

```text
New Checkmark Audio inquiry from {{name}}
```

The template avoids required image assets so it can be pasted into EmailJS immediately, even before the GitHub Pages version of the site is live on the main domain.

## Client Inquiry Received

`client-inquiry-received.html` is the outbound confirmation email for prospective clients after they submit an inquiry.

It uses the same responsive, no-logo style as the internal notification and includes a receipt of the submitted inquiry for the client's records.

Suggested subject line:

```text
We received your Checkmark Audio inquiry
```

## Client Booking Confirmed

`client-booking-confirmed.html` is the outbound confirmation email for clients after a studio session has been booked.

It uses the same responsive, no-logo style and expects these booking-specific variables:

- `{{booking_date}}`
- `{{booking_time}}`
- `{{studio_address}}`
- `{{booking_notes}}`

Suggested subject line:

```text
Your Checkmark Audio session is confirmed
```

## Timestamp

EmailJS will only populate `{{time}}` if the website sends a template variable named `time`.

Use `{{time}}` for the moment the form or confirmation email is submitted/sent. Use `{{booking_date}}` and `{{booking_time}}` for the actual booked session date and time.

For example, the website form can include a hidden input named `time`, and the submit handler can set it before calling EmailJS:

```html
<input type="hidden" name="time">
```

```js
form.time.value = new Date().toLocaleString();
```
