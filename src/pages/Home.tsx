import { motion } from 'framer-motion'
import { ArrowUpRight, Gauge, ShieldCheck, Smartphone, TrendingUp, ChevronDown } from 'lucide-react'
import MagneticButton from '../components/MagneticButton'
import Reveal from '../components/Reveal'
import ServicesShowcase from '../components/ServicesShowcase'
import FeaturedProjects from '../components/FeaturedProjects'
import TestimonialsMarquee from '../components/TestimonialsMarquee'
import GlobalReachSection from '../components/GlobalReachSection'

const trust = [
  { value: '100+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'Support Coverage' },
  { value: '5+', label: 'Years Combined Experience' },
]

const featureStrip = [
  { icon: Gauge, label: 'Fast Delivery' },
  { icon: TrendingUp, label: 'SEO Optimized' },
  { icon: Smartphone, label: 'Mobile First' },
  { icon: ShieldCheck, label: 'Secure by Default' },
]

const why = [
  {
    title: 'Built for conversion, not just looks',
    body: 'Every layout decision is tested against how visitors actually behave — where they scroll, what they click, where they leave.',
  },
  {
    title: 'Senior designers, no hand-offs',
    body: 'The person who designs your site is the person who builds it. No junior queue, no lost context between teams.',
  },
  {
    title: 'Performance is a feature',
    body: 'We ship sites that load in under two seconds and score 95+ on Lighthouse, because speed is part of the design.',
  },
  {
    title: 'Partnership after launch',
    body: 'Websites aren\u2019t static. We stay on for updates, monitoring, and iteration long after the site goes live.',
  },
]

export default function Home() {
  return (
    <div>
      <section className="relative flex min-h-screen w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ width: '100vw', height: '100vh' }}
        >
          <source src="/video6.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,22,0.45),rgba(5,8,22,0.25),rgba(5,8,22,0.72))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,77,255,0.22),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(79,140,255,0.16),transparent_24%)]" />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 items-center px-6 py-24 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-1.5 font-mono text-[11px] tracking-[0.28em] text-mute backdrop-blur-xl"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet to-blue animate-pulse" />
              DIGITAL SOLUTIONS THAT DRIVE GROWTH
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-7 font-display text-4xl font-medium leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-[4rem]"
            >
              Premium digital experiences for brands that want to lead.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mx-auto mt-6 max-w-xl text-base leading-8 text-mute sm:text-lg lg:mx-0"
            >
              We design and build modern websites that help ambitious businesses grow through exceptional design, performance, and user experience.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
            >
              <MagneticButton href="/contact">
                Start Your Project <ArrowUpRight size={16} />
              </MagneticButton>
              <MagneticButton href="/portfolio" variant="outline">
                View Our Work
              </MagneticButton>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-mute-dim"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={16} />
          </motion.div>
        </motion.div>
      </section>

      <section className="border-y border-white/10 bg-surface/70">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-8 sm:grid-cols-4 lg:px-10">
          {featureStrip.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2.5 text-sm text-mute">
              <Icon size={16} className="shrink-0 text-violet" />
              {label}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <Reveal>
          <p className="text-center font-mono text-[11px] uppercase tracking-[0.3em] text-mute-dim">Trusted by growing businesses</p>
        </Reveal>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {trust.map((t, i) => (
            <Reveal key={t.label} delay={i * 0.08} className="text-center">
              <div className="font-display text-4xl font-medium text-gradient sm:text-5xl">{t.value}</div>
              <div className="mt-2 text-sm text-mute">{t.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      <GlobalReachSection />
      <ServicesShowcase />
      <FeaturedProjects />

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-violet">Why WebMint</p>
          <h2 className="mt-3 max-w-lg font-display text-3xl font-medium sm:text-4xl">
            Confident design. Measurable growth.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {why.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <div className="glow-border h-full rounded-2xl glass p-8 transition-colors duration-300 hover:bg-white/[0.05]">
                <h3 className="font-display text-lg font-medium">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mute">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="section-shell relative grid items-center gap-12 overflow-hidden rounded-[2rem] p-10 lg:grid-cols-2 lg:p-16">
          <div className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-violet/18 blur-[100px]" />
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-violet">How We Work</p>
            <h2 className="mt-3 font-display text-3xl font-medium sm:text-4xl">
              A clear process, from first call to launch day.
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-mute">
              No black boxes. You'll always know what stage your project is in, what we need from you, and what happens next.
            </p>
            <div className="mt-8">
              <MagneticButton href="/process" variant="outline">See the full process</MagneticButton>
            </div>
          </Reveal>
          <Reveal delay={0.15} className="relative grid grid-cols-2 gap-4">
            {['Discovery', 'Design', 'Development', 'Launch'].map((step, i) => (
              <div key={step} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-mute-dim">0{i + 1}</span>
                <p className="mt-2 font-display text-base">{step}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <TestimonialsMarquee />

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <Reveal className="section-shell relative overflow-hidden rounded-[2rem] p-12 text-center lg:p-20">
          <div className="pointer-events-none absolute bottom-[-5rem] left-1/2 h-64 w-[34rem] -translate-x-1/2 rounded-full bg-violet/20 blur-[110px]" />
          <div className="pointer-events-none absolute -right-10 top-[-3rem] h-48 w-48 rounded-full bg-blue/20 blur-[90px]" />
          <p className="relative font-mono text-[11px] uppercase tracking-[0.3em] text-violet">Ready to get started?</p>
          <h2 className="relative mt-4 font-display text-3xl font-medium sm:text-5xl">
            Let's Build Something <span className="text-gradient">Amazing Together.</span>
          </h2>
          <p className="relative mx-auto mt-4 max-w-md text-mute">
            Tell us about your project and we'll reply within one business day with next steps.
          </p>
          <div className="relative mt-9 flex justify-center gap-4">
            <MagneticButton href="/contact">Start Your Project <ArrowUpRight size={16} /></MagneticButton>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
