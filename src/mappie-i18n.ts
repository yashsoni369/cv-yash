export const mappieContent = {
  en: {
    slug: 'mappie-ai',
    seo: {
      title: 'MappieAI: AI Project Management Tool | Yash Soni',
      description: 'Case study: AI-based project management tool that transforms messy requirements into dev-ready user stories. 1 year from idea to execution.',
    },
    header: {
      kicker: 'Case Study',
      h1: 'MappieAI: From Messy Requirements to Dev-Ready Stories',
      subtitle: 'How I built an AI tool that transforms chaotic project requirements into structured, actionable user stories',
      date: 'January 2024 — Present',
      readingTime: '7 min read',
    },
    sections: {
      problem: {
        title: 'The Problem',
        content: 'Every software project starts with requirements — and they are almost always a mess. Stakeholders send rambling emails, Slack threads, meeting notes, and vague feature requests. Product managers spend hours manually translating this chaos into structured user stories. Developers get ambiguous tickets. Sprints start with confusion. The gap between what stakeholders want and what developers build is where most projects go wrong.',
      },
      solution: {
        title: 'The Solution',
        content: 'MappieAI is an AI-powered project management tool that ingests raw requirements — emails, meeting transcripts, documents, Slack messages — and transforms them into structured, dev-ready user stories with acceptance criteria, edge cases, and technical considerations. It acts as an intelligent bridge between stakeholders and development teams, eliminating the ambiguity that causes sprint failures.',
      },
      architecture: {
        title: 'Architecture & Tech Stack',
        stack: [
          { name: 'Frontend', items: 'React, TypeScript' },
          { name: 'Backend', items: 'Node.js, Express' },
          { name: 'AI/ML', items: 'OpenAI GPT-4, Prompt Engineering' },
          { name: 'Database', items: 'PostgreSQL' },
          { name: 'Integrations', items: 'Jira, Slack, Notion APIs' },
          { name: 'Infrastructure', items: 'AWS, Docker' },
        ],
      },
      features: {
        title: 'Key Features',
        items: [
          { title: 'Requirement Ingestion', desc: 'Drop in emails, meeting notes, Slack threads, or documents — MappieAI parses and understands the intent behind unstructured input' },
          { title: 'AI Story Generation', desc: 'Automatically generates user stories with title, description, acceptance criteria, edge cases, and story points' },
          { title: 'Dependency Mapping', desc: 'Identifies dependencies between stories and suggests optimal sprint ordering to minimize blockers' },
          { title: 'Jira & Tool Integration', desc: 'Push generated stories directly to Jira, Linear, or Notion with one click — no manual copy-paste' },
          { title: 'Refinement Suggestions', desc: 'AI flags ambiguous requirements and suggests clarifying questions before stories reach developers' },
        ],
      },
      results: {
        title: 'Results & Impact',
        metrics: [
          { value: '1 yr', label: 'From idea to execution' },
          { value: '70%', label: 'Faster story creation' },
          { value: '3x', label: 'Fewer ambiguous tickets' },
          { value: '100+', label: 'Beta users' },
        ],
      },
      myRole: {
        title: 'My Role',
        content: 'I conceived and built MappieAI end-to-end as a solo founder-engineer. I designed the product based on my own pain points leading development teams, built the React frontend and Node.js backend, engineered the AI prompt chains for requirement parsing and story generation, and integrated with Jira and Slack APIs. The entire journey from idea to working product took one year of focused development.',
      },
      testimonial: {
        quote: 'MappieAI cut our sprint planning time in half. We used to spend hours writing user stories from vague requirements — now the AI drafts them and we just refine. The quality of our tickets improved dramatically.',
        author: 'Product Manager',
        role: 'Beta User, SaaS Startup',
      },
      lessons: {
        title: 'Lessons Learned',
        items: [
          'The hardest part of AI product development is not the AI — it is understanding the domain deeply enough to prompt correctly',
          'User stories have a surprising amount of implicit structure that humans take for granted but AI needs explicitly taught',
          'Integrations (Jira, Slack) are table stakes — users will not adopt a tool that does not fit into their existing workflow',
          'One year of solo development taught me when to ship imperfect features and when to polish — perfectionism kills products',
        ],
      },
      faq: [
        { q: 'How does MappieAI handle ambiguous requirements?', a: 'The AI identifies ambiguity and generates clarifying questions for stakeholders before creating stories. This prevents vague tickets from reaching developers.' },
        { q: 'Can it replace a product manager?', a: 'No — it augments product managers by handling the tedious translation work. PMs still make strategic decisions about priority, scope, and product direction.' },
        { q: 'What made you build this?', a: 'Years of leading development teams and watching sprints derail because of poorly written user stories. I wanted to automate the translation from stakeholder language to developer language.' },
      ],
      cta: {
        title: 'Need an AI-powered productivity tool?',
        desc: 'I build AI products that solve real workflow problems — from requirement parsing to intelligent automation. Let\'s discuss your idea.',
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
  },
  es: {
    slug: 'mappie-ai',
    seo: {
      title: 'MappieAI: Herramienta de Gestión de Proyectos con IA | Yash Soni',
      description: 'Caso de estudio: Herramienta de gestión de proyectos con IA que transforma requisitos desordenados en historias de usuario listas para desarrollo.',
    },
    header: {
      kicker: 'Caso de Estudio',
      h1: 'MappieAI: De Requisitos Caóticos a Historias Listas',
      subtitle: 'Cómo construí una herramienta IA que transforma requisitos caóticos en historias de usuario estructuradas y accionables',
      date: 'Enero 2024 — Presente',
      readingTime: '7 min de lectura',
    },
    sections: {
      problem: {
        title: 'El Problema',
        content: 'Todo proyecto de software comienza con requisitos — y casi siempre son un desorden. Los stakeholders envían correos divagantes, hilos de Slack, notas de reuniones y solicitudes vagas de funcionalidades. Los product managers pasan horas traduciendo manualmente este caos en historias de usuario estructuradas. Los desarrolladores reciben tickets ambiguos. Los sprints comienzan con confusión.',
      },
      solution: {
        title: 'La Solución',
        content: 'MappieAI es una herramienta de gestión de proyectos con IA que ingiere requisitos crudos — correos, transcripciones de reuniones, documentos, mensajes de Slack — y los transforma en historias de usuario estructuradas con criterios de aceptación, casos límite y consideraciones técnicas.',
      },
      architecture: {
        title: 'Arquitectura y Stack',
        stack: [
          { name: 'Frontend', items: 'React, TypeScript' },
          { name: 'Backend', items: 'Node.js, Express' },
          { name: 'AI/ML', items: 'OpenAI GPT-4, Ingeniería de Prompts' },
          { name: 'Base de datos', items: 'PostgreSQL' },
          { name: 'Integraciones', items: 'Jira, Slack, Notion APIs' },
          { name: 'Infraestructura', items: 'AWS, Docker' },
        ],
      },
      features: {
        title: 'Características Clave',
        items: [
          { title: 'Ingesta de Requisitos', desc: 'Agrega correos, notas de reuniones, hilos de Slack o documentos — MappieAI analiza y entiende la intención detrás de la entrada no estructurada' },
          { title: 'Generación de Historias con IA', desc: 'Genera automáticamente historias de usuario con título, descripción, criterios de aceptación, casos límite y puntos de historia' },
          { title: 'Mapeo de Dependencias', desc: 'Identifica dependencias entre historias y sugiere orden óptimo de sprint para minimizar bloqueos' },
          { title: 'Integración con Jira y Herramientas', desc: 'Envía historias generadas directamente a Jira, Linear o Notion con un clic' },
          { title: 'Sugerencias de Refinamiento', desc: 'La IA señala requisitos ambiguos y sugiere preguntas clarificadoras antes de que las historias lleguen a los desarrolladores' },
        ],
      },
      results: {
        title: 'Resultados e Impacto',
        metrics: [
          { value: '1 año', label: 'De idea a ejecución' },
          { value: '70%', label: 'Creación de historias más rápida' },
          { value: '3x', label: 'Menos tickets ambiguos' },
          { value: '100+', label: 'Usuarios beta' },
        ],
      },
      myRole: {
        title: 'Mi Rol',
        content: 'Concebí y construí MappieAI de principio a fin como fundador-ingeniero en solitario. Diseñé el producto basado en mis propios puntos de dolor liderando equipos de desarrollo, construí el frontend React y backend Node.js, diseñé las cadenas de prompts IA y me integré con las APIs de Jira y Slack.',
      },
      testimonial: {
        quote: 'MappieAI redujo nuestro tiempo de planificación de sprint a la mitad. Solíamos pasar horas escribiendo historias de usuario de requisitos vagos — ahora la IA las redacta y nosotros solo refinamos.',
        author: 'Product Manager',
        role: 'Usuario Beta, Startup SaaS',
      },
      lessons: {
        title: 'Lecciones Aprendidas',
        items: [
          'La parte más difícil del desarrollo de productos IA no es la IA — es entender el dominio lo suficientemente profundo para hacer prompts correctos',
          'Las historias de usuario tienen una cantidad sorprendente de estructura implícita que los humanos dan por sentada',
          'Las integraciones (Jira, Slack) son requisitos mínimos — los usuarios no adoptarán una herramienta que no encaje en su flujo existente',
          'Un año de desarrollo en solitario me enseñó cuándo lanzar funciones imperfectas y cuándo pulir',
        ],
      },
      faq: [
        { q: '¿Cómo maneja MappieAI requisitos ambiguos?', a: 'La IA identifica ambigüedad y genera preguntas clarificadoras para stakeholders antes de crear historias. Esto previene que tickets vagos lleguen a los desarrolladores.' },
        { q: '¿Puede reemplazar a un product manager?', a: 'No — aumenta a los product managers manejando el trabajo tedioso de traducción. Los PMs siguen tomando decisiones estratégicas.' },
        { q: '¿Qué te motivó a construir esto?', a: 'Años liderando equipos de desarrollo y viendo sprints descarrilar por historias de usuario mal escritas.' },
      ],
      cta: {
        title: '¿Necesitas una herramienta de productividad con IA?',
        desc: 'Construyo productos IA que resuelven problemas reales de flujo de trabajo. Hablemos de tu idea.',
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
  },
}
