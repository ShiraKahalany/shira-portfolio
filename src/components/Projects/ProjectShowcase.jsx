import { GithubIcon } from '../BrandIcons'
import Reveal from '../Reveal'
import ProjectVisual from './ProjectVisual'
import { projects } from '../../data/projects'
import './ProjectShowcase.css'

export default function ProjectShowcase() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Featured Projects</span>
          <h2 className="section-title">Things I've built</h2>
          <p className="section-sub">
            A selection of production systems, AI tools, and independent products.
          </p>
        </Reveal>

        <div className="projects__list">
          {projects.map((project, i) => (
            <Reveal
              key={project.id}
              className={`projects__row ${i % 2 === 1 ? 'projects__row--reverse' : ''}`}
            >
              <div className="projects__visual">
                <ProjectVisual project={project} />
              </div>

              <div className="projects__info">
                <h3 className="projects__title" style={{ '--dot-color': project.glow.primary }}>
                  {project.title}
                </h3>
                <p className="projects__subtitle">{project.subtitle}</p>
                <p className="projects__desc">{project.description}</p>

                <div className="projects__tech">
                  {project.tech.map((t) => (
                    <span key={t} className="pill">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="projects__actions">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-ghost"
                    >
                      <GithubIcon size={16} /> GitHub
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
