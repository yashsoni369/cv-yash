/**
 * Logo files live in public/logos/tech (brand SVGs from the official Simple Icons
 * set, plus vendor logos fetched from Iconify "logos", langfuse.com and GitHub)
 * and public/logos/products (fetched from each product's own website).
 * Names without a logo file render as text only.
 */

export interface Logo {
  src: string
  /** Dark mark: sit it on a light tile in dark mode so it stays visible. */
  dark?: boolean
}

const tech: Record<string, Logo> = {
  openai: { src: 'openai.svg', dark: true },
  claude: { src: 'claude.svg' },
  gemini: { src: 'gemini.svg' },
  qdrant: { src: 'qdrant.svg' },
  pgvector: { src: 'pgvector.svg' },
  react: { src: 'react.svg' },
  angular: { src: 'angular.svg' },
  nextjs: { src: 'nextjs.svg', dark: true },
  typescript: { src: 'typescript.svg' },
  tailwind: { src: 'tailwind.svg' },
  nodejs: { src: 'nodejs.svg' },
  dotnet: { src: 'dotnet.svg' },
  python: { src: 'python.svg' },
  fastapi: { src: 'fastapi.svg' },
  nestjs: { src: 'nestjs.svg' },
  express: { src: 'express.svg', dark: true },
  mongodb: { src: 'mongodb.svg' },
  postgresql: { src: 'postgresql.svg' },
  mysql: { src: 'mysql.svg' },
  mssql: { src: 'mssql.svg' },
  redis: { src: 'redis.svg' },
  elasticsearch: { src: 'elasticsearch.svg' },
  influxdb: { src: 'influxdb.svg' },
  supabase: { src: 'supabase.svg' },
  aws: { src: 'aws.svg', dark: true },
  azure: { src: 'azure.svg' },
  gcp: { src: 'gcp.svg' },
  docker: { src: 'docker.svg' },
  kubernetes: { src: 'kubernetes.svg' },
  nginx: { src: 'nginx.svg' },
  git: { src: 'git.svg' },
  jira: { src: 'jira.svg' },
  postman: { src: 'postman.svg' },
  kafka: { src: 'kafka.svg', dark: true },
  jenkins: { src: 'jenkins.svg' },
  vapi: { src: 'vapi.svg' },
  deepgram: { src: 'deepgram.svg' },
  pinecone: { src: 'pinecone.svg' },
  huggingface: { src: 'huggingface.svg' },
  celery: { src: 'celery.svg' },
  slack: { src: 'slack.svg' },
  teams: { src: 'teams.svg' },
  microsoftgraph: { src: 'microsoftgraph.svg' },
  googlecalendar: { src: 'googlecalendar.svg' },
  rust: { src: 'rust.svg', dark: true },
  tauri: { src: 'tauri.svg' },
  sqlite: { src: 'sqlite.svg' },
  drizzle: { src: 'drizzle.svg' },
  prometheus: { src: 'prometheus.svg' },
  vercel: { src: 'vercel.svg', dark: true },
  electron: { src: 'electron.svg' },
  langfuse: { src: 'langfuse.svg' },
  litellm: { src: 'litellm.png' },
  upstash: { src: 'upstash.svg' },
  neon: { src: 'neon.svg' },
  render: { src: 'render.svg', dark: true },
  railway: { src: 'railway.svg', dark: true },
  cloudflare: { src: 'cloudflare.svg' },
  cloudflarepages: { src: 'cloudflarepages.svg' },
  cloudflareworkers: { src: 'cloudflareworkers.svg' },
  awss3: { src: 'awss3.svg' },
  lambda: { src: 'lambda.svg' },
}

// Display-name aliases, keyed by the normalized name (lowercase, a-z0-9 only).
const alias: Record<string, string> = {
  tailwindcss: 'tailwind',
  netcore: 'dotnet',
  netmvc: 'dotnet',
  gpt4omini: 'openai',
  openaiembeddings: 'openai',
  microsoftgraphapi: 'microsoftgraph',
  googlecloud: 'gcp',
  postgres: 'postgresql',
  cloudflarer2: 'cloudflare',
  awslambda: 'lambda',
}

const normalize = (name: string) => name.toLowerCase().replace(/[^a-z0-9]/g, '')

export function getTechLogo(name: string): Logo | null {
  // Drop a trailing qualifier such as "Vercel (Functions, Blob)".
  let key = normalize(name.replace(/\(.*\)/, ''))
  key = alias[key] ?? key
  // "AWS (EC2, EKS, Sagemaker)", "AWS CDK", "Azure DevOps" use their cloud's mark.
  if (!tech[key]) {
    if (key.startsWith('aws')) key = 'aws'
    else if (key.startsWith('azure')) key = 'azure'
  }
  const hit = tech[key]
  return hit ? { ...hit, src: `/logos/tech/${hit.src}` } : null
}

const products: Record<string, string> = {
  brandgen: 'brandgen.jpg',
  triagegrid: 'triagegrid.svg',
  convoai: 'convo.png',
  cclogins: 'cc-logins.png',
  mappieai: 'mappie.png',
}

// Source art with heavy padding gets cropped in via a zoom factor.
const productZoom: Record<string, number> = { brandgen: 1.9 }

export function getProductLogo(name: string): { src: string; zoom: number } | null {
  const key = normalize(name)
  const f = products[key]
  return f ? { src: `/logos/products/${f}`, zoom: productZoom[key] ?? 1 } : null
}
