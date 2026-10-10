const en = {
  slug: 'decoverai',
  seo: {
    title: 'DecoverAI: AI Legal Document Platform | Yash Soni',
    description: 'Case study: AI legal document search and RAG platform deployed in 10+ US law firms. I helped build the infrastructure and GenAI platform while the company raised $2M+ in seed funding.',
  },
  header: {
    kicker: 'Case Study',
    h1: 'DecoverAI: AI-Powered Legal Intelligence',
    subtitle: 'How I helped build the GenAI platform behind a US legal AI company that raised $2M+ in seed funding',
    date: 'About 13 months, 2024',
    readingTime: '3 min read',
  },
  sections: {
    problem: {
      title: 'The Problem',
      content: 'DecoverAI set out to give US law firms semantic search over large sets of legal documents.',
    },
    solution: {
      title: 'The Solution',
      content: 'DecoverAI is an AI-powered legal document management and semantic search platform. It uses vector storage and a RAG pipeline so lawyers can query large document sets in natural language.',
    },
    architecture: {
      title: 'Architecture & Tech Stack',
      stack: [
          { name: 'Frontend', items: 'React' },
          { name: 'Backend', items: 'Node.js, Python, TypeScript' },
          { name: 'AI/ML', items: 'OpenAI, RAG, HuggingFace' },
          { name: 'Vector DB', items: 'Pinecone' },
          { name: 'Database', items: 'MongoDB' },
          { name: 'Infrastructure', items: 'Docker Compose, AWS EKS' },
        ],
    },
    features: {
      title: 'Key Features',
      items: [
          { title: 'Semantic Document Search', desc: 'Natural language queries over legal documents using vector storage and semantic retrieval' },
          { title: 'RAG Pipeline', desc: 'Retrieval-augmented answers over large legal document sets' },
          { title: 'Production Deployment', desc: 'Staging and production environments on AWS EKS, orchestrated with Docker Compose' },
        ],
    },
    results: {
      title: 'Results & Impact',
      metrics: [
          { value: '$2M+', label: 'seed funding from Bay Area VCs' },
          { value: '13', label: 'months of development' },
          { value: '10+', label: 'US law firms in production' },
        ],
    },
    myRole: {
      title: 'My Role',
      content: 'I was a contractor on this engagement for about 13 months. I helped build the infrastructure and the GenAI platform, helped lead a team, built critical pieces, and tested and deployed them.',
    },
    testimonial: {
      quote: 'Yash is one of the hardest-working and meticulous engineers I have encountered. We worked closely together on DecoverAI, where he helped build the infrastructure and Generative AI platform that is now deployed in large law firms throughout the United States. He helped lead a team, build critical pieces, and test and deploy them. We eventually raised 2M+ in funding with the help of his efforts. I would certainly recommend him for any future projects.',
      author: 'Ravi Tandon',
      role: 'CEO & Co-Founder, DecoverAI',
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
export const decoveraiContent = { en, es: en }
