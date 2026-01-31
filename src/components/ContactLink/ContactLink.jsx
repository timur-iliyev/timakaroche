import './ContactLink.scss'
import clsx from 'clsx'
import Icon from '../Icon'
import AnimatedLink from '../AnimatedLink'

export default (props) => {
  const {
    className,
    label,
    icon = {
      name: '',
      hasFill: true,
      colored: false,
    },
    href,
  } = props

  return (
    <div className={clsx(className, 'contact-link')} href={href}>
      <Icon
        className="contact-link__icon"
        name={icon.name}
        hasFill={icon.hasFill}
        isColored={icon.isColored}
      />
      <AnimatedLink href={href} label={label} />
    </div>
  )
}
