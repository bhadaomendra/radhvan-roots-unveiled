# Restoration Plan - Multi-page Navigation

The user reported that clicking menu items only shows one page (the home page content). This is because the application was reverted to a single-page structure, but the navigation links still point to sub-pages that no longer exist or are not being handled by the router.

## Proposed Changes

### 1. Restore Multi-page Routing
- Refactor `src/pages.tsx` to use `RouterProvider` from `@tanstack/react-router` instead of rendering the `App` component directly.
- Re-create the necessary route files in `src/routes/` to handle the different sections of the site.

### 2. Implementation Details
- **Entry Point**: Update `src/pages.tsx` to initialize the TanStack Router.
- **Root Layout**: Ensure `src/routes/__root.tsx` correctly renders `<Outlet />` and provides the necessary context (QueryClient).
- **Sub-pages**: Create the following routes using `src/components/site/Layout.tsx` and `src/components/site/GuidePages.tsx`:
    - `/why-radhvan`
    - `/cordyceps-study`
    - `/cultivation-training`
    - `/research-knowledge`
    - `/contact`
- **Home Page**: Update `src/routes/index.tsx` to render the home-specific layout.

### 3. Verification
- Verify that clicking each navigation link correctly loads the corresponding page content.
- Ensure the header and footer are consistent across all pages.
- Confirm that the "Join the list" button and other internal links work correctly.

## Technical Details
- Using `@tanstack/react-router` for file-based routing.
- Re-using existing components from `src/components/site/` to maintain visual consistency.
- Ensuring static export compatibility for the domainz.in hosting environment.
