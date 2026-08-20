# Plan - Integrate GTM and GA4 Tracking

The user wants to activate Google Tag Manager (GTM) and Google Analytics 4 (GA4) tracking for the Radhvan Origins website. I will use the IDs provided: `GTM-KGKT3H4T` and `G-SL60MQZ825`.

## Proposed Changes

### Configuration
- Update `src/routes/__root.tsx` to include the GTM script in the `<head>` and the GTM noscript iframe at the beginning of the `<body>`.
- Update `index.html` as a fallback or for consistency, ensuring the tracking scripts are present in the static template as well.

### Implementation Details
- **Google Tag Manager (GTM-KGKT3H4T)**:
  - Header script for asynchronous loading.
  - Body noscript tag for environments where JS is disabled.
- **Google Analytics 4 (G-SL60MQZ825)**:
  - While GTM usually handles GA4, I will add the direct `gtag.js` configuration if preferred, but standard practice is to let GTM manage it. Given the user asked for both, I will ensure GTM is primary but can also add the GA4 snippet directly to `__root.tsx` if they want redundant/direct tracking. I'll stick to GTM as the main container and add GA4 via gtag as requested to ensure "GA4 tracking activate" is fulfilled.

## Technical details
- I will modify `src/routes/__root.tsx`'s `head` property to inject the scripts.
- I will modify `RootShell` in `src/routes/__root.tsx` to include the `noscript` part of GTM.
- I will mirror these changes in `index.html`.
