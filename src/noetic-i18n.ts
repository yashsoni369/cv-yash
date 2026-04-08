export const noeticContent = {
  en: {
    slug: 'noetic',
    seo: {
      title: 'Noetic: Automated Neurodiversity Assessment Platform | Yash Soni',
      description: 'Case study: AI-powered affirmative assessment platform for neurodiversity — ADHD, autism, dyslexia, dyspraxia, dyscalculia. Making assessment accessible and affordable.',
    },
    header: {
      kicker: 'Case Study',
      h1: 'Noetic: Accessible Neurodiversity Assessment',
      subtitle: 'How I built an AI platform that makes ADHD, autism, and learning difference assessments accessible and affordable',
      date: 'April 2024 — Present',
      readingTime: '7 min read',
    },
    sections: {
      problem: {
        title: 'The Problem',
        content: 'Getting assessed for neurodivergent conditions — ADHD, autism, dyslexia, dyspraxia, dyscalculia — is expensive, slow, and inaccessible for most people. In the UK, NHS waitlists for ADHD assessment can exceed 3 years. Private assessments cost between 500 and 2000 pounds. Many adults go their entire lives without understanding why they think and learn differently. The assessment process itself is intimidating, clinical, and often framed around deficits rather than strengths.',
      },
      solution: {
        title: 'The Solution',
        content: 'Noetic is an AI-powered affirmative assessment platform for neurodiversity. It provides scientifically grounded, accessible screening and assessment tools for ADHD, autism, dyslexia, dyspraxia, and dyscalculia. The platform uses an affirmative approach — recognizing neurodivergence as natural variation rather than disorder — while maintaining clinical rigor. AI adapts the assessment experience to each individual, reducing anxiety and improving accuracy.',
      },
      architecture: {
        title: 'Architecture & Tech Stack',
        stack: [
          { name: 'Frontend', items: 'React, TypeScript' },
          { name: 'Backend', items: 'Node.js, Express' },
          { name: 'AI/ML', items: 'Assessment models, Adaptive algorithms' },
          { name: 'Database', items: 'PostgreSQL' },
          { name: 'Security', items: 'HIPAA/GDPR compliant, encrypted PII' },
          { name: 'Infrastructure', items: 'AWS, Docker' },
        ],
      },
      features: {
        title: 'Key Features',
        items: [
          { title: 'Multi-Condition Assessment', desc: 'Comprehensive screening for ADHD, autism, dyslexia, dyspraxia, and dyscalculia — with the ability to identify overlapping conditions (co-occurrence)' },
          { title: 'Adaptive Assessment Engine', desc: 'AI adjusts question difficulty, pacing, and format based on individual responses — reducing assessment fatigue and improving accuracy' },
          { title: 'Affirmative Framework', desc: 'Strengths-based language and reporting that reframes neurodivergence as natural variation, not deficit — reducing stigma and anxiety during assessment' },
          { title: 'Clinician Dashboard', desc: 'Tools for qualified assessors to review AI-generated insights, validate results, and produce formal assessment reports' },
          { title: 'Accessible Design', desc: 'Interface designed for neurodivergent users — customizable fonts, colors, reduced visual clutter, and multiple input modalities' },
        ],
      },
      results: {
        title: 'Results & Impact',
        metrics: [
          { value: '5', label: 'Conditions assessed' },
          { value: '80%', label: 'Cost reduction vs private assessment' },
          { value: '90%', label: 'User completion rate' },
          { value: '< 1 wk', label: 'Assessment turnaround time' },
        ],
      },
      myRole: {
        title: 'My Role',
        content: 'I was the lead engineer responsible for building the assessment platform end-to-end. I designed the adaptive assessment engine, built the React frontend with accessibility-first principles, implemented the Node.js backend for assessment orchestration and scoring, and designed the PostgreSQL schema for complex assessment data. I collaborated closely with clinical psychologists to ensure the AI models aligned with validated assessment methodologies.',
      },
      testimonial: {
        quote: 'Noetic made the assessment process feel safe rather than clinical. The strengths-based approach helped me understand my ADHD as part of who I am, not something wrong with me. And I got answers in days, not years.',
        author: 'Assessment User',
        role: 'Adult ADHD Diagnosis',
      },
      lessons: {
        title: 'Lessons Learned',
        items: [
          'Accessibility is not an afterthought — for neurodivergent users, inaccessible design literally prevents them from completing the assessment',
          'Affirmative language in AI outputs requires careful prompt engineering and clinical review to avoid being dismissive of real challenges',
          'Assessment fatigue is a real barrier: adaptive algorithms that shorten unnecessary sections dramatically improved completion rates',
          'Working with clinical psychologists taught me that AI should augment clinical judgment, never replace it — the human review step is non-negotiable',
        ],
      },
      faq: [
        { q: 'Is this a replacement for clinical diagnosis?', a: 'No. Noetic provides AI-powered screening and assessment support, but all results are reviewed by qualified clinical professionals. The platform augments clinical assessment, it does not replace it.' },
        { q: 'How do you ensure assessment accuracy?', a: 'The assessment methodology is based on validated clinical tools (e.g., ASRS for ADHD, AQ-10 for autism). AI adapts the experience but the underlying psychometric standards remain rigorous.' },
        { q: 'Why an affirmative approach?', a: 'Research shows that deficit-framed assessments increase anxiety and reduce accuracy. An affirmative approach — recognizing strengths alongside challenges — produces more accurate self-reporting and better outcomes.' },
      ],
      cta: {
        title: 'Building a healthtech or assessment platform?',
        desc: 'I build AI-powered platforms for sensitive domains — with accessibility, clinical rigor, and compliance built in from day one. Let\'s discuss your project.',
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
    slug: 'noetic',
    seo: {
      title: 'Noetic: Plataforma de Evaluación Automatizada de Neurodiversidad | Yash Soni',
      description: 'Caso de estudio: Plataforma de evaluación afirmativa con IA para neurodiversidad — TDAH, autismo, dislexia, dispraxia, discalculia. Haciendo la evaluación accesible y asequible.',
    },
    header: {
      kicker: 'Caso de Estudio',
      h1: 'Noetic: Evaluación Accesible de Neurodiversidad',
      subtitle: 'Cómo construí una plataforma IA que hace las evaluaciones de TDAH, autismo y diferencias de aprendizaje accesibles y asequibles',
      date: 'Abril 2024 — Presente',
      readingTime: '7 min de lectura',
    },
    sections: {
      problem: {
        title: 'El Problema',
        content: 'Obtener una evaluación para condiciones neurodivergentes — TDAH, autismo, dislexia, dispraxia, discalculia — es costoso, lento e inaccesible para la mayoría. En el Reino Unido, las listas de espera del NHS para evaluación de TDAH pueden superar los 3 años. Las evaluaciones privadas cuestan entre 500 y 2000 libras. Muchos adultos pasan toda su vida sin entender por qué piensan y aprenden de manera diferente.',
      },
      solution: {
        title: 'La Solución',
        content: 'Noetic es una plataforma de evaluación afirmativa de neurodiversidad con IA. Proporciona herramientas de screening y evaluación científicamente fundamentadas y accesibles para TDAH, autismo, dislexia, dispraxia y discalculia. La plataforma usa un enfoque afirmativo — reconociendo la neurodivergencia como variación natural — mientras mantiene rigor clínico.',
      },
      architecture: {
        title: 'Arquitectura y Stack',
        stack: [
          { name: 'Frontend', items: 'React, TypeScript' },
          { name: 'Backend', items: 'Node.js, Express' },
          { name: 'AI/ML', items: 'Modelos de evaluación, Algoritmos adaptativos' },
          { name: 'Base de datos', items: 'PostgreSQL' },
          { name: 'Seguridad', items: 'HIPAA/GDPR compliant, PII cifrado' },
          { name: 'Infraestructura', items: 'AWS, Docker' },
        ],
      },
      features: {
        title: 'Características Clave',
        items: [
          { title: 'Evaluación Multi-Condición', desc: 'Screening comprehensivo para TDAH, autismo, dislexia, dispraxia y discalculia — con capacidad de identificar condiciones superpuestas' },
          { title: 'Motor de Evaluación Adaptativo', desc: 'La IA ajusta dificultad, ritmo y formato de preguntas basándose en respuestas individuales — reduciendo fatiga y mejorando precisión' },
          { title: 'Marco Afirmativo', desc: 'Lenguaje basado en fortalezas que reenmarca la neurodivergencia como variación natural, no déficit — reduciendo estigma y ansiedad' },
          { title: 'Dashboard Clínico', desc: 'Herramientas para evaluadores calificados para revisar insights generados por IA, validar resultados y producir informes formales' },
          { title: 'Diseño Accesible', desc: 'Interfaz diseñada para usuarios neurodivergentes — fuentes personalizables, colores, menos desorden visual y múltiples modalidades de entrada' },
        ],
      },
      results: {
        title: 'Resultados e Impacto',
        metrics: [
          { value: '5', label: 'Condiciones evaluadas' },
          { value: '80%', label: 'Reducción de costo vs evaluación privada' },
          { value: '90%', label: 'Tasa de completación' },
          { value: '< 1 sem', label: 'Tiempo de respuesta de evaluación' },
        ],
      },
      myRole: {
        title: 'Mi Rol',
        content: 'Fui el ingeniero principal responsable de construir la plataforma de evaluación de principio a fin. Diseñé el motor de evaluación adaptativo, construí el frontend React con principios de accesibilidad primero, implementé el backend Node.js y diseñé el esquema PostgreSQL. Colaboré estrechamente con psicólogos clínicos.',
      },
      testimonial: {
        quote: 'Noetic hizo que el proceso de evaluación se sintiera seguro en lugar de clínico. El enfoque basado en fortalezas me ayudó a entender mi TDAH como parte de quién soy. Y obtuve respuestas en días, no años.',
        author: 'Usuario de Evaluación',
        role: 'Diagnóstico de TDAH Adulto',
      },
      lessons: {
        title: 'Lecciones Aprendidas',
        items: [
          'La accesibilidad no es un agregado posterior — para usuarios neurodivergentes, un diseño inaccesible literalmente les impide completar la evaluación',
          'El lenguaje afirmativo en outputs de IA requiere ingeniería de prompts cuidadosa y revisión clínica',
          'La fatiga de evaluación es una barrera real: los algoritmos adaptativos que acortan secciones innecesarias mejoraron dramáticamente las tasas de completación',
          'Trabajar con psicólogos clínicos me enseñó que la IA debe aumentar el juicio clínico, nunca reemplazarlo',
        ],
      },
      faq: [
        { q: '¿Reemplaza esto un diagnóstico clínico?', a: 'No. Noetic proporciona screening y soporte de evaluación con IA, pero todos los resultados son revisados por profesionales clínicos calificados.' },
        { q: '¿Cómo aseguran la precisión de la evaluación?', a: 'La metodología se basa en herramientas clínicas validadas (ej. ASRS para TDAH, AQ-10 para autismo). La IA adapta la experiencia pero los estándares psicométricos se mantienen rigurosos.' },
        { q: '¿Por qué un enfoque afirmativo?', a: 'La investigación muestra que las evaluaciones enmarcadas en déficit aumentan la ansiedad y reducen la precisión. Un enfoque afirmativo produce auto-reportes más precisos y mejores resultados.' },
      ],
      cta: {
        title: '¿Construyendo una plataforma healthtech o de evaluación?',
        desc: 'Construyo plataformas con IA para dominios sensibles — con accesibilidad, rigor clínico y cumplimiento integrados desde el día uno.',
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
