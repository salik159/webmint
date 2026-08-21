export type Testimonial = {
  name: string
  role: string
  company: string
  city: string
  service: string
  date: string
  quote: string
  verified: boolean
  avatarUrl: string
}

// Generated initials avatars in the WebMint brand palette (mint accent on
// near-black), rather than shipping stock headshots. `background`/`color`
// are hex without the leading `#`.
function avatar(name: string) {
  const encoded = encodeURIComponent(name)
  return `https://ui-avatars.com/api/?name=${encoded}&background=00F5B8&color=050816&bold=true&size=128&font-size=0.38`
}

export const testimonials: Testimonial[] = [
  {
    name: 'Rahul Sharma',
    role: 'Owner',
    company: 'Spice Route Kitchen',
    city: 'Hyderabad',
    service: 'Business website & online menu',
    date: 'March 2026',
    quote:
      "We run a busy restaurant in Banjara Hills and our old website looked like it was from 2010. WebMint rebuilt it with online menu, table booking and Google Maps integration, all done in under three weeks. Customers now find us easily on mobile and our weekend bookings have gone up noticeably. Salik personally explained every step, which I really appreciated as I know nothing about websites.",
    verified: true,
    avatarUrl: avatar('Rahul Sharma'),
  },
  {
    name: 'Priya Nair',
    role: 'Founder',
    company: 'Loopwork Analytics',
    city: 'Bengaluru',
    service: 'Landing page & SEO',
    date: 'January 2026',
    quote:
      "Needed a landing page fast for our seed round pitch and WebMint delivered a clean, investor-ready page in 5 days flat. They also set up basic SEO and our organic traffic has slowly started picking up since. What stood out was the copy suggestions — they didn't just design, they actually pushed back on some of our messaging and made it sharper.",
    verified: true,
    avatarUrl: avatar('Priya Nair'),
  },
  {
    name: 'Arjun Patel',
    role: 'Real Estate Consultant',
    company: 'Patel Properties',
    city: 'Ahmedabad',
    service: 'Business website',
    date: 'November 2025',
    quote:
      "Good experience overall. I wanted a simple site to showcase my property listings with a WhatsApp enquiry button and that's exactly what I got, no unnecessary complications. Site loads fast even on 4G which matters a lot since most of my clients are checking it while travelling. Would recommend to other consultants in my network.",
    verified: true,
    avatarUrl: avatar('Arjun Patel'),
  },
  {
    name: 'Sneha Verma',
    role: 'Interior Designer',
    company: 'Studio Sneha',
    city: 'Pune',
    service: 'Portfolio website & UI/UX',
    date: 'February 2026',
    quote:
      "As a designer I'm extremely particular about visuals, and honestly I gave WebMint a hard time with revisions! They handled it patiently. The gallery layout they built for my portfolio shows off project photos beautifully with smooth scroll animations, and it doesn't feel templated at all. Several clients have mentioned the website itself as a reason they trusted me. Worth every rupee.",
    verified: true,
    avatarUrl: avatar('Sneha Verma'),
  },
  {
    name: 'Karan Mehta',
    role: 'Owner',
    company: 'Meta Bridge Digital',
    city: 'Mumbai',
    service: 'Performance optimization',
    date: 'December 2025',
    quote:
      "We hired WebMint specifically to fix our agency site's Lighthouse score — it was sitting at 41 on mobile because of a previous developer's bloated animations. They restructured the image loading, cut down unused JS, and we're now consistently above 90. Our own clients started asking who did the optimization work. Fast, technical, no fluff.",
    verified: true,
    avatarUrl: avatar('Karan Mehta'),
  },
  {
    name: 'Ananya Reddy',
    role: 'Chartered Accountant',
    company: 'Reddy & Associates',
    city: 'Hyderabad',
    service: 'Business website & SEO',
    date: 'April 2026',
    quote:
      "I was hesitant about spending on a website for a CA practice but it has genuinely helped — two new clients this quarter mentioned finding us through Google search after WebMint set up our SEO basics properly. The site itself is simple and professional, exactly what a firm like ours needs. Support after launch has also been responsive whenever I needed a small text change.",
    verified: true,
    avatarUrl: avatar('Ananya Reddy'),
  },
  {
    name: 'Rohit Malhotra',
    role: 'Fitness Coach',
    company: 'RM Transformation',
    city: 'Delhi',
    service: 'Landing page',
    date: 'October 2025',
    quote:
      "Got a landing page built for my online coaching program with a lead form connected straight to my email. Turnaround was quick, maybe a week and a half, and the design has that premium dark aesthetic I wanted instead of the usual generic fitness template look. Conversion from Instagram traffic has been decent so far.",
    verified: true,
    avatarUrl: avatar('Rohit Malhotra'),
  },
  {
    name: 'Divya Iyer',
    role: 'Boutique Owner',
    company: 'Iyer Silks',
    city: 'Chennai',
    service: 'Business website & catalog page',
    date: 'March 2026',
    quote:
      "We wanted a way for customers to browse our saree collection online before visiting the store, without going full e-commerce yet. WebMint built us a beautiful catalog-style site with categories and WhatsApp ordering. My daughter, who is more tech savvy than me, checked everything and said it was very well coded. Happy with the outcome and the price was fair.",
    verified: true,
    avatarUrl: avatar('Divya Iyer'),
  },
  {
    name: 'Vikram Singh',
    role: 'Founder',
    company: 'Singh Exports',
    city: 'Jaipur',
    service: 'Website development & performance',
    date: 'January 2026',
    quote:
      "Our export business needed an international-facing site that loads reliably even for overseas buyers on slower connections. WebMint kept the page weight low, optimized every image, and the site now loads in under two seconds even when I test it on a VPN from the US. Very professional communication throughout, always responded within a day.",
    verified: true,
    avatarUrl: avatar('Vikram Singh'),
  },
]
