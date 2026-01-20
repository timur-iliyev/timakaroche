import './Logo.scss'
import clsx from 'clsx'

export default (props) => {
  const { className, loading = 'lazy' } = props
  const title = 'Home'

  return (
    <a
      href="/"
      className={clsx(className, 'logo')}
      title={title}
      aria-label={title}
    >
      <img
        src="/logo.svg"
        alt=""
        className="logo__image"
        width={73}
        height={88}
        loading={loading}
      />
    </a>
  )
}
