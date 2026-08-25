# Plan: Install Meta Pixel

The user wants to install the Meta Pixel code on their website. This involves adding a base script to the `<head>` and a `<noscript>` tag to the `<body>`.

## Technical Details

- **Files to modify**: 
    - `src/routes/__root.tsx`: Add the Meta Pixel base script using TanStack Router's `head` property (via a script tag in the `scripts` array or by injecting it into the `RootShell`).
    - `index.html`: Add the Meta Pixel code for the static build (SEO and initial load).

## Steps

1. Update `src/routes/__root.tsx` to include the Meta Pixel script in the `head` metadata and the `noscript` tag in the `RootShell` component.
2. Update `index.html` to include the Meta Pixel code for the static/initial page load.

---
**Verification**: Check the page source in the preview to ensure the script and noscript tags are correctly rendered.
