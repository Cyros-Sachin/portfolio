'use client'

import { motion } from 'framer-motion'
import { Code2, Zap, Users, Target } from 'lucide-react'

const values = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing scalable, maintainable code that stands the test of time and can be understood at a glance.',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimizing systems for speed and efficiency, reducing latency and improving user experience.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Mentoring developers, sharing knowledge, and contributing to open-source projects and initiatives.',
  },
  {
    icon: Target,
    title: 'Innovation',
    description: 'Building cutting-edge solutions that solve real-world problems using modern technologies.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
}

export default function About() {
  return (
    <section className="relative py-32 px-4 md:px-12 lg:px-20 bg-white/2">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-balance mb-8">
              About Me
            </h2>

            <div className="space-y-6 text-gray-300 font-light">
              <p className="text-lg leading-relaxed">
                I'm an aspiring full-stack developer and student at Central University of Jammu, currently pursuing B.Tech in Computer Science & Engineering. With a strong foundation in data structures, algorithms, and systems development, I'm passionate about building scalable solutions that make a real impact.
              </p>

              <p className="text-lg leading-relaxed">
                My journey has been marked by hands-on experience in healthcare technology, IoT systems, and community leadership. At 500+ students, I've mentored as the Lead of Google Developers Group CUJ, where I organize workshops, lead technical talks, and foster innovation through collaborative projects.
              </p>

              <p className="text-lg leading-relaxed">
                What drives me is the intersection of technology and human impact – whether it's reducing emergency response times through real-time platforms or making technology accessible through adaptive devices. I believe in continuous learning, open-source contribution, and solving challenges that matter.
              </p>

              <div className="pt-4">
                <p className="text-sm text-purple-400 font-semibold mb-3">CORE VALUES</p>
                <p className="text-gray-400 text-base">
                  Scalability • Innovation • Community • Excellence • Open Source
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-10"
            >
              <a
                href="mailto:sachinkc4456@gmail.com"
                className="inline-flex items-center px-8 py-4 rounded-full bg-linear-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold transition-all hover:shadow-lg hover:shadow-purple-500/30"
              >
                Get In Touch
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Values Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {values.map((value) => {
              const IconComponent = value.icon
              return (
                <motion.div
                  key={value.title}
                  variants={itemVariants}
                  whileHover={{ x: 8 }}
                  className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/8 transition-all cursor-pointer"
                >
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-lg bg-linear-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center shrink-0">
                      <IconComponent className="w-6 h-6 text-purple-400" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-2">
                        {value.title}
                      </h3>
                      <p className="text-gray-400 text-sm font-light leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
