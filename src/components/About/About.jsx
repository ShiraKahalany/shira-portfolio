import { Brain, Server, Layers, Workflow } from 'lucide-react'
import Reveal from '../Reveal'
import './About.css'

const FOCUS = [
  { icon: Brain, label: 'AI & Data Science', desc: 'LLMs, AI agents, prompt engineering' },
  { icon: Server, label: 'Backend', desc: 'Node.js, .NET, REST APIs, databases' },
  { icon: Layers, label: 'Full Stack', desc: 'React, TypeScript, end-to-end products' },
  { icon: Workflow, label: 'Real-Time & Distributed', desc: 'WebSockets, RabbitMQ, DDS' },
]

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">About Me</span>
          <h2 className="section-title">Engineering with product thinking</h2>
        </Reveal>

        <div className="about__grid">
          <Reveal className="about__text glass">
            <p>
              I am a Software Engineer with a B.Sc. in Computer Software and Communications
              Engineering from Lev Academic Center, specializing in AI and Data Science.
            </p>
            <p>
              I enjoy building systems that combine strong engineering foundations with
              real-world product thinking - from backend services and real-time systems to
              AI-powered applications.
            </p>
            <p>
              My experience includes working on production software in a defense environment,
              developing real-time collaboration features, distributed communication tools, and
              independent AI products.
            </p>
          </Reveal>

          <div className="about__focus">
            {FOCUS.map((item, i) => (
              <Reveal key={item.label} delay={i * 0.08} className="about__focus-item glass">
                <item.icon size={20} className="about__focus-icon" />
                <h4>{item.label}</h4>
                <p>{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
