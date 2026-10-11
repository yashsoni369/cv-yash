const en = {
  slug: 'speakology-ai',
  seo: {
    title: 'Speakology AI: AI Avatar Language Learning App | Yash Soni',
    description: 'Case study: AI avatar language learning app for UK schools. Bootstrapped from zero to 10+ school subscriptions in 3 months.',
  },
  header: {
    kicker: 'Case Study',
    h1: 'Speakology AI: AI Avatar Language Learning',
    subtitle: 'From zero to 10+ UK school subscriptions in 3 months, with no outside funding',
    date: 'Bootstrapped, 3 months to the first 10+ schools',
    readingTime: '2 min read',
  },
  sections: {
    problem: {
      title: 'The Problem',
      content: 'A client engagement to build an AI avatar language learning app for UK schools.',
    },
    solution: {
      title: 'The Solution',
      content: 'Speakology is an AI avatar language learning app designed for school-age students and sold to UK schools on subscription.',
    },
    architecture: {
      title: 'Architecture & Tech Stack',
      stack: [
          { name: 'Frontend', items: 'React' },
          { name: 'Backend', items: 'Node.js' },
          { name: 'Database', items: 'MongoDB' },
          { name: 'AI', items: 'OpenAI, prompt engineering' },
        ],
    },
    features: {
      title: 'Key Features',
      items: [
          { title: 'AI Avatar', desc: 'An avatar-based tutor for school-age language learners' },
          { title: 'School Subscriptions', desc: 'Built to be deployed and subscribed to by UK schools' },
        ],
    },
    results: {
      title: 'Results & Impact',
      metrics: [
          { value: '10+', label: 'UK school subscriptions' },
          { value: '3', label: 'months to get there' },
          { value: '0', label: 'outside funding' },
        ],
    },
    myRole: {
      title: 'My Role',
      content: 'I built the product end to end as part of my independent work.',
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
export const speakologyContent = { en, es: en }
