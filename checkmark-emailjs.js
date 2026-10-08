// EmailJS settings shared by the home inquiry form and the Cal.com booking
// confirmation emails (checkmark-cal-booking.js). Load after the EmailJS SDK.
const EMAILJS_SERVICE = 'service_jdvioa3';
const EMAILJS_INTERNAL_TEMPLATE = 'template_p5jpn2p';
const EMAILJS_CLIENT_TEMPLATE = 'template_74v582p';
const waitForEmailJSRateLimit = () => new Promise(resolve => window.setTimeout(resolve, 3000));
if (window.emailjs) emailjs.init({ publicKey: 'N5UpWeOs8jdOTQitf' });
