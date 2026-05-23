<div align="center">

<img src="https://img.shields.io/badge/Echo-AI%20Support%20Platform-6366f1?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0tMiAxNWwtNS01IDEuNDEtMS40MUwxMCAxNC4xN2w3LjU5LTcuNTlMMTkgOGwtOSA5eiIvPjwvc3ZnPg==" alt="Echo"/>

# Echo

### 🤖 Autonomous AI Customer Support — From First Message to Resolution

*A production-grade, multi-tenant B2B SaaS platform where AI handles support end-to-end,
escalating to humans only when it matters.*

<br/>

[![Next.js](https://img.shields.io/badge/Next.js-15.2.3-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![Convex](https://img.shields.io/badge/Convex-Reactive%20Backend-EF4444?style=flat-square&logo=convex)](https://convex.dev/)
[![Clerk](https://img.shields.io/badge/Clerk-Auth-6C47FF?style=flat-square&logo=clerk)](https://clerk.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Turborepo](https://img.shields.io/badge/Turborepo-Monorepo-EF4444?style=flat-square&logo=turborepo)](https://turbo.build/)
[![Vapi](https://img.shields.io/badge/Vapi-Voice%20AI-10B981?style=flat-square)](https://vapi.ai/)
[![Sentry](https://img.shields.io/badge/Sentry-Monitoring-362D59?style=flat-square&logo=sentry)](https://sentry.io/)
[![AWS](https://img.shields.io/badge/AWS-Secrets%20Manager-FF9900?style=flat-square&logo=amazonaws)](https://aws.amazon.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)

<br/>

[🚀 Live Demo](#) · [📸 Screenshots](#-screenshots) · [⚡ Quick Start](#-installation) · [📖 Docs](#-architecture--workflow)

</div>

---

## 📌 Overview

**Echo** is a fully autonomous, multi-tenant AI customer support platform built for businesses that want to replace reactive, human-heavy support queues with intelligent, always-on AI agents.

When a customer initiates a conversation — via chat or voice — Echo's AI agent handles the full interaction: understands context, retrieves answers from a company knowledge base using **Retrieval Augmented Generation (RAG)**, performs tool calls to escalate or resolve tickets, and hands off to a human operator only when frustration or complexity demands it.

Businesses embed the Echo widget into their product with a single script tag. Operators manage live conversations, monitor AI decisions, and intervene in real time through a rich dashboard — with full session context, message history, and conversation status at a glance.

**The problem Echo solves:**
> Most SaaS support tools are passive — they route tickets to humans. Echo flips this: AI is the first responder, humans are the escalation path.

---

## ✨ Features

### 🧠 Autonomous AI Agent
- Handles customer conversations end-to-end using **OpenAI / Gemini / Anthropic / Groq** via the AI SDK (model-agnostic)
- Detects frustration signals in conversation and **auto-escalates** to a human operator via AI tool calling
- **Auto-resolves** tickets when issues are confirmed closed, updating status in real time
- Operator-configurable AI prompt with a built-in **AI prompt enhancement tool** that rewrites and professionalizes operator instructions

### 🎙️ Voice AI Agent (Vapi)
- Customers can initiate **live voice calls** with an AI assistant directly from the widget
- **White-label multi-tenancy**: each business brings their own Vapi API keys, stored securely in **AWS Secrets Manager**
- Full call lifecycle management (start, end, transcription) via a custom `useVapiCall` hook in the widget

### 🏢 Multi-Tenant Architecture
- Full **organization-based tenancy** powered by Clerk organizations
- Every data query is scoped by `organizationId` extracted from JWT custom claims — no cross-tenant data leakage
- Middleware + frontend guards enforce org membership before any protected route is accessible
- Each organization manages its own AI configuration, knowledge base, and widget settings

### 📊 Operator Dashboard
- Real-time **inbox view** of all conversations with filters: `unresolved`, `escalated`, `resolved`
- Full message thread with avatars (DiceBear), timestamps, and country flags (timezone-mapped)
- Operators can **manually toggle** conversation status or let the AI manage it via tool calls
- Collapsible sidebar with organization switcher, user menu, and dark/light theming

### 💬 Embeddable Customer Widget
- Lightweight, self-contained Next.js app deployable as an embedded iframe
- **Anonymous session auth**: customers get a 24-hour temporary session (no sign-up required), persisted in localStorage keyed by org ID
- Multi-screen SPA routing via **Jotai atom families** (home → loading → chat → voice selection)
- Infinite scroll on message and conversation history with real-time reactive updates

### 🔍 RAG-Powered Knowledge Base
- Operators upload documentation; content is chunked and embedded via **vector embeddings**
- AI queries the knowledge base on every response — no model fine-tuning required
- Answers are grounded in company-specific knowledge, dramatically reducing hallucination

### 🔐 Security & Observability
- **Sentry** full-stack integration: session replay, user context, Convex backend error capture
- Route-level, middleware-level, and database-level authorization validation
- Clerk JWT custom claims enforce org scoping at every layer

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | Next.js 15.2.3, React 19, Tailwind CSS, shadcn/ui |
| **Monorepo** | Turborepo, pnpm v10 workspaces |
| **Backend** | Convex (reactive DB, queries, mutations, actions) |
| **AI / LLM** | AI SDK v4 (OpenAI, Gemini, Anthropic, Groq), Convex Agent Component |
| **Voice AI** | Vapi (multi-tenant white-label voice assistants) |
| **Embeddings / RAG** | Vector embeddings via Convex + AI SDK |
| **Authentication** | Clerk v2.6.1+ (JWT, organizations, middleware) |
| **State Management** | Jotai (atom families, localStorage persistence) |
| **Secrets** | AWS Secrets Manager (per-tenant API keys) |
| **Monitoring** | Sentry (session replay, error tracking, Convex integration) |
| **Forms** | React Hook Form v7.61.1 + Zod v3.25 |
| **Avatars** | DiceBear (generated from session IDs) |
| **Deployment** | Vercel (dashboard + widget), Convex Cloud |

---

## 🏗️ Architecture / Workflow

Echo is a **three-app monorepo** where a shared Convex backend powers two distinct Next.js frontends and a shared package layer.

```
┌─────────────────────────────────────────────────────────────┐
│                        CUSTOMER SIDE                        │
│                                                             │
│   Browser  ──embed script──►  Widget App (Next.js)         │
│                                    │                        │
│                              Anonymous Session              │
│                              (24h, localStorage)            │
└─────────────────────────┬───────────────────────────────────┘
                          │ Convex Reactive Queries/Mutations
┌─────────────────────────▼───────────────────────────────────┐
│                    CONVEX BACKEND                           │
│                                                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────┐  │
│  │   Queries    │  │  Mutations   │  │    Actions       │  │
│  │ (read-only)  │  │  (writes)    │  │ (3rd-party APIs) │  │
│  └──────────────┘  └──────────────┘  └──────────────────┘  │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │              AI Agent Component                     │   │
│  │  message → RAG lookup → LLM call → tool decision   │   │
│  │  tools: [escalate_conversation, resolve_ticket]     │   │
│  └─────────────────────────────────────────────────────┘   │
└──────────┬──────────────────────────┬───────────────────────┘
           │ JWT (Clerk org claims)   │ Real-time sync
┌──────────▼──────────┐   ┌──────────▼──────────────────────┐
│   OPERATOR DASHBOARD │   │        EXTERNAL SERVICES        │
│   (Next.js 15)       │   │                                 │
│                      │   │  ┌─────────┐  ┌─────────────┐  │
│  Inbox → Thread →    │   │  │  Clerk  │  │    Vapi     │  │
│  Status Toggle →     │   │  │  (Auth) │  │  (Voice AI) │  │
│  AI Prompt Config    │   │  └─────────┘  └─────────────┘  │
│                      │   │  ┌─────────┐  ┌─────────────┐  │
│  Sentry session      │   │  │   AWS   │  │   Sentry    │  │
│  replay enabled      │   │  │Secrets  │  │ (Monitoring)│  │
└──────────────────────┘   │  └─────────┘  └─────────────┘  │
                           └─────────────────────────────────┘
```

### Step-by-Step Flow

1. **Business onboards** → creates an org in Echo dashboard, configures AI prompt, uploads knowledge base docs, optionally adds Vapi key for voice
2. **Embed widget** → one script tag added to their product; widget loads the customer-facing Next.js app in an iframe scoped to that org
3. **Customer starts chat** → anonymous 24h session created via Convex mutation; no sign-up required
4. **AI takes over** → every customer message triggers the Convex AI agent: it retrieves relevant chunks from the RAG knowledge base, builds context, calls the LLM, and streams the response back in real time
5. **Tool calling** → if the AI detects frustration or an unresolvable issue, it calls `escalate_conversation`; if resolved, it calls `resolve_ticket` — both update Convex state instantly
6. **Operator notified** → dashboard inbox updates reactively (no polling, no websockets — Convex handles it); operator sees full thread with AI decision trail
7. **Human takes over** → operator joins the thread, messages the customer directly, manually overrides status if needed
8. **Voice path** → customer selects voice call; widget calls Vapi via `useVapiCall` hook; Vapi AI handles the call using the org's white-labeled assistant configuration

---

## 📸 Screenshots

> **Dashboard — Operator Inbox**

![Dashboard Inbox](./screenshots/dashboard-inbox.png)

> **Dashboard — Live Conversation Thread**

![Dashboard Chat](./screenshots/dashboard-chat.png)

> **Customer Widget — Chat Interface**

![Widget Chat](./screenshots/widget-chat.png)

> **Customer Widget — Home / Selection Screen**

![Widget Home](./screenshots/widget-home.png)

> **Organization Settings & AI Configuration**

![Settings](./screenshots/settings.png)

*📌 Replace placeholder paths above with actual screenshots for maximum recruiter impact.*

---

## ⚡ Installation

### Prerequisites

- Node.js `18+`
- pnpm `v10+` — `npm install -g pnpm@10`
- A [Convex](https://convex.dev/) account
- A [Clerk](https://clerk.dev/) account
- An OpenAI API key (or Gemini / Anthropic / Groq)

### 1. Clone & Install

```bash
git clone https://github.com/karishma244/echo.git
cd echo
pnpm install
```

### 2. Configure Convex Backend

```bash
pnpm dlx convex dev
```

This initializes your Convex project and generates the `convex/_generated/` directory.

### 3. Set Up Environment Variables

Copy the example env files for each app:

```bash
cp apps/web/.env.example apps/web/.env.local
cp apps/widget/.env.example apps/widget/.env.local
```

Fill in the values (see [Environment Variables](#-environment-variables) below).

### 4. Run the Development Servers

```bash
# Runs dashboard + widget + Convex backend concurrently via Turborepo
pnpm dev
```

| App | URL |
|---|---|
| Operator Dashboard | `http://localhost:3000` |
| Customer Widget | `http://localhost:3001` |
| Convex Dashboard | `https://dashboard.convex.dev` |

---

## 🔐 Environment Variables

### `apps/web/.env.local` (Operator Dashboard)

```env
# Convex
NEXT_PUBLIC_CONVEX_URL=https://<your-deployment>.convex.cloud

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

# AI Provider (pick one or configure in dashboard)
OPENAI_API_KEY=sk-...

# Sentry
NEXT_PUBLIC_SENTRY_DSN=https://...@sentry.io/...
SENTRY_AUTH_TOKEN=...
SENTRY_ORG=...
SENTRY_PROJECT=...
```

### `apps/widget/.env.local` (Customer Widget)

```env
# Convex
NEXT_PUBLIC_CONVEX_URL=https://<your-deployment>.convex.cloud

# Widget target organization (set dynamically via embed script in production)
NEXT_PUBLIC_DEFAULT_ORG_ID=org_...
```

### Convex Environment Variables (set via Convex dashboard)

```env
CLERK_ISSUER_URL=https://<your-clerk-frontend-api>
AWS_ACCESS_KEY_ID=...
AWS_SECRET_ACCESS_KEY=...
AWS_REGION=us-east-1
```

---

## 📡 API Reference

Echo's backend is fully serverless via Convex functions. Key endpoints:

### Conversations

| Function | Type | Description |
|---|---|---|
| `conversations.list` | Query | Paginated list of org conversations with status filter |
| `conversations.get` | Query | Single conversation thread with full message history |
| `conversations.create` | Mutation | Creates a new conversation for a contact session |
| `conversations.updateStatus` | Mutation | Manually set status: `unresolved`, `escalated`, `resolved` |
| `conversations.escalate` | Mutation (internal) | AI tool — escalates conversation to human |
| `conversations.resolve` | Mutation (internal) | AI tool — marks conversation resolved |

### Messages

| Function | Type | Description |
|---|---|---|
| `messages.list` | Query | Paginated messages for a conversation (infinite scroll) |
| `messages.send` | Mutation | Send operator message to conversation thread |
| `messages.sendAsCustomer` | Mutation | Widget — post customer message, triggers AI agent |

### Contact Sessions

| Function | Type | Description |
|---|---|---|
| `contactSessions.create` | Mutation | Creates anonymous 24h session for widget customer |
| `contactSessions.get` | Query | Fetch session by ID for widget state rehydration |

### Organizations / Settings

| Function | Type | Description |
|---|---|---|
| `organizations.getSettings` | Query | Fetch org AI prompt, Vapi config, knowledge base status |
| `organizations.updatePrompt` | Mutation | Save operator's AI system prompt |
| `organizations.enhancePrompt` | Action | Calls OpenAI to rewrite and improve operator prompt |
| `organizations.setVapiKey` | Action | Encrypts and stores Vapi key in AWS Secrets Manager |

### Knowledge Base (RAG)

| Function | Type | Description |
|---|---|---|
| `knowledgeBase.ingest` | Action | Chunks and embeds uploaded documents |
| `knowledgeBase.search` | Action (internal) | Vector similarity search used by AI agent per message |

---

## 🗄️ Database Schema

Convex schema (`convex/schema.ts`) — key tables:

### `users`
| Field | Type | Description |
|---|---|---|
| `clerkId` | `string` | Clerk user ID |
| `organizationId` | `string` | Clerk org ID (multi-tenancy scope) |
| `email` | `string` | User email |
| `role` | `"admin" \| "member"` | Org role |
| `createdAt` | `number` | Unix timestamp |

### `contactSessions`
| Field | Type | Description |
|---|---|---|
| `organizationId` | `string` | Owning organization |
| `metadata` | `object` | Name, email, country (optional, from widget form) |
| `expiresAt` | `number` | Unix timestamp — 24h from creation |
| `avatarSeed` | `string` | Session ID used for DiceBear avatar generation |

### `conversations`
| Field | Type | Description |
|---|---|---|
| `organizationId` | `string` | Owning organization |
| `contactSessionId` | `Id<"contactSessions">` | Customer who initiated |
| `status` | `"unresolved" \| "escalated" \| "resolved"` | Current state |
| `title` | `string` | Auto-generated from first message |
| `createdAt` | `number` | Unix timestamp |

### `messages`
| Field | Type | Description |
|---|---|---|
| `conversationId` | `Id<"conversations">` | Parent conversation |
| `role` | `"user" \| "assistant" \| "operator"` | Sender type |
| `content` | `string` | Message body |
| `toolCall` | `object?` | AI tool call metadata (escalate/resolve) |
| `createdAt` | `number` | Unix timestamp |

### `knowledgeBase`
| Field | Type | Description |
|---|---|---|
| `organizationId` | `string` | Owning organization |
| `content` | `string` | Document chunk text |
| `embedding` | `number[]` | Vector embedding for similarity search |
| `sourceTitle` | `string` | Original document name |

---

## ⚔️ Challenges Faced

### 1. Multi-Tenant Data Isolation at Scale
**Challenge:** Ensuring no operator could ever query another organization's conversations — across every layer of the stack.
**Solution:** Scoped all Convex queries and mutations using `organizationId` extracted from Clerk JWT custom claims. Added a `ConvexProviderWithClerk` wrapper that passes the JWT token to every backend call, making the org ID tamper-proof. Frontend guards and Next.js middleware act as additional defense layers.

### 2. Real-Time Reactivity Without WebSocket Complexity
**Challenge:** Keeping the operator inbox and customer widget in sync without polling or managing WebSocket state manually.
**Solution:** Leveraged Convex's reactive query model — UI components subscribe to queries and re-render automatically whenever underlying data changes. This gave instant real-time updates across tabs and devices with zero custom socket code.

### 3. AI Tool Calling Reliability
**Challenge:** Getting the LLM to reliably call `escalate` or `resolve` tools at the right moment — not too eagerly, not too late.
**Solution:** Carefully engineered the system prompt with explicit behavioral rules and few-shot examples of when to trigger each tool. Used AI SDK v4's structured tool calling with Zod schemas for type-safe tool parameters, and validated every tool call result before applying the Convex mutation.

### 4. Secure Per-Tenant API Key Storage
**Challenge:** Customers bring their own Vapi keys — these cannot be stored in the database in plaintext.
**Solution:** Implemented AWS Secrets Manager integration in a Convex Action. Each org's Vapi key is stored as a named secret scoped to their org ID. The key is never returned to the client — only used server-side within Convex Actions when constructing Vapi API calls.

### 5. Anonymous Customer Sessions Without Friction
**Challenge:** Customers using the widget must not need to sign up, but their session state must persist across page reloads.
**Solution:** On first widget load, a Convex mutation creates a lightweight `contactSession` with a 24h TTL. The session ID is persisted in `localStorage` keyed by org ID using a Jotai atom family. On reload, the widget reads this ID and rehydrates state — giving a seamless, frictionless experience.

### 6. Monorepo Sentry + Turborepo Compatibility
**Challenge:** Sentry's Next.js wizard injects configuration that conflicts with Turborepo's build pipeline.
**Solution:** Disabled Turbopack in the dashboard app's Next.js config and manually configured Sentry's `withSentryConfig` wrapper to correctly instrument both client and server bundles across the monorepo.

---

## ⚡ Optimizations

### Performance
- **Infinite scroll with pagination** on message lists and conversation inbox — only fetches what's visible, dramatically reducing initial payload
- **Code splitting** at the route level in both Next.js apps — each dashboard view loads only its required modules
- **Convex reactive queries** eliminate polling overhead; updates are pushed, not pulled
- **DiceBear avatars** generated client-side from session IDs — no avatar storage or image uploads required

### Security
- **JWT custom claims** bind every backend request to a specific org — impossible to forge without Clerk's signing key
- **Internal Convex functions** (queries/mutations called only from other backend functions) are never exposed to the public API surface
- **AWS Secrets Manager** for all third-party API keys — keys never touch the database or client bundle
- **24h session expiry** on anonymous contact sessions limits exposure window for customer data

### AI Quality
- **RAG grounding** on every AI response — LLM answers are pulled from actual org documentation, not hallucinated
- **Operator prompt enhancement** via AI rewrites ensures the AI agent always operates with a well-structured system prompt
- **Conversation history injection** on every LLM call — agent maintains full context across multi-turn conversations

---

## 🔮 Future Improvements

- **Email channel integration** — handle support tickets arriving via email alongside chat and voice in a unified inbox
- **Analytics dashboard** — conversation volume, resolution rate, AI vs. human handle ratio, average response time
- **Webhook support** — allow businesses to receive real-time events (escalation, resolution) in their own systems
- **Custom AI personas** — let businesses define named AI agents with specific personalities and tones
- **Multi-language support** — auto-detect customer language and respond in kind using multilingual LLM prompts
- **Mobile operator app** — React Native companion for operators to handle escalations on the go
- **CRM integrations** — bi-directional sync with HubSpot, Salesforce, and Intercom
- **Conversation summarization** — AI-generated summaries of long threads for quick operator context
- **A/B testing for AI prompts** — test multiple system prompts and measure resolution rates per variant

---

## 📚 Learning Outcomes

Building Echo surfaced deep, production-applicable engineering insight:

- **Convex architecture patterns** — how to correctly separate queries, mutations, and actions; when to use internal functions vs. public ones; how reactive queries enable real-time UIs without WebSockets
- **Multi-tenant SaaS design** — enforcing data isolation at every layer: JWT claims, middleware, backend validation, and schema-level org scoping
- **AI agent orchestration** — structuring system prompts for reliable tool calling, injecting RAG context, and managing multi-turn conversation state with the Convex agent component
- **Monorepo at scale** — sharing UI packages, configs, and types across apps with Turborepo's pipeline caching; managing pnpm workspace dependencies cleanly
- **Production observability** — integrating Sentry across a full-stack monorepo with Convex backend error correlation, session replay, and user identity tagging
- **Jotai atom families** — using factory-pattern state atoms keyed by org ID for clean, isolated, localStorage-persisted state management
- **Security-first API key management** — never trusting the client with secrets; AWS Secrets Manager as the only source of truth for sensitive credentials

---

## 🚀 Deployment

### Dashboard & Widget → Vercel

```bash
# Deploy dashboard
cd apps/web
vercel --prod

# Deploy widget
cd apps/widget
vercel --prod
```

Set all environment variables in the Vercel project dashboard (Settings → Environment Variables).

### Convex Backend → Convex Cloud

```bash
# From repo root
pnpm dlx convex deploy
```

Convex automatically deploys all functions, schema migrations, and indexes. No infrastructure to manage.

### Widget Embed Script

Once deployed, businesses embed Echo into their product with:

```html
<script>
  window.EchoConfig = { organizationId: "org_YOUR_ORG_ID" };
</script>
<script async src="https://widget.your-echo-domain.com/embed.js"></script>
```

---

## 📁 Folder Structure

```
echo/
│
├── apps/
│   ├── web/                          # Operator Dashboard (Next.js 15)
│   │   ├── app/                      # App Router pages & layouts
│   │   │   ├── (auth)/               # Sign-in / sign-up routes
│   │   │   ├── (dashboard)/          # Protected operator routes
│   │   │   │   ├── inbox/            # Conversation inbox
│   │   │   │   ├── conversation/[id] # Thread view
│   │   │   │   └── settings/         # AI prompt, Vapi config
│   │   │   └── onboarding/           # Org creation flow
│   │   ├── components/               # Dashboard-specific UI components
│   │   ├── hooks/                    # Custom React hooks
│   │   ├── lib/                      # Convex client, utilities
│   │   ├── modules/                  # Feature modules
│   │   │   └── widget/               # Embedded widget config module
│   │   └── middleware.ts             # Clerk route protection
│   │
│   └── widget/                       # Customer Widget (Next.js 15)
│       ├── app/                      # Widget app shell
│       ├── components/               # Widget UI components
│       ├── hooks/                    # useVapiCall, useSession, etc.
│       ├── lib/                      # Convex client, session utils
│       └── modules/
│           └── widget/               # Widget screen modules
│               ├── atoms/            # Jotai atoms (screen router, session)
│               ├── hooks/            # Widget-specific hooks
│               ├── ui/               # Screen components (home, chat, voice)
│               ├── constants.ts      # Widget configuration constants
│               └── types.ts          # Shared widget TypeScript types
│
├── packages/
│   ├── ui/                           # Shared shadcn/ui component library
│   │   └── src/components/          # Button, Card, Input, etc.
│   ├── backend/                      # Shared Convex backend logic
│   └── math/                         # Shared utility functions
│
├── convex/                           # Convex backend (deployed separately)
│   ├── schema.ts                     # Database schema definitions
│   ├── conversations.ts              # Conversation queries & mutations
│   ├── messages.ts                   # Message functions + AI agent
│   ├── contactSessions.ts            # Anonymous session management
│   ├── organizations.ts              # Org settings, prompt, Vapi config
│   ├── knowledgeBase.ts              # RAG ingestion & vector search
│   └── _generated/                  # Auto-generated Convex types
│
├── turbo.json                        # Turborepo pipeline config
├── pnpm-workspace.yaml               # pnpm workspace definition
├── package.json                      # Root package scripts
└── tsconfig.json                     # Root TypeScript config
```

---

## 🤝 Contributing

Contributions are welcome. Please follow these steps:

1. **Fork** the repository
2. **Create a feature branch**: `git checkout -b feature/your-feature-name`
3. **Commit with conventional commits**: `git commit -m "feat: add email channel support"`
4. **Push to your fork**: `git push origin feature/your-feature-name`
5. **Open a Pull Request** against `main` with a clear description of the change

### Development Guidelines
- Run `pnpm lint` before opening a PR — ESLint is enforced across all apps
- Add TypeScript types for all new Convex functions and React components — no `any`
- Keep Convex queries read-only; use mutations for writes and actions for external API calls
- Scope all new database queries by `organizationId` — no exceptions

---

## 💡 Suggested GitHub Metadata

> Copy these directly into your GitHub repo settings for maximum discoverability:

**Repo description:**
```
🤖 Autonomous AI customer support SaaS — multi-tenant, RAG-powered, voice + chat agents, real-time operator dashboard. Built with Next.js 15, Convex, Clerk, Vapi & AI SDK.
```

**Topics / Tags:**
```
nextjs convex clerk vapi ai-sdk saas customer-support rag turborepo typescript
multi-tenant voice-ai real-time monorepo shadcn-ui sentry aws openai
```

**Better project name options** (if you want to rebrand):
| Name | Tagline |
|---|---|
| **Echo** ✅ (keep it) | Clean, memorable, evokes responsiveness |
| **Rova** | Real-time operator + voice agent |
| **Aiden** | AI-driven, sounds like a support agent name |

---

## 📄 License

```
MIT License

Copyright (c) 2025 Karishma Jethwani

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

<div align="center">

Built with 🤖 by [Karishma Jethwani](https://github.com/karishma244)

*If Echo helped you, consider giving it a ⭐ — it helps others find the project.*

[![GitHub stars](https://img.shields.io/github/stars/karishma244/echo?style=social)](https://github.com/karishma244/echo)

</div>
