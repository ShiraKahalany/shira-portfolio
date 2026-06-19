import ImageCarousel from './ImageCarousel'
import './ProjectVisual.css'

export default function ProjectVisual({ project }) {
  const { images, glow, title } = project
  const hasImages = images && images.length > 0

  return (
    <div className="project-visual" style={{ '--glow-1': glow.primary, '--glow-2': glow.secondary }}>
      <div className="project-visual__halo" />

      {hasImages ? (
        <ImageCarousel images={images} title={title} />
      ) : (
        <div className="carousel-frame project-visual__frame--placeholder">
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
