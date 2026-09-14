# Solar panel demos

One Next.js app and one Vercel deployment, with `main` as the production branch.

- `/`: demo selector
- `/demo-1`: existing multilingual website (defaults to `/demo-1/fa`)
- `/demo-2`: Persian, photo-led solar landing page inspired by the supplied reference
- `/demo-3`: blue and orange solar packages and products landing page

Demo 1 pages, components, data and styles live in `app/demo-1/`. Demo 2 lives in `app/demo-2/` with its own root layout and stylesheet; its images live in `public/demo-2/`. Demo 3 lives in `app/demo-3/` with its own layout and styles; it reuses the illustrative solar photos from `public/demo-2/`. The hub has its own root layout, isolated from Demo 1. Shared static assets remain in `public/`. Existing locale URLs redirect to Demo 1.

Run `npm run dev` locally or `npm run build` for a production build. Vercel can use the default Next.js settings and the repository root.

## License

**All Rights Reserved © 2026**

This repository is publicly available for viewing and reference purposes only.

You may **not** copy, modify, reproduce, distribute, publish, sublicense, or use any part of this repository or its source code without explicit written permission from the copyright holder.

The source code, assets, documentation, and other materials contained in this repository are proprietary and remain the intellectual property of the copyright holder.

For permission to use or reproduce any part of this repository, please contact the copyright holder.
