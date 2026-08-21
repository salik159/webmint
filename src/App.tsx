import { Routes, Route, useLocation } from 'react-router-dom'
import { Suspense, lazy, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SmoothScroll from './components/SmoothScroll'
import CustomCursor from './components/CustomCursor'
import LoadingScreen from './components/LoadingScreen'
import Home from './pages/Home'

// Only the landing page (Home) is bundled eagerly, since it's what every
// first-time visitor needs immediately. Every other route is code-split so
// visitors only ever download the JS for the page they're actually on —
// this was previously all bundled into a single ~574KB chunk regardless of
// which page was requested.
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const Team = lazy(() => import('./pages/Team'))
const Process = lazy(() => import('./pages/Process'))
const Portfolio = lazy(() => import('./pages/Portfolio'))
const Testimonials = lazy(() => import('./pages/Testimonials'))
const Pricing = lazy(() => import('./pages/Pricing'))
const FAQ = lazy(() => import('./pages/FAQ'))
const Contact = lazy(() => import('./pages/Contact'))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-bg text-ink">
      <LoadingScreen />
      <SmoothScroll />
      <CustomCursor />
      <div className="grain" />
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-[-8%] h-72 w-72 rounded-full bg-violet/20 blur-[120px]" />
        <div className="absolute bottom-0 right-[-8%] h-80 w-80 rounded-full bg-blue/20 blur-[140px]" />
      </div>
      <Navbar />
      <ScrollToTop />
      <main>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/team" element={<Team />} />
            <Route path="/process" element={<Process />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
