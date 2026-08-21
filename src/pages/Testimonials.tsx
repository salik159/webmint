import Reveal from '../components/Reveal'
import { BadgeCheck, Star } from 'lucide-react'
import { testimonials } from '../data/testimonials'

export default function Testimonials() {
  return (
    <div className="pt-40 pb-24">
      <section className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="font-mono text-[11px] tracking-wider text-mint uppercase">Testimonials</p>
          <h1 className="mt-4 font-display text-4xl sm:text-6xl font-medium max-w-2xl leading-tight">
            What clients say after launch.
          </h1>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <Reveal
            key={t.name}
            delay={(i % 3) * 0.08}
            className="rounded-2xl border border-line bg-card p-8 flex flex-col"
          >
            <div className="flex items-center justify-between">
              <div className="flex gap-1 text-mint">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={14} fill="currentColor" />
                ))}
              </div>
              {t.verified && (
                <span className="flex items-center gap-1 text-[10px] font-medium uppercase tracking-wide text-mute">
                  <BadgeCheck size={13} className="text-mint" />
                  Verified Client
                </span>
              )}
            </div>

            <p className="mt-5 text-sm leading-relaxed flex-1">"{t.quote}"</p>

            <div className="mt-6 flex items-center gap-3 border-t border-line pt-6">
              <img
                src={t.avatarUrl}
                alt=""
                aria-hidden="true"
                width={40}
                height={40}
                loading="lazy"
                className="h-10 w-10 shrink-0 rounded-full"
              />
              <div className="min-w-0">
                <p className="text-sm font-medium">{t.name}</p>
                <p className="text-xs text-mute mt-0.5">
                  {t.role}, {t.company}
                </p>
                <p className="text-xs text-mute-dim mt-0.5">
                  {t.city} · {t.service}
                </p>
              </div>
            </div>

            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-mute-dim">
              Project completed {t.date}
            </p>
          </Reveal>
        ))}
      </section>
    </div>
  )
}
