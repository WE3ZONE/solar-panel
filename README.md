# Solar panel demos

One Next.js app and one Vercel deployment, with `main` as the production branch.

- `/`: demo selector
- `/demo-1`: existing multilingual website (defaults to `/demo-1/fa`)
- `/demo-2` and `/demo-3`: placeholders for future designs

Demo 1 pages, components, data and styles live in `app/demo-1/`. Demo 2 and 3 placeholders live in `app/(hub)/demo-2/` and `app/(hub)/demo-3/`; replace these when their designs are ready. The hub has its own root layout, isolated from Demo 1. Shared static assets remain in `public/`. Existing locale URLs redirect to Demo 1.

Run `npm run dev` locally or `npm run build` for a production build. Vercel can use the default Next.js settings and the repository root.

## License

**All Rights Reserved © 2026**

This repository is publicly available for viewing and reference purposes only.

You may **not** copy, modify, reproduce, distribute, publish, sublicense, or use any part of this repository or its source code without explicit written permission from the copyright holder.

The source code, assets, documentation, and other materials contained in this repository are proprietary and remain the intellectual property of the copyright holder.

For permission to use or reproduce any part of this repository, please contact the copyright holder.
