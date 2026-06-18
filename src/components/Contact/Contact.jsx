import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../BrandIcons'
import Reveal from '../Reveal'
import { GITHUB_URL, LINKEDIN_URL, EMAIL } from '../../data/projects'
import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <Reveal className="contact__card glass">
          <div className="contact__glow" />
          <h2 className="contact__title">Let's build something meaningful.</h2>
          <p className="contact__text">
            I am currently looking for software engineering opportunities in backend, full
            stack, AI, and real-time systems.
          </p>
          <div className="contact__actions">
            <a href={`mailto:${EMAIL}`} className="btn btn-primary">
              <Mail size={16} /> Email me
            </a>
            <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="btn btn-ghost">
              <GithubIcon size={16} /> GitHub
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="btn btn-ghost">
              <LinkedinIcon size={16} /> LinkedIn
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
