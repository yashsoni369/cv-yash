// Work Experience data. Every fact here is sourced from the Obsidian vault
// (people, company, project and product hubs).
// Do not add metrics, roles or dates without a vault source.

import type { Lang } from './i18n'

export interface Quote {
  text: string
  author: string
  role: string
  source?: string
  url?: string
}

export interface ClientRow {
  name: string
  desc: string
  tag: string
}

export interface ProductTile {
  name: string
  status: string
  poc?: boolean
  desc: string
  meta: string
  url?: string
}

export interface Job {
  id: string
  company: string
  role: string
  years: [string, string]
  when: string
  where: string
  lead: string
  bullets: string[]
  stack: string[]
  current?: boolean
  clients?: ClientRow[]
  products?: ProductTile[]
  quote?: Quote
  stats?: { value: string; label: string }[]
}

export const workExperience: { title: string; jobs: Job[]; clientQuotes: Quote[] } = {
  title: 'Work Experience',
  jobs: [
    {
      id: 'independent',
      company: 'Independent',
      role: 'AI Architect · Senior Full Stack Architect & AI Developer',
      years: ['2022', 'Now'],
      when: '2022 - Present',
      where: 'Mumbai · Remote for US, UK and EU clients',
      lead: 'I build AI and SaaS products for funded startups and run my own product line.',
      bullets: [],
      current: true,
      clients: [
        { name: 'DecoverAI', desc: 'US legal AI. Built the infrastructure and GenAI platform, now used in large US law firms.', tag: '$2M+ seed raised' },
        { name: 'United Medical', desc: 'German healthcare SaaS for hospital-doctor contracts.', tag: 'Retainer since Aug 2023' },
        { name: 'Speakology AI', desc: 'AI avatar language app for UK schools, bootstrapped.', tag: '10+ schools in 3 mo' },
        { name: 'Water Advisor AI', desc: 'Water-quality advisor for a US client, MVP to phase 2.', tag: 'Mar 2026 to now' },
        { name: 'Mappie AI', desc: 'AI project manager built for Nindo Solutions.', tag: '60-70% less grooming' },
        { name: 'Vectro AI', desc: 'Sales intelligence from calls, emails and Slack.', tag: 'Vector search' },
      ],
      products: [
        { name: 'BrandGen', status: 'Live', desc: 'On-brand AI images from your guidelines.', meta: 'getbrandgen.com', url: 'https://getbrandgen.com' },
        { name: 'TriageGrid', status: 'GA', desc: 'AI email triage for law firms on Microsoft 365.', meta: 'triagegrid.com', url: 'https://triagegrid.com' },
        { name: 'Convo AI', status: 'Live', desc: 'AI voice receptionist for hotels, clinics and more.', meta: 'heyyconvo.com', url: 'https://heyyconvo.com' },
        { name: 'CC Logins', status: 'Open source', desc: 'Quota view and account switching for Claude Code.', meta: 'Rust / Tauri', url: 'https://github.com/yashsoni369/cc-logins' },
      ],
      quote: {
        text: 'Yash is one of the hardest-working and meticulous engineers I have encountered. We worked closely together on DecoverAI, where he helped build the infrastructure and Generative AI platform that is now deployed in large law firms throughout the United States. He helped lead a team, build critical pieces, and test and deploy them. We eventually raised 2M+ in funding with the help of his efforts. I would certainly recommend him for any future projects.',
        author: 'Ravi Tandon',
        role: 'CEO & Co-Founder, DecoverAI',
        source: 'LinkedIn recommendation',
        url: 'https://www.linkedin.com/in/yashsoni369/details/recommendations/',
      },
      stats: [
        { value: 'Top Rated', label: 'on Upwork' },
        { value: '100%', label: 'job success' },
        { value: '19', label: 'jobs' },
        { value: '757', label: 'hours' },
      ],
      stack: ['Next.js', 'TypeScript', 'Python', 'Gemini', 'OpenAI', 'RAG', 'Postgres', 'AWS CDK', 'Vapi'],
    },
    {
      id: 'lti',
      company: 'LTI Mindtree',
      role: 'Senior Software Engineer → Specialist, Software Engineering',
      years: ['2021', '2023'],
      when: 'Jun 2021 - Nov 2023',
      where: 'Mumbai',
      lead: 'Led a 10+ engineer DevOps Centre of Excellence building internal platforms.',
      bullets: [
        'Infinity DevOps: a DevOps platform across AWS and GCP',
        'Infinity AIWatch: an APM product with AI-driven dashboards (OpenAI, Python)',
        'Wrapper services around AWS so engineers could ship without platform knowledge',
        'MVPs and POCs across multiple hyperscalers',
      ],
      stack: ['Angular', 'React', 'Node.js', 'MongoDB', 'Kafka', 'Docker', 'Kubernetes', 'AWS', 'GCP'],
    },
    {
      id: 'azentio',
      company: 'Azentio Software',
      role: 'Senior Software Engineer, ERP Product Development',
      years: ['2020', '2021'],
      when: 'May 2020 - Jun 2021',
      where: 'Navi Mumbai',
      lead: 'Led the team building Enrico, a SaaS audit application.',
      bullets: [
        'Started with a POC to earn market trust, then scaled Enrico into multi-tenant SaaS',
        'Architected subscriptions, company setup and attribute-based access control',
      ],
      stack: ['Angular', 'React', 'Node.js', 'MongoDB', 'Kafka', 'Microservices'],
    },
    {
      id: 'abacus',
      company: 'Abacus Infosystems',
      role: 'Software Developer',
      years: ['2018', '2020'],
      when: 'Dec 2018 - Apr 2020',
      where: 'Mumbai',
      lead: 'Web apps and APIs on .NET Core and Angular microservices for global clients.',
      bullets: ['First role managing engineers and owning effort estimates'],
      stack: ['.NET Core', 'Angular', 'Electron', 'Node.js', 'Jenkins'],
    },
    {
      id: 'threepin',
      company: 'Threepin Infotech',
      role: 'Software Developer',
      years: ['2017', '2018'],
      when: 'Jan 2017 - Dec 2018',
      where: 'Navi Mumbai',
      lead: 'Grew from .NET desktop apps to full stack, and worked on R&D for an on-premise deployment product.',
      bullets: [],
      stack: ['.NET MVC', 'WPF', 'WinForms', 'REST', 'MySQL'],
    },
  ],
  clientQuotes: [
    {
      text: 'Yash has been a pleasure to work with over the past several months. He is knowledgeable, responsive, and willing to discuss ideas and recommend technical solutions rather than simply taking instructions. [...] I appreciate that he explains his reasoning, challenges assumptions when appropriate, and focuses on creating a scalable solution instead of quick fixes.',
      author: 'Terry Carson',
      role: 'Client, Water Advisor AI',
      source: 'Upwork, 5.0/5, Jul 2026',
    },
    {
      text: 'I have collaborated with Yash on several private projects. He excels in his work, is professional in demeanor, and extremely reliable. Highly recommended.',
      author: 'Naim B.',
      role: 'Managing Director, Medical SaaS',
    },
    {
      text: 'Worked with Yash. He is very ambitious and has good problem solving skills and attitude with effective team management skills. Also he is very good at designing solutions.',
      author: 'Saurabh D.',
      role: 'Senior Software Engineer',
    },
  ],
}

