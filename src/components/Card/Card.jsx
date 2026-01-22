import clsx from 'clsx'
import './Card.scss'

export default (props) => {
  const {
    className,
    layer = 0, // 0 (default, without shadow) | 1 | 2 | 3 (have different shadows)
    children,
  } = props

  return (
    <div className={clsx(className, 'card', `card-layer-${layer}`)}>
      {children}
    </div>
  )
}
