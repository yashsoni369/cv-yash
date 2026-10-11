const en = {
  slug: 'mappie-ai',
  seo: {
    title: 'AI Project Management: Requirements to User Stories | Yash Soni',
    description: 'Case study: an AI tool that turns messy requirements into dev-ready user stories, built for Nindo Solutions.',
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

const es = {
  slug: 'mappie-ai',
  seo: {
    title: 'Mappie AI: Gestión de Proyectos con IA | Yash Soni',
    description: 'Caso de estudio: herramienta de gestión de proyectos con IA que convierte requisitos desordenados en historias de usuario listas para desarrollo, construida para Nindo Solutions.',
  },
  header: {
    kicker: 'Caso de Estudio',
    h1: 'Mappie AI: De Requisitos Desordenados a Historias Listas',
    subtitle: 'Una herramienta de gestión de proyectos con IA que construí para Nindo Solutions, disponible en mappie.ai',
    date: 'Cerca de 1 año de la idea a producción',
    readingTime: '3 min de lectura',
  },
  sections: {
    problem: {
      title: 'El Problema',
      content: 'El refinamiento del backlog es una de las reuniones más caras del software. Personas senior pasan horas reescribiendo tickets vagos para que un ingeniero pueda trabajar con ellos, y los chats genéricos con LLM no tienen el contexto del flujo de trabajo para ayudar.',
    },
    solution: {
      title: 'La Solución',
      content: 'Mappie convierte requisitos de producto vagos y desestructurados en especificaciones, épicas e historias de usuario claras. Vive dentro del flujo de trabajo del product manager y usa IA con contexto para traducir la idea de un fundador en tickets.',
    },
    architecture: {
      title: 'Arquitectura y Stack Técnico',
      stack: [
          { name: 'Frontend', items: 'React, TypeScript, editor nativo en markdown' },
          { name: 'Backend', items: 'Node.js' },
          { name: 'IA', items: 'Modelos GPT de OpenAI, plantillas de prompts' },
          { name: 'Motor de contexto', items: 'Recuperación sobre el grafo de épicas e historias' },
          { name: 'Infraestructura', items: 'Hosting en la nube con CI/CD' },
        ],
    },
    features: {
      title: 'Características Clave',
      items: [
          { title: 'Generación de épicas e historias', desc: 'Convierte ideas de una línea en elementos de trabajo estructurados' },
          { title: 'Chat con contexto', desc: 'Chat de IA que ve la épica, la historia y los documentos relacionados' },
          { title: 'Edición con IA en línea', desc: 'Reescribe, amplía o ajusta cualquier bloque sin salir del editor' },
          { title: 'Pipeline de requisitos', desc: 'Flujo automático de épica a requisitos a historias con salida estructurada y consistente' },
          { title: 'Exportación a Markdown', desc: 'La documentación se exporta a las herramientas de gestión existentes' },
        ],
    },
    results: {
      title: 'Resultados e Impacto',
      metrics: [
          { value: '60-70%', label: 'reducción reportada del tiempo de refinamiento del backlog' },
          { value: '1.000', label: 'usuarios en beta' },
          { value: '~1 año', label: 'de la idea a producción' },
        ],
    },
    myRole: {
      title: 'Mi Rol',
      content: 'Construí Mappie AI para el cliente, Nindo Solutions en Bélgica, durante casi un año.',
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

export const mappieContent = { en, es }
