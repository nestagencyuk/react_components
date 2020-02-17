import * as React from 'react'
import cx from 'classnames'
import IText from './types'

/**
 * Styles
 */
import 'scss-lib/dist/text.scss'

/**
 * A text component
 */
const Text: React.FunctionComponent<IText.IProps> = (props) => {
  const { className, type, tag = 'p', children } = props
  const cssClass = tag === 'p' && !type ? 'p' : type
  const Tag: React.ElementType = tag

  return <Tag className={cx(className, cssClass && cssClass.toLowerCase())}>{children}</Tag>
}

export default Text
