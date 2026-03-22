'use client'

import ScrollyCanvas from '@/components/ScrollyCanvas'
import Overlay from '@/components/Overlay'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Achievements from '@/components/Achievements'
import About from '@/components/About'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="relative bg-[#121212]">
      {/* Scrollytelling Section */}
      <div className="relative">
        <Overlay />
        <ScrollyCanvas frameCount={120} height="500vh" />
      </div>

      {/* About Section */}
      <About />

      {/* Projects Section */}
      <Projects />

      {/* Experience Section */}
      <Experience />

      {/* Skills Section */}
      <Skills />

      {/* Achievements Section */}
      <Achievements />

      {/* Footer */}
      <footer className="relative py-20 px-4 md:px-12 lg:px-20 border-t border-white/10 bg-white/2">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16"
          >
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Let's Collaborate
              </h3>
              <p className="text-gray-400 font-light text-lg">
                Have an exciting project or opportunity? I'd love to discuss it with you.
              </p>
            </div>

            <a
              href="mailto:sachinkc4456@gmail.com"
              className="px-8 py-4 rounded-full bg-linear-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold transition-all hover:shadow-lg hover:shadow-purple-500/30 whitespace-nowrap"
            >
              Send Me An Email
            </a>
          </motion.div>

          <div className="pt-12 border-t border-white/5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div>
                <p className="text-gray-500 text-sm font-semibold mb-3">CONTACT</p>
                <p className="text-white font-light">sachinkc4456@gmail.com</p>
                <p className="text-white font-light">+91-8602948023</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm font-semibold mb-3">LOCATION</p>
                <p className="text-white font-light">Jammu & Kashmir, India</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm font-semibold mb-3">CONNECT</p>
                <div className="flex gap-4">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors font-light">
                    GitHub
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors font-light">
                    LinkedIn
                  </a>
                  <a href="mailto:sachinkc4456@gmail.com" className="text-gray-400 hover:text-white transition-colors font-light">
                    Email
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm font-light">
              <p>© 2025 Kumar Sachin. All rights reserved.</p>
              <p>Designed & built with React, Next.js & Framer Motion</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
