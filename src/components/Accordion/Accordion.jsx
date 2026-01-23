import './Accordion.scss'
import clsx from 'clsx'
import getIdFromString from '@/utils/getIdFromString'

export default (props) => {
  const {
    className,
    title,
    id = getIdFromString(props.title),
    name,
    isOpen = false,
    children,
  } = props

  return (
    <div className={clsx(className, 'accordion')}>
      <details
        className="accordion__details"
        name={name}
        open={isOpen}
      >
        <summary className="accordion__summary">
          <h3 className="accordion__title">
            <span role="term" aria-details={id}>
              {title}
            </span>
          </h3>
        </summary>
      </details>
      <div className="accordion__content" id={id} role="definition">
        <div className="accordion__content-body">{children}</div>
      </div>
    </div>
  )
}
