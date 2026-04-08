export const unitedMedicalContent = {
  en: {
    slug: 'united-medical',
    seo: {
      title: 'United Medical: Hospital-Doctor Contract Management Platform | Yash Soni',
      description: 'Case study: Contract management platform for German healthcare startup. Complex workflow automation for hospital-doctor contracts with React, Node.js, and PostgreSQL.',
    },
    header: {
      kicker: 'Case Study',
      h1: 'United Medical: Healthcare Contract Management',
      subtitle: 'How I built a contract workflow platform that streamlines hospital-doctor agreements for a German healthcare startup',
      date: 'February 2023 — August 2023',
      readingTime: '7 min read',
    },
    sections: {
      problem: {
        title: 'The Problem',
        content: 'German hospitals manage hundreds of contracts with freelance and staff doctors — each with unique terms, shift schedules, compensation structures, and regulatory requirements. These contracts were tracked in spreadsheets and email chains, leading to missed renewals, compliance gaps, and disputes over terms. The administrative burden was enormous, and the risk of non-compliance with German healthcare regulations created real legal exposure for hospital administrators.',
      },
      solution: {
        title: 'The Solution',
        content: 'United Medical is a purpose-built contract management platform for German healthcare. It digitizes the entire contract lifecycle — from template creation and negotiation to signing, tracking, and renewal. Complex workflows handle multi-party approvals, automatic renewal reminders, compliance checks against German healthcare law, and real-time dashboards showing contract status across departments.',
      },
      architecture: {
        title: 'Architecture & Tech Stack',
        stack: [
          { name: 'Frontend', items: 'React, TypeScript' },
          { name: 'Backend', items: 'Node.js, Express' },
          { name: 'Database', items: 'PostgreSQL' },
          { name: 'Auth', items: 'JWT, Role-based access' },
          { name: 'Documents', items: 'PDF generation, e-signatures' },
          { name: 'Infrastructure', items: 'AWS, Docker, CI/CD' },
        ],
      },
      features: {
        title: 'Key Features',
        items: [
          { title: 'Contract Template Engine', desc: 'Customizable contract templates with variable fields — compensation, schedule, terms — that auto-populate from doctor and hospital profiles' },
          { title: 'Multi-Party Approval Workflows', desc: 'Configurable approval chains involving department heads, legal, HR, and hospital administration with status tracking at each stage' },
          { title: 'Compliance Dashboard', desc: 'Real-time overview of contract compliance status — expiring contracts, missing signatures, regulatory gaps — with automated alerts' },
          { title: 'Shift & Schedule Integration', desc: 'Contract terms link directly to shift scheduling, ensuring doctor availability aligns with contracted hours and departments' },
          { title: 'Audit Trail', desc: 'Complete history of every contract change, approval, and communication — critical for regulatory audits in German healthcare' },
        ],
      },
      results: {
        title: 'Results & Impact',
        metrics: [
          { value: '80%', label: 'Reduction in contract processing time' },
          { value: '0', label: 'Missed renewals after deployment' },
          { value: '6 mo', label: 'Development timeline' },
          { value: '100%', label: 'Regulatory compliance maintained' },
        ],
      },
      myRole: {
        title: 'My Role',
        content: 'I was the lead full-stack developer, responsible for building the platform from scratch. I designed the PostgreSQL schema for complex contract relationships, built the React frontend with the workflow engine, implemented the multi-party approval system in Node.js, and integrated PDF generation for contract documents. I worked closely with German healthcare compliance consultants to ensure the platform met regulatory requirements.',
      },
      testimonial: {
        quote: 'Yash understood our complex requirements quickly and built a system that actually works for how German hospitals operate. The contract workflow automation saved our administrators hours every week.',
        author: 'Founder',
        role: 'United Medical, Germany',
      },
      lessons: {
        title: 'Lessons Learned',
        items: [
          'Healthcare compliance is not a feature you add later — it must inform the data model and workflow design from the very beginning',
          'German healthcare regulations have specific documentation requirements that shaped every aspect of the audit trail system',
          'Multi-party approval workflows are deceptively complex — edge cases around delegation, timeout, and rejection require careful state machine design',
          'Working with a German startup taught me the value of precision in requirements — ambiguity in contracts is a legal risk, not just a UX issue',
        ],
      },
      faq: [
        { q: 'Why build a custom platform instead of using existing CMS tools?', a: 'German healthcare contracts have unique regulatory requirements and workflow patterns that generic contract management tools do not support. The platform needed deep integration with hospital operations and compliance rules.' },
        { q: 'How did you handle German data protection requirements?', a: 'The platform was designed for GDPR compliance from day one — data minimization, purpose limitation, and right-to-deletion were built into the data model. All data stayed within EU-region AWS infrastructure.' },
        { q: 'What was the most complex feature?', a: 'The multi-party approval workflow engine. Contracts required sequential and parallel approvals from different stakeholders, with delegation rules, timeout escalation, and rollback on rejection.' },
      ],
      cta: {
        title: 'Need a workflow automation platform?',
        desc: 'I build complex business workflow platforms with compliance-first architecture. Let\'s discuss your requirements.',
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
    slug: 'united-medical',
    seo: {
      title: 'United Medical: Plataforma de Gestión de Contratos Hospitalarios | Yash Soni',
      description: 'Caso de estudio: Plataforma de gestión de contratos para startup de salud alemana. Automatización de flujos complejos para contratos hospital-médico.',
    },
    header: {
      kicker: 'Caso de Estudio',
      h1: 'United Medical: Gestión de Contratos de Salud',
      subtitle: 'Cómo construí una plataforma de flujos de contratos que optimiza acuerdos hospital-médico para una startup de salud alemana',
      date: 'Febrero 2023 — Agosto 2023',
      readingTime: '7 min de lectura',
    },
    sections: {
      problem: {
        title: 'El Problema',
        content: 'Los hospitales alemanes gestionan cientos de contratos con médicos freelance y de plantilla — cada uno con términos únicos, horarios de turnos, estructuras de compensación y requisitos regulatorios. Estos contratos se rastreaban en hojas de cálculo y cadenas de email, llevando a renovaciones perdidas, brechas de cumplimiento y disputas sobre términos.',
      },
      solution: {
        title: 'La Solución',
        content: 'United Medical es una plataforma de gestión de contratos construida específicamente para la salud alemana. Digitaliza todo el ciclo de vida del contrato — desde la creación de plantillas y negociación hasta la firma, seguimiento y renovación. Flujos complejos manejan aprobaciones multi-parte, recordatorios automáticos de renovación y verificaciones de cumplimiento.',
      },
      architecture: {
        title: 'Arquitectura y Stack',
        stack: [
          { name: 'Frontend', items: 'React, TypeScript' },
          { name: 'Backend', items: 'Node.js, Express' },
          { name: 'Base de datos', items: 'PostgreSQL' },
          { name: 'Autenticación', items: 'JWT, Acceso basado en roles' },
          { name: 'Documentos', items: 'Generación PDF, firmas electrónicas' },
          { name: 'Infraestructura', items: 'AWS, Docker, CI/CD' },
        ],
      },
      features: {
        title: 'Características Clave',
        items: [
          { title: 'Motor de Plantillas de Contratos', desc: 'Plantillas personalizables con campos variables — compensación, horario, términos — que se auto-completan desde perfiles de médicos y hospitales' },
          { title: 'Flujos de Aprobación Multi-Parte', desc: 'Cadenas de aprobación configurables involucrando jefes de departamento, legal, RRHH y administración hospitalaria' },
          { title: 'Dashboard de Cumplimiento', desc: 'Vista en tiempo real del estado de cumplimiento de contratos — contratos por vencer, firmas faltantes, brechas regulatorias' },
          { title: 'Integración de Turnos y Horarios', desc: 'Los términos del contrato se vinculan directamente a la programación de turnos, asegurando que la disponibilidad del médico se alinee con las horas contratadas' },
          { title: 'Pista de Auditoría', desc: 'Historial completo de cada cambio de contrato, aprobación y comunicación — crítico para auditorías regulatorias en la salud alemana' },
        ],
      },
      results: {
        title: 'Resultados e Impacto',
        metrics: [
          { value: '80%', label: 'Reducción en tiempo de procesamiento' },
          { value: '0', label: 'Renovaciones perdidas post-despliegue' },
          { value: '6 meses', label: 'Tiempo de desarrollo' },
          { value: '100%', label: 'Cumplimiento regulatorio mantenido' },
        ],
      },
      myRole: {
        title: 'Mi Rol',
        content: 'Fui el desarrollador full-stack principal, responsable de construir la plataforma desde cero. Diseñé el esquema PostgreSQL para relaciones contractuales complejas, construí el frontend React con el motor de flujos, implementé el sistema de aprobación multi-parte en Node.js e integré generación de PDF.',
      },
      testimonial: {
        quote: 'Yash entendió nuestros requisitos complejos rápidamente y construyó un sistema que realmente funciona para cómo operan los hospitales alemanes. La automatización de flujos de contratos ahorró horas cada semana a nuestros administradores.',
        author: 'Fundador',
        role: 'United Medical, Alemania',
      },
      lessons: {
        title: 'Lecciones Aprendidas',
        items: [
          'El cumplimiento de salud no es una función que se agrega después — debe informar el modelo de datos y diseño de flujos desde el principio',
          'Las regulaciones de salud alemanas tienen requisitos específicos de documentación que moldearon cada aspecto del sistema de auditoría',
          'Los flujos de aprobación multi-parte son engañosamente complejos — los casos límite requieren diseño cuidadoso de máquinas de estado',
          'Trabajar con una startup alemana me enseñó el valor de la precisión en los requisitos',
        ],
      },
      faq: [
        { q: '¿Por qué construir una plataforma personalizada?', a: 'Los contratos de salud alemanes tienen requisitos regulatorios únicos que las herramientas genéricas de gestión de contratos no soportan.' },
        { q: '¿Cómo manejaron los requisitos de protección de datos alemanes?', a: 'La plataforma se diseñó para cumplimiento GDPR desde el día uno — minimización de datos, limitación de propósito y derecho a eliminación. Todos los datos permanecen en infraestructura AWS de región EU.' },
        { q: '¿Cuál fue la funcionalidad más compleja?', a: 'El motor de flujos de aprobación multi-parte. Los contratos requerían aprobaciones secuenciales y paralelas con reglas de delegación y escalamiento.' },
      ],
      cta: {
        title: '¿Necesitas una plataforma de automatización de flujos?',
        desc: 'Construyo plataformas de flujos de negocio complejos con arquitectura compliance-first. Hablemos de tus requisitos.',
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
