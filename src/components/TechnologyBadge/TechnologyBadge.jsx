import './TechnologyBadge.scss'
import clsx from 'clsx'

export default (props) => {
  const { className, technologyName, logoName } = props

  return (
    <figure className={clsx(className, 'technology-badge')}>
      <div className="technology-badge__body">
        <img
          className="technology-badge__logo"
          src={`/technologyLogos/${logoName}` + '.svg'}
          alt={technologyName}
          title={technologyName}
        />
      </div>
      <figcaption className="technology-badge__caption">
        {technologyName}
      </figcaption>
    </figure>
  )
}
