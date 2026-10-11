const en = {
  slug: 'stethy',
  seo: {
    title: 'AI Email Triage SaaS on AWS: Stethy Case Study | Yash Soni',
    description: 'Backend and AWS infrastructure for an invite-only B2B AI email triage SaaS. Python, TypeScript, AWS CDK, LiteLLM, Langfuse.',
  },
  header: {
    kicker: 'Case Study',
    h1: 'Stethy: AI Email Triage',
    subtitle: 'Backend, infrastructure and tooling for an invite-only B2B email triage SaaS',
    date: '2024 to present',
    readingTime: '2 min read',
  },
  sections: {
    problem: {
      title: 'The Problem',
      content: 'Stethy needed an email triage workflow platform that enterprise users can connect to their inbox.',
    },
    solution: {
      title: 'The Solution',
      content: 'Stethy is an invite-only B2B SaaS that connects to a mailbox, classifies incoming email and routes it through defined workflows. A deterministic, versioned rules engine does the classification first, with AI triage and confidence scores alongside.',
    },
    architecture: {
      title: 'Architecture & Tech Stack',
      stack: [
          { name: 'Backend', items: 'Python, FastAPI, SQLAlchemy, Alembic' },
          { name: 'Frontend', items: 'TypeScript, React, Vite' },
          { name: 'Database', items: 'PostgreSQL' },
          { name: 'Mail', items: 'Microsoft Outlook and Azure AD, Gmail extension' },
          { name: 'LLM gateway', items: 'LiteLLM' },
          { name: 'Infrastructure', items: 'AWS CDK (Python), Lambda, CodePipeline, multi-account dev, stage and prod' },
          { name: 'Observability', items: 'Langfuse on Azure Container Apps' },
        ],
    },
    features: {
      title: 'Key Features',
      items: [
          { title: 'Rules Engine', desc: 'Versioned classification and routing rules with a dry-run to test an email before it goes live' },
          { title: 'Connectors', desc: 'Outlook mailboxes, including bring-your-own app credentials, and a Gmail extension' },
          { title: 'Runs and Audit Trail', desc: 'A live execution log and a classification history with confidence, matched rule and manual correction' },
          { title: 'Multi-Tenant Org Management', desc: 'Workspaces, users, invites, usage and access logs' },
        ],
    },
    results: {
      title: 'Results & Impact',
      metrics: [] as { value: string; label: string }[],
    },
    myRole: {
      title: 'My Role',
      content: 'I work with Stethy, a client based in Australia, as a contractor across backend, frontend and infrastructure.',
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
  slug: 'stethy',
  seo: {
    title: 'Stethy: SaaS de Triaje de Email con IA | Yash Soni',
    description: 'Caso de estudio: backend e infraestructura AWS para un SaaS B2B de triaje de email por invitación. Python, TypeScript, AWS CDK, LiteLLM y Langfuse.',
  },
  header: {
    kicker: 'Caso de Estudio',
    h1: 'Stethy: Triaje de Email con IA',
    subtitle: 'Backend, infraestructura y herramientas para un SaaS B2B de triaje de email por invitación',
    date: '2024 a la actualidad',
    readingTime: '2 min de lectura',
  },
  sections: {
    problem: {
      title: 'El Problema',
      content: 'Stethy necesitaba una plataforma de flujos de triaje de email que los usuarios de empresa pudieran conectar a su bandeja de entrada.',
    },
    solution: {
      title: 'La Solución',
      content: 'Stethy es un SaaS B2B por invitación que se conecta a un buzón, clasifica el correo entrante y lo enruta mediante flujos definidos. Primero clasifica un motor de reglas determinista y versionado, con triaje por IA y puntuaciones de confianza en paralelo.',
    },
    architecture: {
      title: 'Arquitectura y Stack Técnico',
      stack: [
          { name: 'Backend', items: 'Python, FastAPI, SQLAlchemy, Alembic' },
          { name: 'Frontend', items: 'TypeScript, React, Vite' },
          { name: 'Base de datos', items: 'PostgreSQL' },
          { name: 'Correo', items: 'Microsoft Outlook y Azure AD, extensión de Gmail' },
          { name: 'Gateway LLM', items: 'LiteLLM' },
          { name: 'Infraestructura', items: 'AWS CDK (Python), Lambda, CodePipeline, multicuenta dev, stage y prod' },
          { name: 'Observabilidad', items: 'Langfuse en Azure Container Apps' },
        ],
    },
    features: {
      title: 'Características Clave',
      items: [
          { title: 'Motor de reglas', desc: 'Reglas versionadas de clasificación y enrutamiento con un dry-run para probar un email antes de activarlas' },
          { title: 'Conectores', desc: 'Buzones de Outlook, incluidas credenciales de app propias, y una extensión de Gmail' },
          { title: 'Ejecuciones y auditoría', desc: 'Un registro de ejecución en vivo y un historial de clasificaciones con confianza, regla aplicada y corrección manual' },
          { title: 'Gestión multi-tenant', desc: 'Espacios de trabajo, usuarios, invitaciones, uso y registros de acceso' },
        ],
    },
    results: {
      title: 'Resultados e Impacto',
      metrics: [] as { value: string; label: string }[],
    },
    myRole: {
      title: 'Mi Rol',
      content: 'Trabajo con Stethy, un cliente con sede en Australia, como contratista en backend, frontend e infraestructura.',
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

export const stethyContent = { en, es }
