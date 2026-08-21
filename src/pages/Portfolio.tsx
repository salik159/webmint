import { useRef } from 'react'
import { motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import MagneticButton from '../components/MagneticButton'
import { projects, type Project } from '../data/projects'
import { ArrowUpRight } from 'lucide-react'

function PortfolioCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)

  // Writes the glow position straight to the DOM via a CSS custom property
  // instead of React state. The previous version called setState on every
  // mousemove pixel, which re-rendered this whole card (including its
  // Framer Motion tree) dozens of times per second while hovering — the
  // same class of bug as the hero video/globe contention, just local to
  // this page. CustomCursor.tsx already does this the right way; this
  // brings Portfolio in line with it.
  function onMove(e: React.MouseEvent) {
    const el = cardRef.current
    const glow = glowRef.current
    if (!el || !glow) return
    const r = el.getBoundingClientRect()
    const x = ((e.clientX - r.left) / r.width) * 100
    const y = ((e.clientY - r.top) / r.height) * 100
    glow.style.background = `radial-gradient(320px circle at ${x}% ${y}%, rgba(0,245,184,0.16), transparent 70%)`
  }

  return (
    <Reveal delay={(index % 2) * 0.1} y={40}>
      <motion.div
        ref={cardRef}
        onMouseMove={onMove}
        whileHover={{ y: -8 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className="group relative rounded-3xl border border-line bg-card overflow-hidden"
      >
        {/* cursor-follow glow — visibility is handled entirely by CSS
            (group-hover), position is written directly to the DOM above */}
        <div
          ref={glowRef}
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
        />
        {/* animated border glow */}
        <div className="glow-border absolute inset-0 rounded-3xl pointer-events-none z-10" />

        <div className="relative overflow-hidden">
          <div className="flex items-center gap-1.5 px-4 py-2.5 bg-surface border-b border-line">
            <span className="h-2 w-2 rounded-full bg-mute-dim/60" />
            <span className="h-2 w-2 rounded-full bg-mute-dim/60" />
            <span className="h-2 w-2 rounded-full bg-mute-dim/60" />
          </div>
          <motion.img
            src={project.image}
            alt={`${project.name} preview`}
            className="w-full aspect-[16/10] object-cover transition-all duration-700 ease-out group-hover:scale-[1.06] group-hover:blur-[1px]"
            loading="lazy"
          />
          <span className="absolute top-14 left-4 rounded-full border border-line bg-bg/85 backdrop-blur px-3 py-1 font-mono text-[10px] tracking-wider text-mint uppercase">
            {project.category}
          </span>
        </div>

        <div className="relative p-8">
          <h3 className="font-display text-2xl">{project.name}</h3>
          <p className="mt-3 text-sm text-mute leading-relaxed">{project.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span key={s} className="rounded-full border border-line px-3 py-1 text-xs text-mute-dim font-mono">
                {s}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </Reveal>
  )
}

export default function Portfolio() {
  return (
    <div className="pt-40 pb-24">
      <section className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="font-mono text-[11px] tracking-wider text-mint uppercase">Portfolio</p>
          <h1 className="mt-4 font-display text-4xl sm:text-6xl font-medium max-w-2xl leading-tight">
            Real builds, shipped by WebMint.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-mute leading-relaxed">
            A closer look at four projects that show how we design, build, and ship — from a personal portfolio to a full-stack AI platform.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 mt-16 grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <PortfolioCard key={p.slug} project={p} index={i} />
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 mt-24">
        <Reveal className="rounded-3xl border border-line bg-gradient-to-br from-mint/10 via-card to-violet/10 p-12 lg:p-16 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-medium">Want to see your project here next?</h2>
          <p className="mt-3 text-mute max-w-md mx-auto">Tell us what you're building and we'll scope a plan that fits.</p>
          <div className="mt-8">
            <MagneticButton href="/contact">Start Your Project <ArrowUpRight size={16} /></MagneticButton>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
