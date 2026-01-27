import './Section.scss'
import getIdFromString from '@/utils/getIdFromString'
import clsx from 'clsx'

export default (props) => {
  const {
    className,
    title,
    titleId = getIdFromString(props.title),
    description,
    isFullHeight,
    children,
  } = props

  return (
    <section
      className={clsx(
        className,
        'section',
        isFullHeight && 'section--full-height'
      )}
      aria-labelledby={titleId}
    >
      <div className="section__inner container">
        <header className="section__header">
          <h2 className="section__title" id={titleId}>
            {title}
          </h2>
          {description && (
            <p className="section__description">{description}</p>
          )}
        </header>
        <div className="section__body">{children}</div>
      </div>
    </section>
  )
}
