import './Icon.scss'
import clsx from 'clsx'
import { Icon as IconMinista } from 'minista'

export default (props) => {
  const { className, name, hasFill = true, isColored = false } = props

  return (
    <span className={clsx(className, 'icon')}>
      <IconMinista
        iconId={name}
        fill={
          isColored ? undefined : hasFill ? 'currentColor' : 'none'
        }
        stroke={
          isColored ? undefined : hasFill ? 'none' : 'currentColor'
        }
      />
    </span>
  )
}
