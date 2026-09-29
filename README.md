# livros-saas

Subscription platform & landing page for digital books. Edge-ready, authenticated, type-safe.

```typescript
import { prisma } from "@/src/lib/prisma";
import { hashPassword } from "@/src/lib/auth";

// Provisioning a subscriber account with encrypted credentials
const user = await prisma.user.create({
  data: {
    email: "reader@example.com",
    passwordHash: await hashPassword("securePassword123"),
    role: "SUBSCRIBER",
    subscription: {
      create: {
        status: "ACTIVE",
        plan: "MONTHLY_ACCESS",
      },
    },
  },
  include: { subscription: true },
});
```

## Overview

livros-saas is a web platform and landing page designed for selling, distributing, and managing access to digital books via recurring subscriptions:

- **Book Showcase & Sales Landing:** High-conversion storefront with dynamic catalog presentation, preview chapters, and pricing tiers.
- **Subscriber Authentication:** Edge-compatible session management and credential authentication backed by NextAuth v5 and `bcrypt-ts`.
- **Database Engine via LibSQL:** High-performance database operations over HTTP/WebSockets with zero cold-start latency using Turso and Prisma's native adapter.
- **Accessible UI Primitives:** Completely styled, keyboard-navigable components powered by Radix UI, Tailwind CSS, and `class-variance-authority`.

## Stack

- **Framework:** Next.js 15 (App Router, Turbopack, Server Actions)
- **Language:** TypeScript 5
- **Database & ORM:** LibSQL (Turso / SQLite) with Prisma 6 (`@prisma/adapter-libsql`)
- **Authentication:** NextAuth v5 (Beta 25) + `bcrypt-ts`
- **Styling:** Tailwind CSS + `tailwindcss-animate`
- **UI Components:** Radix UI primitives (`@radix-ui/react-dropdown-menu`, `@radix-ui/react-slot`, `@radix-ui/react-label`)
- **Icons:** Lucide React

## Why This Project Exists

Most SaaS boilerplates for digital content either bundle heavy relational database drivers that choke in serverless environments, or rely on client-side state without resilient access control:

- **Serverless-First LibSQL Driver:** Standard TCP connection pools break down or incur high latency during serverless auto-scaling. By utilizing `@libsql/client` alongside `@prisma/adapter-libsql`, queries travel over lightweight HTTP requests without pooling bottlenecks.
- **Zero-Binary Password Hashing:** Conventional `bcrypt` depends on node-gyp and native C++ binaries, which frequently cause failures in Edge and serverless functions. `bcrypt-ts` provides pure-JavaScript/TypeScript hashing with standard bcrypt compatibility.
- **Polymorphic UI Composition:** Using `class-variance-authority` (CVA) alongside Radix UI primitives ensures UI components maintain strict styling variants without CSS specificity collisions or layout regressions.
- **Automated Client Generation:** With `prisma generate` mapped directly to `postinstall` and build cycles, deployment pipelines always synchronize typed client definitions with schema changes without manual intervention.

## Getting Started Locally

### Prerequisites

- Node.js 18+ or 20+
- A Turso database instance or a local SQLite file

### Environment Variables

Create a `.env` file in the project root:

```env
DATABASE_URL="file:./dev.db"
# TURSO_AUTH_TOKEN="your-turso-token-if-using-remote-turso"

AUTH_SECRET="your-32-character-random-secret"
NEXTAUTH_URL="http://localhost:3000"
```

### Installation and Execution

1. Install dependencies:

```bash
npm install
```

2. Push schema to LibSQL / SQLite via Prisma:

```bash
npx prisma db push
```

3. Start local development server with Turbopack:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Project Structure

```text
src/
├── app/          # Next.js App Router (public landing, auth routes, and reading portal)
├── components/   # Radix UI primitives, design tokens, and modular marketing sections
├── lib/          # Prisma client instantiation, LibSQL adapter, and auth helpers
├── styles/       # Tailwind CSS configurations and base animations
└── prisma/       # Prisma schema, migrations, and database seeders
```

## Technical Decisions

- **Adapter-Driven ORM:** Decoupling the Prisma query engine from native database binaries via `@prisma/adapter-libsql` allows the entire application runtime to remain fully portable across Node.js, Vercel, and Cloudflare.
- **Turbopack Execution Pipeline:** Local development runs strictly through `next dev --turbopack`, accelerating fast-refresh cycles on React 19 builds.
- **Separation of Concerns in Auth:** Authentication logic delegates credentials validation to standalone server actions, keeping the public landing page lightweight and statically cacheable.

## Scripts

- `npm run dev` — Starts the local dev server using Turbopack.
- `npm run build` — Generates Prisma Client and creates the production bundle.
- `npm run start` — Starts the production Next.js server.
- `npm run lint` — Runs ESLint code quality checks.

## License

To be determined. Inquire with the author for usage or redistribution permissions.
