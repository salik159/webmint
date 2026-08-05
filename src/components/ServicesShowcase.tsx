import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Layout, Code2, Megaphone, Palette, Search } from 'lucide-react'
import Reveal from './Reveal'
import MagneticButton from './MagneticButton'

const services = [
  {
    icon: Layout,
    title: 'Website Design',
    body: 'Custom UI crafted around your brand and audience — responsive, premium, and built to convert.',
  },
  {
    icon: Code2,
    title: 'Website Development',
    body: 'Fast, reliable builds on the stack that fits your project, from React apps to CMS-driven sites.',
  },
  {
    icon: Search,
    title: 'SEO & Performance',
    body: 'Technical and on-page SEO paired with 95+ Lighthouse scores, so the site gets found and loads fast.',
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    body: 'Paid and organic growth strategy that turns your new site into a consistent lead source.',
  },
  {
    icon: Palette,
    title: 'Branding',
    body: 'Visual identity systems — logo, color, type — that hold up everywhere your business shows up.',
  },
]

export default function ServicesShowcase() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 lg:px-10 py-24">
      <div className="pointer-events-none absolute top-0 right-0 h-72 w-72 rounded-full bg-electric/10 blur-[100px]" />
      <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 relative">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-violet">What We Do</p>
          <h2 className="mt-3 max-w-lg font-display text-3xl font-medium sm:text-4xl">
            End-to-end digital solutions for ambitious brands.
          </h2>
        </div>
        <Link to="/services" className="group flex shrink-0 items-center gap-1.5 text-sm text-mute transition-colors hover:text-ink">
          View All Services
          <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
        </Link>
      </Reveal>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 relative">
        {services.map(({ icon: Icon, title, body }, i) => (
          <Reveal key={title} delay={(i % 3) * 0.08} className={i === 3 ? 'sm:col-span-1 lg:col-start-1' : ''}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 220, damping: 20 }}
              className="glow-border group relative h-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-7"
            >
              <div className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full bg-violet/15 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-gradient-to-br from-violet/25 to-blue/15">
                <Icon size={20} className="text-violet" />
              </span>
              <h3 className="relative mt-6 font-display text-lg">{title}</h3>
              <p className="relative mt-2.5 text-sm text-mute leading-relaxed">{body}</p>
              <Link
                to="/services"
                className="relative mt-6 inline-flex items-center gap-1.5 text-sm text-ink/90 transition-colors hover:text-violet"
              >
                Learn More <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          </Reveal>
        ))}

        {/* CTA card fills the sixth grid slot */}
        <Reveal delay={0.24}>
          <div className="relative flex h-full flex-col justify-between rounded-[1.5rem] border border-violet/30 bg-gradient-to-br from-violet/15 to-blue/10 p-7 shadow-[0_0_70px_-30px_rgba(124,77,255,0.5)]">
            <div>
              <h3 className="font-display text-lg">Need something custom?</h3>
              <p className="mt-2.5 text-sm text-mute leading-relaxed">
                Tell us what you're building — we'll scope a plan that fits.
              </p>
            </div>
            <MagneticButton href="/contact" className="mt-6 !px-5 !py-2.5 !text-[13px] w-fit">
              Get a Quote
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
