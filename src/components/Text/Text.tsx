import * as React from 'react'
import cx from 'classnames'
import IText from './types'

/**
 * Styles
 */
import '@nestagencyuk/scss_lib/dist/text.scss'

/**
 * A text component
 */
const Text = ({ className, type, tag = 'p', children }: IText.IProps) => {
  const cssClass = tag === 'p' && !type ? 'p' : type
  const Tag: React.ElementType = tag

  return <Tag className={cx(className, cssClass && cssClass.toLowerCase())}>{children}</Tag>
}

export default Text
