import { IText } from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import './Text.scss'

/**
 * Types
 */
const variants = {
  Alpha: 'text--alpha',
  Beta: 'text--beta',
  Gamma: 'text--gamma',
  Delta: 'text--delta',
  Epsilon: 'text--epsilon',
  Intro: 'text--intro',
  P: 'text--p',
  Small: 'text--sm'
}

/**
 * Align
 */
const alignments = {
  Left: 'text--left',
  Center: 'text--center',
  Right: 'text--right'
}

/**
 * A text component
 */
const Text: React.FC<IText.IProps> = ({ className, variant = 'P', tag = 'p', align = 'Left', inverse, children }) => {
  const Tag: React.ElementType = tag

  return children ? (
    <Tag className={cx(className, 'text', variants[variant], alignments[align], { 'text--inverse': inverse })}>
      {children}
    </Tag>
  ) : null
}

export default Text
