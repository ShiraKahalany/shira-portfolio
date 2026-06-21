import { Mail, Phone, ArrowUpRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../BrandIcons'
import Reveal from '../Reveal'
import { GITHUB_URL, LINKEDIN_URL, EMAIL, PHONE_DISPLAY, PHONE_HREF } from '../../data/projects'
import './Contact.css'

const CONTACT_METHODS = [
  {
    id: 'linkedin',
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'Shira Kahalany',
    href: LINKEDIN_URL,
    external: true,
  },
  {
    id: 'email',
    icon: Mail,
    label: 'Email',
    value: EMAIL,
    href: `mailto:${EMAIL}`,
  },
  {
    id: 'phone',
    icon: Phone,
    label: 'Phone',
    value: PHONE_DISPLAY,
    href: PHONE_HREF,
  },
  {
    id: 'github',
    icon: GithubIcon,
    label: 'GitHub',
    value: 'ShiraKahalany',
    href: GITHUB_URL,
    external: true,
  },
]

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
          <p className="contact__cta-line">
            Interested in working together? Feel free to reach out.
          </p>

          <div className="contact__grid">
            {CONTACT_METHODS.map((method) => (
              <a
                key={method.id}
                href={method.href}
                target={method.external ? '_blank' : undefined}
                rel={method.external ? 'noreferrer' : undefined}
                className="contact__method"
              >
                <span className="contact__method-icon">
                  <method.icon size={20} />
                </span>
                <span className="contact__method-text">
                  <span className="contact__method-label">{method.label}</span>
                  <span className="contact__method-value">{method.value}</span>
                </span>
                <ArrowUpRight size={16} className="contact__method-arrow" />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
