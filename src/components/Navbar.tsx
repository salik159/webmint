import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import MagneticButton from './MagneticButton'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Process', to: '/process' },
  { label: 'Team', to: '/team' },
  { label: 'Work', to: '/portfolio' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)

    onScroll()

    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  // Prevent the page behind the menu from scrolling
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Close mobile menu whenever the route changes
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      {/* NAVBAR */}
      <div
        className={`mx-auto flex h-16 max-w-7xl items-center justify-between rounded-full border border-white/10 px-4 transition-all duration-300 sm:px-6 lg:px-8 ${
          scrolled || open
            ? 'bg-slate-950/90 shadow-[0_20px_80px_-30px_rgba(124,77,255,0.55)] backdrop-blur-2xl'
            : 'bg-slate-950/50 shadow-[0_18px_60px_-30px_rgba(5,8,22,0.75)] backdrop-blur-xl'
        }`}
      >
        {/* LOGO */}
        <Link
          to="/"
          className="z-10 flex items-center text-ink"
          onClick={() => setOpen(false)}
        >
          <img
            src="/logo.jpeg"
            alt="WebMint logo"
            className="h-11 w-auto object-contain"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-8 text-[13.5px] text-mute lg:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `relative py-1 transition-colors duration-300 hover:text-ink ${
                  isActive ? 'text-ink' : ''
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {l.label}

                  {isActive && (
                    <motion.span
                      layoutId="nav-dot"
                      className="absolute -bottom-0.5 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet to-transparent"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* DESKTOP CTA */}
        <div className="hidden lg:block">
          <MagneticButton
            href="/contact"
            className="!px-5 !py-2.5 !text-[12px]"
          >
            Start a Project
          </MagneticButton>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          className="z-50 rounded-full border border-white/10 bg-white/10 p-2 text-ink backdrop-blur-md transition-colors hover:bg-white/20 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{
              duration: 0.22,
              ease: 'easeOut',
            }}
            className="fixed left-4 right-4 top-24 bottom-4 z-40 overflow-y-auto rounded-[2rem] border border-white/10 bg-[#050816] shadow-[0_30px_100px_-30px_rgba(0,0,0,0.9)] lg:hidden"
          >
            {/* Subtle purple glow */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-violet/20 blur-[100px]" />

            <nav className="relative flex min-h-full flex-col px-7 pb-8 pt-8">
              {/* MOBILE LINKS */}
              <div className="flex flex-1 flex-col justify-center">
                {links.map((l, i) => (
                  <motion.div
                    key={l.to}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.25,
                      delay: 0.04 + i * 0.04,
                    }}
                  >
                    <NavLink
                      to={l.to}
                      end={l.to === '/'}
                      className={({ isActive }) =>
                        `block border-b border-white/5 py-4 font-display text-3xl transition-colors ${
                          isActive
                            ? 'text-gradient'
                            : 'text-white hover:text-violet'
                        }`
                      }
                    >
                      {l.label}
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              {/* MOBILE CTA */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 0.15 + links.length * 0.04,
                }}
                className="mt-8"
              >
                <MagneticButton
                  href="/contact"
                  className="w-full justify-center"
                >
                  Start a Project
                </MagneticButton>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}