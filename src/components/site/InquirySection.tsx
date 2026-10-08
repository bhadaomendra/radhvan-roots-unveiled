import { useState } from "react";
import { INQUIRY_ENDPOINT } from "@/lib/inquiry";
import { ArrowRight, BookOpen, Building2, FileText, LockKeyhole, Users, Leaf, FlaskConical } from "lucide-react";
import cordycepsImage from "@/assets/cordyceps-militaris-macro.jpg";

const GOOGLE_SHEETS_ENDPOINT = INQUIRY_ENDPOINT;

export function InquirySection() {
  const [submitted, setSubmitted] = useState(false);
  const [configError, setConfigError] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (!GOOGLE_SHEETS_ENDPOINT) {
      event.preventDefault();
      setConfigError(true);
      return;
    }
    setConfigError(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="inquire" className="bg-[#f7f3e8] px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2rem] border border-[#d9d2c0] bg-white px-6 py-14 text-center shadow-[0_24px_70px_rgba(31,55,43,0.10)] sm:px-12">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#e8edd8] text-[#23483a]">
              <Leaf className="h-7 w-7" />
            </div>
            <p className="mt-6 text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[#8c6222]">
              Inquiry received
            </p>
            <h2 className="mt-3 font-display text-4xl text-[#173b2f] sm:text-5xl">
              Thank you for reaching out.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#5d625c]">
              We have received your Cordyceps training or setup requirement. Our team will review the details and get in touch with you shortly.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="inquire" className="relative overflow-hidden bg-[#f7f3e8] px-4 py-14 sm:px-6 lg:px-10 lg:py-24">
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#dfe7c9]/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#ead8a9]/30 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] border border-[#ded7c7] bg-[#fbf8ef] shadow-[0_30px_90px_rgba(31,55,43,0.12)] lg:grid-cols-[0.92fr_1.08fr]">
        <div className="relative overflow-hidden px-7 pb-8 pt-9 sm:px-10 sm:pt-12 lg:px-12 lg:py-14">
          <div className="absolute inset-0 bg-gradient-to-br from-[#fbf8ef] via-[#f7f3e8] to-[#edf0df]" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#dfcfa9] bg-[#f5e8c8]/70 px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.20em] text-[#76511b]">
              <Leaf className="h-4 w-4" />
              Cordyceps • Training • Setup
            </div>

            <h2 className="mt-7 max-w-xl font-display text-5xl leading-[0.98] tracking-[-0.035em] text-[#173b2f] sm:text-6xl">
              Start Your{" "}
              <span className="text-[#a66b18]">Cordyceps</span> Journey
            </h2>

            <p className="mt-6 max-w-xl text-[1.02rem] leading-7 text-[#4f554f]">
              Whether you are looking for professional training or planning your own cultivation setup, share your requirement with us. Our team will guide you based on your goals.
            </p>

            <div className="mt-8 space-y-5">
              <Benefit icon={<BookOpen />} title="Professional Training" text="Learn with practical, hands-on guidance." />
              <Benefit icon={<Building2 />} title="Setup Guidance" text="Support for lab design, equipment and process." />
              <Benefit icon={<FileText />} title="Business Consultation" text="Understand project planning, cost and production." />
              <Benefit icon={<Users />} title="Personalised Guidance" text="Discuss your specific cultivation requirement." />
            </div>

            <div className="relative mt-10 overflow-hidden rounded-[1.5rem] border border-[#d7d5c7] bg-[#173f31]">
              <img
                src={cordycepsImage}
                alt="Cordyceps militaris cultivation"
                className="h-48 w-full object-cover opacity-90 sm:h-56"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102f26] via-[#102f26]/20 to-transparent" />
              <div className="absolute inset-x-5 bottom-4 flex items-end justify-between gap-4 text-white">
                <div>
                  <p className="text-sm font-semibold">Practical learning</p>
                  <p className="mt-1 text-xs text-white/70">Research-led cultivation knowledge</p>
                </div>
                <FlaskConical className="h-7 w-7 text-[#e5bf70]" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#173f31] p-3 sm:p-5 lg:p-7">
          <div className="h-full rounded-[1.55rem] bg-white px-5 py-7 shadow-[0_18px_60px_rgba(0,0,0,0.10)] sm:px-8 sm:py-9">
            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-[#b48232]" />
              <span className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[#9a6a22]">
                Inquiry Form
              </span>
            </div>

            <h3 className="mt-4 font-display text-4xl leading-tight text-[#173b2f] sm:text-[2.75rem]">
              Tell Us About Your Requirement
            </h3>
            <p className="mt-2 text-sm leading-6 text-[#686b66]">
              It takes less than 2 minutes. Our team will get in touch with you.
            </p>

            <form
              action={GOOGLE_SHEETS_ENDPOINT || "#"}
              method="POST"
              target="radhvan-inquiry-submit"
              onSubmit={handleSubmit}
              className="mt-7 space-y-5"
            >
              <input type="hidden" name="source" value="Radhvan Origins — Cordyceps Inquiry" />
              <input type="hidden" name="page" value="/cultivation-training" />

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full Name" name="fullName" required placeholder="Enter your full name" />
                <Field label="WhatsApp / Mobile Number" name="phone" required placeholder="+91 XXXXX XXXXX" type="tel" />
                <Field label="Email Address" name="email" placeholder="Enter your email address" type="email" />
                <Field label="City / State" name="location" required placeholder="e.g. Jaipur, Rajasthan" />
              </div>

              <SelectField
                label="What are you interested in?"
                name="interest"
                required
                options={["Cordyceps Training", "Cordyceps Setup", "Training + Setup", "Consultation", "Need Guidance"]}
              />

              <div className="grid gap-5 sm:grid-cols-2">
                <SelectField
                  label="Approx. Investment Budget"
                  name="budget"
                  options={["Below ₹5 Lakh", "₹5–10 Lakh", "₹10–20 Lakh", "₹20 Lakh+", "Not Decided"]}
                />
                <SelectField
                  label="When are you planning to start?"
                  name="timeline"
                  options={["Immediately", "Within 1–3 Months", "3–6 Months", "Just Exploring"]}
                />
              </div>

              <div>
                <label htmlFor="requirement" className="mb-2 block text-sm font-semibold text-[#1d332b]">
                  Tell us briefly about your requirement
                </label>
                <textarea
                  id="requirement"
                  name="requirement"
                  rows={3}
                  maxLength={1000}
                  placeholder="Share your requirement, expected scale or any specific questions..."
                  className="w-full resize-none rounded-xl border border-[#d8d3c6] bg-[#fcfbf8] px-4 py-3 text-sm text-[#27332d] outline-none transition placeholder:text-[#9a9d98] focus:border-[#2e563f] focus:ring-2 focus:ring-[#2e563f]/10"
                />
              </div>

              {configError && (
                <p className="rounded-lg bg-[#fff5e8] px-4 py-3 text-sm text-[#8b5715]">
                  Inquiry form is being configured. Please contact us directly for now.
                </p>
              )}

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#1d513d] px-6 py-4 text-base font-semibold text-white shadow-lg shadow-[#173f31]/15 transition hover:bg-[#163b2f] focus:outline-none focus:ring-2 focus:ring-[#b48232] focus:ring-offset-2"
              >
                Submit My Inquiry
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>

              <p className="flex items-center justify-center gap-2 text-center text-xs leading-5 text-[#777a74]">
                <LockKeyhole className="h-3.5 w-3.5 shrink-0" />
                Your information is confidential and used only to respond to your inquiry.
              </p>
            </form>

            <iframe name="radhvan-inquiry-submit" title="Inquiry submission" className="hidden" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Benefit({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e5ebd4] text-[#2e563f]">
        {icon}
      </div>
      <div>
        <p className="text-[0.98rem] font-semibold text-[#19372d]">{title}</p>
        <p className="mt-0.5 text-sm text-[#666b65]">{text}</p>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  placeholder,
  required,
  type = "text",
}: {
  label: string;
  name: string;
  placeholder: string;
  required?: boolean;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-semibold text-[#1d332b]">
        {label}{required ? " *" : ""}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-12 w-full rounded-xl border border-[#d8d3c6] bg-[#fcfbf8] px-4 text-sm text-[#27332d] outline-none transition placeholder:text-[#9a9d98] focus:border-[#2e563f] focus:ring-2 focus:ring-[#2e563f]/10"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
  required,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-semibold text-[#1d332b]">
        {label}{required ? " *" : ""}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        defaultValue=""
        className="h-12 w-full appearance-none rounded-xl border border-[#d8d3c6] bg-[#fcfbf8] px-4 text-sm text-[#4e5750] outline-none transition focus:border-[#2e563f] focus:ring-2 focus:ring-[#2e563f]/10"
      >
        <option value="" disabled>Select an option</option>
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}
