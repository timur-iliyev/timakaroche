import './ColorPalette.scss'

export default () => {
  const colorsClassNames = [
    'color-bg-dark',
    'color-bg',
    'color-bg-light',
    'color-accent',
    'color-accent-secondary',
    'color-text',
    'color-text-secondary',
    'color-border',
    'color-border-top',
    'gradient',
    'gradient-hover',
    'gradient-accent',
  ]

  return (
    <div className="color-palette">
      {colorsClassNames.map((color) => (
        <>
          <div className={color}>{color}</div>
        </>
      ))}
    </div>
  )
}
