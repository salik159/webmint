import { useState } from 'react'
import Reveal from '../components/Reveal'
import { ChevronDown } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

const faqs = [
  { q: 'How long does a website take to build?', a: 'Most projects take 2–8 weeks depending on scope — a starter site is roughly 2 weeks, a full e-commerce or brand build closer to 6–8.' },
  { q: 'How much does a website cost?', a: 'Projects typically range from $1,200 to $7,500+ depending on pages, features, and custom design work. See our pricing page for tier details.' },
  { q: 'Can you redesign my existing website?', a: 'Yes. We audit your current site, keep what\u2019s working, and rebuild the rest around a clearer strategy and modern design.' },
  { q: 'Do you provide hosting?', a: 'We can set up and manage hosting for you, or work with your existing provider — whichever fits your team better.' },
  { q: 'Do you offer SEO?', a: 'Every site ships with technical and on-page SEO basics. We also offer ongoing SEO as a standalone service for ranking growth.' },
  { q: 'What platforms do you build on?', a: 'Mostly React and Next.js for custom builds, and WordPress or Shopify when a client-managed CMS is the better fit.' },
  { q: 'Will I be able to update the site myself?', a: 'Yes — we build on a CMS or component system that lets you edit text, images, and blog content without touching code.' },
  { q: 'Do you offer ongoing maintenance?', a: 'Yes, our maintenance plans cover updates, bug fixes, backups, and security monitoring after launch.' },
  { q: 'How many revisions are included?', a: 'It depends on the tier — Starter includes 1 round, Business includes 3, and Premium includes unlimited rounds within scope.' },
  { q: 'Do you write the content, or do I?', a: 'We can do either. Many clients provide a first draft and we refine it, or we can write full copy as an add-on.' },
  { q: 'What do you need from me to get started?', a: 'Brand assets if you have them, a sense of your goals and audience, and examples of sites you like. We guide the rest.' },
  { q: 'Do you work with businesses outside your time zone?', a: 'Yes, we work with clients globally and keep communication async-friendly with regular update calls.' },
  { q: 'What happens after launch?', a: 'We hand off documentation, offer a support window included in your tier, and can continue on a maintenance plan.' },
  { q: 'Can you help with branding too?', a: 'Yes — logo, color systems, typography, and marketing materials are available as a standalone or bundled service.' },
  { q: 'Do you sign an NDA?', a: 'Yes, we\u2019re happy to sign an NDA before discovery calls if your project requires confidentiality.' },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="pt-40 pb-24">
      <section className="mx-auto max-w-4xl px-6 lg:px-10">
        <Reveal>
          <p className="font-mono text-[11px] tracking-wider text-mint uppercase">FAQ</p>
          <h1 className="mt-4 font-display text-4xl sm:text-6xl font-medium leading-tight">
            Questions clients ask before we start.
          </h1>
        </Reveal>

        <div className="mt-14 divide-y divide-line border-t border-b border-line">
          {faqs.map((f, i) => (
            <div key={f.q}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-6 py-6 text-left"
              >
                <span className="font-display text-lg">{f.q}</span>
                <ChevronDown size={18} className={`shrink-0 text-mute transition-transform duration-300 ${open === i ? 'rotate-180 text-mint' : ''}`} />
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-sm text-mute leading-relaxed max-w-2xl">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
