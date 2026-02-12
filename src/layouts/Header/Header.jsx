import './Header.scss'
import clsx from 'clsx'
import Logo from '@/components/Logo'
import BurgerButton from '@/components/BurgerButton'
import AnimatedLink from '@/components/AnimatedLink'
import ThemeToggle from '@/components/ThemeToggle'

export default (props) => {
  const { url } = props
  const menuItems = [
    {
      label: 'About',
      href: '#about-me',
    },
    {
      label: 'Projects',
      href: '#projects',
    },
    {
      label: 'Contact',
      href: '#contact',
    },
  ]

  return (
    <header className="header" data-js-overlay-menu="">
      <div className="header__inner container">
        <Logo className="header__logo" />
        <dialog
          className="header__overlay-menu-dialog"
          data-js-overlay-menu-dialog=""
        >
          <nav className="header__menu">
            <ul className="header__menu-list">
              {menuItems.map(({ label, href }) => (
                <li className="header__menu-item">
                  <AnimatedLink
                    href={href}
                    label={label}
                    className={clsx(
                      'header__menu-link',
                      href === url && 'is-active'
                    )}
                    extraAttributes={{
                      'data-js-overlay-menu-link': '',
                    }}
                  />
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggle
            className="header__theme-toggle"
          />
        </dialog>
        <BurgerButton
          className="header__burger-button visible-mobile"
          extraAttributes={{
            'data-js-overlay-menu-burger-button': '',
          }}
        />
      </div>
    </header>
  )
}
