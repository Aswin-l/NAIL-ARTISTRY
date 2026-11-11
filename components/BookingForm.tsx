"use client";
import { useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function BookingForm() {
  const [sent, setSent] = useState(false);
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const service = String(data.get("service") || "Not decided yet");
    const date = String(data.get("date") || "Flexible");
    const note = String(data.get("note") || "");
    const message = `Hi Riya! I'd like to enquire about an appointment.%0AName: ${encodeURIComponent(name)}%0AService: ${encodeURIComponent(service)}%0APreferred date: ${encodeURIComponent(date)}%0ADetails: ${encodeURIComponent(note)}`;
    window.open(`https://wa.me/918248739478?text=${message}`, "_blank", "noopener,noreferrer");
    setSent(true);
  }
  return <form className="booking-form" onSubmit={submit}><div className="form-heading"><span>APPOINTMENT ENQUIRY</span><b>Let's make it happen <i>✦</i></b><small>Share a few details and we'll continue on WhatsApp.</small></div>
    <label>Your name<input name="name" placeholder="How should we call you?" required /></label>
    <div className="form-row"><label>Interested in<select name="service" defaultValue=""><option value="" disabled>Select a service</option><option>Gel polish</option><option>Press-on nails</option><option>Temporary extensions</option><option>Soft gel extensions</option><option>Nail art / custom design</option><option>Not sure yet</option></select></label><label>Preferred date<input name="date" type="date" /></label></div>
    <label>Your idea <span className="optional">(optional)</span><textarea name="note" rows={3} placeholder="Tell us about the look you're imagining..." /></label>
    <button className="button button-dark form-submit" type="submit">Send enquiry on WhatsApp <ArrowUpRight size={17}/></button>
    {sent && <p className="form-success"><CheckCircle2 size={16}/> WhatsApp is opening with your enquiry. See you there!</p>}
    <small className="privacy-note">No payment needed to enquire. Your appointment is confirmed directly with Riya.</small>
  </form>;
}
