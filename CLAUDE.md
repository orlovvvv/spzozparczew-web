# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Payload CMS website for SPZOZ Parczew (healthcare facility), built on the official Payload Website Template. It uses Next.js 15 App Router with Payload 3.x as the headless CMS, featuring a layout builder, draft preview, SEO management, and form builder.

## Commands

```bash
# Development
pnpm dev              # Start development server (http://localhost:3000)
pnpm build            # Build for production (includes sitemap generation)
pnpm start            # Start production server

# Testing
pnpm test             # Run all tests (integration + e2e)
pnpm test:int         # Run integration tests with Vitest
pnpm test:e2e         # Run e2e tests with Playwright

# Code Quality
pnpm lint             # Run ESLint
pnpm lint:fix         # Run ESLint with auto-fix
tsc --noEmit          # Type check without emitting

# Payload CLI
pnpm generate:types      # Regenerate TypeScript types after schema changes
pnpm generate:importmap  # Regenerate import map after component changes
pnpm payload migrate:create  # Create a new migration (for production DB)
pnpm payload migrate        # Run pending migrations
```

## Architecture

### Tech Stack
- **Framework**: Next.js 15 (App Router) + React 19
- **CMS**: Payload 3.x with SQLite (configurable to Postgres/MongoDB)
- **Styling**: TailwindCSS + shadcn/ui components
- **Rich Text**: Lexical editor
- **Testing**: Vitest (integration) + Playwright (e2e)

### Directory Structure
```
src/
├── app/
│   ├── (frontend)/         # Public website routes ([slug], posts, search)
│   └── (payload)/          # Payload admin panel routes
├── access/                 # Access control functions (anyone, authenticated, authenticatedOrPublished)
├── blocks/                 # Layout builder blocks (ArchiveBlock, Banner, CallToAction, Content, Form, MediaBlock)
├── collections/            # Payload collections (Pages, Posts, Media, Categories, Users)
├── components/             # Shared React components
├── fields/                 # Reusable field configurations (defaultLexical)
├── Footer/                 # Footer global config
├── Header/                 # Header global config
├── heros/                  # Hero components for pages
├── hooks/                  # Payload hooks (revalidation, etc.)
├── plugins/                # Plugin configurations (SEO, redirects, search, forms, nested-docs)
├── search/                 # Search plugin customizations
└── utilities/              # Helper functions
tests/
├── e2e/                    # Playwright e2e tests (*.e2e.spec.ts)
└── int/                    # Vitest integration tests (*.int.spec.ts)
design/                     # Static HTML mockups - reference designs for implementation
```

### Key Patterns

**Path Aliases**: Use `@/` for imports from `src/` and `@payload-config` for the Payload config.

**Collections**: Pages and Posts use the layout builder pattern with versioning and drafts enabled. Access control uses `authenticatedOrPublished` for read operations.

**Plugins Configured**:
- `@payloadcms/plugin-seo` - SEO metadata management
- `@payloadcms/plugin-redirects` - URL redirects with revalidation
- `@payloadcms/plugin-nested-docs` - Nested categories
- `@payloadcms/plugin-form-builder` - Dynamic form creation
- `@payloadcms/plugin-search` - Search indexing for posts

## Payload CMS Critical Patterns

### Security Rules (from AGENTS.md)

1. **Local API Access Control**: When passing `user` to Local API operations, ALWAYS set `overrideAccess: false` to enforce permissions:
   ```typescript
   await payload.find({
     collection: 'posts',
     user: someUser,
     overrideAccess: false, // REQUIRED
   })
   ```

2. **Transaction Safety**: Always pass `req` to nested operations in hooks to maintain atomicity:
   ```typescript
   await req.payload.create({
     collection: 'audit-log',
     data: { docId: doc.id },
     req, // Maintains transaction
   })
   ```

3. **Prevent Hook Loops**: Use `context` flags when updating within hooks:
   ```typescript
   if (context.skipHooks) return
   await req.payload.update({
     // ...
     context: { skipHooks: true },
     req,
   })
   ```

### After Schema Changes
1. Run `pnpm generate:types` to regenerate `src/payload-types.ts`
2. Run `pnpm generate:importmap` if you added/modified custom components
3. Run `tsc --noEmit` to verify TypeScript correctness

### Component Definition
Custom admin components use file paths (not direct imports):
```typescript
admin: {
  components: {
    beforeLogin: ['@/components/BeforeLogin'],
  },
}
```

## Additional Context

For detailed Payload CMS patterns and rules, see `.cursor/rules/` which contains:
- `payload-overview.md` - Core concepts and quick reference
- `security-critical.mdc` - Critical security patterns
- `collections.md`, `fields.md`, `hooks.md` - Schema patterns
- `access-control.md`, `access-control-advanced.md` - Permission patterns
- `components.md` - Custom component development
- `endpoints.md` - Custom API endpoints
