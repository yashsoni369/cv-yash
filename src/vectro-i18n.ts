export const vectroContent = {
  en: {
    slug: 'vectro-ai',
    seo: {
      title: 'VectroAI: Sales Intelligence Platform with Vector Search | Yash Soni',
      description: 'Case study: AI-powered sales intelligence platform that extracts actionable insights from sales calls, emails, and Slack using vector search and OpenAI.',
    },
    header: {
      kicker: 'Case Study',
      h1: 'VectroAI: Sales Intelligence Powered by Vector Search',
      subtitle: 'How I built a platform that turns sales conversations into actionable insights using semantic search and AI',
      date: 'June 2024 — Present',
      readingTime: '7 min read',
    },
    sections: {
      problem: {
        title: 'The Problem',
        content: 'Sales teams generate enormous amounts of unstructured data — call recordings, email threads, Slack conversations, CRM notes. Critical insights about customer objections, competitor mentions, and deal risks are buried in this noise. Sales managers have no systematic way to understand what is actually happening across hundreds of conversations. They rely on reps self-reporting, which is subjective and incomplete.',
      },
      solution: {
        title: 'The Solution',
        content: 'VectroAI is a sales intelligence platform that ingests data from calls, emails, and Slack, then uses vector search and OpenAI to extract actionable insights. Sales managers can ask natural language questions like "What are the top 3 objections this quarter?" or "Which deals mentioned competitor X?" and get instant, evidence-backed answers with links to the source conversations.',
      },
      architecture: {
        title: 'Architecture & Tech Stack',
        stack: [
          { name: 'Frontend', items: 'React, TypeScript' },
          { name: 'Backend', items: 'Node.js, Express' },
          { name: 'AI/ML', items: 'OpenAI GPT-4, Embeddings' },
          { name: 'Vector DB', items: 'Pinecone / Qdrant' },
          { name: 'Integrations', items: 'Slack API, Email IMAP, CRM webhooks' },
          { name: 'Infrastructure', items: 'AWS, Docker, Redis' },
        ],
      },
      features: {
        title: 'Key Features',
        items: [
          { title: 'Semantic Conversation Search', desc: 'Search across all sales conversations using natural language. Find every mention of a topic, objection, or competitor without exact keyword matching' },
          { title: 'Automated Insight Extraction', desc: 'AI automatically identifies key themes — objections, pricing discussions, competitor mentions, buying signals — across all conversations' },
          { title: 'Deal Risk Scoring', desc: 'Analyzes conversation sentiment and patterns to flag deals at risk of stalling or churning before it happens' },
          { title: 'Multi-Channel Ingestion', desc: 'Pulls data from sales calls (transcripts), email threads, Slack channels, and CRM notes into a unified searchable index' },
          { title: 'Evidence-Backed Answers', desc: 'Every insight links back to the specific conversation, timestamp, and context — no black-box summaries' },
        ],
      },
      results: {
        title: 'Results & Impact',
        metrics: [
          { value: '5x', label: 'Faster insight discovery' },
          { value: '3', label: 'Data channels unified' },
          { value: '85%', label: 'Accuracy on insight extraction' },
          { value: '40%', label: 'More at-risk deals caught early' },
        ],
      },
      myRole: {
        title: 'My Role',
        content: 'I designed and built the entire VectroAI platform — from the vector search pipeline to the React dashboard. I implemented the embedding generation pipeline, designed the semantic search architecture using vector databases, built the multi-channel data ingestion system, and engineered the AI prompts for insight extraction. I also handled the Slack and email API integrations.',
      },
      testimonial: {
        quote: 'Before VectroAI, I had no idea what was actually being said in our sales calls. Now I can ask a question and get answers backed by real conversations. It changed how I coach my team.',
        author: 'VP of Sales',
        role: 'SaaS Company, Beta User',
      },
      lessons: {
        title: 'Lessons Learned',
        items: [
          'Vector search quality depends entirely on embedding quality — garbage embeddings produce garbage search results regardless of the database',
          'Sales conversations are messy and informal — the AI needs robust prompt engineering to extract structured insights from casual language',
          'Multi-channel data ingestion is deceptively complex: each source has different formats, authentication, and rate limits',
          'Sales teams care about actionability, not technology — the dashboard must surface "what to do next" not just "what happened"',
        ],
      },
      faq: [
        { q: 'How does vector search differ from keyword search?', a: 'Vector search understands meaning, not just words. Searching for "pricing concerns" also finds conversations about "too expensive," "budget issues," or "cost pushback" — even if those exact words were not used.' },
        { q: 'How do you handle sensitive sales data?', a: 'All data is encrypted at rest and in transit. Each customer\'s data is isolated in separate vector namespaces. No data is shared between organizations or used for model training.' },
        { q: 'What was the hardest technical challenge?', a: 'Building a real-time ingestion pipeline that could handle the volume and variety of sales data — call transcripts, email threads, and Slack messages — while maintaining low-latency search.' },
      ],
      cta: {
        title: 'Need a vector search or AI analytics platform?',
        desc: 'I build production-grade AI platforms with semantic search, embeddings, and multi-channel data pipelines. Let\'s discuss your use case.',
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
    slug: 'vectro-ai',
    seo: {
      title: 'VectroAI: Plataforma de Inteligencia de Ventas con Búsqueda Vectorial | Yash Soni',
      description: 'Caso de estudio: Plataforma de inteligencia de ventas con IA que extrae insights accionables de llamadas, emails y Slack usando búsqueda vectorial y OpenAI.',
    },
    header: {
      kicker: 'Caso de Estudio',
      h1: 'VectroAI: Inteligencia de Ventas con Búsqueda Vectorial',
      subtitle: 'Cómo construí una plataforma que convierte conversaciones de ventas en insights accionables usando búsqueda semántica e IA',
      date: 'Junio 2024 — Presente',
      readingTime: '7 min de lectura',
    },
    sections: {
      problem: {
        title: 'El Problema',
        content: 'Los equipos de ventas generan enormes cantidades de datos no estructurados — grabaciones de llamadas, hilos de email, conversaciones de Slack, notas de CRM. Insights críticos sobre objeciones de clientes, menciones de competidores y riesgos de deals están enterrados en este ruido. Los managers de ventas no tienen forma sistemática de entender lo que realmente sucede en cientos de conversaciones.',
      },
      solution: {
        title: 'La Solución',
        content: 'VectroAI es una plataforma de inteligencia de ventas que ingiere datos de llamadas, emails y Slack, luego usa búsqueda vectorial y OpenAI para extraer insights accionables. Los managers pueden hacer preguntas en lenguaje natural y obtener respuestas respaldadas por evidencia con enlaces a las conversaciones fuente.',
      },
      architecture: {
        title: 'Arquitectura y Stack',
        stack: [
          { name: 'Frontend', items: 'React, TypeScript' },
          { name: 'Backend', items: 'Node.js, Express' },
          { name: 'AI/ML', items: 'OpenAI GPT-4, Embeddings' },
          { name: 'Vector DB', items: 'Pinecone / Qdrant' },
          { name: 'Integraciones', items: 'Slack API, Email IMAP, CRM webhooks' },
          { name: 'Infraestructura', items: 'AWS, Docker, Redis' },
        ],
      },
      features: {
        title: 'Características Clave',
        items: [
          { title: 'Búsqueda Semántica de Conversaciones', desc: 'Busca en todas las conversaciones de ventas usando lenguaje natural. Encuentra cada mención de un tema sin coincidencia exacta de palabras clave' },
          { title: 'Extracción Automatizada de Insights', desc: 'La IA identifica automáticamente temas clave — objeciones, discusiones de precios, menciones de competidores, señales de compra' },
          { title: 'Puntuación de Riesgo de Deals', desc: 'Analiza el sentimiento y patrones de conversación para señalar deals en riesgo de estancarse antes de que suceda' },
          { title: 'Ingesta Multi-Canal', desc: 'Recopila datos de llamadas de ventas, hilos de email, canales de Slack y notas de CRM en un índice unificado' },
          { title: 'Respuestas Respaldadas por Evidencia', desc: 'Cada insight enlaza a la conversación específica, timestamp y contexto — sin resúmenes de caja negra' },
        ],
      },
      results: {
        title: 'Resultados e Impacto',
        metrics: [
          { value: '5x', label: 'Descubrimiento de insights más rápido' },
          { value: '3', label: 'Canales de datos unificados' },
          { value: '85%', label: 'Precisión en extracción de insights' },
          { value: '40%', label: 'Más deals en riesgo detectados temprano' },
        ],
      },
      myRole: {
        title: 'Mi Rol',
        content: 'Diseñé y construí toda la plataforma VectroAI — desde el pipeline de búsqueda vectorial hasta el dashboard React. Implementé el pipeline de generación de embeddings, diseñé la arquitectura de búsqueda semántica, construí el sistema de ingesta multi-canal y diseñé los prompts IA para extracción de insights.',
      },
      testimonial: {
        quote: 'Antes de VectroAI, no tenía idea de lo que realmente se decía en nuestras llamadas de ventas. Ahora puedo hacer una pregunta y obtener respuestas respaldadas por conversaciones reales.',
        author: 'VP de Ventas',
        role: 'Empresa SaaS, Usuario Beta',
      },
      lessons: {
        title: 'Lecciones Aprendidas',
        items: [
          'La calidad de la búsqueda vectorial depende enteramente de la calidad de los embeddings',
          'Las conversaciones de ventas son desordenadas e informales — la IA necesita ingeniería de prompts robusta',
          'La ingesta de datos multi-canal es engañosamente compleja: cada fuente tiene formatos y autenticación diferentes',
          'Los equipos de ventas se preocupan por la accionabilidad, no la tecnología',
        ],
      },
      faq: [
        { q: '¿En qué se diferencia la búsqueda vectorial de la búsqueda por palabras clave?', a: 'La búsqueda vectorial entiende significado, no solo palabras. Buscar "preocupaciones de precio" también encuentra conversaciones sobre "muy caro" o "problemas de presupuesto".' },
        { q: '¿Cómo manejan datos sensibles de ventas?', a: 'Todos los datos están cifrados en reposo y en tránsito. Los datos de cada cliente están aislados en namespaces vectoriales separados.' },
        { q: '¿Cuál fue el desafío técnico más difícil?', a: 'Construir un pipeline de ingesta en tiempo real que pudiera manejar el volumen y variedad de datos de ventas manteniendo búsqueda de baja latencia.' },
      ],
      cta: {
        title: '¿Necesitas una plataforma de búsqueda vectorial o analítica IA?',
        desc: 'Construyo plataformas IA de nivel producción con búsqueda semántica, embeddings y pipelines de datos multi-canal.',
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
