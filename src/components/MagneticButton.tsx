import { useRef, type ReactNode } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

type Props = {
  children: ReactNode
  variant?: 'solid' | 'outline'
  href?: string
  onClick?: () => void
  className?: string
  disabled?: boolean
}

export default function MagneticButton({ children, variant = 'solid', href, onClick, className = '', disabled = false }: Props) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null)

  // Motion values instead of React state: `.set()` pushes the new value
  // straight into Framer Motion's own RAF-driven update loop and writes the
  // transform directly to the DOM, without ever going through React's
  // render cycle. The previous version called setState on every mousemove
  // pixel, which re-rendered this component (and its Framer Motion tree)
  // dozens of times per second — multiplied across every CTA button on
  // every page, since this component is used site-wide.
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 180, damping: 16, mass: 0.2 })
  const sy = useSpring(my, { stiffness: 180, damping: 16, mass: 0.2 })

  function handleMove(e: React.MouseEvent) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    mx.set(x * 0.3)
    my.set(y * 0.3)
  }

  function handleLeave() {
    mx.set(0)
    my.set(0)
  }

  const base =
    'group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-[0.2em] uppercase transition-all duration-300 select-none'
  const solid = 'bg-gradient-to-r from-violet via-[#7C4DFF] to-blue text-white shadow-[0_0_40px_-10px_rgba(124,77,255,0.62)] hover:-translate-y-0.5 hover:shadow-[0_0_60px_-12px_rgba(124,77,255,0.8)]'
  const outline = 'border border-white/10 bg-white/5 text-ink backdrop-blur-xl hover:border-violet/40 hover:bg-violet/12 hover:text-white'

  const Component: any = href ? motion.a : motion.button

  return (
    <Component
      ref={ref as any}
      href={href}
      disabled={disabled}
      onClick={onClick}
      onMouseMove={disabled ? undefined : handleMove}
      onMouseLeave={disabled ? undefined : handleLeave}
      style={{ x: sx, y: sy }}
      animate={{ scale: disabled ? 0.98 : 1 }}
      transition={{ type: 'spring', stiffness: 180, damping: 16, mass: 0.2 }}
      className={`${base} ${variant === 'solid' ? solid : outline} ${className} ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`}
    >
      {children}
    </Component>
  )
}
