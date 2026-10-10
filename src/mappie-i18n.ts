const en = {
  slug: 'mappie-ai',
  seo: {
    title: 'Mappie AI: AI Project Management | Yash Soni',
    description: 'Case study: AI project management tool that turns messy requirements into dev-ready user stories, built for Nindo Solutions.',
  },
  header: {
    kicker: 'Case Study',
    h1: 'Mappie AI: From Messy Requirements to Dev-Ready Stories',
    subtitle: 'An AI project management tool I built for Nindo Solutions, live at mappie.ai',
    date: 'About 1 year from idea to production',
    readingTime: '3 min read',
  },
  sections: {
    problem: {
      title: 'The Problem',
      content: 'Backlog grooming is one of the most expensive meetings in software. Senior people spend hours rewriting vague tickets into something an engineer can pick up, and generic LLM chats lack the workflow context to help.',
    },
    solution: {
      title: 'The Solution',
      content: 'Mappie converts vague, unstructured product requirements into clear specifications, epics and user stories. It sits inside the product manager workflow instead of beside it, using context-aware AI to translate a founder idea into tickets.',
    },
    architecture: {
      title: 'Architecture & Tech Stack',
      stack: [
          { name: 'Frontend', items: 'React, TypeScript, markdown-native editor' },
          { name: 'Backend', items: 'Node.js' },
          { name: 'AI', items: 'OpenAI GPT-class models, prompt templates' },
          { name: 'Context engine', items: 'Document-graph retrieval over the epic and story tree' },
          { name: 'Infrastructure', items: 'Cloud hosting with CI/CD' },
        ],
    },
    features: {
      title: 'Key Features',
      items: [
          { title: 'Epic and Story Generation', desc: 'Turns one-line ideas into structured work items' },
          { title: 'Context-Aware Chat', desc: 'AI chat that sees the current epic, story and surrounding docs' },
          { title: 'Inline AI Editing', desc: 'Rewrite, expand or tighten any block without leaving the editor' },
          { title: 'Requirements Pipeline', desc: 'Automated epic to requirements to stories flow with consistent structured output' },
          { title: 'Markdown Export', desc: 'Documentation exports into existing PM tools' },
        ],
    },
    results: {
      title: 'Results & Impact',
      metrics: [
          { value: '60-70%', label: 'reported reduction in backlog grooming time' },
          { value: '1,000', label: 'beta users' },
          { value: '~1 yr', label: 'from idea to production' },
        ],
    },
    myRole: {
      title: 'My Role',
      content: 'I built Mappie AI for the client, Nindo Solutions in Belgium, over close to a year.',
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
export const mappieContent = { en, es: en }
