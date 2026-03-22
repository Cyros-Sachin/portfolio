'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const experiences = [
  {
    id: 1,
    role: 'Full Stack Developer Intern',
    company: 'Cent Stage by Gulsher Kooner',
    period: 'May 2025 - Present',
    description: 'Developing and optimizing full-stack features using React.js, Node.js, and MongoDB with focus on scalability.',
    highlights: [
      'Built responsive React components with 99% performance score',
      'Implemented CI/CD pipelines with GitHub Actions reducing deployment time by 60%',
      'Optimized MongoDB queries improving response time by 40%',
    ],
    gradient: 'from-blue-500/10 to-purple-500/10',
  },
  {
    id: 2,
    role: 'Lead & Organizer',
    company: 'Google Developers Group CUJ',
    period: 'Aug 2025 - Present',
    description: 'Mentoring 500+ students and leading technical initiatives within the developer community.',
    highlights: [
      'Mentored 500+ students in web development and coding best practices',
      'Organized 12+ workshops covering modern frameworks and architecture patterns',
      'Built official GDG website boosting community engagement by 150%',
    ],
    gradient: 'from-yellow-500/10 to-red-500/10',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export default function Experience() {
  return (
    <section className="relative py-32 px-4 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-balance mb-6">
            Experience & Impact
          </h2>
          <p className="text-xl text-gray-400 font-light max-w-2xl">
            Professional roles where I've contributed to meaningful projects and mentored aspiring developers.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={cardVariants}
              className="group relative"
            >
              {/* Timeline line (left side) */}
              <div className="absolute -left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-white/20 via-purple-500/50 to-white/20 hidden md:block" />

              {/* Timeline dot */}
              <div className="absolute -left-16 top-0 w-8 h-8 rounded-full bg-[#1a1a1a] border-2 border-purple-500 hidden md:block" />

              {/* Card */}
              <div className={`bg-gradient-to-br ${exp.gradient} border border-white/10 rounded-2xl p-8 md:p-10 hover:border-white/20 transition-all`}>
                <div className="md:ml-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        {exp.role}
                      </h3>
                      <p className="text-lg text-purple-400 font-semibold">{exp.company}</p>
                    </div>
                    <span className="text-gray-400 font-light whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-gray-300 text-lg mb-6 font-light">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-3">
                    {exp.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex gap-3 items-start">
                        <CheckCircle2 className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 font-light">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
