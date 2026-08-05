import Reveal from '../components/Reveal'
import { Star } from 'lucide-react'

const testimonials = [
  {
    quote: "WebMint rebuilt our site in three weeks and our demo requests doubled the following month.",
    name: 'Maya Chen',
    role: 'Founder, Northbeam Capital',
    industry: 'Finance · New York',
  },
  {
    quote: "Our conversion rate went up 142% after launch. The team understood our brand better than we did.",
    name: 'Elena Rossi',
    role: 'Creative Director, Aurelia Studio',
    industry: 'Fashion · Milan',
  },
  {
    quote: "Load times dropped by half and our bounce rate finally matches what our portfolio deserves.",
    name: 'James Porter',
    role: 'Principal, Porter & Co.',
    industry: 'Architecture · London',
  },
  {
    quote: "Subscription sign-ups jumped 61% within the first month. The new flow just made sense.",
    name: 'Priya Nair',
    role: 'Owner, Fernweg Coffee Co.',
    industry: 'Food & Beverage · Austin',
  },
  {
    quote: "Three practice areas, one cohesive site, and a CMS our own team can actually manage.",
    name: 'David Halden',
    role: 'Managing Partner, Halden Legal Group',
    industry: 'Legal · Chicago',
  },
  {
    quote: "The landing page paid for itself in the first week of running ads to it.",
    name: 'Sara Kim',
    role: 'Founder, Solace Wellness',
    industry: 'Health & Wellness · Seattle',
  },
]

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
          <Reveal key={t.name} delay={(i % 3) * 0.08} className="rounded-2xl border border-line bg-card p-8 flex flex-col">
            <div className="flex gap-1 text-mint">
              {Array.from({ length: 5 }).map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
            </div>
            <p className="mt-5 text-sm leading-relaxed flex-1">"{t.quote}"</p>
            <div className="mt-6 pt-6 border-t border-line">
              <p className="text-sm font-medium">{t.name}</p>
              <p className="text-xs text-mute mt-0.5">{t.role}</p>
              <p className="text-xs text-mute-dim mt-0.5">{t.industry}</p>
            </div>
          </Reveal>
        ))}
      </section>
    </div>
  )
}
