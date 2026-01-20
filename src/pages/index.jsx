import Section from '@/layouts/Section'
import AnimatedLink from '@/components/AnimatedLink'
import ColorPalette from '@/components/ColorPalette'
import Button from '@/components/Button'
import BurgerButton from '@/components/BurgerButton'

export const metadata = {
  title: 'Home',
}

export default () => {
  return (
    <>
      <h1 className="visually-hidden">Home</h1>

      <Section title="Buttons" titleId="buttons">
        <div
          className="wrapper"
          style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}
        >
          <Button label="Button" />
          <Button label="Button Link" href="/" />
          <Button label="Button Transparent" mode="transparent" />
          <Button label="Button" iconName="search" />
          <Button label="Button" iconName="search" />
          <Button label="Button" iconName="search" isLabelHidden />
          <Button
            label="Button"
            iconName="search"
            isLabelHidden
            mode="transparent"
          />
          <Button
            label="Button"
            iconName="search"
            iconPosition="after"
          />
          <Button
            label="Button"
            iconName="search"
            iconPosition="after"
          />
          <BurgerButton />
        </div>
      </Section>

      <Section title="Color Palette" titleId="color-palette">
        <ColorPalette />
      </Section>

      <Section title="AnimatedLink" titleId="animated-link">
        <AnimatedLink label="Tima Karoche" href="/" />
      </Section>
    </>
  )
}
