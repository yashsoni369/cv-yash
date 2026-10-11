const en = {
  slug: 'noetic',
  seo: {
    title: 'Noetic: Automated Assessment Platform | Yash Soni',
    description: 'Case study: automated assessment platform for ADHD, autism, dyslexia, dyspraxia and dyscalculia.',
  },
  header: {
    kicker: 'Case Study',
    h1: 'Noetic: Automated Neurodiversity Assessment',
    subtitle: 'An automated affirmative assessment platform for neurodevelopmental and learning differences',
    date: 'Client engagement',
    readingTime: '2 min read',
  },
  sections: {
    problem: {
      title: 'The Problem',
      content: 'The client wanted an automated way to run affirmative assessment for ADHD, autism, dyslexia, dyspraxia and dyscalculia.',
    },
    solution: {
      title: 'The Solution',
      content: 'Noetic is an automated affirmative assessment platform covering ADHD, autism, dyslexia, dyspraxia and dyscalculia.',
    },
    architecture: {
      title: 'Architecture & Tech Stack',
      stack: [] as { name: string; items: string }[],
    },
    features: {
      title: 'Key Features',
      items: [
          { title: 'Automated Assessment', desc: 'Screening and affirmative assessment for ADHD, autism, dyslexia, dyspraxia and dyscalculia' },
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
export const noeticContent = { en, es: en }
