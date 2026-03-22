'use client'

import { motion } from 'framer-motion'
import { Trophy, Award, Star } from 'lucide-react'

const achievements = [
  {
    id: 1,
    title: 'IIC Hackathon Winner',
    year: '2025',
    description: 'Won prestigious hackathon competition with innovative solutions in healthcare and IoT domains.',
    icon: Trophy,
    gradient: 'from-yellow-500 to-orange-500',
    color: 'text-yellow-500',
  },
  {
    id: 2,
    title: 'Website Design Challenge Champion',
    year: '2024',
    description: 'Won Code Connect CUJ challenge for exceptional web design and user experience implementation.',
    icon: Star,
    gradient: 'from-purple-500 to-pink-500',
    color: 'text-purple-500',
  },
  {
    id: 3,
    title: 'Inspire Award - Top 3',
    year: '2024',
    description: 'Ranked in Top 3 at Inspire Award Manak National Level for innovation and technical excellence.',
    icon: Award,
    gradient: 'from-green-500 to-teal-500',
    color: 'text-green-500',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
  hover: {
    y: -8,
    boxShadow: '0 25px 50px rgba(139, 92, 246, 0.15)',
  },
}

export default function Achievements() {
  return (
    <section className="relative py-32 px-4 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-balance mb-6">
            Awards & Recognitions
          </h2>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
            Industry recognition for innovation, technical excellence, and community leadership.
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {achievements.map((achievement) => {
            const IconComponent = achievement.icon
            return (
              <motion.div
                key={achievement.id}
                variants={cardVariants}
                whileHover="hover"
                className="group relative overflow-hidden rounded-2xl"
              >
                {/* Background */}
                <div className={`absolute inset-0 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl`} />

                {/* Gradient overlay on hover */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${achievement.gradient} opacity-0 group-hover:opacity-5 rounded-2xl blur transition-opacity duration-300`} />

                {/* Content */}
                <div className="relative p-8 h-full flex flex-col">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${achievement.gradient} bg-opacity-10 border border-white/10 flex items-center justify-center mb-6 group-hover:border-white/20 transition-all`}>
                    <IconComponent className={`w-7 h-7 ${achievement.color}`} />
                  </div>

                  {/* Title & Year */}
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all">
                    {achievement.title}
                  </h3>
                  <p className={`text-sm font-semibold ${achievement.color} mb-4`}>
                    {achievement.year}
                  </p>

                  {/* Description */}
                  <p className="text-gray-300 font-light leading-relaxed flex-grow">
                    {achievement.description}
                  </p>

                  {/* Bottom accent */}
                  <div className={`mt-6 h-1 bg-gradient-to-r ${achievement.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-opacity`} />
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 pt-20 border-t border-white/10"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <p className="text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-3">
                3
              </p>
              <p className="text-gray-400 font-light text-lg">Major Awards Won</p>
            </div>
            <div>
              <p className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-3">
                2025
              </p>
              <p className="text-gray-400 font-light text-lg">Most Recent Achievement</p>
            </div>
            <div>
              <p className="text-5xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent mb-3">
                National
              </p>
              <p className="text-gray-400 font-light text-lg">Level Recognition</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
