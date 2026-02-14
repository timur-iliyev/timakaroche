import '@/styles'
import { Head } from 'minista'
import Header from '@/layouts/Header'
import Content from '@/layouts/Content'
import Footer from '@/layouts/Footer'
import Preloader from './layouts/Preloader'

export default (props) => {
  const { children, url } = props

  return (
    <>
      <Head
        htmlAttributes={{
          lang: 'en',
          'data-theme': 'dark',
        }}
      >
        <title>TimaKaroche</title>

        <meta
          name="description"
          content="Frontend portfolio of Timur Iliyev."
        />
        <meta
          property="description"
          content="Frontend portfolio of Timur Iliyev."
        />
        <link
          rel="canonical"
          href="https://timakaroche.vercel.app/"
        />
        <meta name="robots" content="index,follow" />

        <meta
          property="og:url"
          content="https://timakaroche.vercel.app/"
        />
        <meta property="og:site_name" content="TimaKaroche" />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="TimaKaroche — Timur Iliyev"
        />
        <meta
          property="og:description"
          content="Frontend portfolio of Timur Iliyev."
        />
        <meta
          property="og:image"
          content="/og_timakaroche.png"
        />
        <meta property="og:image:alt" content="TimaKaroche logo" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="TimaKaroche — Timur Iliyev"
        />
        <meta
          name="twitter:description"
          content="Frontend portfolio of Timur Iliyev."
        />
        <meta
          name="twitter:image"
          content="/og_timakaroche.png"
        />

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
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Preloader />
      <Header url={url} />
      <Content>{children}</Content>
      <Footer />
    </>
  )
}
