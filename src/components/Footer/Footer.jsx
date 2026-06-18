import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../BrandIcons'
import { GITHUB_URL, LINKEDIN_URL, EMAIL } from '../../data/projects'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__brand">
          Shira<span className="gradient-text">.</span>
        </p>

        <div className="footer__icons">
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" aria-label="GitHub">
            <GithubIcon size={18} />
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedinIcon size={18} />
          </a>
          <a href={`mailto:${EMAIL}`} aria-label="Email">
            <Mail size={18} />
          </a>
        </div>

        <p className="footer__copy">© {new Date().getFullYear()} Shira Kahalany. All rights reserved.</p>
      </div>
    </footer>
  )
}
