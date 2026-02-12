import './ThemeToggle.scss'
import getIdFromString from '@/utils/getIdFromString'
import clsx from 'clsx'

export default (props) => {
  const {
    className,
    id = getIdFromString(props.label || 'toggle-theme'),
    label = 'Toggle theme',
  } = props

  return (
    <label
      className={clsx(className, 'theme-toggle')}
      htmlFor={id}
      data-js-theme-toggle=""
    >
      <input
        className="theme-toggle__checkbox hidden"
        id={id}
        type="checkbox"
        data-js-theme-toggle-checkbox=""
      />
      <span
        className="theme-toggle__slider"
        tabIndex="0"
        role="switch"
        aria-label={label}
        aria-checked="false"
        data-js-theme-toggle-slider=""
      ></span>
    </label>
  )
}
