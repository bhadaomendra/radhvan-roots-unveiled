import { useState } from "react";
import { pushEvent } from "@/lib/datalayer";
import { INQUIRY_ENDPOINT, submitInquiry } from "@/lib/inquiry";

const WHATSAPP_NUMBER = "919950091528";
const PAGE = "/cultivation-training";

type Status = "idle" | "sending" | "success" | "error";

const inputClass =
  "w-full rounded-sm border border-border bg-card px-4 py-2.5 text-sm text-bark focus:border-ember focus:outline-hidden";
const labelClass = "block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1";

function openWhatsApp(name: string, phone: string, city: string, message: string) {
  const text =
    `Hello Radhvan Origins, I am interested in the Cordyceps Cultivation Training in Jaipur.%0A%0A` +
    `Name: ${encodeURIComponent(name)}%0AMobile/WhatsApp: ${encodeURIComponent(phone)}%0A` +
    `City: ${encodeURIComponent(city)}%0AMessage: ${encodeURIComponent(message)}`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
}

export function BatchInquiryForm() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;

    const form = e.currentTarget;
    const field = (n: string) =>
      (form.elements.namedItem(n) as HTMLInputElement | HTMLTextAreaElement).value.trim();
    const data = {
      name: field("name"),
      phone: field("phone"),
      city: field("city"),
      message: field("message"),
      page: PAGE,
    };

    // Hidden honeypot field: real visitors never fill it, bots usually do.
    if (field("website")) {
      setStatus("success");
      return;
    }

    // Endpoint not configured yet -> keep the old WhatsApp behaviour.
    if (!INQUIRY_ENDPOINT) {
      openWhatsApp(data.name, data.phone, data.city, data.message);
      return;
    }

    setStatus("sending");
    try {
      await submitInquiry(data);
      pushEvent("form_submit", { form_name: "training_inquiry" });
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="py-6 text-center" role="status">
        <p className="eyebrow text-ember">Inquiry received</p>
        <h3 className="mt-3 font-display text-2xl text-bark">Thank you for reaching out.</h3>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
          We have received your details. Our team will contact you shortly about the upcoming
          training batches.
        </p>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20Radhvan%20Origins%2C%20I%20just%20submitted%20the%20training%20inquiry%20form.`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-block text-xs font-bold uppercase tracking-[0.15em] text-ember underline underline-offset-4"
        >
          Prefer WhatsApp? Chat with us →
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot: hidden from people and screen readers */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div>
        <label className={labelClass} htmlFor="inq-name">
          Your Full Name *
        </label>
        <input
          id="inq-name"
          type="text"
          name="name"
          required
          maxLength={100}
          autoComplete="name"
          placeholder="e.g. Omendra Bhada"
          className={inputClass}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass} htmlFor="inq-phone">
            WhatsApp / Phone *
          </label>
          <input
            id="inq-phone"
            type="tel"
            name="phone"
            required
            inputMode="tel"
            autoComplete="tel"
            maxLength={20}
            pattern="[0-9+\s\-]{8,20}"
            title="Enter a valid phone number, e.g. +91 99500 91528"
            placeholder="+91 99500 91528"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="inq-city">
            Your City / State *
          </label>
          <input
            id="inq-city"
            type="text"
            name="city"
            required
            maxLength={100}
            placeholder="e.g. Jaipur, Rajasthan"
            className={inputClass}
          />
        </div>
      </div>
      <div>
        <label className={labelClass} htmlFor="inq-message">
          Your Questions / Lab Setup Timeline
        </label>
        <textarea
          id="inq-message"
          name="message"
          rows={3}
          maxLength={1000}
          placeholder="e.g. I am interested in joining the next weekend batch in Jaipur and exploring lab setup requirements."
          className={inputClass}
        ></textarea>
      </div>

      {status === "error" && (
        <p className="rounded-sm bg-[#fff5e8] px-4 py-3 text-sm text-[#8b5715]" role="alert">
          Sorry, we could not send your inquiry. Please check your internet connection and try
          again, or message us on WhatsApp.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-ember px-6 py-3.5 text-xs font-bold tracking-[0.16em] text-primary-foreground uppercase transition-transform hover:-translate-y-0.5 cursor-pointer shadow-md hover:shadow-lg disabled:cursor-wait disabled:opacity-70 disabled:hover:translate-y-0"
      >
        {status === "sending" ? "Sending…" : "Submit Inquiry →"}
      </button>
    </form>
  );
}
