// Cal.com consultation calendar shared by Home, Recording, Mixing & Mastering
// and Checkmark Live. Renders the official inline embed into #cal-inline and,
// after a booking, sends the client + internal EmailJS emails. Needs
// checkmark-emailjs.js loaded first. Runs once per page.
(() => {
if (window.__checkmarkConsultationCal || !document.getElementById('cal-inline')) return;
window.__checkmarkConsultationCal = true;
// The embed pulls ~1 MB of Cal.com scripts and fonts, so it starts only when
// the calendar comes within ~1200px of the screen (right away without
// IntersectionObserver). Nothing else on the page uses Cal before that.
const start = () => {
(function(C,A,L){let p=(a,ar)=>a.q.push(ar),d=C.document;C.Cal=C.Cal||function(){let cal=C.Cal,ar=arguments;if(!cal.loaded){cal.ns={};cal.q=cal.q||[];d.head.appendChild(d.createElement('script')).src=A;cal.loaded=true}if(ar[0]===L){const api=function(){p(api,arguments)},namespace=ar[1];api.q=api.q||[];if(typeof namespace==='string'){cal.ns[namespace]=cal.ns[namespace]||api;p(cal.ns[namespace],ar);p(cal,['initNamespace',namespace])}else p(cal,ar);return}p(cal,ar)}})(window,'https://app.cal.com/embed/embed.js','init');
Cal('init','consultation',{origin:'https://cal.com'});
Cal.ns.consultation('inline',{elementOrSelector:'#cal-inline',config:{layout:'month_view',theme:'light'},calLink:'checkmarkaudio/consult'});
Cal.ns.consultation('ui',{theme:'light',styles:{branding:{brandColor:'#D6A85E'}},hideEventTypeDetails:false,layout:'month_view'});
Cal.ns.consultation('on',{action:'bookingSuccessful',callback:async event=>{const data=event.detail?.data||{},booking=data.booking||data,attendee=booking.attendees?.[0]||{},start=booking.startTime||data.startTime,startDate=start?new Date(start):null,when=startDate?`${startDate.toLocaleDateString('en-US',{dateStyle:'full'})} at ${startDate.toLocaleTimeString('en-US',{timeStyle:'short'})}`:'the time selected',summary=`Your free Checkmark Audio consultation is booked for ${when} at 5413 Lomas Blvd NE, Albuquerque, NM 87110.`;const client={name:attendee.name||'',email:attendee.email||'',reply_to:attendee.email||'',phone:attendee.phoneNumber||attendee.phone||'',time:new Date().toLocaleString(),style:'Consultation Booking',message:summary},internal={...client,message:`New consultation booked for ${when}.`};if(window.emailjs){try{await emailjs.send(EMAILJS_SERVICE,EMAILJS_CLIENT_TEMPLATE,client)}catch(error){console.error('Client booking email failed',error)}await waitForEmailJSRateLimit();try{await emailjs.send(EMAILJS_SERVICE,EMAILJS_INTERNAL_TEMPLATE,internal)}catch(error){console.error('Internal booking email failed',error)}}}});
};
const calendar = document.getElementById('cal-inline');
if (!('IntersectionObserver' in window)) start();
else {
  const watch = new IntersectionObserver(entries => {
    if (!entries.some(entry => entry.isIntersecting)) return;
    watch.disconnect();
    start();
  }, { rootMargin: '1200px 0px' });
  watch.observe(calendar);
}
})();
