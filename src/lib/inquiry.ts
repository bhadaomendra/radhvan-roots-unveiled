/**
 * Inquiry form -> Google Sheet.
 *
 * Paste the "Web app" URL of your Google Apps Script deployment here
 * (it looks like https://script.google.com/macros/s/AKfy.../exec).
 * See apps-script/inquiry-sheet.gs for the script and setup steps.
 *
 * While this is empty the form keeps its old behaviour (opens WhatsApp),
 * so the live site never breaks if the URL is missing.
 */
export const INQUIRY_ENDPOINT = "";

export type InquiryData = {
  name: string;
  phone: string;
  city: string;
  message: string;
  page: string;
};

const TIMEOUT_MS = 15000;

/**
 * Sends one inquiry to the Google Apps Script web app.
 *
 * Apps Script does not send CORS headers, so the request is "no-cors":
 * the browser cannot read the reply, but the POST is delivered. A rejected
 * promise therefore means a real network failure (offline, blocked, timeout).
 */
export async function submitInquiry(data: InquiryData): Promise<void> {
  const body = new URLSearchParams({
    ...data,
    source: "Radhvan Origins - Training Inquiry",
  });

  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    await fetch(INQUIRY_ENDPOINT, {
      method: "POST",
      mode: "no-cors",
      body,
      signal: controller.signal,
    });
  } finally {
    window.clearTimeout(timer);
  }
}