// ---------------------------------------------------------------------------
// Translations. Client quotes stay verbatim in English; everything else is
// localized here and merged over the English data by getWorkExperience().
// ---------------------------------------------------------------------------

export interface WorkLabels {
  /** Year range under the big start year; {y} is the end year. */
  range: string
  now: string
  clientWork: string
  myProducts: string
  moreFromClients: string
  caseStudies: string
}

interface JobCopy {
  company?: string
  role?: string
  when?: string
  where?: string
  lead?: string
  bullets?: string[]
}

interface LocaleCopy {
  labels: WorkLabels
  jobs: Record<string, JobCopy>
  clients: Record<string, [desc: string, tag: string]>
  products: Record<string, [status: string, desc: string]>
  stats: string[]
  quotes: Record<string, [role: string, source?: string]>
}

const EN_LABELS: WorkLabels = { range: 'to {y}', now: 'Now', clientWork: 'Client work', myProducts: 'My products', moreFromClients: 'More from clients', caseStudies: 'Case studies' }

const copies: Record<Exclude<Lang, 'en'>, LocaleCopy> = {
  es: {
    labels: { range: 'a {y}', now: 'hoy', clientWork: 'Trabajo para clientes', myProducts: 'Mis productos', moreFromClients: 'Más de clientes', caseStudies: 'Casos de estudio' },
    jobs: {
      independent: { company: 'Independiente', role: 'Arquitecto de IA · Senior Full Stack Architect & AI Developer', when: '2022 - actualidad', where: 'Mumbai · Remoto para clientes de EE.UU., Reino Unido y la UE', lead: 'Construyo productos de IA y SaaS para startups financiadas y gestiono mi propia línea de productos.' },
      lti: { when: 'jun 2021 - nov 2023', lead: 'Lideré un Centro de Excelencia DevOps de 10+ ingenieros que construía plataformas internas.', bullets: ['Infinity DevOps: una plataforma DevOps sobre AWS y GCP', 'Infinity AIWatch: un producto APM con dashboards basados en IA (OpenAI, Python)', 'Servicios wrapper sobre AWS para que los ingenieros pudieran desplegar sin conocer la plataforma', 'MVPs y POCs en varios hyperscalers'] },
      azentio: { when: 'may 2020 - jun 2021', lead: 'Lideré el equipo que construyó Enrico, una aplicación SaaS de auditoría.', bullets: ['Empezamos con un POC para ganar la confianza del mercado y luego escalamos Enrico a SaaS multi-tenant', 'Diseñé la arquitectura de suscripciones, configuración de empresas y control de acceso basado en atributos'] },
      abacus: { when: 'dic 2018 - abr 2020', lead: 'Aplicaciones web y APIs con .NET Core y microservicios Angular para clientes internacionales.', bullets: ['Primer puesto gestionando ingenieros y asumiendo las estimaciones de esfuerzo'] },
      threepin: { when: 'ene 2017 - dic 2018', lead: 'Pasé de aplicaciones de escritorio .NET a full stack y trabajé en I+D de un producto de despliegue on-premise.' },
    },
    clients: {
      DecoverAI: ['IA legal en EE.UU. Construí la infraestructura y la plataforma GenAI, hoy usada en grandes bufetes de EE.UU.', '$2M+ en ronda semilla'],
      'United Medical': ['SaaS de salud alemán para contratos entre hospitales y médicos.', 'Retainer desde ago 2023'],
      'Speakology AI': ['App de idiomas con avatar IA para escuelas del Reino Unido, sin financiación externa.', '10+ escuelas en 3 meses'],
      'Water Advisor AI': ['Asesor de calidad del agua para un cliente de EE.UU., del MVP a la fase 2.', 'mar 2026 a hoy'],
      'Mappie AI': ['Gestor de proyectos con IA construido para Nindo Solutions.', '60-70% menos refinamiento'],
      'Vectro AI': ['Inteligencia de ventas a partir de llamadas, emails y Slack.', 'Búsqueda vectorial'],
    },
    products: {
      BrandGen: ['En vivo', 'Imágenes con IA fieles a tu marca a partir de tus directrices.'],
      TriageGrid: ['GA', 'Triaje de email con IA para bufetes en Microsoft 365.'],
      'Convo AI': ['En vivo', 'Recepcionista de voz con IA para hoteles, clínicas y más.'],
      'CC Logins': ['Open source', 'Vista de cuota y cambio de cuenta para Claude Code.'],
    },
    stats: ['en Upwork', 'de éxito', 'trabajos', 'horas'],
    quotes: { 'Ravi Tandon': ['CEO y cofundador, DecoverAI', 'Recomendación en LinkedIn'], 'Terry Carson': ['Cliente, Water Advisor AI', 'Upwork, 5.0/5, jul 2026'], 'Naim B.': ['Director general, SaaS médico'], 'Saurabh D.': ['Senior Software Engineer'] },
  },
  zh: {
    labels: { range: '至{y}', now: '今', clientWork: '客户项目', myProducts: '我的产品', moreFromClients: '更多客户评价', caseStudies: '案例研究' },
    jobs: {
      independent: { company: '独立执业', role: 'AI架构师 · 高级全栈架构师与AI开发者', when: '2022年 - 至今', where: '孟买 · 远程服务美国、英国和欧盟客户', lead: '我为获得融资的初创公司构建AI和SaaS产品，同时运营自己的产品线。' },
      lti: { when: '2021年6月 - 2023年11月', where: '孟买', lead: '带领10多名工程师组成的DevOps卓越中心，构建内部平台。', bullets: ['Infinity DevOps：横跨AWS和GCP的DevOps平台', 'Infinity AIWatch：带有AI驱动仪表盘的APM产品（OpenAI、Python）', '基于AWS的封装服务，让工程师无需平台知识即可交付', '在多个云厂商上开发MVP和POC'] },
      azentio: { when: '2020年5月 - 2021年6月', where: '新孟买', lead: '带领团队构建SaaS审计应用Enrico。', bullets: ['先以POC赢得市场信任，再将Enrico扩展为多租户SaaS', '设计了订阅、公司设置和基于属性的访问控制架构'] },
      abacus: { when: '2018年12月 - 2020年4月', where: '孟买', lead: '为全球客户基于.NET Core和Angular微服务开发Web应用和API。', bullets: ['第一个管理工程师并负责工作量估算的职位'] },
      threepin: { when: '2017年1月 - 2018年12月', where: '新孟买', lead: '从.NET桌面应用成长为全栈开发，并参与本地部署产品的研发。' },
    },
    clients: {
      DecoverAI: ['美国法律AI。构建了基础设施和GenAI平台，现已用于美国大型律所。', '种子轮超200万美元'],
      'United Medical': ['面向医院与医生合同的德国医疗SaaS。', '自2023年8月长期合作'],
      'Speakology AI': ['面向英国学校的AI虚拟形象语言应用，无外部融资。', '3个月10多所学校'],
      'Water Advisor AI': ['为美国客户打造的水质顾问，从MVP到第二阶段。', '2026年3月至今'],
      'Mappie AI': ['为Nindo Solutions构建的AI项目管理工具。', '梳理时间减少60-70%'],
      'Vectro AI': ['从通话、邮件和Slack中提取销售洞察。', '向量搜索'],
    },
    products: {
      BrandGen: ['已上线', '根据品牌规范生成符合品牌的AI图像。'],
      TriageGrid: ['GA', '面向Microsoft 365律所的AI邮件分拣。'],
      'Convo AI': ['已上线', '面向酒店、诊所等行业的AI语音前台。'],
      'CC Logins': ['开源', 'Claude Code配额查看与账户切换。'],
    },
    stats: ['Upwork', '工作成功率', '个项目', '小时'],
    quotes: { 'Ravi Tandon': ['DecoverAI首席执行官兼联合创始人', 'LinkedIn推荐'], 'Terry Carson': ['客户，Water Advisor AI', 'Upwork，5.0/5，2026年7月'], 'Naim B.': ['董事总经理，医疗SaaS'], 'Saurabh D.': ['高级软件工程师'] },
  },
  fr: {
    labels: { range: 'à {y}', now: "aujourd'hui", clientWork: 'Projets clients', myProducts: 'Mes produits', moreFromClients: 'Témoignages clients', caseStudies: 'Études de cas' },
    jobs: {
      independent: { company: 'Indépendant', role: 'Architecte IA · Architecte Full Stack Senior & Développeur IA', when: "2022 - aujourd'hui", where: "Mumbai · À distance pour des clients aux États-Unis, au Royaume-Uni et dans l'UE", lead: 'Je construis des produits IA et SaaS pour des startups financées et je gère ma propre gamme de produits.' },
      lti: { when: 'juin 2021 - nov. 2023', lead: "J'ai dirigé un Centre d'Excellence DevOps de 10+ ingénieurs qui construisait des plateformes internes.", bullets: ['Infinity DevOps : une plateforme DevOps sur AWS et GCP', 'Infinity AIWatch : un produit APM avec des tableaux de bord pilotés par IA (OpenAI, Python)', "Des services wrapper autour d'AWS pour livrer sans connaissance de la plateforme", 'Des MVP et POC sur plusieurs hyperscalers'] },
      azentio: { when: 'mai 2020 - juin 2021', lead: "J'ai dirigé l'équipe qui a construit Enrico, une application SaaS d'audit.", bullets: ["Un POC d'abord pour gagner la confiance du marché, puis Enrico est devenu un SaaS multi-tenant", "Architecture des abonnements, de la configuration des sociétés et du contrôle d'accès par attributs"] },
      abacus: { when: 'déc. 2018 - avr. 2020', lead: 'Applications web et API sur .NET Core et microservices Angular pour des clients internationaux.', bullets: ["Premier poste avec gestion d'ingénieurs et responsabilité des estimations"] },
      threepin: { when: 'janv. 2017 - déc. 2018', lead: 'Des applications desktop .NET au full stack, avec de la R&D sur un produit de déploiement on-premise.' },
    },
    clients: {
      DecoverAI: ["IA juridique aux États-Unis. Infrastructure et plateforme GenAI, aujourd'hui utilisées par de grands cabinets américains.", '2 M$+ levés en amorçage'],
      'United Medical': ['SaaS de santé allemand pour les contrats hôpitaux-médecins.', 'Mission depuis août 2023'],
      'Speakology AI': ['Application de langues avec avatar IA pour les écoles britanniques, autofinancée.', '10+ écoles en 3 mois'],
      'Water Advisor AI': ["Conseiller qualité de l'eau pour un client américain, du MVP à la phase 2.", "mars 2026 à aujourd'hui"],
      'Mappie AI': ['Gestionnaire de projet IA construit pour Nindo Solutions.', '60-70 % de raffinement en moins'],
      'Vectro AI': ['Intelligence commerciale à partir des appels, e-mails et Slack.', 'Recherche vectorielle'],
    },
    products: {
      BrandGen: ['En ligne', 'Images IA fidèles à votre charte graphique.'],
      TriageGrid: ['GA', "Tri d'e-mails par IA pour les cabinets sous Microsoft 365."],
      'Convo AI': ['En ligne', 'Réceptionniste vocal IA pour hôtels, cliniques et plus.'],
      'CC Logins': ['Open source', 'Suivi du quota et changement de compte pour Claude Code.'],
    },
    stats: ['sur Upwork', 'de réussite', 'missions', 'heures'],
    quotes: { 'Ravi Tandon': ['PDG et cofondateur, DecoverAI', 'Recommandation LinkedIn'], 'Terry Carson': ['Client, Water Advisor AI', 'Upwork, 5.0/5, juil. 2026'], 'Naim B.': ['Directeur général, SaaS médical'], 'Saurabh D.': ['Ingénieur logiciel senior'] },
  },
  pt: {
    labels: { range: 'a {y}', now: 'hoje', clientWork: 'Projetos para clientes', myProducts: 'Meus produtos', moreFromClients: 'Mais de clientes', caseStudies: 'Estudos de caso' },
    jobs: {
      independent: { company: 'Independente', role: 'Arquiteto de IA · Arquiteto Full Stack Sênior & Desenvolvedor de IA', when: '2022 - presente', where: 'Mumbai · Remoto para clientes dos EUA, Reino Unido e UE', lead: 'Construo produtos de IA e SaaS para startups financiadas e mantenho minha própria linha de produtos.' },
      lti: { when: 'jun 2021 - nov 2023', lead: 'Liderei um Centro de Excelência DevOps de 10+ engenheiros que criava plataformas internas.', bullets: ['Infinity DevOps: uma plataforma DevOps sobre AWS e GCP', 'Infinity AIWatch: um produto APM com dashboards guiados por IA (OpenAI, Python)', 'Serviços wrapper sobre a AWS para que engenheiros entregassem sem conhecer a plataforma', 'MVPs e POCs em vários hyperscalers'] },
      azentio: { when: 'mai 2020 - jun 2021', lead: 'Liderei a equipe que construiu o Enrico, uma aplicação SaaS de auditoria.', bullets: ['Começamos com um POC para ganhar a confiança do mercado e depois escalamos o Enrico para SaaS multi-tenant', 'Arquitetei assinaturas, configuração de empresas e controle de acesso baseado em atributos'] },
      abacus: { when: 'dez 2018 - abr 2020', lead: 'Aplicações web e APIs em .NET Core e microsserviços Angular para clientes globais.', bullets: ['Primeiro cargo gerenciando engenheiros e respondendo pelas estimativas de esforço'] },
      threepin: { when: 'jan 2017 - dez 2018', lead: 'Evoluí de aplicações desktop .NET para full stack e trabalhei em P&D de um produto de implantação on-premise.' },
    },
    clients: {
      DecoverAI: ['IA jurídica nos EUA. Construí a infraestrutura e a plataforma GenAI, hoje usadas em grandes escritórios dos EUA.', 'US$ 2M+ em rodada seed'],
      'United Medical': ['SaaS de saúde alemão para contratos entre hospitais e médicos.', 'Contrato desde ago 2023'],
      'Speakology AI': ['App de idiomas com avatar de IA para escolas do Reino Unido, sem investimento externo.', '10+ escolas em 3 meses'],
      'Water Advisor AI': ['Consultor de qualidade da água para um cliente dos EUA, do MVP à fase 2.', 'mar 2026 a hoje'],
      'Mappie AI': ['Gerente de projetos com IA construído para a Nindo Solutions.', '60-70% menos refinamento'],
      'Vectro AI': ['Inteligência de vendas a partir de ligações, e-mails e Slack.', 'Busca vetorial'],
    },
    products: {
      BrandGen: ['No ar', 'Imagens de IA fiéis à marca a partir das suas diretrizes.'],
      TriageGrid: ['GA', 'Triagem de e-mails com IA para escritórios no Microsoft 365.'],
      'Convo AI': ['No ar', 'Recepcionista de voz com IA para hotéis, clínicas e mais.'],
      'CC Logins': ['Open source', 'Visão de cota e troca de conta para o Claude Code.'],
    },
    stats: ['no Upwork', 'de sucesso', 'trabalhos', 'horas'],
    quotes: { 'Ravi Tandon': ['CEO e cofundador, DecoverAI', 'Recomendação no LinkedIn'], 'Terry Carson': ['Cliente, Water Advisor AI', 'Upwork, 5.0/5, jul 2026'], 'Naim B.': ['Diretor-geral, SaaS médico'], 'Saurabh D.': ['Engenheiro de software sênior'] },
  },
  hi: {
    labels: { range: '{y} तक', now: 'अब', clientWork: 'क्लाइंट वर्क', myProducts: 'मेरे प्रोडक्ट्स', moreFromClients: 'क्लाइंट्स की राय', caseStudies: 'केस स्टडीज़' },
    jobs: {
      independent: { company: 'स्वतंत्र', role: 'AI आर्किटेक्ट · सीनियर फुल स्टैक आर्किटेक्ट और AI डेवलपर', when: '2022 - वर्तमान', where: 'मुंबई · अमेरिका, UK और EU क्लाइंट्स के लिए रिमोट', lead: 'मैं फ़ंडेड स्टार्टअप्स के लिए AI और SaaS प्रोडक्ट्स बनाता हूँ और अपनी प्रोडक्ट लाइन चलाता हूँ।' },
      lti: { when: 'जून 2021 - नवंबर 2023', where: 'मुंबई', lead: 'इंटरनल प्लेटफ़ॉर्म बनाने वाले 10+ इंजीनियरों के DevOps सेंटर ऑफ़ एक्सीलेंस का नेतृत्व किया।', bullets: ['Infinity DevOps: AWS और GCP पर DevOps प्लेटफ़ॉर्म', 'Infinity AIWatch: AI-आधारित डैशबोर्ड वाला APM प्रोडक्ट (OpenAI, Python)', 'AWS पर रैपर सर्विसेज़, ताकि इंजीनियर बिना प्लेटफ़ॉर्म ज्ञान के डिलीवर कर सकें', 'कई हाइपरस्केलर्स पर MVP और POC'] },
      azentio: { when: 'मई 2020 - जून 2021', where: 'नवी मुंबई', lead: 'SaaS ऑडिट ऐप्लिकेशन Enrico बनाने वाली टीम का नेतृत्व किया।', bullets: ['बाज़ार का भरोसा जीतने के लिए पहले POC, फिर Enrico को मल्टी-टेनेंट SaaS में बढ़ाया', 'सब्सक्रिप्शन, कंपनी सेटअप और एट्रिब्यूट-आधारित एक्सेस कंट्रोल का आर्किटेक्चर बनाया'] },
      abacus: { when: 'दिसंबर 2018 - अप्रैल 2020', where: 'मुंबई', lead: 'ग्लोबल क्लाइंट्स के लिए .NET Core और Angular माइक्रोसर्विसेज़ पर वेब ऐप्स और APIs।', bullets: ['पहली भूमिका जिसमें इंजीनियरों को मैनेज किया और एस्टिमेट की ज़िम्मेदारी ली'] },
      threepin: { when: 'जनवरी 2017 - दिसंबर 2018', where: 'नवी मुंबई', lead: '.NET डेस्कटॉप ऐप्स से फुल स्टैक तक बढ़ा, और एक ऑन-प्रिमाइस डिप्लॉयमेंट प्रोडक्ट के R&D पर काम किया।' },
    },
    clients: {
      DecoverAI: ['अमेरिकी लीगल AI। इंफ्रास्ट्रक्चर और GenAI प्लेटफ़ॉर्म बनाया, जो आज बड़ी अमेरिकी लॉ फ़र्मों में इस्तेमाल होता है।', '$2M+ सीड फ़ंडिंग'],
      'United Medical': ['अस्पताल-डॉक्टर कॉन्ट्रैक्ट्स के लिए जर्मन हेल्थकेयर SaaS।', 'अगस्त 2023 से रिटेनर'],
      'Speakology AI': ['UK स्कूलों के लिए AI अवतार भाषा ऐप, बिना बाहरी फ़ंडिंग के।', '3 महीने में 10+ स्कूल'],
      'Water Advisor AI': ['एक अमेरिकी क्लाइंट के लिए पानी की गुणवत्ता सलाहकार, MVP से फ़ेज़ 2 तक।', 'मार्च 2026 से अब तक'],
      'Mappie AI': ['Nindo Solutions के लिए बनाया गया AI प्रोजेक्ट मैनेजर।', '60-70% कम ग्रूमिंग'],
      'Vectro AI': ['कॉल, ईमेल और Slack से सेल्स इनसाइट्स।', 'वेक्टर सर्च'],
    },
    products: {
      BrandGen: ['लाइव', 'आपकी गाइडलाइंस से ब्रांड के अनुरूप AI इमेज।'],
      TriageGrid: ['GA', 'Microsoft 365 पर लॉ फ़र्मों के लिए AI ईमेल ट्राइएज।'],
      'Convo AI': ['लाइव', 'होटल, क्लिनिक और अन्य के लिए AI वॉइस रिसेप्शनिस्ट।'],
      'CC Logins': ['ओपन सोर्स', 'Claude Code के लिए कोटा व्यू और अकाउंट स्विचिंग।'],
    },
    stats: ['Upwork पर', 'जॉब सक्सेस', 'जॉब्स', 'घंटे'],
    quotes: { 'Ravi Tandon': ['CEO और को-फ़ाउंडर, DecoverAI', 'LinkedIn रेकमेंडेशन'], 'Terry Carson': ['क्लाइंट, Water Advisor AI', 'Upwork, 5.0/5, जुलाई 2026'], 'Naim B.': ['मैनेजिंग डायरेक्टर, मेडिकल SaaS'], 'Saurabh D.': ['सीनियर सॉफ़्टवेयर इंजीनियर'] },
  },
}

function localizeQuote(q: Quote, c: LocaleCopy): Quote {
  const meta = c.quotes[q.author]
  return meta ? { ...q, role: meta[0], source: meta[1] ?? q.source } : q
}

export function getWorkExperience(lang: Lang) {
  if (lang === 'en') return { ...workExperience, labels: EN_LABELS }
  const c = copies[lang]
  const jobs: Job[] = workExperience.jobs.map(job => {
    const j = c.jobs[job.id] ?? {}
    return {
      ...job,
      ...j,
      bullets: j.bullets ?? job.bullets,
      clients: job.clients?.map(r => (c.clients[r.name] ? { ...r, desc: c.clients[r.name][0], tag: c.clients[r.name][1] } : r)),
      products: job.products?.map(p => (c.products[p.name] ? { ...p, status: c.products[p.name][0], desc: c.products[p.name][1] } : p)),
      stats: job.stats?.map((s, i) => ({ ...s, label: c.stats[i] ?? s.label })),
      quote: job.quote && localizeQuote(job.quote, c),
    }
  })
  return { ...workExperience, jobs, clientQuotes: workExperience.clientQuotes.map(q => localizeQuote(q, c)), labels: c.labels }
}
