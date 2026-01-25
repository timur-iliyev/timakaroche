import './TechnologyBadge.scss'
import clsx from 'clsx'

export default (props) => {
  const { className, technologyName, logoName } = props

  return (
    <figure className={clsx(className, 'technology-badge')}>
      <div className="technology-badge__body">
        <img
          src={
            `/src/assets/images/technologyLogos/${logoName}` + '.svg'
          }
          alt={technologyName}
          className="technology-badge__logo"
          title={technologyName}
          loading="lazy"
        />
      </div>
      <figcaption className="technology-badge__caption">
        {technologyName}
      </figcaption>
    </figure>
  )
}
