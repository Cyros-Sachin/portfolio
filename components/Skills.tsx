'use client'

import { motion } from 'framer-motion'

const skillCategories = [
  {
    category: 'Languages',
    skills: ['C++', 'C', 'Java', 'Python', 'JavaScript'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'Tailwind CSS'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'MongoDB', 'MySQL', 'Express.js', 'REST APIs'],
    color: 'from-orange-500 to-red-500',
  },
  {
    category: 'Specializations',
    skills: ['Machine Learning', 'IoT', 'Real-time Systems', 'Data Science', 'CI/CD'],
    color: 'from-green-500 to-teal-500',
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

const skillTagVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3 },
  },
  hover: {
    y: -4,
    boxShadow: '0 10px 30px rgba(139, 92, 246, 0.3)',
  },
}

export default function Skills() {
  return (
    <section className="relative py-32 px-4 md:px-12 lg:px-20 bg-white/5">
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
            Technical Skills
          </h2>
          <p className="text-xl text-gray-400 font-light max-w-2xl">
            A comprehensive toolkit built through hands-on development and continuous learning.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {skillCategories.map((category, categoryIdx) => (
            <motion.div
              key={category.category}
              variants={itemVariants}
              className="relative"
            >
              {/* Category Header */}
              <div className="mb-6">
                <h3 className={`text-2xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.category}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skill}
                    variants={skillTagVariants}
                    whileHover="hover"
                    className="group"
                  >
                    <div className={`relative px-5 py-3 rounded-full bg-gradient-to-r ${category.color} bg-opacity-10 border border-white/20 hover:border-white/40 transition-all cursor-default`}>
                      <span className="text-white font-medium">{skill}</span>
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 pt-20 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <p className="text-4xl font-bold text-white mb-2">11</p>
            <p className="text-gray-400 font-light">Core Technologies</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-white mb-2">4</p>
            <p className="text-gray-400 font-light">Major Projects</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-white mb-2">500+</p>
            <p className="text-gray-400 font-light">Students Mentored</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-white mb-2">3</p>
            <p className="text-gray-400 font-light">Award Wins</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
