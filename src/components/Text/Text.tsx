import * as React from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import './Text.scss'

const Text: React.FunctionComponent<Text.IProps> = (props) => {
  const { className, style, tag = 'p', children } = props
  const cssClass = tag === 'p' && !style ? 'p' : style
  const Tag: React.ElementType = tag

  return <Tag className={cx(className, cssClass && cssClass.toLowerCase())}>{children}</Tag>
}

export default Text
