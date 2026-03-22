'use client'

import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef } from 'react'

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Parallax transforms for different text sections
  const y1 = useTransform(scrollYProgress, [0, 0.3], [0, -100])
  const y2 = useTransform(scrollYProgress, [0.2, 0.5], [100, -100])
  const y3 = useTransform(scrollYProgress, [0.4, 0.7], [100, -100])

  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.3], [1, 1, 0])
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.35, 0.5], [0, 1, 0])
  const opacity3 = useTransform(scrollYProgress, [0.4, 0.55, 0.7], [0, 1, 0])

  return (
    <div ref={containerRef} className="pointer-events-none absolute inset-0 z-50">
      <div className="sticky top-0 h-screen w-full">
        {/* Section 1: Hero Text (0% scroll) */}
        <motion.div
          style={{ y: y1, opacity: opacity1 }}
          className="absolute inset-0 flex flex-col items-center justify-center"
        >
          <div className="text-center">
            <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-balance mb-4 text-white drop-shadow-lg">
              Kumar Sachin.
            </h1>
            <p className="text-2xl md:text-4xl text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text font-semibold mb-4 drop-shadow-md">
              Creative Developer.
            </p>
          </div>
        </motion.div>

        {/* Section 2: Left Text (30% scroll) */}
        <motion.div
          style={{ y: y2, opacity: opacity2 }}
          className="absolute inset-0 flex flex-col items-start justify-center pl-12 md:pl-32"
        >
          <div className="max-w-3xl">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-balance mb-6 text-white leading-tight drop-shadow-lg">
              I build <span className="text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text">digital experiences.</span>
            </h2>
          </div>
        </motion.div>

        {/* Section 3: Right Text (60% scroll) */}
        <motion.div
          style={{ y: y3, opacity: opacity3 }}
          className="absolute inset-0 flex flex-col items-end justify-center pr-12 md:pr-32"
        >
          <div className="max-w-3xl text-right">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-balance mb-6 text-white leading-tight drop-shadow-lg">
              Bridging <span className="text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text">design and engineering.</span>
            </h2>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
