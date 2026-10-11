const en = {
  slug: 'united-medical',
  seo: {
    title: 'Healthcare Contract Management SaaS, Germany | Yash Soni',
    description: 'Case study: hospital and doctor contract management for a German healthcare startup, on retainer since August 2023.',
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

const es = {
  slug: 'united-medical',
  seo: {
    title: 'United Medical: Contratos Hospital-Médico | Yash Soni',
    description: 'Caso de estudio: aplicación de gestión de contratos para una startup de salud alemana, un retainer activo desde agosto de 2023.',
  },
  header: {
    kicker: 'Caso de Estudio',
    h1: 'United Medical: Gestión de Contratos Hospital-Médico',
    subtitle: 'Una aplicación de gestión de contratos para una startup de salud alemana',
    date: 'Retainer activo desde agosto de 2023',
    readingTime: '2 min de lectura',
  },
  sections: {
    problem: {
      title: 'El Problema',
      content: 'Una startup de salud alemana necesitaba una aplicación para gestionar los contratos entre hospitales y médicos.',
    },
    solution: {
      title: 'La Solución',
      content: 'United Medical es una aplicación de gestión de contratos hospital-médico que automatiza los flujos de trabajo de los contratos médicos.',
    },
    architecture: {
      title: 'Arquitectura y Stack Técnico',
      stack: [
          { name: 'Aplicación', items: 'Next.js, TypeScript' },
          { name: 'Estructura', items: 'Monorepo con paquetes de API, web, escaneo y tipos compartidos' },
          { name: 'Base de datos', items: 'PostgreSQL' },
          { name: 'Caché', items: 'Redis' },
          { name: 'Testing', items: 'Pruebas cross-browser con BrowserStack' },
        ],
    },
    features: {
      title: 'Características Clave',
      items: [
          { title: 'Gestión de contratos', desc: 'Gestiona los contratos entre hospitales y médicos' },
          { title: 'Automatización de flujos', desc: 'Automatiza los flujos complejos de los contratos médicos' },
        ],
    },
    results: {
      title: 'Resultados e Impacto',
      metrics: [] as { value: string; label: string }[],
    },
    myRole: {
      title: 'Mi Rol',
      content: 'Trabajo en este proyecto como retainer continuo con una startup de salud alemana.',
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

export const unitedMedicalContent = { en, es }
