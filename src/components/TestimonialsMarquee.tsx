import { BadgeCheck, Star } from 'lucide-react'
import Reveal from './Reveal'
import { testimonials, type Testimonial } from '../data/testimonials'

function Card({ t }: { t: Testimonial }) {
  return (
    <div className="mx-3 w-[340px] shrink-0 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-7 shadow-[0_20px_60px_-30px_rgba(124,77,255,0.45)] sm:w-[380px]">
      <div className="flex items-center justify-between">
        <div className="flex gap-1 text-violet">
          {Array.from({ length: 5 }).map((_, j) => (
            <Star key={j} size={13} fill="currentColor" />
          ))}
        </div>
        {t.verified && (
          <span className="flex items-center gap-1 text-[10px] font-medium uppercase tracking-wide text-mint">
            <BadgeCheck size={13} />
            Verified Client
          </span>
        )}
      </div>
      <p className="mt-4 text-sm leading-relaxed text-ink/90">"{t.quote}"</p>
      <div className="mt-5 flex items-center gap-3 border-t border-line pt-5">
        <img
          src={t.avatarUrl}
          alt=""
          aria-hidden="true"
          width={36}
          height={36}
          loading="lazy"
          className="h-9 w-9 shrink-0 rounded-full"
        />
        <div className="min-w-0">
          <p className="truncate text-sm font-medium">{t.name}</p>
          <p className="truncate text-xs text-mute mt-0.5">
            {t.role}, {t.company} · {t.city}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function TestimonialsMarquee() {
  const loop = [...testimonials, ...testimonials]

  return (
    <section className="py-16 overflow-hidden">
      <Reveal className="mx-auto max-w-7xl px-6 lg:px-10 text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-violet">Testimonials</p>
        <h2 className="mt-3 font-display text-3xl font-medium sm:text-4xl">What clients say after launch.</h2>
      </Reveal>

      <div className="relative mt-12 [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee">
          {loop.map((t, i) => (
            <Card key={`${t.name}-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  )
}
