import Reveal from '../components/Reveal'
import MagneticButton from '../components/MagneticButton'
import { ArrowUpRight, Target, Eye, Heart } from 'lucide-react'

const values = [
  { icon: Target, title: 'Outcomes over output', body: 'We measure success in leads and revenue, not pages shipped.' },
  { icon: Eye, title: 'Craft is visible', body: 'Every pixel, transition, and word is deliberate — nothing is left to a default.' },
  { icon: Heart, title: 'Honest partnership', body: 'We tell clients what they need to hear, not just what sounds good in a pitch.' },
]

export default function About() {
  return (
    <div className="pt-40 pb-24">
      <section className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="font-mono text-[11px] tracking-wider text-mint uppercase">About WebMint</p>
          <h1 className="mt-4 font-display text-4xl sm:text-6xl font-medium max-w-3xl leading-tight">
            We started WebMint because most agency websites were built to win awards, not customers.
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-2xl text-lg text-mute leading-relaxed">
            WebMint is a small, senior team that designs and builds websites for businesses that are done looking generic. We began as freelancers frustrated by templated builds that looked nice in a portfolio and did nothing for the client's pipeline — so we built the agency we wished existed: strategy-first, design-obsessed, and accountable to real numbers.
          </p>
        </Reveal>
      </section>

      {/* Mission / Vision */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 mt-24 grid md:grid-cols-2 gap-6">
        <Reveal className="rounded-2xl border border-line bg-card p-10">
          <p className="font-mono text-[11px] tracking-wider text-mute-dim uppercase">Mission</p>
          <p className="mt-4 font-display text-2xl leading-snug">
            Give growing businesses a digital presence that matches the quality of what they actually build.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="rounded-2xl border border-line bg-card p-10">
          <p className="font-mono text-[11px] tracking-wider text-mute-dim uppercase">Vision</p>
          <p className="mt-4 font-display text-2xl leading-snug">
            A web where small and mid-sized brands compete visually with the largest players in their industry.
          </p>
        </Reveal>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 mt-24">
        <Reveal>
          <p className="font-mono text-[11px] tracking-wider text-mint uppercase">Our Values</p>
        </Reveal>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {values.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 0.08} className="rounded-2xl border border-line bg-card p-8">
              <Icon size={22} className="text-mint" />
              <h3 className="mt-5 font-display text-lg">{title}</h3>
              <p className="mt-2 text-sm text-mute leading-relaxed">{body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* How we work */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 mt-24">
        <div className="rounded-3xl border border-line bg-gradient-to-br from-card to-surface p-10 lg:p-16 grid lg:grid-cols-2 gap-12">
          <Reveal>
            <p className="font-mono text-[11px] tracking-wider text-mint uppercase">Our Philosophy</p>
            <h2 className="mt-3 font-display text-3xl font-medium">Design is a business decision, not a taste contest.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-mute leading-relaxed">
              We don't ask clients to pick a favorite color or approve a mood board in isolation. Every recommendation is tied to a business goal — more demo bookings, lower bounce rate, higher average order value. You'll always know why a decision was made, and what it's expected to do for your numbers.
            </p>
            <div className="mt-8">
              <MagneticButton href="/contact">Work with us <ArrowUpRight size={16} /></MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
