const en = {
  slug: 'stethy',
  seo: {
    title: 'Stethy: AI Email Triage SaaS | Yash Soni',
    description: 'Case study: backend and AWS infrastructure for an invite-only B2B email triage SaaS. Python, TypeScript, AWS CDK, LiteLLM and Langfuse.',
  },
  header: {
    kicker: 'Case Study',
    h1: 'Stethy: AI Email Triage',
    subtitle: 'Backend, infrastructure and tooling for an invite-only B2B email triage SaaS',
    date: '2024 to present',
    readingTime: '2 min read',
  },
  sections: {
    problem: {
      title: 'The Problem',
      content: 'Stethy needed an email triage workflow platform that enterprise users can connect to their inbox.',
    },
    solution: {
      title: 'The Solution',
      content: 'Stethy is an invite-only B2B SaaS that connects to a mailbox, classifies incoming email and routes it through defined workflows. A deterministic, versioned rules engine does the classification first, with AI triage and confidence scores alongside.',
    },
    architecture: {
      title: 'Architecture & Tech Stack',
      stack: [
          { name: 'Backend', items: 'Python, FastAPI, SQLAlchemy, Alembic' },
          { name: 'Frontend', items: 'TypeScript, React, Vite' },
          { name: 'Database', items: 'PostgreSQL' },
          { name: 'Mail', items: 'Microsoft Outlook and Azure AD, Gmail extension' },
          { name: 'LLM gateway', items: 'LiteLLM' },
          { name: 'Infrastructure', items: 'AWS CDK (Python), Lambda, CodePipeline, multi-account dev, stage and prod' },
          { name: 'Observability', items: 'Langfuse on Azure Container Apps' },
        ],
    },
    features: {
      title: 'Key Features',
      items: [
          { title: 'Rules Engine', desc: 'Versioned classification and routing rules with a dry-run to test an email before it goes live' },
          { title: 'Connectors', desc: 'Outlook mailboxes, including bring-your-own app credentials, and a Gmail extension' },
          { title: 'Runs and Audit Trail', desc: 'A live execution log and a classification history with confidence, matched rule and manual correction' },
          { title: 'Multi-Tenant Org Management', desc: 'Workspaces, users, invites, usage and access logs' },
        ],
    },
    results: {
      title: 'Results & Impact',
      metrics: [] as { value: string; label: string }[],
    },
    myRole: {
      title: 'My Role',
      content: 'I work with Stethy, a client based in Australia, as a contractor across backend, frontend and infrastructure.',
    },
    testimonial: {
      quote: '',
      author: '',
      role: '',
    },
    lessons: {
      title: 'Lessons Learned',
      items: [] as string[],
    },
    faq: [] as { q: string; a: string }[],
    cta: {
      title: 'Need something similar?',
      desc: 'I build production-grade AI and SaaS products, from RAG pipelines to multi-tenant platforms. Let\'s talk about your project.',
      button: 'Contact me',
    },
  },
  sectionLabels: {
    'problem': 'The Problem',
    'solution': 'The Solution',
    'architecture': 'Architecture',
    'features': 'Key Features',
    'results': 'Results',
    'my-role': 'My Role',
    'lessons': 'Lessons',
    'faq': 'FAQ',
  },
}

// The facts on these pages come from one source, so the Spanish route shows the same content.
export const stethyContent = { en, es: en }
