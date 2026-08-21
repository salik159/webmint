import { useEffect, useRef, useState } from 'react'

type Props = {
  className?: string
}

export default function HeroBackgroundVideo({ className = '' }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [ready, setReady] = useState(false)

  // Reset and start the video whenever this component mounts.
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    let cancelled = false

    const startVideo = async () => {
      try {
        // Make sure the browser doesn't keep a stale playback state
        video.pause()
        video.currentTime = 0

        // Reload the selected source
        video.load()

        if (cancelled) return

        await video.play()

        if (!cancelled) {
          setReady(true)
        }
      } catch {
        // Autoplay can occasionally be blocked by the browser.
      }
    }

    startVideo()

    return () => {
      cancelled = true
      video.pause()
    }
  }, [])

  // Pause when the hero leaves the viewport and resume when it returns.
  useEffect(() => {
    const el = wrapperRef.current
    const video = videoRef.current

    if (!el || !video) return

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      {
        rootMargin: '200px 0px',
      }
    )

    io.observe(el)

    return () => {
      io.disconnect()
    }
  }, [])

  return (
    <div
      ref={wrapperRef}
      className={`absolute inset-0 h-full w-full overflow-hidden ${className}`}
    >
      <img
        src="/hero-poster.jpg"
        srcSet="/hero-poster-mobile.jpg 1280w, /hero-poster.jpg 1920w"
        sizes="100vw"
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="auto"
        poster="/hero-poster.jpg"
        onCanPlay={() => {
          setReady(true)
        }}
        onLoadedData={() => {
          setReady(true)
        }}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-out ${
          ready ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          transform: 'translateZ(0)',
          willChange: 'opacity',
        }}
      >
        <source
          media="(max-width: 767px)"
          src="/video/hero-mobile.webm"
          type="video/webm"
        />

        <source
          media="(max-width: 767px)"
          src="/video/hero-mobile.mp4"
          type="video/mp4"
        />

        <source
          src="/video/hero-desktop.webm"
          type="video/webm"
        />

        <source
          src="/video/hero-desktop.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  )
}