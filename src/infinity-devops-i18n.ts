const en = {
  slug: 'infinity-devops',
  seo: {
    title: 'Infinity DevOps: Enterprise DevOps Platform | Yash Soni',
    description: 'Case study: DevOps platform across AWS and GCP, built at LTI Mindtree as the second major product of the DevOps Centre of Excellence.',
  },
  header: {
    kicker: 'Case Study',
    h1: 'Infinity DevOps: Enterprise DevOps Platform',
    subtitle: 'A DevOps platform across AWS and GCP, built at LTI Mindtree',
    date: 'LTI Mindtree, 2021 to 2023',
    readingTime: '2 min read',
  },
  sections: {
    problem: {
      title: 'The Problem',
      content: 'LTI Mindtree\'s DevOps Centre of Excellence built reusable DevOps products, and Infinity DevOps was the second major one.',
    },
    solution: {
      title: 'The Solution',
      content: 'Infinity DevOps is an enterprise DevOps platform spanning AWS and GCP. It includes wrapper services around AWS that speed up tooling for engineers who have no prior platform experience.',
    },
    architecture: {
      title: 'Architecture & Tech Stack',
      stack: [
          { name: 'Frontend', items: 'Angular, React' },
          { name: 'Backend', items: 'Node.js, microservices, JWT' },
          { name: 'Database', items: 'MongoDB' },
          { name: 'Messaging', items: 'Kafka' },
          { name: 'Infrastructure', items: 'Docker, AWS, GCP' },
        ],
    },
    features: {
      title: 'Key Features',
      items: [
          { title: 'Multi-Cloud Tooling', desc: 'DevOps tooling across AWS and GCP' },
          { title: 'AWS Wrapper Services', desc: 'Wrappers that let engineers ship without prior platform knowledge' },
        ],
    },
    results: {
      title: 'Results & Impact',
      metrics: [] as { value: string; label: string }[],
    },
    myRole: {
      title: 'My Role',
      content: 'I was the Tech Lead for the DevOps products across AWS and GCP, leading a Centre of Excellence team of 10+ engineers.',
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
export const infinityDevopsContent = { en, es: en }
