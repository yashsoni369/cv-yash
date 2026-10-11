const en = {
  slug: 'united-medical',
  seo: {
    title: 'United Medical: Hospital-Doctor Contract Management | Yash Soni',
    description: 'Case study: contract management application for a German healthcare startup, an ongoing retainer since August 2023.',
  },
  header: {
    kicker: 'Case Study',
    h1: 'United Medical: Hospital-Doctor Contract Management',
    subtitle: 'A contract management application for a German healthcare startup',
    date: 'Ongoing retainer since August 2023',
    readingTime: '2 min read',
  },
  sections: {
    problem: {
      title: 'The Problem',
      content: 'A German healthcare startup needed an application to manage contracts between hospitals and doctors.',
    },
    solution: {
      title: 'The Solution',
      content: 'United Medical is a hospital-doctor contract management application that automates the workflows around medical contracts.',
    },
    architecture: {
      title: 'Architecture & Tech Stack',
      stack: [
          { name: 'Application', items: 'Next.js, TypeScript' },
          { name: 'Structure', items: 'Monorepo with API, web, scan and shared-types packages' },
          { name: 'Database', items: 'PostgreSQL' },
          { name: 'Cache', items: 'Redis' },
          { name: 'Testing', items: 'BrowserStack cross-browser testing' },
        ],
    },
    features: {
      title: 'Key Features',
      items: [
          { title: 'Contract Management', desc: 'Manages contracts between hospitals and doctors' },
          { title: 'Workflow Automation', desc: 'Automates the complex workflows around medical contracts' },
        ],
    },
    results: {
      title: 'Results & Impact',
      metrics: [] as { value: string; label: string }[],
    },
    myRole: {
      title: 'My Role',
      content: 'I work on this as an ongoing retainer with a German healthcare startup.',
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
export const unitedMedicalContent = { en, es: en }
