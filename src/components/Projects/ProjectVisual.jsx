import { motion } from 'framer-motion'
import './ProjectVisual.css'

export default function ProjectVisual({ project }) {
  const { main, gallery, glow, title } = project
  const thumbs = main ? gallery.slice(0, 3) : []

  return (
    <div className="project-visual" style={{ '--glow-1': glow.primary, '--glow-2': glow.secondary }}>
      <div className="project-visual__halo" />

      {main ? (
        <motion.div
          className="project-visual__frame"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <img src={main} alt={`${title} main screenshot`} loading="lazy" />
        </motion.div>
      ) : (
        <div className="project-visual__frame project-visual__frame--placeholder">
          <span>
            {title
              .split(' ')
              .map((w) => w[0])
              .slice(0, 2)
              .join('')}
          </span>
          <p>Coming soon</p>
        </div>
      )}

      {thumbs.length > 0 && (
        <div className="project-visual__gallery">
          {thumbs.map((src, i) => (
            <motion.div
              key={i}
              className="project-visual__thumb"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
            >
              <img src={src} alt={`${title} detail screenshot`} loading="lazy" />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  )
}
