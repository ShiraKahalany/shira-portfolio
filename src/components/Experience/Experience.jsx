import { CheckCircle2, Trophy } from 'lucide-react'
import Reveal from '../Reveal'
import { experience } from '../../data/experience'
import './Experience.css'

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <Reveal className="section-head">
          <h2 className="section-title">Experience</h2>
        </Reveal>

        <Reveal className="experience__card glass">
          <div className="experience__header">
            <div>
              <h3 className="experience__role">{experience.role}</h3>
              <p className="experience__company">{experience.company}</p>
            </div>
            <span className="pill experience__period">{experience.period}</span>
          </div>

          <p className="experience__summary">{experience.summary}</p>

          <ul className="experience__highlights">
            {experience.highlights.map((h, i) => (
              <li key={i}>
                {h.includes('Hackathon') ? <Trophy size={17} /> : <CheckCircle2 size={17} />}
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
