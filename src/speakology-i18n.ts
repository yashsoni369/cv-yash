export const speakologyContent = {
  en: {
    slug: 'speakology-ai',
    seo: {
      title: 'SpeakologyAI: AI Avatar Language Learning for UK Schools | Yash Soni',
      description: 'Case study: First AI Avatar language learning app for UK schools. Bootstrapped to 10+ school subscriptions in 3 months with no external funding.',
    },
    header: {
      kicker: 'Case Study',
      h1: 'SpeakologyAI: AI Avatars for Language Learning',
      subtitle: 'How I built the first AI-powered avatar language learning app adopted by UK schools — bootstrapped in 3 months',
      date: 'March 2024 — Present',
      readingTime: '7 min read',
    },
    sections: {
      problem: {
        title: 'The Problem',
        content: 'Language learning in UK schools suffers from a fundamental bottleneck: not enough practice time. With 30+ students per class and limited teacher hours, most students get only a few minutes of speaking practice per week. Traditional apps focus on vocabulary drills and grammar, but real fluency requires conversational practice — something that simply does not scale with human teachers alone.',
      },
      solution: {
        title: 'The Solution',
        content: 'SpeakologyAI is the first AI Avatar language learning app designed specifically for UK schools. Students interact with lifelike AI avatars that engage them in natural conversation, adapting to their proficiency level in real time. Each avatar simulates realistic scenarios — ordering food in Paris, asking for directions in Madrid — giving students unlimited speaking practice without needing a human conversation partner.',
      },
      architecture: {
        title: 'Architecture & Tech Stack',
        stack: [
          { name: 'Frontend', items: 'React, TypeScript' },
          { name: 'Backend', items: 'Node.js, Express' },
          { name: 'Database', items: 'MongoDB' },
          { name: 'AI/ML', items: 'OpenAI GPT-4, Prompt Engineering' },
          { name: 'Avatar Engine', items: 'AI Avatar rendering, TTS, STT' },
          { name: 'Infrastructure', items: 'AWS, CI/CD pipelines' },
        ],
      },
      features: {
        title: 'Key Features',
        items: [
          { title: 'AI Avatar Conversations', desc: 'Lifelike avatars that conduct natural language conversations, adapting difficulty based on student proficiency level' },
          { title: 'Curriculum-Aligned Content', desc: 'Scenarios and vocabulary mapped to the UK national curriculum for MFL (Modern Foreign Languages)' },
          { title: 'Real-Time Pronunciation Feedback', desc: 'AI-powered speech analysis gives students instant feedback on pronunciation and fluency' },
          { title: 'Teacher Dashboard', desc: 'Comprehensive analytics for teachers to track student progress, identify struggling learners, and assign targeted practice' },
          { title: 'Multi-Language Support', desc: 'French, Spanish, German, and Mandarin — the core languages taught in UK schools' },
        ],
      },
      results: {
        title: 'Results & Impact',
        metrics: [
          { value: '10+', label: 'School subscriptions' },
          { value: '3 mo', label: 'From idea to paying customers' },
          { value: '$0', label: 'External funding needed' },
          { value: '1st', label: 'AI Avatar app for UK schools' },
        ],
      },
      myRole: {
        title: 'My Role',
        content: 'I was the technical co-founder and lead engineer, responsible for the entire product — from architecture design to deployment. I built the Node.js backend, React frontend, integrated OpenAI for conversational AI, engineered the prompt system for pedagogically sound conversations, and designed the avatar interaction pipeline. I also handled school onboarding and technical sales.',
      },
      testimonial: {
        quote: 'SpeakologyAI has transformed how our students practice languages. The AI avatars give every student unlimited conversation practice — something we could never achieve with classroom time alone. Our students are more confident speakers now.',
        author: 'Head of MFL',
        role: 'UK Secondary School',
      },
      lessons: {
        title: 'Lessons Learned',
        items: [
          'Prompt engineering is make-or-break for educational AI — the avatar must stay pedagogically appropriate and age-suitable at all times',
          'Schools buy outcomes, not technology — proving measurable improvement in student speaking confidence was the real sales pitch',
          'Bootstrapping forces ruthless prioritization: we shipped the core conversation feature first and added analytics later based on teacher feedback',
          'Compliance with UK data protection (GDPR + children\'s data) shaped every architecture decision from day one',
        ],
      },
      faq: [
        { q: 'How do AI avatars differ from chatbots?', a: 'The avatars provide a visual, embodied conversation partner with facial expressions and lip-synced speech. This creates a more immersive and engaging experience than text-based chatbots, especially for younger learners.' },
        { q: 'How did you handle child data privacy?', a: 'We designed the system to be fully GDPR-compliant with specific attention to children\'s data regulations. No personal data is shared with third-party AI providers, and all conversation data is anonymized.' },
        { q: 'Why did schools adopt it so quickly?', a: 'We solved a real pain point — lack of speaking practice time — with a product that required minimal teacher training. The free pilot program let schools see results before committing.' },
      ],
      cta: {
        title: 'Building an EdTech product?',
        desc: 'I build AI-powered products from zero to launch — including prompt engineering, avatar systems, and school-ready platforms. Let\'s discuss your idea.',
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
    slug: 'speakology-ai',
    seo: {
      title: 'SpeakologyAI: Aprendizaje de Idiomas con IA para Escuelas del Reino Unido | Yash Soni',
      description: 'Caso de estudio: Primera app de aprendizaje de idiomas con avatares IA para escuelas del Reino Unido. Bootstrapped con 10+ suscripciones escolares en 3 meses.',
    },
    header: {
      kicker: 'Caso de Estudio',
      h1: 'SpeakologyAI: Avatares IA para Aprender Idiomas',
      subtitle: 'Cómo construí la primera app de aprendizaje de idiomas con avatares IA adoptada por escuelas del Reino Unido',
      date: 'Marzo 2024 — Presente',
      readingTime: '7 min de lectura',
    },
    sections: {
      problem: {
        title: 'El Problema',
        content: 'El aprendizaje de idiomas en las escuelas del Reino Unido sufre un cuello de botella fundamental: falta de tiempo de práctica. Con más de 30 estudiantes por clase y horas limitadas de profesorado, la mayoría de los estudiantes obtienen solo unos minutos de práctica oral por semana. Las apps tradicionales se centran en vocabulario y gramática, pero la fluidez real requiere práctica conversacional.',
      },
      solution: {
        title: 'La Solución',
        content: 'SpeakologyAI es la primera app de aprendizaje de idiomas con avatares IA diseñada específicamente para escuelas del Reino Unido. Los estudiantes interactúan con avatares realistas que los involucran en conversación natural, adaptándose a su nivel de competencia en tiempo real.',
      },
      architecture: {
        title: 'Arquitectura y Stack',
        stack: [
          { name: 'Frontend', items: 'React, TypeScript' },
          { name: 'Backend', items: 'Node.js, Express' },
          { name: 'Base de datos', items: 'MongoDB' },
          { name: 'AI/ML', items: 'OpenAI GPT-4, Ingeniería de Prompts' },
          { name: 'Motor de Avatares', items: 'Renderizado de avatares IA, TTS, STT' },
          { name: 'Infraestructura', items: 'AWS, pipelines CI/CD' },
        ],
      },
      features: {
        title: 'Características Clave',
        items: [
          { title: 'Conversaciones con Avatares IA', desc: 'Avatares realistas que conducen conversaciones naturales, adaptando la dificultad según el nivel del estudiante' },
          { title: 'Contenido Alineado al Currículo', desc: 'Escenarios y vocabulario mapeados al currículo nacional del Reino Unido para lenguas extranjeras' },
          { title: 'Retroalimentación de Pronunciación', desc: 'Análisis de habla con IA que da retroalimentación instantánea sobre pronunciación y fluidez' },
          { title: 'Panel del Profesor', desc: 'Analíticas completas para que los profesores rastreen el progreso de los estudiantes' },
          { title: 'Soporte Multi-idioma', desc: 'Francés, español, alemán y mandarín — los idiomas principales enseñados en escuelas del Reino Unido' },
        ],
      },
      results: {
        title: 'Resultados e Impacto',
        metrics: [
          { value: '10+', label: 'Suscripciones escolares' },
          { value: '3 meses', label: 'De idea a clientes de pago' },
          { value: '$0', label: 'Financiación externa necesaria' },
          { value: '1ra', label: 'App de avatares IA para escuelas UK' },
        ],
      },
      myRole: {
        title: 'Mi Rol',
        content: 'Fui el cofundador técnico e ingeniero principal, responsable de todo el producto — desde el diseño de arquitectura hasta el despliegue. Construí el backend Node.js, frontend React, integré OpenAI para IA conversacional, diseñé el sistema de prompts y el pipeline de interacción con avatares.',
      },
      testimonial: {
        quote: 'SpeakologyAI ha transformado cómo nuestros estudiantes practican idiomas. Los avatares IA dan a cada estudiante práctica de conversación ilimitada — algo que nunca podríamos lograr solo con tiempo de clase.',
        author: 'Jefe de Lenguas Extranjeras',
        role: 'Escuela Secundaria del Reino Unido',
      },
      lessons: {
        title: 'Lecciones Aprendidas',
        items: [
          'La ingeniería de prompts es decisiva para la IA educativa — el avatar debe mantenerse pedagógicamente apropiado en todo momento',
          'Las escuelas compran resultados, no tecnología — demostrar mejora medible en la confianza oral fue el verdadero argumento de venta',
          'El bootstrapping fuerza la priorización implacable: lanzamos la función de conversación primero y añadimos analíticas después',
          'El cumplimiento de protección de datos del Reino Unido (GDPR + datos de menores) moldeó cada decisión de arquitectura',
        ],
      },
      faq: [
        { q: '¿En qué se diferencian los avatares IA de los chatbots?', a: 'Los avatares proporcionan un compañero de conversación visual con expresiones faciales y habla sincronizada. Esto crea una experiencia más inmersiva, especialmente para estudiantes jóvenes.' },
        { q: '¿Cómo manejaron la privacidad de datos de menores?', a: 'Diseñamos el sistema para cumplir totalmente con GDPR con atención específica a regulaciones de datos de menores. Ningún dato personal se comparte con proveedores de IA de terceros.' },
        { q: '¿Por qué las escuelas lo adoptaron tan rápido?', a: 'Resolvimos un punto de dolor real — falta de tiempo de práctica oral — con un producto que requería mínima capacitación docente.' },
      ],
      cta: {
        title: '¿Construyendo un producto EdTech?',
        desc: 'Construyo productos con IA desde cero hasta el lanzamiento — incluyendo ingeniería de prompts, sistemas de avatares y plataformas listas para escuelas.',
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
