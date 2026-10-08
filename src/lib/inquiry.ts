/**
 * Inquiry form -> Google Sheet.
 *
 * The Apps Script Web App URL is configured here for the live Radhvan Origins
 * Cordyceps training/setup inquiry form.
 */

export const INQUIRY_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbwuhUoHXHvicpKD1ftX57yEozH2Ssyq3CimB2J2wJ43-cOcEQBSHVzTbJF6tApHj_cg/exec";

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
 * the browser cannot read the reply, but the POST is delivered.
 */
export async function submitInquiry(data: InquiryData): Promise<void> {
  const body = new URLSearchParams({
    name: data.name,
    phone: data.phone,
    city: data.city,
    message: data.message,
    page: data.page,
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
