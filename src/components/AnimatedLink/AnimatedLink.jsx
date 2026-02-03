import './AnimatedLink.scss'
import clsx from 'clsx'
import getSegmentedString from '@/utils/getSegmentedString'

export default (props) => {
  const {
    className,
    href,
    label,
    target = '_self',
    extraAttributes = {},
  } = props
  const isExternal = href.startsWith('http')

  const labelSegmented = getSegmentedString(label)

  return (
    <a
      className={clsx(className, 'animated-link')}
      href={href}
      target={isExternal ? '_blank' : target}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      aria-label={label}
      {...extraAttributes}
    >
      {labelSegmented.map((char, index) => (
        <span
          className="animated-link__char"
          aria-hidden="true"
          style={{ transitionDelay: `${index * 0.02}s` }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </a>
  )
}
