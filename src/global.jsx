import '@/styles'
import { Head } from 'minista'
import Header from '@/layouts/Header'
import Content from '@/layouts/Content'
import Footer from '@/layouts/Footer'
import { ReactComponent as LogoBigSvg } from '@/assets/logos/logo-big.svg'

export default (props) => {
  const { children, title, url } = props

  return (
    <>
      <Head htmlAttributes={{ lang: 'en', class: 'is-lock'}}>
        <title>TimaKaroche | {title}</title>
        <script src="/src/main.js" type="module" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
      </Head>
      <div className="preloader" data-js-preloader="">
        <LogoBigSvg className="preloader__logo" />
        <div className="preloader__circle"></div>
      </div>
      <Header url={url} />
      <Content>{children}</Content>
      <Footer />
    </>
  )
}
