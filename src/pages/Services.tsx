import Reveal from '../components/Reveal'
import MagneticButton from '../components/MagneticButton'
import { ArrowUpRight, Layout, Code2, Search, Megaphone, Palette, Wrench } from 'lucide-react'

const services = [
  {
    icon: Layout,
    title: 'Website Design',
    body: 'Custom UI designed around your brand and audience — responsive, premium, and built to convert.',
    points: ['Custom UI Design', 'Landing Pages', 'Corporate Websites', 'Portfolio Websites'],
  },
  {
    icon: Code2,
    title: 'Website Development',
    body: 'Fast, reliable builds on the stack that fits your project, from React apps to CMS-driven sites.',
    points: ['React & Next.js', 'WordPress & CMS', 'Performance Optimization', 'Ongoing Maintenance'],
  },
  {
    icon: Search,
    title: 'SEO',
    body: 'Technical and on-page SEO that gets you found by the people already searching for what you offer.',
    points: ['Technical SEO', 'On-Page SEO', 'Speed Optimization', 'Search Console Setup'],
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    body: 'Paid and organic growth strategy that turns your new website into a consistent lead source.',
    points: ['Meta & Google Ads', 'Lead Generation', 'Content Marketing', 'Email Marketing'],
  },
  {
    icon: Palette,
    title: 'Branding',
    body: 'Visual identity systems — logo, color, type, and marketing materials — that hold up everywhere.',
    points: ['Logo Design', 'Brand Identity', 'Color Systems', 'Marketing Collateral'],
  },
  {
    icon: Wrench,
    title: 'Website Maintenance',
    body: 'Your site stays fast, secure, and current, so you never have to think about it.',
    points: ['Monthly Updates', 'Bug Fixes', 'Hosting & Security', 'Automated Backups'],
  },
]

export default function Services() {
  return (
    <div className="pt-40 pb-24">
      <section className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="font-mono text-[11px] tracking-wider text-mint uppercase">Services</p>
          <h1 className="mt-4 font-display text-4xl sm:text-6xl font-medium max-w-2xl leading-tight">
            Everything your website needs to earn its keep.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-mute leading-relaxed">
            From first sketch to ongoing support, one team handles design, development, and growth — so nothing falls through the cracks between vendors.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 mt-16 grid md:grid-cols-2 gap-6">
        {services.map(({ icon: Icon, title, body, points }, i) => (
          <Reveal key={title} delay={(i % 2) * 0.08} className="rounded-2xl border border-line bg-card p-8 hover:bg-card-hover transition-colors">
            <div className="flex items-start justify-between">
              <span className="grid place-items-center h-11 w-11 rounded-xl bg-gradient-to-br from-violet/20 to-mint/10 border border-line">
                <Icon size={19} className="text-mint" />
              </span>
              <span className="font-mono text-xs text-mute-dim">0{i + 1}</span>
            </div>
            <h3 className="mt-6 font-display text-xl">{title}</h3>
            <p className="mt-2 text-sm text-mute leading-relaxed">{body}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {points.map((p) => (
                <li key={p} className="rounded-full border border-line px-3 py-1 text-xs text-mute">{p}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 mt-24">
        <Reveal className="rounded-3xl border border-line bg-gradient-to-br from-violet/15 via-card to-mint/10 p-12 lg:p-16 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-medium">Not sure what you need?</h2>
          <p className="mt-3 text-mute max-w-md mx-auto">Tell us where your business is today and where you want it to be — we'll recommend the right scope.</p>
          <div className="mt-8">
            <MagneticButton href="/contact">Talk to us <ArrowUpRight size={16} /></MagneticButton>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
