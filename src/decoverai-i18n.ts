export const decoveraiContent = {
  en: {
    slug: 'decoverai',
    seo: {
      title: 'DecoverAI: AI Legal Document Platform — $2M Funded | Yash Soni',
      description: 'Case study: AI-powered legal document management & semantic search platform deployed in US law firms. Built infrastructure and GenAI platform that helped secure $2M+ seed funding.',
    },
    header: {
      kicker: 'Case Study',
      h1: 'DecoverAI: AI-Powered Legal Intelligence',
      subtitle: 'How I built the GenAI platform that helped secure $2M+ in seed funding for US law firms',
      date: 'December 2023 — January 2025',
      readingTime: '8 min read',
    },
    sections: {
      problem: {
        title: 'The Problem',
        content: 'Large US law firms deal with massive volumes of legal documents — contracts, case files, regulatory filings. Finding relevant information across thousands of documents was slow, expensive, and error-prone. Associates spent hours manually searching through PDFs instead of practicing law.',
      },
      solution: {
        title: 'The Solution',
        content: 'DecoverAI is an AI-powered legal document management and semantic search platform. It uses vector databases and LLMs to let lawyers query their document corpus in natural language, getting precise, cited answers in seconds instead of hours.',
      },
      architecture: {
        title: 'Architecture & Tech Stack',
        stack: [
          { name: 'Frontend', items: 'React, TypeScript' },
          { name: 'Backend', items: 'Node.js, Python, FastAPI' },
          { name: 'AI/ML', items: 'OpenAI GPT-4, Embeddings, Pinecone Vector DB' },
          { name: 'Database', items: 'MongoDB, Pinecone' },
          { name: 'Infrastructure', items: 'AWS (EC2, S3, Lambda), Docker' },
          { name: 'Search', items: 'Semantic search, RAG pipeline, document chunking' },
        ],
      },
      features: {
        title: 'Key Features',
        items: [
          { title: 'Semantic Document Search', desc: 'Natural language queries across thousands of legal documents with precise citation to source paragraphs' },
          { title: 'AI-Powered Q&A', desc: 'Ask questions about your document corpus and get answers with exact document references and page numbers' },
          { title: 'Document Ingestion Pipeline', desc: 'Automated pipeline to process, chunk, embed, and index legal documents at scale' },
          { title: 'Enterprise Security', desc: 'Multi-tenant architecture with strict data isolation between law firms. SOC-2 compliant infrastructure' },
          { title: 'Citation Accuracy', desc: 'Every AI answer includes precise citations — paragraph, page, document — so lawyers can verify before citing in court' },
        ],
      },
      results: {
        title: 'Results & Impact',
        metrics: [
          { value: '$2M+', label: 'Seed funding secured from Bay Area VCs' },
          { value: '13', label: 'months of development' },
          { value: '10+', label: 'US law firms deployed' },
          { value: '90%', label: 'reduction in document search time' },
        ],
      },
      myRole: {
        title: 'My Role',
        content: 'I was the lead full-stack engineer for 13 months, responsible for building the core infrastructure and GenAI platform. This included designing the document ingestion pipeline, implementing the RAG-based search system, building the React frontend, and deploying the multi-tenant architecture on AWS.',
      },
      testimonial: {
        quote: 'Yash is one of the hardest-working and meticulous engineers I have encountered. We worked closely together on DecoverAI, where he helped build the infrastructure and Generative AI platform that is now deployed in large law firms throughout the United States. He helped lead a team, build critical pieces, and test and deploy them. We eventually raised 2M+ in funding with the help of his efforts. I would certainly recommend him for any future projects.',
        author: 'Ravi Tandon',
        role: 'CEO, Co-Founder — DecoverAI',
      },
      lessons: {
        title: 'Lessons Learned',
        items: [
          'RAG accuracy matters more than speed in legal — lawyers need to trust the citations before using them in court',
          'Document chunking strategy is critical: too small loses context, too large dilutes relevance',
          'Multi-tenancy from day one is non-negotiable for enterprise SaaS in regulated industries',
          'Prompt engineering for legal domain requires deep understanding of how lawyers think and search',
        ],
      },
      faq: [
        { q: 'What made DecoverAI different from other legal AI tools?', a: 'The combination of semantic search with precise citation accuracy. Every answer points to exact paragraphs and pages, which is critical for legal use cases where accuracy is non-negotiable.' },
        { q: 'How did you handle sensitive legal data?', a: 'Multi-tenant architecture with strict data isolation, encrypted storage on AWS, and no cross-firm data access. Each law firm operates in its own isolated environment.' },
        { q: 'What was the biggest technical challenge?', a: 'Building the document chunking and embedding pipeline that could handle diverse legal document formats (PDFs, scanned documents, contracts) while maintaining semantic coherence across chunks.' },
      ],
      cta: {
        title: 'Need a similar AI platform?',
        desc: 'I build production-grade AI/ML solutions — from RAG pipelines to enterprise SaaS. Let\'s talk about your project.',
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
    slug: 'decoverai',
    seo: {
      title: 'DecoverAI: Plataforma Legal con IA — $2M Financiados | Yash Soni',
      description: 'Caso de estudio: plataforma de gestión documental legal con IA y búsqueda semántica desplegada en bufetes de EE.UU. Infraestructura y plataforma GenAI que ayudó a asegurar $2M+ en financiación.',
    },
    header: {
      kicker: 'Caso de Estudio',
      h1: 'DecoverAI: Inteligencia Legal con IA',
      subtitle: 'Cómo construí la plataforma GenAI que ayudó a asegurar $2M+ en financiación para bufetes de EE.UU.',
      date: 'Diciembre 2023 — Enero 2025',
      readingTime: '8 min de lectura',
    },
    sections: {
      problem: {
        title: 'El Problema',
        content: 'Los grandes bufetes de EE.UU. manejan volúmenes masivos de documentos legales — contratos, expedientes, presentaciones regulatorias. Encontrar información relevante entre miles de documentos era lento, costoso y propenso a errores.',
      },
      solution: {
        title: 'La Solución',
        content: 'DecoverAI es una plataforma de gestión documental legal con IA y búsqueda semántica. Utiliza bases de datos vectoriales y LLMs para que los abogados consulten su corpus documental en lenguaje natural, obteniendo respuestas precisas y citadas en segundos.',
      },
      architecture: {
        title: 'Arquitectura y Stack',
        stack: [
          { name: 'Frontend', items: 'React, TypeScript' },
          { name: 'Backend', items: 'Node.js, Python, FastAPI' },
          { name: 'AI/ML', items: 'OpenAI GPT-4, Embeddings, Pinecone Vector DB' },
          { name: 'Base de datos', items: 'MongoDB, Pinecone' },
          { name: 'Infraestructura', items: 'AWS (EC2, S3, Lambda), Docker' },
          { name: 'Búsqueda', items: 'Búsqueda semántica, pipeline RAG, fragmentación de documentos' },
        ],
      },
      features: {
        title: 'Características Clave',
        items: [
          { title: 'Búsqueda Semántica', desc: 'Consultas en lenguaje natural sobre miles de documentos legales con citación precisa al párrafo fuente' },
          { title: 'Q&A con IA', desc: 'Haz preguntas sobre tu corpus documental y obtén respuestas con referencias exactas a documentos y páginas' },
          { title: 'Pipeline de Ingesta', desc: 'Pipeline automatizado para procesar, fragmentar, embeber e indexar documentos legales a escala' },
          { title: 'Seguridad Enterprise', desc: 'Arquitectura multi-tenant con aislamiento estricto de datos entre bufetes' },
          { title: 'Precisión de Citación', desc: 'Cada respuesta incluye citaciones precisas — párrafo, página, documento — para que los abogados puedan verificar' },
        ],
      },
      results: {
        title: 'Resultados e Impacto',
        metrics: [
          { value: '$2M+', label: 'Financiación seed de VCs de Bay Area' },
          { value: '13', label: 'meses de desarrollo' },
          { value: '10+', label: 'bufetes de EE.UU. desplegados' },
          { value: '90%', label: 'reducción en tiempo de búsqueda' },
        ],
      },
      myRole: {
        title: 'Mi Rol',
        content: 'Fui el ingeniero full-stack principal durante 13 meses, responsable de construir la infraestructura central y la plataforma GenAI. Esto incluyó diseñar el pipeline de ingesta, implementar el sistema de búsqueda RAG, construir el frontend React y desplegar la arquitectura multi-tenant en AWS.',
      },
      testimonial: {
        quote: 'Yash es uno de los ingenieros más trabajadores y meticulosos que he conocido. Trabajamos juntos en DecoverAI, donde ayudó a construir la infraestructura y la plataforma de IA Generativa que ahora está desplegada en grandes bufetes de Estados Unidos. Eventualmente conseguimos más de 2M en financiación con la ayuda de sus esfuerzos.',
        author: 'Ravi Tandon',
        role: 'CEO, Co-Fundador — DecoverAI',
      },
      lessons: {
        title: 'Lecciones Aprendidas',
        items: [
          'La precisión del RAG importa más que la velocidad en el ámbito legal',
          'La estrategia de fragmentación de documentos es crítica: muy pequeña pierde contexto, muy grande diluye relevancia',
          'Multi-tenancy desde el día uno es innegociable para SaaS enterprise en industrias reguladas',
          'La ingeniería de prompts para el dominio legal requiere entender profundamente cómo piensan los abogados',
        ],
      },
      faq: [
        { q: '¿Qué hizo diferente a DecoverAI?', a: 'La combinación de búsqueda semántica con precisión de citación. Cada respuesta apunta a párrafos y páginas exactas, algo crítico para casos legales.' },
        { q: '¿Cómo manejaron datos legales sensibles?', a: 'Arquitectura multi-tenant con aislamiento estricto, almacenamiento cifrado en AWS y sin acceso cruzado entre bufetes.' },
        { q: '¿Cuál fue el mayor desafío técnico?', a: 'Construir el pipeline de fragmentación y embedding que pudiera manejar formatos diversos de documentos legales manteniendo la coherencia semántica.' },
      ],
      cta: {
        title: '¿Necesitas una plataforma similar?',
        desc: 'Construyo soluciones AI/ML de nivel producción — desde pipelines RAG hasta SaaS enterprise. Hablemos de tu proyecto.',
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
