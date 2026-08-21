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
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div
        className={`mx-auto flex h-16 max-w-7xl items-center justify-between rounded-full border border-white/10 px-4 transition-all duration-300 sm:px-6 lg:px-8 ${
          scrolled || open
            ? 'bg-slate-950/70 shadow-[0_20px_80px_-30px_rgba(124,77,255,0.55)] backdrop-blur-2xl'
            : 'bg-white/5 shadow-[0_18px_60px_-30px_rgba(5,8,22,0.75)] backdrop-blur-xl'
        }`}
      >
        <Link to="/" className="z-10 flex items-center text-ink">
          <img src="/logo.jpeg" alt="WebMint logo" className="h-11 w-auto object-contain" />
        </Link>

        <nav className="hidden items-center gap-8 text-[13.5px] text-mute lg:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `relative py-1 transition-colors duration-300 hover:text-ink ${isActive ? 'text-ink' : ''}`
              }
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  {isActive && (
                    <motion.span layoutId="nav-dot" className="absolute -bottom-0.5 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet to-transparent" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <MagneticButton href="/contact" className="!px-5 !py-2.5 !text-[12px]">
            Start a Project
          </MagneticButton>
        </div>

        <button
          className="z-10 rounded-full border border-white/10 bg-white/5 p-2 text-ink lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-20 z-40 bg-[radial-gradient(circle_at_top,rgba(124,77,255,0.2),transparent_40%),#050816] lg:hidden"
          >
            <nav className="flex h-full flex-col px-6 pb-10 pt-4">
              <div className="flex flex-1 flex-col justify-center gap-1">
                {links.map((l, i) => (
                  <motion.div
                    key={l.to}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.05 + i * 0.04 }}
                  >
                    <NavLink
                      to={l.to}
                      end={l.to === '/'}
                      className={({ isActive }) =>
                        `block py-3 font-display text-3xl ${isActive ? 'text-gradient' : 'text-ink'}`
                      }
                    >
                      {l.label}
                    </NavLink>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.1 + links.length * 0.04 }}
              >
                <MagneticButton href="/contact" className="w-full justify-center">
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
