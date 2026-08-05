import Reveal from '../components/Reveal'
import MagneticButton from '../components/MagneticButton'
import { Check } from 'lucide-react'

const tiers = [
  {
    name: 'Starter',
    price: '₹6,000+',
    note: 'starting at',
    timeline: '1–2 week timeline',
    support: '30 days support',
    features: ['Landing pages', 'Portfolio websites', 'Basic business websites', 'Responsive design', 'Contact form integration'],
    highlight: false,
  },
  {
    name: 'Business',
    price: '₹10,000+',
    note: 'starting at',
    timeline: '2–4 week timeline',
    support: '60 days support',
    features: ['Multi-page websites', 'Small business websites', 'Basic SEO', 'Contact forms', 'Content management'],
    highlight: false,
  },
  {
    name: 'Premium',
    price: '₹15,000+',
    note: 'starting at',
    timeline: '4–6 week timeline',
    support: '90 days support',
    features: ['Advanced business websites', 'Custom UI/UX', 'Performance optimization', 'SEO optimization', 'Digital marketing add-ons', 'Priority support'],
    highlight: true,
  },
]

export default function Pricing() {
  return (
    <div className="pt-40 pb-24">
      <section className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="font-mono text-[11px] tracking-wider text-mint uppercase">Pricing</p>
          <h1 className="mt-4 font-display text-4xl sm:text-6xl font-medium max-w-2xl leading-tight">
            Straightforward pricing, scoped to your project.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-mute leading-relaxed">
            Every engagement starts with a short discovery call so the quote reflects your actual scope — these tiers are a starting point.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-5xl px-6 lg:px-10 mt-16 grid md:grid-cols-3 gap-6">
        {tiers.map((t, i) => (
          <Reveal
            key={t.name}
            delay={i * 0.08}
            y={30}
            className={`glow-border relative rounded-2xl p-8 flex flex-col overflow-hidden ${
              t.highlight ? 'border border-mint/40 bg-gradient-to-b from-mint/10 to-card glow-purple md:-translate-y-3' : 'glass'
            }`}
          >
            {t.highlight && <span className="text-[10px] font-mono tracking-wider text-mint uppercase mb-3">Most Popular</span>}
            <h3 className="font-display text-xl">{t.name}</h3>
            <div className="mt-3">
              <span className="font-display text-3xl text-gradient-blue">{t.price}</span>
            </div>
            <p className="mt-1 text-xs text-mute-dim">{t.note}</p>
            <p className="mt-3 text-xs text-mute">{t.timeline} · {t.support}</p>
            <ul className="mt-6 space-y-3 flex-1">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-mute">
                  <Check size={15} className="text-mint mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <MagneticButton href="/contact" variant={t.highlight ? 'solid' : 'outline'} className="mt-8 w-full justify-center">
              Get Started
            </MagneticButton>
          </Reveal>
        ))}
      </section>
    </div>
  )
}
