import { Suspense, lazy } from 'react'
import { Radio } from 'lucide-react'
import Reveal from './Reveal'

const WireframeGlobe = lazy(() => import('./WireframeGlobe'))

export default function GlobalReachSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
      <Reveal className="text-center max-w-xl mx-auto">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-violet">Global Reach</p>
        <h2 className="mt-3 font-display text-3xl font-medium sm:text-4xl">
          Built from anywhere. Trusted everywhere.
        </h2>
      </Reveal>

      <Reveal delay={0.1} className="relative mt-12 overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-card/90 to-surface/80 shadow-[0_30px_80px_-35px_rgba(124,77,255,0.45)]">
        <div className="relative aspect-[16/10] sm:aspect-[16/8]">
          {/* background grid + vignette, echoing the HUD reference aesthetic */}
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                'linear-gradient(rgba(0,245,184,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,184,0.08) 1px, transparent 1px)',
              backgroundSize: '36px 36px',
            }}
          />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,transparent,black_85%)] opacity-70" />

          <Suspense
            fallback={
              <div className="absolute inset-0 grid place-items-center">
                <div className="h-40 w-40 rounded-full bg-mint/10 blur-2xl animate-pulse" />
              </div>
            }
          >
            <WireframeGlobe />
          </Suspense>

          {/* HUD overlay */}
          <div className="absolute left-5 top-5 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.3em] text-violet sm:left-6 sm:top-6">
            <Radio size={13} />
            WEBMINT NETWORK
          </div>
          <div className="absolute right-5 top-5 font-mono text-[11px] uppercase tracking-[0.3em] text-mute sm:right-6 sm:top-6">
            6 REGIONS · <span className="text-ink">100+ PROJECTS</span>
          </div>
          <div className="absolute bottom-5 left-5 font-mono text-[11px] uppercase tracking-[0.3em] text-mute-dim sm:bottom-6 sm:left-6">
            LIVE — DELIVERING 24/7
          </div>
        </div>
      </Reveal>
    </section>
  )
}
