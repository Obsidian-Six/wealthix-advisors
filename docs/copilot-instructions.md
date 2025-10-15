# GitHub Copilot Instructions for React + Next.js (Wealthix Advisors)

These suggestions help Copilot generate code aligned with our standards for this repo.

## Project defaults

- Framework: Next.js 15 (App Router) with React 19
- Static export: `output: 'export'` (static site in `out/`)
- GitHub Pages base path: `/wealthix-advisors`

# GitHub Copilot Instructions for React + Next.js (Wealthix Advisors)

These suggestions help Copilot generate code aligned with our standards for this repo.

## Project defaults

- Framework: Next.js 15 (App Router) with React 19
- Static export: `output: 'export'` (static site in `out/`)
- GitHub Pages base path: `/wealthix-advisors`
- Styling: Tailwind CSS v4
- TypeScript: strict mode enabled

## Conventions

- Use App Router (`app/`) and Server Components by default; switch to Client Components only if interactions or browser-only APIs are required (add `"use client"` at file top).
- Prefer file-based routing; colocate component files near usage.
- Avoid absolute URLs; prefix with `basePath`-aware paths when creating links or static asset URLs.
- Use Next `Image` only with `images.unoptimized: true` already set; for simple cases, `<img />` is acceptable in SSG.
- Keep components pure and small; lift state up only when needed.
- Write tests with Testing Library for behavior (queries by role/text/label), not implementation details.

## Testing

- Test files under `__tests__/` with `.test.tsx` extension.
- Use `@testing-library/react` and `@testing-library/jest-dom` matchers.
- Minimal example:

  ```tsx
  import { render, screen } from "@testing-library/react";
  import Component from "../app/Component";

  test("renders title", () => {
    render(<Component />);
    expect(screen.getByRole("heading", { name: /title/i })).toBeInTheDocument();
  });
  ```

## Performance & SSG

- Ensure routes are statically generatable; avoid dynamic server-side data unless prefetchable.
- Prefer `fetch` with `cache: 'force-cache'` or `revalidate` for ISR use-cases; avoid `no-store` except when necessary.
- Keep bundle size small; avoid client-only libraries when possible.

## Accessibility

- Use semantic elements and aria attributes when needed.
- Ensure form controls have accessible labels.

## CI/CD awareness

- Avoid importing server-only modules in client components.
- Do not assume runtime Node APIs in client components.
- Paths must be compatible with `basePath` (`/wealthix-advisors`).

## Code style

- Follow ESLint (`eslint.config.mjs`) and TypeScript strict checks.
- Use named exports for reusable utilities.
- Prefer async/await, handle errors explicitly.

## PR guidance

- Include tests for new components/logic.
- Update `docs/workflow.mmd` if CI steps change.
- If adding assets that must exist at the site root, ensure they land in `public/` so they export to `out/`.
