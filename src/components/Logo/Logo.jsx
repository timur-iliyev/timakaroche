import './Logo.scss'
import clsx from 'clsx'
import { ReactComponent as LogoSvg } from '@/assets/logos/logo.svg'

export default (props) => {
  const { className } = props
  const title = 'Home'

  return (
    <a
      href="/"
      className={clsx(className, 'logo')}
      title={title}
      aria-label={title}
    >
      <LogoSvg className="logo__image" />
    </a>
  )
}
