import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import { projects } from '../data/projects'

export default function FeaturedProjects() {
  return (
    <section
      id="featured-work"
      className="relative mx-auto max-w-7xl px-6 lg:px-10 py-24"
    >
      <div className="pointer-events-none absolute top-1/3 -left-32 h-72 w-72 rounded-full bg-violet/10 blur-[110px]" />

      <Reveal className="relative flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-violet">
            Featured Work
          </p>

          <h2 className="mt-3 max-w-md font-display text-3xl font-medium sm:text-4xl">
            Real builds, shipped by WebMint.
          </h2>
        </div>

        <Link
          to="/contact"
          className="group flex items-center gap-1.5 text-sm text-mute transition-colors hover:text-ink"
        >
          Start a Similar Project
          <ArrowUpRight
            size={15}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </Reveal>

      <div className="mt-12 grid md:grid-cols-2 gap-6 relative">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 2) * 0.1}>
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
              aria-label={`View ${p.name}`}
            >
              <motion.div
                whileHover={{ y: -6 }}
                transition={{
                  type: 'spring',
                  stiffness: 220,
                  damping: 20,
                }}
                className="glow-border group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-1 cursor-pointer"
              >
                {/* Device mockup frame */}
                <div className="relative overflow-hidden rounded-[1.3rem] bg-gradient-to-b from-white/[0.04] to-transparent p-5 pb-0">
                  <div className="relative overflow-hidden rounded-t-[1rem] border border-white/10 bg-surface">
                    <div className="flex items-center gap-1.5 border-b border-white/10 bg-card/80 px-3 py-2">
                      <span className="h-2 w-2 rounded-full bg-mute-dim/60" />
                      <span className="h-2 w-2 rounded-full bg-mute-dim/60" />
                      <span className="h-2 w-2 rounded-full bg-mute-dim/60" />
                    </div>

                    <motion.img
                      src={p.image}
                      alt={`${p.name} preview`}
                      className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      loading="lazy"
                    />
                  </div>

                  <div className="mx-auto h-2 w-1/2 rounded-b-md bg-line/70" />

                  <span className="absolute left-9 top-9 rounded-full border border-white/10 bg-surface/90 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-violet">
                    {p.category}
                  </span>
                </div>

                <div className="p-7 flex flex-col flex-1">
                  <h3 className="font-display text-xl">
                    {p.name}
                  </h3>

                  <p className="mt-2 text-sm text-mute leading-relaxed flex-1">
                    {p.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-xs text-mute-dim"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}