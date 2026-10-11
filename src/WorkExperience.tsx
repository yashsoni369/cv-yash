import { ExternalLink } from 'lucide-react'
import { getWorkExperience, type Quote } from './work-experience'
import type { Lang } from './i18n'
import { Link } from 'react-router-dom'
import { articleRegistry } from './articles/registry'
import { TechLabel, ProductLogo } from './TechLabel'

function initials(name: string) {
  return name
    .replace(/\./g, '')
    .split(' ')
    .map(p => p[0])
    .slice(0, 2)
    .join('')
}

function QuoteBlock({ q }: { q: Quote }) {
  const body = (
    <blockquote className="mt-5 p-4 rounded-xl bg-primary/5 border border-primary/10">
      <p className="text-sm text-muted-foreground italic mb-3">&ldquo;{q.text}&rdquo;</p>
      <footer className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className="w-9 h-9 rounded-full bg-primary/15 text-primary text-xs font-semibold flex items-center justify-center shrink-0"
        >
          {initials(q.author)}
        </span>
        <div className="min-w-0">
          <span className="text-sm font-medium text-foreground block">{q.author}</span>
          <span className="text-xs text-muted-foreground">
            {q.role}
            {q.source ? ` · ${q.source}` : ''}
          </span>
        </div>
      </footer>
    </blockquote>
  )
  return q.url ? (
    <a href={q.url} target="_blank" rel="noopener noreferrer" className="block hover:opacity-90 transition-opacity">
      {body}
    </a>
  ) : (
    body
  )
}

function Sub({ children }: { children: React.ReactNode }) {
  return <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground/70 mt-6 mb-2">{children}</p>
}

export function WorkExperience({ lang }: { lang: Lang }) {
  const { jobs, clientQuotes, labels } = getWorkExperience(lang)
  return (
    <div className="border-t border-border">
      {jobs.map(job => (
        <div key={job.id} className="grid grid-cols-1 md:grid-cols-[170px_1fr] gap-2 md:gap-8 py-8 border-b border-border">
          <div className="font-mono text-sm text-muted-foreground tabular-nums">
            <span
              className={`block font-display text-2xl md:text-3xl font-bold leading-none mb-1 ${job.current ? 'text-primary' : 'text-foreground'}`}
            >
              {job.years[0]}
            </span>
            {labels.range.replace('{y}', job.years[1] === 'Now' ? labels.now : job.years[1])}
          </div>

          <div className="min-w-0">
            <h3 className="font-display text-xl font-bold flex items-center gap-2.5">
              {job.company}
            </h3>
            <div className="flex flex-wrap gap-x-3 gap-y-1 mt-0.5">
              <span className="text-primary font-medium">{job.role}</span>
              <span className="text-sm text-muted-foreground">{`${job.when} · ${job.where}`}</span>
            </div>
            <p className="text-muted-foreground mt-2">{job.lead}</p>

            {job.bullets.length > 0 && (
              <ul className="text-sm text-muted-foreground space-y-1 mt-3">
                {job.bullets.map(b => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">&bull;</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}

            {job.clients && (
              <>
                <Sub>{labels.clientWork}</Sub>
                <div className="border-t border-border">
                  {job.clients.map(c => (
                    <div
                      key={c.name}
                      className="grid grid-cols-[1fr_auto] sm:grid-cols-[150px_1fr_auto] gap-x-4 gap-y-1 py-2.5 border-b border-border items-baseline"
                    >
                      <span className="font-semibold inline-flex items-center gap-2">
                        <ProductLogo name={c.name} size={20} />
                        {c.name}
                      </span>
                      <span className="font-mono text-xs text-primary text-right sm:order-3 whitespace-nowrap">{c.tag}</span>
                      <span className="text-sm text-muted-foreground col-span-2 sm:col-span-1 sm:order-2">{c.desc}</span>
                    </div>
                  ))}
                </div>
              </>
            )}

            {job.products && (
              <>
                <Sub>{labels.myProducts}</Sub>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {job.products.map(p => (
                    <div key={p.name} className="p-3.5 rounded-xl bg-card border border-border flex flex-col gap-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-display font-semibold inline-flex items-center gap-2">
                          <ProductLogo name={p.name} size={24} />
                          {p.name}
                        </span>
                        <span className="text-[11px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-md bg-primary/10 text-primary whitespace-nowrap">
                          {p.status}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{p.desc}</p>
                      {p.url ? (
                        <a
                          href={p.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-xs text-muted-foreground hover:text-primary inline-flex items-center gap-1 transition-colors"
                        >
                          {p.meta}
                          <ExternalLink className="w-3 h-3" aria-hidden="true" />
                        </a>
                      ) : (
                        <span className="font-mono text-xs text-muted-foreground">{p.meta}</span>
                      )}
                    </div>
                  ))}
                </div>
              </>
            )}

            {job.quote && <QuoteBlock q={job.quote} />}

            {job.stats && (
              <div className="flex flex-wrap gap-x-5 gap-y-1 mt-5 text-sm text-muted-foreground">
                {job.stats.map(s => (
                  <span key={s.label}>
                    <b className="text-foreground tabular-nums">{s.value}</b> {s.label}
                  </span>
                ))}
              </div>
            )}

            <div className="flex flex-wrap gap-1.5 mt-4">
              {job.stack.map(s => (
                <span key={s} className="inline-flex items-center gap-1.5 text-xs px-2.5 py-0.5 rounded-full border border-border bg-card text-muted-foreground">
                  <TechLabel name={s} />
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}

      <div className="py-8">
        <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground/70 mb-3">{labels.moreFromClients}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {clientQuotes.map(q => (
            <div key={q.author} className="min-w-0">
              <QuoteBlock q={q} />
            </div>
          ))}
        </div>
      </div>

      <div className="pb-2">
        <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground/70 mb-3">{labels.caseStudies}</p>
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
          {articleRegistry.map(a => (
            <Link key={a.id} to={`/${a.slugs[lang === 'es' ? 'es' : 'en']}`} className="text-primary hover:underline">
              {a.titles[lang === 'es' ? 'es' : 'en']}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
