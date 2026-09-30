# Refine the homepage quote section

## Changes
- Update only the Home version of the shared quote block; all quotes on inner pages remain unchanged.
- Preserve the current Hindi and English wording, deep brown background, and ember-orange accent.
- Replace the empty side space with restrained Cordyceps botanical line art at very low opacity, drawn as decorative background artwork without photos.
- Turn the vertical orange lines into paired editorial ornaments with small botanical details, keeping the center visually quiet.
- Improve the Hindi-to-English hierarchy and tighten the section’s vertical rhythm so it connects naturally to the following “What is Cordyceps?” preview.
- Keep the artwork hidden or simplified on small screens to prevent crowding and horizontal overflow.

## Technical details
- Add a home-only presentation branch inside the existing `QuoteBlock`; reuse existing brand tokens and the current reveal behavior.
- Add scoped quote-section utilities in the global design system, with reduced-motion support where applicable.
- Do not change navigation, other sections, copy, SEO, links, or functionality.

## Verification
- Compare the Home section at desktop and mobile sizes.
- Confirm exact quote text, clean center alignment, no horizontal overflow, and no changes to inner-page quote sections.
