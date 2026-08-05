import { useEffect, useRef, useState } from 'react'

// Desktop-only custom cursor: a lagging outer ring + a snappy inner dot.
// Expands over interactive elements. Disabled on touch devices (index.css
// restores the native cursor there via a `(hover: none)` media query, and
// this component simply doesn't mount its ring/dot when touch is detected).
export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches
    if (isTouch) return
    setEnabled(true)

    let ringX = window.innerWidth / 2
    let ringY = window.innerHeight / 2
    let targetX = ringX
    let targetY = ringY
    let raf = 0

    function onMove(e: MouseEvent) {
      targetX = e.clientX
      targetY = e.clientY
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%)`
      }
      setVisible(true)
    }

    function onOver(e: MouseEvent) {
      const target = e.target as HTMLElement
      if (target.closest('a, button, input, textarea, select, [role="button"]')) {
        setHovering(true)
      } else {
        setHovering(false)
      }
    }

    function tick() {
      ringX += (targetX - ringX) * 0.18
      ringY += (targetY - ringY) * 0.18
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`
      }
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    window.addEventListener('mouseleave', () => setVisible(false))
    raf = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      cancelAnimationFrame(raf)
    }
  }, [])

  if (!enabled) return null

  return (
    <div className={`pointer-events-none fixed inset-0 z-[100] transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      <div
        ref={ringRef}
        className="fixed left-0 top-0 rounded-full border transition-[width,height,border-color] duration-200 ease-out"
        style={{
          width: hovering ? 52 : 32,
          height: hovering ? 52 : 32,
          borderColor: hovering ? 'rgba(0,245,184,0.7)' : 'rgba(255,255,255,0.35)',
          borderWidth: 1.5,
          background: hovering ? 'rgba(0,245,184,0.08)' : 'transparent',
        }}
      />
      <div
        ref={dotRef}
        className="fixed left-0 top-0 h-1.5 w-1.5 rounded-full bg-mint"
      />
    </div>
  )
}
