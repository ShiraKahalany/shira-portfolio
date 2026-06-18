import { motion } from 'framer-motion'
import './ProjectEcosystem.css'

// Two diagonal layouts so consecutive projects don't look identical.
const DIAGONALS = [
  { center: { x: 50, y: 50 }, a: { x: 15, y: 18 }, b: { x: 85, y: 82 } },
  { center: { x: 50, y: 50 }, a: { x: 85, y: 18 }, b: { x: 15, y: 82 } },
]

export default function ProjectEcosystem({ project, index }) {
  const { main, orbit, glow, title } = project
  const diag = DIAGONALS[index % 2]
  const orbitImages = main ? orbit.slice(0, 2) : []
  const positions = [diag.a, diag.b]

  return (
    <div
      className="ecosystem"
      style={{ '--glow-1': glow.primary, '--glow-2': glow.secondary }}
    >
      <div className="ecosystem__halo" />

      {main ? (
        <>
          {orbitImages.length > 0 && (
            <svg className="ecosystem__lines" viewBox="0 0 100 100" preserveAspectRatio="none">
              {orbitImages.map((_, i) => (
                <line
                  key={i}
                  x1={diag.center.x}
                  y1={diag.center.y}
                  x2={positions[i].x}
                  y2={positions[i].y}
                />
              ))}
            </svg>
          )}

          <motion.div
            className="ecosystem__node ecosystem__main"
            style={{ left: `${diag.center.x}%`, top: `${diag.center.y}%` }}
            initial={{ opacity: 0, scale: 0.88 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src={main} alt={`${title} main screenshot`} loading="lazy" />
          </motion.div>

          {orbitImages.map((src, i) => (
            <motion.div
              key={i}
              className="ecosystem__node ecosystem__orbit"
              style={{ left: `${positions[i].x}%`, top: `${positions[i].y}%` }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <img src={src} alt={`${title} detail screenshot`} loading="lazy" />
            </motion.div>
          ))}
        </>
      ) : (
        <div className="ecosystem__placeholder">
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
    </div>
  )
}
