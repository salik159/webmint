import { Star } from 'lucide-react'
import Reveal from './Reveal'

const testimonials = [
  { quote: "WebMint rebuilt our site in three weeks and our demo requests doubled the following month.", name: 'Maya Chen', role: 'Founder, Northbeam Capital' },
  { quote: "Our conversion rate went up 142% after launch. The team understood our brand better than we did.", name: 'Elena Rossi', role: 'Creative Director, Aurelia Studio' },
  { quote: "Load times dropped by half and our bounce rate finally matches what our portfolio deserves.", name: 'James Porter', role: 'Principal, Porter & Co.' },
  { quote: "Subscription sign-ups jumped 61% within the first month. The new flow just made sense.", name: 'Priya Nair', role: 'Owner, Fernweg Coffee Co.' },
  { quote: "Three practice areas, one cohesive site, and a CMS our own team can actually manage.", name: 'David Halden', role: 'Managing Partner, Halden Legal Group' },
  { quote: "The landing page paid for itself in the first week of running ads to it.", name: 'Sara Kim', role: 'Founder, Solace Wellness' },
]

function Card({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <div className="mx-3 w-[340px] shrink-0 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-7 shadow-[0_20px_60px_-30px_rgba(124,77,255,0.45)] sm:w-[380px]">
      <div className="flex gap-1 text-violet">
        {Array.from({ length: 5 }).map((_, j) => <Star key={j} size={13} fill="currentColor" />)}
      </div>
      <p className="mt-4 text-sm leading-relaxed text-ink/90">"{t.quote}"</p>
      <div className="mt-5 pt-5 border-t border-line">
        <p className="text-sm font-medium">{t.name}</p>
        <p className="text-xs text-mute mt-0.5">{t.role}</p>
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
            <Card key={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  )
}
