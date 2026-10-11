const en = {
  slug: 'vectro-ai',
  seo: {
    title: 'Vectro AI: Sales Intelligence | Yash Soni',
    description: 'Case study: sales intelligence platform that surfaces insights from sales calls, emails and Slack using AI and vector search.',
  },
  header: {
    kicker: 'Case Study',
    h1: 'Vectro AI: Sales Intelligence',
    subtitle: 'Actionable insights from sales calls, emails and Slack, without listening to hundreds of calls',
    date: 'Client engagement',
    readingTime: '2 min read',
  },
  sections: {
    problem: {
      title: 'The Problem',
      content: 'The client wanted actionable insights from sales conversations without listening to hundreds of sales calls.',
    },
    solution: {
      title: 'The Solution',
      content: 'Vectro ingests sales calls, emails and Slack communications and uses OpenAI-powered semantic understanding with vector search to surface actionable insights.',
    },
    architecture: {
      title: 'Architecture & Tech Stack',
      stack: [
          { name: 'Backend', items: 'Node.js, TypeScript' },
          { name: 'AI', items: 'OpenAI' },
          { name: 'Search', items: 'Vector database' },
        ],
    },
    features: {
      title: 'Key Features',
      items: [
          { title: 'Multi-Source Ingestion', desc: 'Sales calls, emails and Slack messages' },
          { title: 'Semantic Insights', desc: 'Vector search and OpenAI to surface what matters' },
        ],
    },
    results: {
      title: 'Results & Impact',
      metrics: [] as { value: string; label: string }[],
    },
    myRole: {
      title: 'My Role',
      content: 'I built the platform for a client engagement that ran through Upwork.',
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
export const vectroContent = { en, es: en }
