import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Mounts a single Lenis instance for the whole app and keeps GSAP's
// ScrollTrigger in sync with it, so GSAP-driven reveals scrub correctly
// against Lenis's eased scroll position instead of the raw native one.
export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
    })

    lenis.on('scroll', ScrollTrigger.update)

    // Named function (not an inline closure) so it can actually be removed
    // from gsap's ticker on cleanup. Previously this callback was never
    // unregistered, so it kept calling `lenis.raf()` on an already-destroyed
    // Lenis instance if this component ever remounted — a real memory leak
    // that also meant multiple ticker callbacks could stack up over time,
    // each doing extra scroll-position work every animation frame.
    const update = (time: number) => lenis.raf(time * 1000)
    gsap.ticker.add(update)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(update)
      lenis.destroy()
    }
  }, [])

  return null
}
