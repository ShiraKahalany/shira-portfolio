import { motion } from 'framer-motion'
import { Mail, ArrowRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../BrandIcons'
import { GITHUB_URL, LINKEDIN_URL } from '../../data/projects'
import './Hero.css'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__glow hero__glow--1" />
      <div className="hero__glow hero__glow--2" />

      <div className="container hero__inner">
        <motion.p
          className="eyebrow hero__eyebrow"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Software Engineer · AI · Backend · Real-Time Systems
        </motion.p>

        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Shira <span className="gradient-text">Kahalany</span>
        </motion.h1>

        <motion.p
          className="hero__subtitle"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Software Engineer building AI, backend, and intelligent real-time systems.
        </motion.p>

        <motion.p
          className="hero__description"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          B.Sc. Software &amp; Communications Engineering graduate specializing in AI and Data
          Science, with hands-on experience developing production systems, real-time
          communication platforms, distributed architecture, and AI-powered applications.
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a href="#projects" className="btn btn-primary">
            View Projects <ArrowRight size={16} />
          </a>
          <a href="#contact" className="btn btn-ghost">
            <Mail size={16} /> Contact
          </a>
        </motion.div>
      </div>

      <div className="hero__scroll-cue">
        <span />
      </div>
    </section>
  )
}
