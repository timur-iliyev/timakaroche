import clsx from 'clsx'
import './Typewriter.scss'

export default (props) => {
  const { className, text, tag = 'p' } = props

  const Tag = tag

  return (
    <Tag className={clsx(className, 'typewriter')}>
      <span
        className="typewriter__inner"
        data-js-typewriter={JSON.stringify(text)}
      ></span>
    </Tag>
  )
}
