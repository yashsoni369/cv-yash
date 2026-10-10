// Work Experience data. Every fact here is sourced from the Obsidian vault
// (Apex36/people/Yash Soni.md and the company, project and product hubs).
// Do not add metrics, roles or dates without a vault source.

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
      id: 'apex36',
      company: 'Apex36',
      role: 'Founder · Senior Full Stack Architect & AI Developer',
      years: ['2022', 'Now'],
      when: 'Independent since 2022, Apex36 from Dec 2023',
      where: 'Mumbai · Remote for US, UK and EU clients',
      lead: 'My AI and SaaS studio. I build products for funded startups and run my own product line.',
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
