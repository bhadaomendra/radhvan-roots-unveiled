# Plan: Update Radhvan Origins Multi-page Content

Refine the existing 11-page structure to match the new approved content requirements while preserving the premium visual identity.

## User Review Required

> [!IMPORTANT]
> The plan preserves the existing visual design (parchment theme, fonts, spacing).
> Content will be restructured to follow the educational, research-oriented tone.
> No medical or therapeutic claims will be made.

## Proposed Changes

### Home Page (`src/routes/index.tsx`)
- Concise introduction to Radhvan Origins as a research and lab-cultivation initiative.
- Sections: Hero, Short Intro, Intro to Cordyceps militaris, Why Understanding Matters, Brief Lab Intro, Research Preview.
- Clear CTAs to Study, Cultivation, and Research pages.

### Why Radhvan (`src/routes/why-radhvan/index.tsx`)
- Prominent Hindi brand statement with emotional English translation.
- Sections: Why we started, Primary beliefs, Learning vs Scaling, Responsible Cultivation, Long-term direction.
- Tone: Personal and authentic.

### Cordyceps Study (`src/routes/cordyceps-study/index.tsx`)
- Educational deep dive.
- Sections: What is Cordyceps militaris?, Biological characteristics, Life cycle, Key compounds (Cordycepin, Adenosine), Lab vs Wild, Militaris vs Sinensis.
- Scientific but accessible language.

### Cultivation & Training (`src/routes/cultivation-training/index.tsx`)
- Practical knowledge focus.
- Sections: Environmental requirements, Sterile techniques, Substrate, Inoculation, Incubation, Fruiting, Harvesting, Post-harvest handling.
- Training section: Emphasis on practical and responsible knowledge.
- CTA for training inquiries.

### Research & Knowledge (`src/routes/research-knowledge/index.tsx`)
- Evidence-focused page.
- Sections: Research approach, Scientific evidence (compounds/applications), Cultivation observations, Knowledge documentation, Learning from experiments.
- Disclaimer: Information context within scientific evidence.

### Contact (`src/routes/contact/index.tsx`)
- Minimal design.
- Simple contact form: Name, Email, Message.
- Links to Info email and WhatsApp.

### Technical Details
- Reuse `PageShell`, `PageHero`, `Section`, `QuoteBlock` from `src/components/site/Layout.tsx`.
- Update `src/components/site/Sections.tsx` to modularize content for use across pages.
- Ensure SEO titles and meta descriptions are unique and optimized per page.
- Maintain responsiveness across all devices.
