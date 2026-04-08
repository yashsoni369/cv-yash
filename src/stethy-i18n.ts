export const stethyContent = {
  en: {
    slug: 'stethy',
    seo: {
      title: 'Stethy: AI Automation for Healthcare & Life Sciences | Yash Soni',
      description: 'Case study: AI-based automation platform for healthcare and life sciences. Streamlines clinical and administrative workflows with React, Node.js, Python, and AI/ML.',
    },
    header: {
      kicker: 'Case Study',
      h1: 'Stethy: AI Automation for Healthcare & Life Sciences',
      subtitle: 'How I built an AI platform that streamlines clinical and administrative workflows for healthcare organizations',
      date: 'September 2023 — March 2024',
      readingTime: '7 min read',
    },
    sections: {
      problem: {
        title: 'The Problem',
        content: 'Healthcare and life sciences organizations are drowning in manual processes. Clinical trial documentation, patient intake forms, insurance pre-authorizations, regulatory submissions — these workflows involve repetitive data extraction, cross-referencing, and validation that consume thousands of staff hours. Errors in these processes do not just cost time; they delay treatments, create compliance risks, and ultimately affect patient outcomes.',
      },
      solution: {
        title: 'The Solution',
        content: 'Stethy is an AI-powered automation platform designed specifically for healthcare and life sciences. It uses machine learning models and natural language processing to automate document processing, data extraction, workflow routing, and compliance validation. The platform integrates with existing hospital systems (EHR, LIMS) and reduces manual intervention by intelligently handling routine tasks while flagging exceptions for human review.',
      },
      architecture: {
        title: 'Architecture & Tech Stack',
        stack: [
          { name: 'Frontend', items: 'React, TypeScript' },
          { name: 'Backend', items: 'Node.js, Python' },
          { name: 'AI/ML', items: 'NLP models, Document AI, Classification' },
          { name: 'Database', items: 'PostgreSQL, Redis' },
          { name: 'Integrations', items: 'EHR/LIMS APIs, HL7 FHIR' },
          { name: 'Infrastructure', items: 'AWS, Docker, Kubernetes' },
        ],
      },
      features: {
        title: 'Key Features',
        items: [
          { title: 'Intelligent Document Processing', desc: 'AI extracts structured data from clinical documents, lab reports, and insurance forms — eliminating manual data entry with 95%+ accuracy' },
          { title: 'Workflow Automation Engine', desc: 'Configurable workflow rules that route documents, trigger approvals, and escalate exceptions based on content analysis' },
          { title: 'Clinical Trial Support', desc: 'Automates documentation workflows for clinical trials — consent tracking, adverse event reporting, and regulatory submission preparation' },
          { title: 'EHR Integration', desc: 'Bi-directional integration with major Electronic Health Record systems via HL7 FHIR standards' },
          { title: 'Compliance Validation', desc: 'Automated checks against healthcare regulations (HIPAA, FDA, EMA) with audit-ready reporting' },
        ],
      },
      results: {
        title: 'Results & Impact',
        metrics: [
          { value: '75%', label: 'Reduction in manual processing' },
          { value: '95%', label: 'Document extraction accuracy' },
          { value: '3x', label: 'Faster clinical trial documentation' },
          { value: '50%', label: 'Less time on compliance tasks' },
        ],
      },
      myRole: {
        title: 'My Role',
        content: 'I was the lead engineer responsible for building the core AI automation platform. I designed the document processing pipeline using Python ML models, built the React dashboard for workflow management, implemented the Node.js backend for workflow orchestration, and integrated with healthcare systems via FHIR APIs. I worked closely with domain experts to ensure the AI models met clinical accuracy requirements.',
      },
      testimonial: {
        quote: 'Stethy automated processes that used to take our team days. The AI document extraction is remarkably accurate, and the workflow engine handles edge cases that we thought would always need human intervention.',
        author: 'Director of Operations',
        role: 'Life Sciences Organization',
      },
      lessons: {
        title: 'Lessons Learned',
        items: [
          'Healthcare AI must be explainable — clinicians will not trust a black box that processes patient data without showing its reasoning',
          'HL7 FHIR integration sounds standardized but every EHR vendor implements it differently — expect significant adaptation work',
          'The 95% accuracy bar in healthcare is actually the starting line — the remaining 5% of errors can have serious clinical consequences',
          'Building AI for regulated industries requires close collaboration with compliance teams from sprint one, not as a final review',
        ],
      },
      faq: [
        { q: 'How does Stethy handle sensitive patient data?', a: 'All data processing follows HIPAA guidelines with encryption at rest and in transit, role-based access controls, and comprehensive audit logging. PHI is never exposed to unauthorized systems.' },
        { q: 'Can the AI handle different document formats?', a: 'Yes — the document processing pipeline handles PDFs, scanned images (via OCR), Word documents, and structured HL7 messages. The ML models are trained on healthcare-specific document layouts.' },
        { q: 'What made this project technically challenging?', a: 'The combination of high-accuracy requirements (healthcare cannot tolerate errors) with the diversity of document formats and the need for real-time EHR integration. Every component had to meet clinical-grade reliability standards.' },
      ],
      cta: {
        title: 'Need AI automation for healthcare?',
        desc: 'I build AI platforms for regulated industries — from document processing to workflow automation with compliance-first design. Let\'s talk.',
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
    slug: 'stethy',
    seo: {
      title: 'Stethy: Automatización IA para Salud y Ciencias de la Vida | Yash Soni',
      description: 'Caso de estudio: Plataforma de automatización basada en IA para salud y ciencias de la vida. Optimiza flujos clínicos y administrativos con React, Node.js, Python e IA/ML.',
    },
    header: {
      kicker: 'Caso de Estudio',
      h1: 'Stethy: Automatización IA para Salud y Ciencias de la Vida',
      subtitle: 'Cómo construí una plataforma IA que optimiza flujos clínicos y administrativos para organizaciones de salud',
      date: 'Septiembre 2023 — Marzo 2024',
      readingTime: '7 min de lectura',
    },
    sections: {
      problem: {
        title: 'El Problema',
        content: 'Las organizaciones de salud y ciencias de la vida están ahogándose en procesos manuales. Documentación de ensayos clínicos, formularios de ingreso de pacientes, pre-autorizaciones de seguros, presentaciones regulatorias — estos flujos involucran extracción repetitiva de datos, verificación cruzada y validación que consumen miles de horas de personal.',
      },
      solution: {
        title: 'La Solución',
        content: 'Stethy es una plataforma de automatización con IA diseñada específicamente para salud y ciencias de la vida. Utiliza modelos de machine learning y procesamiento de lenguaje natural para automatizar el procesamiento de documentos, extracción de datos, enrutamiento de flujos y validación de cumplimiento.',
      },
      architecture: {
        title: 'Arquitectura y Stack',
        stack: [
          { name: 'Frontend', items: 'React, TypeScript' },
          { name: 'Backend', items: 'Node.js, Python' },
          { name: 'AI/ML', items: 'Modelos NLP, Document AI, Clasificación' },
          { name: 'Base de datos', items: 'PostgreSQL, Redis' },
          { name: 'Integraciones', items: 'APIs EHR/LIMS, HL7 FHIR' },
          { name: 'Infraestructura', items: 'AWS, Docker, Kubernetes' },
        ],
      },
      features: {
        title: 'Características Clave',
        items: [
          { title: 'Procesamiento Inteligente de Documentos', desc: 'La IA extrae datos estructurados de documentos clínicos, informes de laboratorio y formularios de seguros con 95%+ de precisión' },
          { title: 'Motor de Automatización de Flujos', desc: 'Reglas de flujo configurables que enrutan documentos, activan aprobaciones y escalan excepciones basadas en análisis de contenido' },
          { title: 'Soporte de Ensayos Clínicos', desc: 'Automatiza flujos de documentación para ensayos clínicos — seguimiento de consentimiento, reporte de eventos adversos y preparación de presentaciones regulatorias' },
          { title: 'Integración EHR', desc: 'Integración bidireccional con sistemas de Registros de Salud Electrónicos vía estándares HL7 FHIR' },
          { title: 'Validación de Cumplimiento', desc: 'Verificaciones automáticas contra regulaciones de salud (HIPAA, FDA, EMA) con reportes listos para auditoría' },
        ],
      },
      results: {
        title: 'Resultados e Impacto',
        metrics: [
          { value: '75%', label: 'Reducción en procesamiento manual' },
          { value: '95%', label: 'Precisión de extracción de documentos' },
          { value: '3x', label: 'Documentación de ensayos más rápida' },
          { value: '50%', label: 'Menos tiempo en tareas de cumplimiento' },
        ],
      },
      myRole: {
        title: 'Mi Rol',
        content: 'Fui el ingeniero principal responsable de construir la plataforma core de automatización IA. Diseñé el pipeline de procesamiento de documentos con modelos Python ML, construí el dashboard React, implementé el backend Node.js para orquestación de flujos e integré con sistemas de salud vía APIs FHIR.',
      },
      testimonial: {
        quote: 'Stethy automatizó procesos que solían tomar días a nuestro equipo. La extracción de documentos con IA es notablemente precisa y el motor de flujos maneja casos límite que pensábamos siempre necesitarían intervención humana.',
        author: 'Director de Operaciones',
        role: 'Organización de Ciencias de la Vida',
      },
      lessons: {
        title: 'Lecciones Aprendidas',
        items: [
          'La IA en salud debe ser explicable — los clínicos no confiarán en una caja negra que procesa datos de pacientes',
          'La integración HL7 FHIR suena estandarizada pero cada proveedor de EHR la implementa diferente',
          'El umbral de 95% de precisión en salud es en realidad el punto de partida — el 5% restante puede tener consecuencias clínicas serias',
          'Construir IA para industrias reguladas requiere colaboración cercana con equipos de cumplimiento desde el primer sprint',
        ],
      },
      faq: [
        { q: '¿Cómo maneja Stethy datos sensibles de pacientes?', a: 'Todo el procesamiento sigue directrices HIPAA con cifrado en reposo y en tránsito, controles de acceso por roles y logging de auditoría completo.' },
        { q: '¿Puede la IA manejar diferentes formatos de documentos?', a: 'Sí — el pipeline procesa PDFs, imágenes escaneadas (vía OCR), documentos Word y mensajes HL7 estructurados.' },
        { q: '¿Qué hizo técnicamente desafiante este proyecto?', a: 'La combinación de requisitos de alta precisión con la diversidad de formatos de documentos y la necesidad de integración EHR en tiempo real.' },
      ],
      cta: {
        title: '¿Necesitas automatización IA para salud?',
        desc: 'Construyo plataformas IA para industrias reguladas — desde procesamiento de documentos hasta automatización de flujos con diseño compliance-first.',
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
