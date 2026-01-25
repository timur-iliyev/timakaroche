import './Card.scss'
import clsx from 'clsx'

export default (props) => {
  const {
    className,
    tag = 'div',
    layer = 0, // 0 (default, without shadow) | 1 | 2 | 3 (have different shadows)
    isHoverable = false,
    children,
  } = props

  const CardTag = tag

  return (
    <CardTag
      className={clsx(
        className,
        'card',
        `card-layer-${layer}`,
        isHoverable && 'card--hoverable'
      )}
    >
      {children}
    </CardTag>
  )
}
