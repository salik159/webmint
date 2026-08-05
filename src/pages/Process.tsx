import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Reveal from '../components/Reveal'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  { title: 'Discovery', body: 'We learn your business, audience, and goals through a structured kickoff call and questionnaire.' },
  { title: 'Research', body: 'Competitive analysis and audience research shape the strategy before any design begins.' },
  { title: 'Wireframe', body: 'Low-fidelity layouts map the structure and user flow, so we agree on direction early.' },
  { title: 'Design', body: 'High-fidelity, on-brand visual design for every page, reviewed together in shared rounds.' },
  { title: 'Development', body: 'Pixel-accurate, responsive build on the agreed stack — React, Next.js, or WordPress.' },
  { title: 'Testing', body: 'Cross-browser, cross-device QA plus performance and accessibility checks before launch.' },
  { title: 'Launch', body: 'We handle domain, hosting, and deployment, and confirm everything is live and tracked.' },
  { title: 'Support', body: 'Ongoing updates, monitoring, and iteration so the site keeps performing after day one.' },
]

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fill the vertical progress line as the user scrolls through the timeline.
      if (lineRef.current && containerRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 70%',
              end: 'bottom 60%',
              scrub: 0.6,
            },
          }
        )
      }

      // Each step badge "lights up" (mint glow) as it scrolls into view.
      const badges = gsap.utils.toArray<HTMLElement>('.process-badge')
      badges.forEach((badge) => {
        gsap.to(badge, {
          backgroundColor: 'rgba(0,245,184,0.14)',
          borderColor: 'rgba(0,245,184,0.7)',
          color: '#00F5B8',
          boxShadow: '0 0 24px -4px rgba(0,245,184,0.6)',
          scrollTrigger: {
            trigger: badge,
            start: 'top 75%',
            end: 'top 55%',
            scrub: true,
          },
        })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="pt-40 pb-24">
      <section className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="font-mono text-[11px] tracking-wider text-mint uppercase">Our Process</p>
          <h1 className="mt-4 font-display text-4xl sm:text-6xl font-medium max-w-2xl leading-tight">
            Eight stages. Zero surprises.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-mute leading-relaxed">
            Every project moves through the same sequence, in this order, so you always know what stage you're in and what happens next. Watch the timeline light up as you scroll.
          </p>
        </Reveal>
      </section>

      <section ref={containerRef} className="mx-auto max-w-4xl px-6 lg:px-10 mt-20">
        <div className="relative pl-10">
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-line" />
          <div ref={lineRef} className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-mint via-mint/70 to-mint/10 origin-top" style={{ transform: 'scaleY(0)' }} />
          <div className="space-y-12">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.04} className="relative">
                <span className="process-badge absolute -left-10 top-0.5 grid place-items-center h-8 w-8 rounded-full border border-line bg-card font-mono text-xs text-mute-dim transition-colors">
                  {i + 1}
                </span>
                <h3 className="font-display text-xl">{s.title}</h3>
                <p className="mt-2 text-sm text-mute leading-relaxed max-w-lg">{s.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
