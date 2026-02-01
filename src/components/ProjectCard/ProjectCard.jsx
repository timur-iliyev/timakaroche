import './ProjectCard.scss'
import Card from '../Card'
import Button from '../Button'
import TechnologyBadge from '../TechnologyBadge'
import { Image } from 'minista'
import AnimatedLink from '../AnimatedLink'

export default (props) => {
  const {
    name,
    description,
    links, // {}
    images = [],
    stack = [],
  } = props

  return (
    <Card className="project-card" layer={1} tag="article">
      <div
        className="project-card__preview"
        data-js-overlay-images=""
      >
        <button
          className="project-card__preview-button"
          aria-label={`View ${name} fullscreen`}
          data-js-overlay-open-button=""
        >
          <Image
            className="project-card__preview-image"
            src={images.preview}
            alt=""
          />
        </button>
        <dialog
          className="project-card__dialog"
          aria-modal="true"
          tabIndex={-1}
          data-js-overlay-images-dialog=""
        >
          <header className="project-card__dialog-header">
            <Button
              className="project-card__dialog-close-button"
              label="Close"
              extraAttributes={{
                'data-js-overlay-images-close-button': '',
              }}
            />
          </header>
          <ul className="project-card__dialog-list">
            {images.fullSizeImages.map((fullSizeImage, index) => (
              <li className="project-card__dialog-item">
                <p className="project-card__dialog-item-title h2">
                  {fullSizeImage.title}
                </p>
                <Image
                  className="project-card__dialog-item-image"
                  src={fullSizeImage.src}
                  alt={`${name} screenshot ${index}`}
                />
              </li>
            ))}
          </ul>
        </dialog>
      </div>
      <div className="project-card__content">
        <div className="project-card__content-body">
          <div className="project-card__text-content">
            <a href={links?.mainLink} className="project-card__link">
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
        <div className="project-card__additional-links">
          {links && (
            <h4 className="project-card__additional-links-title">
              Links:
            </h4>
          )}
          <ul className="project-card__additional-links-list">
            {links?.additionalLinks?.map((link) => (
              <Card
                className="project-card__additional-links-item"
                tag="li"
                layer={2}
                isHoverable
              >
                <AnimatedLink label={link.label} href={link.url} />
              </Card>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  )
}
