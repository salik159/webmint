import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LETTERS = 'WEBMINT'.split('')

export default function LoadingScreen() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    if (sessionStorage.getItem('webmint-loaded')) {
      setShow(false)
      return
    }
    const timer = setTimeout(() => {
      setShow(false)
      sessionStorage.setItem('webmint-loaded', '1')
    }, 1900)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className="fixed inset-0 z-[200] grid place-items-center overflow-hidden bg-[radial-gradient(circle_at_top,rgba(124,77,255,0.24),transparent_40%),#050816]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,140,255,0.12),transparent_58%)]" />
          <div className="flex items-center gap-[0.15em]">
            {LETTERS.map((l, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-3xl tracking-[0.35em] text-ink sm:text-5xl"
              >
                {l}
              </motion.span>
            ))}
          </div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.1, delay: 0.5, ease: 'easeInOut' }}
            className="absolute bottom-[38%] left-1/2 h-px w-44 -translate-x-1/2 origin-center bg-gradient-to-r from-transparent via-violet to-transparent sm:bottom-[36%]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
