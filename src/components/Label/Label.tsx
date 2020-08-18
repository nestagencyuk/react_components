import { ILabel } from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import './Label.scss'

/**
 * Variants
 */
const variants = {
  Inline: 'label--inline',
  Stacked: 'label--stacked'
}

/**
 * A label
 */
const Label: React.FC<ILabel.IProps> = ({ className, variant = 'Stacked', for: htmlFor, interactive, children }) => (
  <label
    className={cx(className, 'label', variants[variant], { 'label--interactive': interactive })}
    htmlFor={htmlFor}
    aria-label={htmlFor}
  >
    {children}
  </label>
)

export default Label
