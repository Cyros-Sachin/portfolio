'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'REVO – Healthcare Emergency Platform',
    description: 'Real-time platform connecting patients with nearby doctors and ambulances. Built with Socket.IO for live communication and Google Maps API for location-based services, reducing emergency response latency by 30%.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Socket.IO', 'Google Maps API'],
    gradient: 'from-red-500/20 to-pink-500/20',
    impact: '30% Latency Reduction',
  },
  {
    id: 2,
    title: 'Traffic Flow Optimization with IoT',
    description: 'Smart traffic management system leveraging IoT sensors and AI-driven predictive analytics. Processes real-time sensor data to optimize traffic signals and reduce urban congestion through data-driven decision making.',
    tags: ['IoT Sensors', 'Python', 'AI/ML', 'Predictive Analytics'],
    gradient: 'from-yellow-500/20 to-orange-500/20',
    impact: 'Smart City Solution',
  },
  {
    id: 3,
    title: 'GDG CUJ Official Website',
    description: 'Led development and deployment of the official Google Developers Group CUJ website. Features community engagement tools, event showcases, and member portals that boosted digital presence and increased participation.',
    tags: ['React', 'Next.js', 'Responsive Design'],
    gradient: 'from-blue-500/20 to-purple-500/20',
    impact: '500+ Community Members',
  },
  {
    id: 4,
    title: 'Automated Smart Wheelchair',
    description: 'Multi-mode accessibility device with gesture, Bluetooth, and voice control. Integrated pulse oximeter for health tracking and advanced obstacle detection for safety.',
    tags: ['Arduino', 'Bluetooth', 'Voice Recognition', 'Sensors'],
    gradient: 'from-cyan-500/20 to-teal-500/20',
    impact: 'Accessibility Innovation',
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
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
  hover: {
    y: -8,
    boxShadow: '0 20px 60px rgba(99, 102, 241, 0.2)',
  },
}

export default function Projects() {
  return (
    <section className="relative py-32 px-4 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-balance mb-6">
            Selected Works
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl font-light">
            A collection of projects that showcase innovative design thinking, technical excellence, and creative problem-solving.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover="hover"
              className="group relative overflow-hidden rounded-2xl"
            >
              {/* Glass-morphism background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} backdrop-blur-xl border border-white/10 rounded-2xl`} />

              {/* Glow effect on hover */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/0 via-purple-600/0 to-blue-600/0 group-hover:from-purple-600/20 group-hover:via-purple-600/20 group-hover:to-blue-600/20 rounded-2xl transition-all duration-300 blur" />

              {/* Content */}
              <div className="relative p-8 md:p-10 h-full flex flex-col justify-between min-h-80">
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all flex-1">
                      {project.title}
                    </h3>
                    {project.impact && (
                      <span className="text-sm font-semibold px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 whitespace-nowrap">
                        {project.impact}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light mb-8">
                    {project.description}
                  </p>
                </div>

                {/* Tags and CTA */}
                <div className="flex flex-col gap-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm rounded-full bg-white/5 text-gray-300 border border-white/10 group-hover:border-white/30 group-hover:text-white transition-all"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="inline-flex items-center gap-2 text-white group/btn hover:gap-3 transition-all">
                    <span className="font-semibold">View Project</span>
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
