export const infinityDevopsContent = {
  en: {
    slug: 'infinity-devops',
    seo: {
      title: 'Infinity DevOps: Enterprise Multi-Cloud Platform at LTI Mindtree | Yash Soni',
      description: 'Case study: Enterprise DevOps platform supporting AWS, GCP, Docker & Kubernetes. Led a team of 10 engineers building microservices architecture with Angular, React, and Node.js.',
    },
    header: {
      kicker: 'Case Study',
      h1: 'Infinity DevOps: Enterprise Multi-Cloud Platform',
      subtitle: 'How I led a team of 10 to build a unified DevOps platform serving enterprise clients across AWS and GCP',
      date: 'June 2021 — November 2023',
      readingTime: '8 min read',
    },
    sections: {
      problem: {
        title: 'The Problem',
        content: 'Large enterprises at LTI Mindtree were managing infrastructure across multiple cloud providers — AWS, GCP, and on-premise — with disconnected tools, manual deployments, and no unified view of their CI/CD pipelines. Teams were spending more time on DevOps tooling than on building features. Each cloud provider had its own console, its own deployment process, and its own monitoring stack. This fragmentation led to deployment failures, configuration drift, and a painful lack of visibility.',
      },
      solution: {
        title: 'The Solution',
        content: 'Infinity DevOps is a unified enterprise platform that abstracts away multi-cloud complexity. It provides a single pane of glass for CI/CD pipeline management, container orchestration, infrastructure provisioning, and monitoring — regardless of whether workloads run on AWS EC2, GCP CloudBuild, or Kubernetes clusters. Teams define their deployment workflows once and the platform handles the cloud-specific orchestration.',
      },
      architecture: {
        title: 'Architecture & Tech Stack',
        stack: [
          { name: 'Frontend', items: 'Angular, React' },
          { name: 'Backend', items: 'Node.js, Microservices' },
          { name: 'Database', items: 'MongoDB' },
          { name: 'Cloud', items: 'AWS EC2, GCP CloudBuild' },
          { name: 'Containers', items: 'Docker, Kubernetes' },
          { name: 'Messaging', items: 'Apache Kafka, JWT Auth' },
        ],
      },
      features: {
        title: 'Key Features',
        items: [
          { title: 'Unified Pipeline Dashboard', desc: 'Single view across all CI/CD pipelines — AWS CodePipeline, GCP CloudBuild, Jenkins — with real-time status and logs' },
          { title: 'Multi-Cloud Deployment', desc: 'Deploy to AWS, GCP, or hybrid environments from a single workflow definition. No cloud-specific scripts needed' },
          { title: 'Container Orchestration', desc: 'Kubernetes cluster management with Docker container lifecycle — from build to deploy to scale — all from the platform UI' },
          { title: 'Event-Driven Architecture', desc: 'Kafka-based event streaming for real-time pipeline notifications, deployment triggers, and cross-service communication' },
          { title: 'Role-Based Access Control', desc: 'JWT-based authentication with granular permissions. Teams see only their projects and environments' },
        ],
      },
      results: {
        title: 'Results & Impact',
        metrics: [
          { value: '10', label: 'Engineers led as Tech Lead' },
          { value: '60%', label: 'Faster deployment cycles' },
          { value: '2', label: 'Cloud providers unified' },
          { value: '30+', label: 'Enterprise teams onboarded' },
        ],
      },
      myRole: {
        title: 'My Role',
        content: 'I served as Tech Lead with a team of 10 developers and cloud engineers. I designed the microservices architecture, led sprint planning and code reviews, built core backend services in Node.js, implemented the Kafka event pipeline, and coordinated with enterprise clients on requirements. I also mentored junior developers and established coding standards across the team.',
      },
      testimonial: {
        quote: 'Yash brought structure and technical clarity to a complex multi-cloud project. His ability to lead the team while staying hands-on with the code was exactly what we needed to ship on time.',
        author: 'Engineering Manager',
        role: 'LTI Mindtree',
      },
      lessons: {
        title: 'Lessons Learned',
        items: [
          'Abstracting multi-cloud differences requires deep understanding of each provider — you cannot build a good abstraction without knowing what you are abstracting',
          'Microservices communication via Kafka is powerful but demands careful schema design and dead-letter queue handling',
          'Leading 10 engineers taught me that clear documentation and architecture decision records save more time than any meeting',
          'Enterprise clients need audit trails for everything — we built comprehensive logging into every deployment action from day one',
        ],
      },
      faq: [
        { q: 'Why build a custom DevOps platform instead of using existing tools?', a: 'Enterprise clients had specific compliance, audit, and multi-cloud requirements that no single off-the-shelf tool satisfied. The platform unified their existing toolchain rather than replacing it.' },
        { q: 'How did you manage a team of 10 while staying technical?', a: 'I reserved mornings for architecture and code reviews, and afternoons for my own development work. Clear sprint goals and well-defined microservice boundaries meant each engineer could work independently.' },
        { q: 'What was the biggest challenge?', a: 'Reconciling the different deployment models between AWS and GCP while providing a unified interface. Each cloud has fundamentally different assumptions about networking, IAM, and compute.' },
      ],
      cta: {
        title: 'Need a DevOps or cloud platform?',
        desc: 'I design and build enterprise-grade multi-cloud platforms with microservices, Kubernetes, and event-driven architecture. Let\'s talk.',
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
    slug: 'infinity-devops',
    seo: {
      title: 'Infinity DevOps: Plataforma Multi-Cloud Empresarial en LTI Mindtree | Yash Soni',
      description: 'Caso de estudio: Plataforma DevOps empresarial con AWS, GCP, Docker y Kubernetes. Lideré un equipo de 10 ingenieros construyendo arquitectura de microservicios.',
    },
    header: {
      kicker: 'Caso de Estudio',
      h1: 'Infinity DevOps: Plataforma Multi-Cloud Empresarial',
      subtitle: 'Cómo lideré un equipo de 10 para construir una plataforma DevOps unificada para clientes empresariales',
      date: 'Junio 2021 — Noviembre 2023',
      readingTime: '8 min de lectura',
    },
    sections: {
      problem: {
        title: 'El Problema',
        content: 'Grandes empresas en LTI Mindtree gestionaban infraestructura en múltiples proveedores cloud — AWS, GCP y on-premise — con herramientas desconectadas, despliegues manuales y sin vista unificada de sus pipelines CI/CD. Los equipos pasaban más tiempo en herramientas DevOps que construyendo funcionalidades.',
      },
      solution: {
        title: 'La Solución',
        content: 'Infinity DevOps es una plataforma empresarial unificada que abstrae la complejidad multi-cloud. Proporciona un panel único para gestión de pipelines CI/CD, orquestación de contenedores, aprovisionamiento de infraestructura y monitorización — sin importar si las cargas corren en AWS EC2, GCP CloudBuild o clústeres Kubernetes.',
      },
      architecture: {
        title: 'Arquitectura y Stack',
        stack: [
          { name: 'Frontend', items: 'Angular, React' },
          { name: 'Backend', items: 'Node.js, Microservicios' },
          { name: 'Base de datos', items: 'MongoDB' },
          { name: 'Cloud', items: 'AWS EC2, GCP CloudBuild' },
          { name: 'Contenedores', items: 'Docker, Kubernetes' },
          { name: 'Mensajería', items: 'Apache Kafka, JWT Auth' },
        ],
      },
      features: {
        title: 'Características Clave',
        items: [
          { title: 'Dashboard Unificado de Pipelines', desc: 'Vista única de todos los pipelines CI/CD — AWS CodePipeline, GCP CloudBuild, Jenkins — con estado y logs en tiempo real' },
          { title: 'Despliegue Multi-Cloud', desc: 'Despliega en AWS, GCP o entornos híbridos desde una sola definición de workflow' },
          { title: 'Orquestación de Contenedores', desc: 'Gestión de clústeres Kubernetes con ciclo de vida de contenedores Docker — desde build hasta deploy y escalado' },
          { title: 'Arquitectura Event-Driven', desc: 'Streaming de eventos basado en Kafka para notificaciones en tiempo real y comunicación entre servicios' },
          { title: 'Control de Acceso por Roles', desc: 'Autenticación JWT con permisos granulares. Los equipos solo ven sus proyectos y entornos' },
        ],
      },
      results: {
        title: 'Resultados e Impacto',
        metrics: [
          { value: '10', label: 'Ingenieros liderados como Tech Lead' },
          { value: '60%', label: 'Ciclos de despliegue más rápidos' },
          { value: '2', label: 'Proveedores cloud unificados' },
          { value: '30+', label: 'Equipos empresariales incorporados' },
        ],
      },
      myRole: {
        title: 'Mi Rol',
        content: 'Serví como Tech Lead con un equipo de 10 desarrolladores e ingenieros cloud. Diseñé la arquitectura de microservicios, lideré la planificación de sprints y revisiones de código, construí servicios backend core en Node.js, implementé el pipeline de eventos Kafka y coordiné con clientes empresariales.',
      },
      testimonial: {
        quote: 'Yash trajo estructura y claridad técnica a un proyecto multi-cloud complejo. Su capacidad de liderar el equipo mientras se mantenía hands-on con el código fue exactamente lo que necesitábamos.',
        author: 'Engineering Manager',
        role: 'LTI Mindtree',
      },
      lessons: {
        title: 'Lecciones Aprendidas',
        items: [
          'Abstraer diferencias multi-cloud requiere conocimiento profundo de cada proveedor',
          'La comunicación de microservicios via Kafka es poderosa pero demanda diseño cuidadoso de esquemas',
          'Liderar 10 ingenieros me enseñó que la documentación clara ahorra más tiempo que cualquier reunión',
          'Los clientes empresariales necesitan pistas de auditoría para todo — construimos logging comprehensivo desde el día uno',
        ],
      },
      faq: [
        { q: '¿Por qué construir una plataforma DevOps personalizada?', a: 'Los clientes empresariales tenían requisitos específicos de compliance y multi-cloud que ninguna herramienta existente satisfacía. La plataforma unificó su toolchain existente.' },
        { q: '¿Cómo gestionaste un equipo de 10 manteniéndote técnico?', a: 'Reservaba las mañanas para arquitectura y code reviews, y las tardes para mi propio trabajo de desarrollo. Objetivos claros de sprint y microservicios bien definidos.' },
        { q: '¿Cuál fue el mayor desafío?', a: 'Reconciliar los diferentes modelos de despliegue entre AWS y GCP mientras se proporcionaba una interfaz unificada.' },
      ],
      cta: {
        title: '¿Necesitas una plataforma DevOps o cloud?',
        desc: 'Diseño y construyo plataformas multi-cloud de nivel empresarial con microservicios, Kubernetes y arquitectura event-driven.',
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
