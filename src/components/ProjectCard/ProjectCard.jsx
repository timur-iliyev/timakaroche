import './ProjectCard.scss'
import Card from '../Card'
import Button from '../Button'
import TechnologyBadge from '../TechnologyBadge'

export default (props) => {
  const { name, description, url, images = [], stack = [] } = props

  return (
    <Card className="project-card" layer={1} tag="article">
      <div
        className="project-card__preview"
        data-js-overlay-images=""
      >
        <button
          className="project-card__preview-button"
          data-js-overlay-open-button=""
        >
          <img
            className="project-card__preview-image"
            src={images.preview}
            alt={`${name} preview`}
            loading="lazy"
          />
        </button>
        <dialog
          className="project-card__dialog"
          aria-modal="true"
          tabIndex={-1}
          data-js-overlay-images-dialog=""
        >
          <div className="project-card__dialog-header">
            <Button
              className="project-card__dialog-close-button"
              label="Close"
              extraAttributes={{
                'data-js-overlay-images-close-button': '',
              }}
            />
          </div>
          <ul className="project-card__dialog-list">
            {images.fullSizeImages.map((fullSizeImage, index) => (
              <li className="project-card__dialog-item">
                <p className="project-card__dialog-item-title h2">
                  {fullSizeImage.title}
                </p>
                <img
                  className="project-card__dialog-item-image"
                  src={fullSizeImage.src}
                  alt={`${name} screenshot ${index}`}
                  loading="lazy"
                />
              </li>
            ))}
          </ul>
        </dialog>
      </div>
      <div className="project-card__content">
        <div className="project-card__text-content">
          <a href={url} className="project-card__link">
            <h3 className="project-card__name">{name}</h3>
          </a>
          <p className="project-card__description">{description}</p>
        </div>
        <ul className="project-card__stack-list">
          {stack.map((technology) => (
            <li className="project-card__stack-item">
              <TechnologyBadge
                className="project-card__stack-badge"
                technologyName={technology.name}
                logoName={technology.logo}
              />
            </li>
          ))}
        </ul>
      </div>
    </Card>
  )
}
