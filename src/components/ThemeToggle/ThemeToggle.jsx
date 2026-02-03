import './ThemeToggle.scss'
import getIdFromString from '@/utils/getIdFromString'
import clsx from 'clsx'

export default (props) => {
  const {
    className,
    id = getIdFromString(props.label),
    label,
  } = props

  return (
    <label
      className={clsx(className, 'theme-toggle')}
      htmlFor={id}
      data-js-theme-toggle=""
    >
      {label && (
        <span className="theme-toggle__label visually-hidden">
          {label}
        </span>
      )}
      <input
        className="theme-toggle__checkbox hidden"
        id={id}
        type="checkbox"
        readOnly
        data-js-theme-toggle-checkbox=""
      />
      <span className="theme-toggle__slider" tabIndex="0"></span>
    </label>
  )
}
