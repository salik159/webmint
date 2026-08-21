export type Project = {
  slug: string
  name: string
  category: string
  description: string
  stack: string[]
  image: string
  url: string
}

export const projects: Project[] = [
  {
    slug: 'personal-portfolio',
    name: 'Personal Portfolio Website',
    category: 'Personal Branding',
    description:
      'A cinematic personal portfolio built to showcase full-stack projects with motion-led storytelling instead of a static resume layout.',
    stack: ['React', 'Tailwind CSS', 'Framer Motion'],
    image: '/images/projects/portfolio.jpg',
    url: 'https://salikkamalportfolio.vercel.app/',
  },

  {
    slug: 'ngoai-platform',
    name: 'NGO AI Platform',
    category: 'Full-Stack Web App',
    description:
      'An AI-powered platform connecting NGOs with donors and volunteers, with role-based access and OpenAI-driven matching built in.',
    stack: ['React', 'Node.js', 'MongoDB', 'OpenAI API'],
    image: '/images/projects/ngoai.jpg',
    url: 'https://ngoai.vercel.app/',
  },

  {
    slug: 'inamigos-foundation',
    name: 'InAmigos Foundation Website',
    category: 'Non-Profit · NGO',
    description:
      'A production awareness site for a Section 8 non-profit, with a particle-canvas hero and scroll-reveal storytelling that drives donations.',
    stack: ['JavaScript', 'Canvas API', 'GSAP', 'CSS3'],
    image: '/images/projects/inamigos.jpg',
    url: 'https://salik159.github.io/inamigos_project/',
  },

  {
    slug: 'sai-multi-services',
    name: 'Sai Multi Services',
    category: 'Business Website',
    description:
      'A fast, conversion-focused site for a local multi-service business, built around clear service listings and easy inquiry booking.',
    stack: ['React', 'Tailwind CSS', 'Responsive UI'],
    image: '/images/projects/sai.jpg',
    url: 'https://www.saimultiservices.com/',
  },
]