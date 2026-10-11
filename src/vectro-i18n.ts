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

const es = {
  slug: 'vectro-ai',
  seo: {
    title: 'Vectro AI: Inteligencia de Ventas | Yash Soni',
    description: 'Caso de estudio: plataforma de inteligencia de ventas que extrae insights de llamadas, emails y Slack con IA y búsqueda vectorial.',
  },
  header: {
    kicker: 'Caso de Estudio',
    h1: 'Vectro AI: Inteligencia de Ventas',
    subtitle: 'Insights accionables de llamadas, emails y Slack sin escuchar cientos de llamadas',
    date: 'Proyecto para cliente',
    readingTime: '2 min de lectura',
  },
  sections: {
    problem: {
      title: 'El Problema',
      content: 'El cliente quería insights accionables de sus conversaciones de ventas sin escuchar cientos de llamadas.',
    },
    solution: {
      title: 'La Solución',
      content: 'Vectro procesa llamadas de ventas, emails y mensajes de Slack y usa comprensión semántica con OpenAI y búsqueda vectorial para mostrar insights accionables.',
    },
    architecture: {
      title: 'Arquitectura y Stack Técnico',
      stack: [
          { name: 'Backend', items: 'Node.js, TypeScript' },
          { name: 'IA', items: 'OpenAI' },
          { name: 'Búsqueda', items: 'Base de datos vectorial' },
        ],
    },
    features: {
      title: 'Características Clave',
      items: [
          { title: 'Ingesta multicanal', desc: 'Llamadas de ventas, emails y mensajes de Slack' },
          { title: 'Insights semánticos', desc: 'Búsqueda vectorial y OpenAI para mostrar lo importante' },
        ],
    },
    results: {
      title: 'Resultados e Impacto',
      metrics: [] as { value: string; label: string }[],
    },
    myRole: {
      title: 'Mi Rol',
      content: 'Construí la plataforma en un proyecto para un cliente a través de Upwork.',
    },
    testimonial: {
      quote: '',
      author: '',
      role: '',
    },
    lessons: {
      title: 'Lecciones Aprendidas',
      items: [] as string[],
    },
    faq: [] as { q: string; a: string }[],
    cta: {
      title: '¿Necesitas algo similar?',
      desc: 'Construyo productos de IA y SaaS listos para producción, desde pipelines RAG hasta plataformas multi-tenant. Hablemos de tu proyecto.',
      button: 'Contáctame',
    },
  },
  sectionLabels: {
    'problem': 'El Problema',
    'solution': 'La Solución',
    'architecture': 'Arquitectura',
    'features': 'Características',
    'results': 'Resultados',
    'my-role': 'Mi Rol',
    'lessons': 'Lecciones',
    'faq': 'FAQ',
  },
}

export const vectroContent = { en, es }
