# yashsoni.dev

> Interactive freelancer portfolio with AI chatbot, multilingual support (6 languages), and production-grade LLMOps

[![Built with Claude Code](https://img.shields.io/badge/built%20with-Claude%20Code-blueviolet?style=flat-square)](https://claude.ai/code)

---

## The Problem

Static CVs don't show what you can actually build. A PDF lists skills — it doesn't prove them.

## The Solution

A production-grade interactive portfolio that **demonstrates the skills it describes**: AI chatbot powered by Claude, multilingual support (EN/ES/ZH/FR/PT/HI), LLMOps observability, automated evals, and detailed case studies of real projects.

**Key Features:**
- **AI Chatbot "Yash"** — Text (Claude Sonnet) + Voice (OpenAI Realtime API). Responds in first person as Yash Soni. Agentic RAG with hybrid search (pgvector + BM25) and Haiku reranking
- **6 Languages** — English (default), Spanish, Chinese, French, Portuguese, Hindi
- **Prompt Injection Defense** — Keyword detection, canary tokens, fingerprinting, anti-extraction, safety scoring
- **Automated Evals** — Factual accuracy, persona, boundaries, quality, safety, language, RAG quality, multi-turn
- **LLMOps Dashboard** — Private `/ops` with real-time Langfuse + Supabase data
- **Voice Mode** — OpenAI Realtime API, audio-to-audio, shared RAG pipeline
- **Case Studies** — Detailed project breakdowns with architecture, metrics, and lessons learned
- **GEO-ready** — `llms.txt`, structured data (JSON-LD), AI crawler-friendly robots.txt

---

## Tech Stack

![React](https://img.shields.io/badge/React_19-61DAFB?style=flat&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite_7-646CFF?style=flat&logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_v4-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![Claude](https://img.shields.io/badge/Claude_Sonnet-191919?style=flat&logo=anthropic&logoColor=white)
![OpenAI](https://img.shields.io/badge/OpenAI_Realtime-412991?style=flat&logo=openai&logoColor=white)
![Langfuse](https://img.shields.io/badge/Langfuse-000000?style=flat&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3FCF8E?style=flat&logo=supabase&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel_Edge-000000?style=flat&logo=vercel&logoColor=white)

---

## Chatbot Architecture

```
User message → FloatingChat.tsx → api/chat.js (Vercel Edge)
                                    ├── System prompt (Langfuse registry + fallback)
                                    ├── Claude Sonnet (tool_use decision)
                                    ├── Agentic RAG (if needed):
                                    │     ├── OpenAI embeddings (text-embedding-3-small)
                                    │     ├── Supabase pgvector (semantic) + full-text (BM25)
                                    │     └── Claude Haiku (reranking + diversification)
                                    ├── Claude Sonnet (streaming generation)
                                    ├── Langfuse tracing (every span with cost)
                                    └── waitUntil → Haiku scoring (0ms added latency)

Voice mode → useVoiceMode.ts → api/voice-token.js → OpenAI Realtime WebSocket
                                  └── api/rag-search.js (function calling for RAG)
```

### Key Files

| File | Path | Description |
|------|------|-------------|
| Chat edge function | `api/chat.js` | Main chatbot — RAG, tracing, scoring, streaming, defense |
| RAG pipeline | `api/_shared/rag.js` | Hybrid search, reranking, cost tracking, intent classification |
| Prompt management | `api/_shared/prompt.js` | Langfuse prompt registry with file fallback |
| Voice token | `api/voice-token.js` | OpenAI Realtime ephemeral token + rate limiting |
| Chat widget | `src/FloatingChat.tsx` | React widget — streaming SSE, quick prompts, contact CTA |
| Voice hook | `src/useVoiceMode.ts` | WebSocket management, audio capture, transcript persistence |
| System prompt | `chatbot-prompt.txt` | Fallback prompt (production uses Langfuse) |

---

## Featured Projects

| Project | Description | Key Metrics |
|---------|-------------|-------------|
| **DecoverAI** | AI legal document management for US law firms | $2M+ funded, 13 months |
| **Speakology AI** | AI Avatar language learning for UK schools | Bootstrapped, 10+ schools in 3 months |
| **United Medical** | Hospital-doctor contract management (Germany) | Full stack architecture |
| **Mappie AI** | AI project management — requirements to stories | 1 year development |
| **Vectro AI** | Sales intelligence from calls, emails & Slack | Vector search + OpenAI |
| **Infinity DevOps** | Enterprise DevOps platform (LTI Mindtree) | Led team of 10+ engineers |
| **Infinity AIWatch** | APM product with AI-driven dashboards | OpenAI + Prometheus |
| **Stethy** | AI automation in healthcare & life sciences | Enterprise healthcare |
| **Noetic** | Automated neurodiversity assessment | ADHD, autism, dyslexia |

---

## Quick Start

```bash
git clone https://github.com/yashsoni369/cv-yash.git
cd cv-yash
npm install
npm run dev
```

Open [localhost:5173](http://localhost:5173)

### Environment Variables

```bash
# Core
GEMINI_API_KEY=              # Gemini API (chatbot)
OPENAI_API_KEY=              # Embeddings + Voice

# RAG
SUPABASE_URL=                # Supabase project URL
SUPABASE_SERVICE_ROLE_KEY=   # Supabase service key

# Observability
LANGFUSE_PUBLIC_KEY=         # Langfuse tracing
LANGFUSE_SECRET_KEY=         # Langfuse tracing

# Alerts & Dashboard
RESEND_API_KEY=              # Jailbreak email alerts
OPS_DASHBOARD_SECRET=        # Dashboard password (/ops)
```

---

## Project Structure

```
src/
├── App.tsx                  # Full CV — all sections
├── FloatingChat.tsx         # Chat widget (text mode)
├── useVoiceMode.ts          # Voice mode hook (OpenAI Realtime)
├── VoiceOrb.tsx             # Voice UI (orb + transcript)
├── GlobalNav.tsx            # Navigation with breadcrumbs
├── main.tsx                 # React Router + lazy loading
├── i18n.ts                  # Multilingual translations (6 languages)
├── articles/
│   ├── registry.ts          # Centralized article config
│   ├── components.tsx       # Shared article components
│   └── json-ld.ts           # JSON-LD builder
├── ops/                     # LLMOps Dashboard
│   ├── OpsDashboard.tsx     # Shell + Overview tab
│   ├── OpsAuth.tsx          # Login screen
│   └── tabs/                # Conversations, Costs, Security, etc.
└── [Article].tsx            # Case study components

api/
├── chat.js                  # Main chatbot edge function
├── voice-token.js           # Voice ephemeral token + rate limit
├── rag-search.js            # RAG for voice function calling
├── _shared/
│   ├── rag.js               # RAG pipeline (search, rerank, cost)
│   ├── prompt.js            # Prompt versioning (Langfuse)
│   └── ops-auth.js          # Dashboard auth helper
└── ops/                     # Dashboard API proxy layer

evals/
├── datasets/                # JSON datasets (test cases)
├── assertions.ts            # Deterministic assertions
├── llm-judge.ts             # LLM-as-Judge (Haiku)
└── runner.ts                # Eval runner

scripts/                     # Build, RAG, prompt, eval tools
chatbot-prompt.txt           # System prompt (fallback)
```

---

## About Yash Soni

Senior Full Stack Architect with 8+ years building scalable AI & SaaS solutions. Led teams of 10+ engineers. Built GenAI platforms deployed in US law firms that helped secure $2M+ in funding. Certified Kubernetes Application Developer (CKAD).

**Available for freelance & contract work worldwide.**

---

## Let's Connect

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/yashsoni369)
[![Email](https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:yash.soni2737@gmail.com)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/yashsoni369)

---

## License

MIT
