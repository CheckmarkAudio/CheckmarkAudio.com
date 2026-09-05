# Consultation info panel — parked 2026-09-03

Removed from the homepage booking calendar so the calendar itself is reachable
without scrolling past it. Bridget liked the look, and specifically the
"Call the studio" button, so the markup is kept here verbatim to restore later.

It sat inside the `.calendar-frame` of the calendar section, built in the inline
script in `index.html` (search `homeCalendar.innerHTML`), immediately before
`<div class="calendar-schedule live-calendar">`.

## Markup as removed

```html
<aside class="calendar-info"><p class="eyebrow">Checkmark Audio</p><h3>Free consultation · 1 hour</h3><p>See the studio &amp; discuss what you are making,</p><div class="calendar-actions"><a class="btn primary" href="#inquiryForm">Prefer an inquiry?</a><a class="btn" href="tel:+15052670558">Call the studio</a></div></aside>
```

Its styles (`.calendar-info`, `.calendar-actions`) were left in place, so pasting
the markup back restores the panel as it looked.
