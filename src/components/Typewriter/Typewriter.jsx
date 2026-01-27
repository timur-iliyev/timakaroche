import clsx from 'clsx'
import './Typewriter.scss'

export default (props) => {
  const { className, text, tag = 'p' } = props

  const Tag = tag

  return (
    <Tag className={clsx(className, 'typewriter')} aria-label={text}>
      <span
        className="typewriter__inner"
        aria-hidden="true"
        data-js-typewriter={JSON.stringify(text)}
      ></span>
    </Tag>
  )
}
