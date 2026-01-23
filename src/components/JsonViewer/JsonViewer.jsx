import './JsonViewer.scss'
import clsx from 'clsx'

const renderValue = (value, depth = 0) => {
  if (value === null) {
    return <span className="json-text__null">null</span>
  }
  if (value === undefined) {
    return <span className="json-text__undefined">undefined</span>
  }
  if (Number.isNaN(value)) {
    return <span className="json-text__nan">NaN</span>
  }

  const type = Array.isArray(value) ? 'array' : typeof value

  switch (type) {
    case 'string':
      return <span className="json-text__string">{`"${value}"`}</span>
    case 'boolean':
      return (
        <span className="json-text__boolean">{String(value)}</span>
      )
    case 'number':
      return <span className="json-text__number">{value}</span>
    case 'object':
      return renderObject(value, depth)
    case 'array':
      return renderArray(value, depth)
    default:
      return <span>{String(value)}</span>
  }
}

const renderObject = (obj, depth = 0) => {
  const entries = Object.entries(obj)
  const indent = '  '.repeat(depth + 1)
  const nextIndent = '  '.repeat(depth + 2)

  return (
    <>
      <span className="json-text__brace">{`{`}</span>
      {entries.map(([key, value], index) => {
        const isNotLast = index !== entries.length - 1

        return (
          <>
            {`\n${nextIndent}`}
            <span className="json-text__key">"{key}"</span>
            <span className="json-text__symbol">{`:`}</span>
            {` `}
            {renderValue(value, depth + 1)}
            {isNotLast && (
              <span className="json-text__symbol">,</span>
            )}
          </>
        )
      })}
      {`\n${indent}`}
      <span className="json-text__brace">{`}`}</span>
    </>
  )
}

const renderArray = (array, depth = 0) => {
  const indent = '  '.repeat(depth + 1)
  const nextIndent = '  '.repeat(depth + 2)

  return (
    <>
      <span className="json-text__bracket">[</span>
      {array.map((item, index) => {
        const isNotLast = index !== array.length - 1

        return (
          <>
            {`\n${nextIndent}`}
            {renderValue(item, depth + 1)}
            {isNotLast && (
              <span className="json-text__symbol">,</span>
            )}
          </>
        )
      })}
      {`\n${indent}`}
      <span className="json-text__bracket">]</span>
    </>
  )
}

export default (props) => {
  const { className, data = {} } = props

  const dataEntries = Object.entries(data)

  return (
    <pre className={clsx(className, 'json-text')}>
      <code>
        <span className="json-text__brace">{`{`}</span>
        {dataEntries.map(([key, value], index) => {
          const isNotLast = index !== dataEntries.length - 1

          return (
            <>
              {`\n  `}
              <span className="json-text__key">"{key}"</span>
              <span className="json-text__symbol">{`:`}</span>
              {` `}
              {renderValue(value, 1)}
              {isNotLast && (
                <span className="json-text__symbol">,</span>
              )}
            </>
          )
        })}
        {`\n`}
        <span className="json-text__brace">{`}`}</span>
      </code>
    </pre>
  )
}
