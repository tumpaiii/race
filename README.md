# VELO RUSH 2027

Next.js 14 App Router + TypeScript + Tailwind CSS.

## Run locally
`npm install` then `npm run dev`.

## Image fix
Known failing cycling image references from the supplied screen recording have been redirected to cycling images already used in the approved hero. All image references are centralized in `src/assets/images/stock-images.ts`, and `<img>` elements have a fallback source. Images are remote Pexels/Unsplash URLs, so internet access is required; binary image files are not bundled locally.

## Structure
- `app/` App Router
- `components/all-components/` 11 page sections
- `components/ui/` button, badge, card
- `lib/utils.ts` cn helper
- `src/assets/images/stock-images.ts` image source map
- `src/assets/icons/` VELO RUSH mark

Speaker profiles are fictional. Date and venue are proposed. Registration is front-end only and does not store or submit entries. Run `npm run build` on a machine with npm registry access before publishing.

## Typography correction
Global heading sizes have been reduced for a more balanced hierarchy. The hero headline is constrained to its own column so it no longer runs underneath the right-side image thumbnails. Tablet and mobile sizes have separate clamps.
