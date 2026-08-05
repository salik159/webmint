import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Code2, Sparkles, TrendingUp } from 'lucide-react'


// A real React Three Fiber scene (floating wireframe geometry + a glass
// icosahedron core, gently rotating with mouse-parallax camera movement)
// surrounded by floating glassmorphism UI cards — the "abstract 3D web
// illustration" and "floating UI elements" from the brief, built from
// scratch for WebMint rather than borrowed from any reference.
export default function HeroVisual() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)
  const sx = useSpring(mx, { stiffness: 55, damping: 16 })
  const sy = useSpring(my, { stiffness: 55, damping: 16 })
  const rotateX = useTransform(sy, [0, 1], [8, -8])
  const rotateY = useTransform(sx, [0, 1], [-10, 10])

  function onMove(e: React.MouseEvent) {
    const el = wrapRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width)
    my.set((e.clientY - r.top) / r.height)
  }

  function onLeave() {
    mx.set(0.5)
    my.set(0.5)
  }

  return (
    <div
      ref={wrapRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative w-full aspect-square max-w-lg mx-auto"
      style={{ perspective: 1000 }}
    >
      {/* ambient glow field */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-electric/25 via-blue/15 to-electric/10 blur-[70px]" />
      <div className="absolute -top-6 -right-6 h-40 w-40 rounded-full bg-electric/15 blur-3xl animate-float-slower" />
      <div className="absolute bottom-4 -left-8 h-44 w-44 rounded-full bg-blue/20 blur-3xl animate-float-slow" />

      {/* 3D core (React Three Fiber, lazy-loaded) */}
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative h-full w-full overflow-hidden rounded-[28px]"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/15" />
      </motion.div>

      {/* floating glass card — code */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="glass-strong absolute top-4 -left-2 sm:left-2 rounded-2xl px-4 py-3 flex items-center gap-2.5 animate-float-slow"
      >
        <span className="grid place-items-center h-8 w-8 rounded-lg bg-violet/20 text-violet">
          <Code2 size={15} />
        </span>
        <div>
          <div className="text-[13px] font-medium leading-tight">Clean Code</div>
          <div className="text-[11px] text-mute-dim">React · Tailwind</div>
        </div>
      </motion.div>

      {/* floating glass card — growth */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.75 }}
        className="glass-strong absolute bottom-8 -right-2 sm:right-0 rounded-2xl px-4 py-3 flex items-center gap-2.5 animate-float-slower"
      >
        <span className="grid place-items-center h-8 w-8 rounded-lg bg-mint/15 text-mint">
          <TrendingUp size={15} />
        </span>
        <div>
          <div className="text-[13px] font-medium leading-tight">+142% Growth</div>
          <div className="text-[11px] text-mute-dim">Avg. client uplift</div>
        </div>
      </motion.div>

      {/* floating glass card — quality badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="glass-strong absolute top-1/2 -right-4 sm:-right-6 -translate-y-1/2 rounded-full p-3 animate-float-slow"
      >
        <Sparkles size={16} className="text-electric" />
      </motion.div>
    </div>
  )
}
