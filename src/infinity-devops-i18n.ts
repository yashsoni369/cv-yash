const en = {
  slug: 'infinity-devops',
  seo: {
    title: 'Enterprise DevOps Platform on AWS and GCP | Yash Soni',
    description: 'Case study: multi-cloud DevOps platform built at LTI Mindtree\'s DevOps Centre of Excellence.',
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

const es = {
  slug: 'infinity-devops',
  seo: {
    title: 'Infinity DevOps: Plataforma DevOps Enterprise | Yash Soni',
    description: 'Caso de estudio: plataforma DevOps sobre AWS y GCP, construida en LTI Mindtree como el segundo gran producto del Centro de Excelencia DevOps.',
  },
  header: {
    kicker: 'Caso de Estudio',
    h1: 'Infinity DevOps: Plataforma DevOps Enterprise',
    subtitle: 'Una plataforma DevOps sobre AWS y GCP, construida en LTI Mindtree',
    date: 'LTI Mindtree, 2021 a 2023',
    readingTime: '2 min de lectura',
  },
  sections: {
    problem: {
      title: 'El Problema',
      content: 'El Centro de Excelencia DevOps de LTI Mindtree construía productos DevOps reutilizables, e Infinity DevOps fue el segundo gran producto.',
    },
    solution: {
      title: 'La Solución',
      content: 'Infinity DevOps es una plataforma DevOps enterprise sobre AWS y GCP. Incluye servicios wrapper sobre AWS que aceleran las herramientas para ingenieros sin experiencia previa en la plataforma.',
    },
    architecture: {
      title: 'Arquitectura y Stack Técnico',
      stack: [
          { name: 'Frontend', items: 'Angular, React' },
          { name: 'Backend', items: 'Node.js, microservicios, JWT' },
          { name: 'Base de datos', items: 'MongoDB' },
          { name: 'Mensajería', items: 'Kafka' },
          { name: 'Infraestructura', items: 'Docker, AWS, GCP' },
        ],
    },
    features: {
      title: 'Características Clave',
      items: [
          { title: 'Herramientas multi-cloud', desc: 'Herramientas DevOps sobre AWS y GCP' },
          { title: 'Servicios wrapper de AWS', desc: 'Wrappers para que los ingenieros entreguen sin conocer la plataforma' },
        ],
    },
    results: {
      title: 'Resultados e Impacto',
      metrics: [] as { value: string; label: string }[],
    },
    myRole: {
      title: 'Mi Rol',
      content: 'Fui Tech Lead de los productos DevOps sobre AWS y GCP, liderando un equipo del Centro de Excelencia de 10+ ingenieros.',
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

export const infinityDevopsContent = { en, es }
