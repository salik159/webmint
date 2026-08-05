import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SmoothScroll from './components/SmoothScroll'
import CustomCursor from './components/CustomCursor'
import LoadingScreen from './components/LoadingScreen'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Team from './pages/Team'
import Process from './pages/Process'
import Portfolio from './pages/Portfolio'
import Testimonials from './pages/Testimonials'
import Pricing from './pages/Pricing'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'

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
      </main>
      <Footer />
    </div>
  )
}
