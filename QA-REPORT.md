# VELO RUSH 2027 — QA report

## Completed in this pass
- Preserved the 11 approved page sections and their original section content/layout source.
- Restored Section 02 scroll-reveal animation rules and retained the sequential word/photo/caption reveals.
- Added a Framer Motion in-view wrapper to every section, respecting reduced-motion preferences.
- Corrected the hero carousel image-key mismatch and retained the 2.5-second auto-advance interval.
- Made the interaction bundle idempotent and removed the duplicate service-section observer.
- Fixed hero navigation targets and added an actual mobile navigation dropdown.
- Updated the four guest cards to fictional illustrative US-based profiles.
- Scoped the legacy race CSS and removed stale global hero/navigation rules that overrode the approved hero.
- Verified there are no duplicate IDs or broken in-page anchor targets; all 26 image elements have alt text.
- Added a downloader for 18 unique cycling/event images, using descriptive lowercase-hyphenated filenames and image-size optimization attempts. The predev/prebuild hooks localize images automatically where network access permits.
- Added shadcn configuration, required UI primitives, alias configuration, and project ignore rules.

## Checks performed
- Interaction JavaScript syntax: passed (`node --check`).
- Image downloader syntax: passed (`node --check`).
- CSS parse: passed with no parser errors.
- Static DOM check: 0 duplicate IDs, 0 broken in-page anchors, 26 images with alt text, 4 registration steps, 7 FAQ items, and all 4 fictional guest profiles present.
- TypeScript structure: passed a temporary structural check using local ambient stubs and temporary image declarations. This is not equivalent to a dependency-backed Next.js build.
- ZIP integrity: checked after packaging.

## Environment-dependent items not verified here
- The execution environment cannot resolve the npm registry or image hosts. The 18 image binaries therefore could not be downloaded into this ZIP, and a real `npm install` / `next build` could not be completed.
- On a network-enabled machine, run `npm install` and then `npm run dev`. The `predev` hook tries to download the images and generates local imports. Failed downloads temporarily fall back to remote URLs and are reported in the terminal. Retry with `npm run assets:download`.
- Run `npm run build` after the dependencies are installed to verify the production build in your environment.
- Registration remains front-end only; connect a form backend before accepting real registrations.
- The proposed date and venue need confirmation before publication.
