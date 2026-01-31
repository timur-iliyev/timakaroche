import './Typewriter.scss'
import clsx from 'clsx'

export default (props) => {
  const { className, text, tag = 'p', id } = props

  const Tag = tag

  return (
    <Tag
      className={clsx(className, 'typewriter')}
      id={id}
      aria-label={text}
    >
      <span
        className="typewriter__inner"
        aria-hidden="true"
        data-js-typewriter={JSON.stringify(text)}
      ></span>
    </Tag>
  )
}
