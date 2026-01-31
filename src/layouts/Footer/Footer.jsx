import './Footer.scss'
import Typewriter from '@/components/Typewriter'
import ContactLink from '@/components/ContactLink'
import Card from '@/components/Card'
import { ReactComponent as LogoBigSvg } from '@/assets/logos/logo-big.svg'

const contactLinks = [
  {
    label: 'timur-iliyev',
    icon: {
      name: 'github',
      hasFill: true,
    },
    href: 'https://github.com/timur-iliyev',
  },
  {
    label: 'Timur Iliyev',
    icon: {
      name: 'linkedin',
      isColored: true,
    },
    href: 'https://www.linkedin.com/in/timur-iliyev/',
  },
  {
    label: 'timakaroche',
    icon: {
      name: 'npm',
      isColored: true,
    },
    href: 'https://www.npmjs.com/~timakaroche',
  },
  {
    label: 'timur.dela@gmail.com',
    icon: {
      name: 'email',
      hasFill: false,
    },
    href: 'mailto:timur.dela@gmail.com',
  },
]

export default () => {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <Card className="footer__body" layer={1} isHoverable>
          <div className="footer__body-col">
            <Typewriter
              className="footer__title"
              text="Contact me"
              tag="h2"
              id="contact"
            />
          </div>
          <div className="footer__body-col">
            <div className="footer__contact">
              <div className="footer__contact-links">
                {contactLinks.map(({ label, icon, href }) => (
                  <ContactLink
                    label={label}
                    icon={icon}
                    href={href}
                  />
                ))}
              </div>
            </div>
          </div>
        </Card>
        <div className="footer__bottom">
          <LogoBigSvg className="footer__bottom-logo" />
          <div className="footer__bottom-copyright">
            © 2026 Timur Iliyev
          </div>
        </div>
      </div>
    </footer>
  )
}
