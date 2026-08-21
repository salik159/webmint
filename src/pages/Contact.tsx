import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from '../components/Reveal'
import MagneticButton from '../components/MagneticButton'
import { GOOGLE_APPS_SCRIPT_URL, AGENCY_EMAIL, AGENCY_PHONE_DISPLAY, AGENCY_WHATSAPP_NUMBER } from '../config/contact'
import { Mail, Phone, MessageCircle, CheckCircle2 } from 'lucide-react'
import { SiInstagram } from 'react-icons/si'

type FormState = {
  fullName: string
  businessName: string
  email: string
  phone: string
  service: string
  budget: string
  message: string
  // honeypot field — real users never fill this in, bots often do
  website: string
}

const initialState: FormState = {
  fullName: '',
  businessName: '',
  email: '',
  phone: '',
  service: 'Website Design',
  budget: '',
  message: '',
  website: '',
}

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [status, setStatus] = useState<Status>('idle')

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {}
    if (!form.fullName.trim()) next.fullName = 'Full name is required.'
    if (!form.email.trim()) next.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email address.'
    if (!form.phone.trim()) next.phone = 'Phone number is required.'
    if (!form.message.trim()) next.message = 'Tell us a little about your project.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    // Honeypot: if this hidden field is filled, silently drop the submission.
    if (form.website) return

    if (!validate()) return

    setStatus('submitting')
    try {
      // Google Apps Script Web Apps don't return readable CORS responses for
      // no-cors POSTs, so we fire-and-confirm rather than parse a response.
      // Configure GOOGLE_APPS_SCRIPT_URL in src/config/contact.ts.
      await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
          fullName: form.fullName,
          businessName: form.businessName,
          email: form.email,
          phone: form.phone,
          service: form.service,
          budget: form.budget,
          message: form.message,
          submittedAt: new Date().toISOString(),
        }),
      })
      setStatus('success')
      setForm(initialState)
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'mt-2 w-full rounded-lg border border-line bg-white/[0.03] px-4 py-3 text-sm outline-none transition-colors focus:border-violet/60 placeholder:text-mute-dim'

  return (
    <div className="pt-40 pb-24">
      <section className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="font-mono text-[11px] tracking-wider text-mint uppercase">Contact</p>
          <h1 className="mt-4 font-display text-4xl sm:text-6xl font-medium max-w-2xl leading-tight">
            Let's build something amazing together.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-mute leading-relaxed">
            Tell us about your project and we'll reply within one business day with next steps and a rough scope.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 mt-16 grid lg:grid-cols-[1.2fr_0.8fr] gap-10">
        {/* Glassmorphism form card */}
        <Reveal
          className="glow-border relative rounded-2xl glass-strong p-8 lg:p-10 overflow-hidden"
          y={20}
        >
          <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-violet/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-mint/10 blur-3xl" />

          <div className="relative">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-16 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 16, delay: 0.1 }}
                    className="mx-auto grid place-items-center h-16 w-16 rounded-full bg-mint/15 text-mint"
                  >
                    <CheckCircle2 size={30} />
                  </motion.div>
                  <p className="mt-6 font-display text-2xl">Thanks — got it.</p>
                  <p className="mt-2 text-mute text-sm">
                    Your message has been recorded and our team has been notified. We'll be in touch within one business day.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-sm text-mint hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                  noValidate
                >
                  {/* honeypot — hidden from real users */}
                  <input
                    type="text"
                    name="website"
                    value={form.website}
                    onChange={(e) => update('website', e.target.value)}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-xs text-mute-dim font-mono uppercase tracking-wider">Full Name *</label>
                      <input
                        type="text"
                        value={form.fullName}
                        onChange={(e) => update('fullName', e.target.value)}
                        className={inputClass}
                        placeholder="Your full name"
                      />
                      {errors.fullName && <p className="mt-1.5 text-xs text-red-400">{errors.fullName}</p>}
                    </div>
                    <div>
                      <label className="text-xs text-mute-dim font-mono uppercase tracking-wider">Business Name</label>
                      <input
                        type="text"
                        value={form.businessName}
                        onChange={(e) => update('businessName', e.target.value)}
                        className={inputClass}
                        placeholder="Company name"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-xs text-mute-dim font-mono uppercase tracking-wider">Email Address *</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => update('email', e.target.value)}
                        className={inputClass}
                        placeholder="you@company.com"
                      />
                      {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
                    </div>
                    <div>
                      <label className="text-xs text-mute-dim font-mono uppercase tracking-wider">Phone Number *</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => update('phone', e.target.value)}
                        className={inputClass}
                        placeholder="+1 (555) 000-0000"
                      />
                      {errors.phone && <p className="mt-1.5 text-xs text-red-400">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-xs text-mute-dim font-mono uppercase tracking-wider">Service Required</label>
                      <select
                        value={form.service}
                        onChange={(e) => update('service', e.target.value)}
                        className={`${inputClass} text-mute`}
                      >
                        <option>Website Design</option>
                        <option>Website Development</option>
                        <option>E-Commerce</option>
                        <option>SEO</option>
                        <option>Digital Marketing</option>
                        <option>Branding</option>
                        <option>Website Maintenance</option>
                        <option>Something else</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs text-mute-dim font-mono uppercase tracking-wider">Budget (Optional)</label>
                      <select
                        value={form.budget}
                        onChange={(e) => update('budget', e.target.value)}
                        className={`${inputClass} text-mute`}
                      >
                        <option value="">Prefer not to say</option>
                        <option>Under 3k</option>
                        <option>1,500 – 6k</option>
                        <option>6,000 – 10k</option>
                        <option>10k+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-mute-dim font-mono uppercase tracking-wider">Message *</label>
                    <textarea
                      rows={5}
                      value={form.message}
                      onChange={(e) => update('message', e.target.value)}
                      className={`${inputClass} resize-none`}
                      placeholder="What are you looking to build?"
                    />
                    {errors.message && <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>}
                  </div>

                  {status === 'error' && (
                    <p className="text-sm text-red-400">
                      Something went wrong sending your message. Please try again, or email us directly at {AGENCY_EMAIL}.
                    </p>
                  )}

                  <MagneticButton className="w-full justify-center" disabled={status === 'submitting'}>
                    {status === 'submitting' ? 'Sending…' : 'Send Message'}
                  </MagneticButton>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="space-y-4">
          <div className="glow-border rounded-2xl glass p-6 flex items-start gap-4">
            <span className="grid place-items-center h-10 w-10 rounded-xl bg-violet/15 text-mint shrink-0"><Mail size={18} /></span>
            <div>
              <p className="text-sm font-medium">Email</p>
              <a href={`mailto:${AGENCY_EMAIL}`} className="text-sm text-mute mt-0.5 hover:text-mint transition-colors">{AGENCY_EMAIL}</a>
            </div>
          </div>
          <div className="glow-border rounded-2xl glass p-6 flex items-start gap-4">
            <span className="grid place-items-center h-10 w-10 rounded-xl bg-violet/15 text-mint shrink-0"><Phone size={18} /></span>
            <div>
              <p className="text-sm font-medium">Phone</p>
              <a href={`tel:${AGENCY_PHONE_DISPLAY.replace(/[^\d+]/g, '')}`} className="text-sm text-mute mt-0.5 hover:text-mint transition-colors">{AGENCY_PHONE_DISPLAY}</a>
            </div>
          </div>
          <a
            href={`https://wa.me/${AGENCY_WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-2xl border border-mint/30 bg-mint/10 p-4 text-sm font-medium text-mint transition-all duration-300 hover:-translate-y-0.5 hover:bg-mint/15"
          >
            <MessageCircle size={18} /> Chat on WhatsApp
          </a>

          <a
            href="https://www.instagram.com/webmint.design/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center justify-center gap-2 rounded-2xl border border-pink-400/30 bg-gradient-to-r from-pink-500/15 via-purple-500/15 to-orange-400/15 p-4 text-sm font-medium text-pink-100 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_24px_-6px_rgba(236,72,153,0.35)]"
          >
            <SiInstagram size={18} /> Follow us on Instagram
          </a>
        </Reveal>
      </section>
    </div>
  )
}
