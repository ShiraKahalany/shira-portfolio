import { ExternalLink, Users, TrendingUp, Zap, CheckCircle2 } from 'lucide-react'
import ImageCarousel from '../Projects/ImageCarousel'
import Reveal from '../Reveal'
import './Products.css'

const imageModules = import.meta.glob('/images/**/*.{png,jpg,jpeg,webp,PNG,JPG}', {
  eager: true,
  import: 'default',
})

function img(folder, filename) {
  return imageModules[`/images/${folder}/${filename}`]
}

const LEXMEUP_IMAGES = [
  img('LexMeUp', 'home page.png'),
  img('LexMeUp', 'dalily lesson.png'),
  img('LexMeUp', 'progress review.png'),
]

const FEATURES = [
  'Amirent / AMIRAM exam preparation',
  'General English vocabulary learning',
  'Personalized daily lessons',
  'Smart review sessions',
  'Adaptive learning experience',
  'Progress tracking',
  'Streaks & motivation',
]

const RESPONSIBILITIES = [
  'Product vision',
  'UX & feature design',
  'Full-stack development',
  'AI integration',
  'Architecture decisions',
  'Code reviews',
  'Production deployments',
  'User feedback analysis',
  'Continuous product improvement',
]

const METRICS = [
  { Icon: Users, label: '100+ Users' },
  { Icon: TrendingUp, label: 'Growing Weekly' },
  { Icon: Zap, label: 'Live Product' },
]

export default function Products() {
  return (
    <section id="products" className="section products">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Beyond Projects</span>
          <h2 className="section-title products__section-title">
            ✨ Products I'm Building — 2026
          </h2>
          <p className="section-sub">
            Real products. Real users. Full ownership — from idea to production.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <article className="product-card">
            <div className="product-card__glow-orb product-card__glow-orb--a" />
            <div className="product-card__glow-orb product-card__glow-orb--b" />

            <div className="product-card__top-badges">
              <span className="product-badge product-badge--live">
                <span className="product-badge__dot" />
                Live Product
              </span>
              <span className="product-badge product-badge--since">
                Building since 2026
              </span>
            </div>

            <div className="product-card__grid">
              <div className="product-card__visual">
                <div
                  className="product-card__carousel-wrap"
                  style={{ '--glow-1': '#8b5cf6', '--glow-2': '#a78bfa' }}
                >
                  <ImageCarousel images={LEXMEUP_IMAGES} title="LexMeUp" />
                </div>

                <div className="product-card__metrics">
                  {METRICS.map(({ Icon, label }) => (
                    <div key={label} className="product-metric">
                      <Icon size={13} />
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="product-card__content">
                <div className="product-card__title-row">
                  <h3 className="product-card__name">LexMeUp</h3>
                  <span className="product-card__users-badge">🚀 100+ users and growing</span>
                </div>

                <p className="product-card__tagline">English Vocabulary Learning Platform</p>

                <p className="product-card__desc">
                  LexMeUp is an English vocabulary learning platform designed for students, professionals,
                  and anyone who wants to truly master English. It combines structured learning paths with
                  smart repetition and adaptive sessions — making every lesson genuinely effective.
                </p>

                <div className="product-card__features">
                  <p className="product-card__label">What it supports</p>
                  <ul className="product-features-list">
                    {FEATURES.map((f) => (
                      <li key={f}>
                        <CheckCircle2 size={14} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="product-card__closing">
                    AI-powered learning features are currently in development.
                    More surprises are coming.
                  </p>
                </div>

                <div className="product-card__responsibilities">
                  <p className="product-card__label">As Founder & Software Engineer, I own</p>
                  <ul className="product-resp-grid">
                    {RESPONSIBILITIES.map((r) => (
                      <li key={r}>
                        <span className="product-resp-dot" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="product-card__cta">
                  <a
                    href="https://www.lexmeup.com"
                    target="_blank"
                    rel="noreferrer"
                    className="btn product-card__btn"
                  >
                    Try LexMeUp
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
