import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, MessageCircle, Phone, ArrowRight } from 'lucide-react'
import { SiInstagram } from 'react-icons/si'
import { AGENCY_EMAIL, AGENCY_PHONE_DISPLAY, AGENCY_WHATSAPP_NUMBER } from '../config/contact'

const columns = [
  {
    title: 'Services',
    links: [
      { label: 'Website Design', to: '/services' },
      { label: 'Development', to: '/services' },
      { label: 'SEO', to: '/services' },
      { label: 'Digital Marketing', to: '/services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Team', to: '/team' },
      { label: 'Process', to: '/process' },
      { label: 'Work', to: '/portfolio' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Pricing', to: '/pricing' },
      { label: 'Testimonials', to: '/testimonials' },
    ],
  },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim()) return
    // Newsletter capture is intentionally lightweight — wire this up to the
    // same Google Apps Script endpoint as the contact form, or a mailing
    // list provider, when ready.
    setSubscribed(true)
    setEmail('')
  }

  return (
    <footer className="relative mt-32 overflow-hidden border-t border-white/10">
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-64 w-[800px] rounded-full bg-violet/10 blur-[120px]" />

      {/* newsletter */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-16">
        <div className="glow-border flex flex-col gap-6 rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.03] p-8 lg:flex-row lg:items-center lg:justify-between lg:p-10">
          <div>
            <h3 className="font-display text-xl sm:text-2xl">Get web design tips, straight to your inbox.</h3>
            <p className="mt-2 text-sm text-mute">No spam — just the occasional insight on design, dev, and growth.</p>
          </div>
          {subscribed ? (
            <p className="text-sm text-mint shrink-0">You're subscribed — thank you!</p>
          ) : (
            <form onSubmit={handleSubscribe} className="flex w-full max-w-sm gap-2 shrink-0">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full rounded-full border border-white/10 bg-surface/70 px-4 py-2.5 text-sm outline-none placeholder:text-mute-dim focus:border-violet/60"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-r from-violet to-blue text-white transition-opacity hover:opacity-90"
              >
                <ArrowRight size={16} />
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr_1fr_1fr] gap-12">
          <div>
            <Link to="/" className="flex items-center text-ink">
              <img src="/logo.jpeg" alt="WebMint logo" className="h-12 w-auto object-contain" />
            </Link>
            <p className="mt-4 text-sm text-mute max-w-xs leading-relaxed">
              We design and build premium websites that turn visitors into customers — for founders who refuse to look ordinary.
            </p>
            <div className="mt-6 flex items-center gap-4 text-mute">
              <a
                href="https://www.instagram.com/webmint.design/?hl=en"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-violet"
              >
                <SiInstagram size={18} />
              </a>
              <a
                href={`https://wa.me/${AGENCY_WHATSAPP_NUMBER}`}
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-violet"
              >
                <MessageCircle size={18} />
              </a>
              <a href={`mailto:${AGENCY_EMAIL}`} aria-label="Email" className="transition-colors hover:text-violet">
                <Mail size={18} />
              </a>
              <a href={`tel:${AGENCY_PHONE_DISPLAY.replace(/[^\d+]/g, '')}`} aria-label="Phone" className="transition-colors hover:text-violet">
                <Phone size={18} />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <div className="font-mono text-[11px] tracking-wider text-mute-dim uppercase">{col.title}</div>
              <ul className="mt-4 space-y-3 text-sm text-mute">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="hover:text-ink transition-colors">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-mute-dim sm:flex-row">
          <p>© {new Date().getFullYear()} WebMint. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-mute">Privacy Policy</a>
            <a href="#" className="hover:text-mute">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
