import './TechnologyBadge.scss'
import clsx from 'clsx'
import { Image } from 'minista'

export default (props) => {
  const { className, technologyName, logoName } = props

  return (
    <figure className={clsx(className, 'technology-badge')}>
      <div className="technology-badge__body">
        <Image
          src={
            `/src/assets/images/technologyLogos/${logoName}` + '.svg'
          }
          alt={technologyName}
          className="technology-badge__logo"
          title={technologyName}
        />
      </div>
      <figcaption className="technology-badge__caption">
        {technologyName}
      </figcaption>
    </figure>
  )
}
