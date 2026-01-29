import Hero from '@/sections/Hero'
import About from '@/sections/About'
import Projects from '@/sections/Projects'

export const metadata = {
  title: 'Home',
}

export default () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
    </>
  )
}
