# Tracking QA Checklist & Event Tests

This document serves as the confirmation and test log for Google Tag Manager (GTM) and Google Analytics 4 (GA4) integration.

## 1. Tracking QA Checklist

| Item | Requirement | Status | Verification Method |
| :--- | :--- | :--- | :--- |
| **GTM Header Script** | Container ID `GTM-KGKT3H4T` present in `<head>` | ✅ Verified | Manual Inspection / Automated Test |
| **GTM Body Noscript** | Iframe noscript present at start of `<body>` | ✅ Verified | Manual Inspection |
| **GA4 Measurement** | Measurement ID `G-SL60MQZ825` config present | ✅ Verified | Network Request (g/collect) |
| **Meta Pixel** | Pixel ID `2102948430304505` firing | ✅ Verified | Network Request (tr/) |
| **Multi-page Tracking** | Tags fire on route change (SPA navigation) | ✅ Verified | TanStack Router Integration |

## 2. Automated Event Tests (Results)

The following tests were performed using Playwright on `http://localhost:8080` (UTC Aug 20 2026):

### Page Load Tests
| Page Path | GTM Loaded | GA4 Fired | Meta Fired | dataLayer 'gtm.js' |
| :--- | :--- | :--- | :--- | :--- |
| `/` (Home) | ✅ | ✅ | ✅ | ✅ |
| `/why-radhvan` | ✅ | ✅ | ✅ | ✅ |
| `/cordyceps-study` | ✅ | ✅ | ✅ | ✅ |
| `/cultivation-training` | ✅ | ✅ | ✅ | ✅ |
| `/research-knowledge` | ✅ | ✅ | ✅ | ✅ |
| `/contact` | ✅ | ✅ | ✅ | ✅ |

### Interaction Tests
- **Navigation Click**: All menu items correctly trigger a new page view in GA4 via GTM's history change listener.
- **CTA Buttons**: Email and WhatsApp links are correctly identified as outbound clicks/events in the GTM debug console.

## 3. How to verify manually
1. Open [GTM Preview Mode](https://tagmanager.google.com/#/container/accounts/6253457142/containers/171587841/workspaces/1/debug) for `GTM-KGKT3H4T`.
2. Visit `radhvanorigins.com`.
3. Check the "Summary" tab in Tag Assistant to see "Tags Fired".
