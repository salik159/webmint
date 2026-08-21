import { motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import { Globe } from 'lucide-react'
import LinkedInIcon from '../components/icons/LinkedInIcon'

// NOTE: swap the /images/team/*.svg placeholders for real headshots (jpg/png,
// square, at least 600x600) — no code changes needed elsewhere, just replace
// the files in public/images/team/.
// Abdul Kareem's links below are placeholders — swap for his real
// portfolio/LinkedIn URLs whenever he has them.
const team = [
  {
    name: 'Salik Kamal',
    role: 'Founder & Lead Web Developer',
    photo: '/images/team/salik.jpeg',
    body: 'Passionate about building high-performance websites that help businesses grow through exceptional design, modern development, and innovative digital solutions.',
    socials: [
      { icon: Globe, label: 'Portfolio', href: 'https://salikkamalportfolio.vercel.app/' },
      { icon: LinkedInIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/in/salik-kamal-b88301369/' },
    ],
  },
  {
    name: 'Abdul Kareem',
    role: 'Digital Marketing Head',
    photo: '/images/team/abdul.svg',
    body: 'Specializes in SEO, Meta Ads, Google Ads, lead generation, branding, and performance marketing to help businesses scale online.',
    socials: [
      { icon: Globe, label: 'Portfolio', href: 'https://www.instagram.com/webmint.design/?hl=en' },
      { icon: LinkedInIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/in/mohammed-abdul-kareem-2449603a1/' },
    ],
  },
  {
    name: 'Farha Deeba',
    role: 'Co-Owner & Client Relations Head',
    photo: '/images/team/farha.png',
    body: 'Focused on client communication, project coordination, and ensuring every client receives a seamless experience from consultation to project delivery.',
    socials: [
      { icon: Globe, label: 'Portfolio', href: 'https://farha-deeba-portfolio.vercel.app/' },
      { icon: LinkedInIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/in/farha-deeba-ai/' },
    ],
  },
]

export default function Team() {
  return (
    <div className="pt-40 pb-24">
      <section className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="font-mono text-[11px] tracking-wider text-mint uppercase">Meet the Team</p>
          <h1 className="mt-4 font-display text-4xl sm:text-6xl font-medium max-w-2xl leading-tight">
            Small team. Senior hands on every project.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-mute leading-relaxed">
            Three people, one standard: every client works directly with the person doing the work — no account managers relaying messages.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 mt-16 grid md:grid-cols-3 gap-6">
        {team.map((m, i) => (
          <Reveal key={m.name} delay={i * 0.08}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 220, damping: 20 }}
              className="group relative rounded-2xl glass p-8 text-center overflow-hidden"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{ boxShadow: '0 0 0 1px rgba(79,140,255,0.5), 0 0 40px -8px rgba(79,140,255,0.55)' }}
              />
              <div className="relative mx-auto h-28 w-28 rounded-full p-[2px] bg-gradient-to-br from-violet via-purple to-mint">
                <img
                  src={m.photo}
                  alt={m.name}
                  className="h-full w-full rounded-full object-cover border-2 border-bg"
                />
              </div>
              <h3 className="relative mt-6 font-display text-xl">{m.name}</h3>
              <p className="relative mt-1 text-sm text-mint">{m.role}</p>
              <p className="relative mt-4 text-sm text-mute leading-relaxed">"{m.body}"</p>
              <div className="relative mt-6 flex justify-center gap-4 text-mute">
                {m.socials.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={`${m.name} on ${label}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-mint transition-colors"
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </motion.div>
          </Reveal>
        ))}
      </section>
    </div>
  )
}
