import { ILabel } from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import '@nestagencyuk/scss_lib/dist/label.scss'

/**
 * A label
 */
const Label: React.FC<ILabel.IProps> = ({ className, for: htmlFor, children }) => (
  <label className={cx(className, 'label')} htmlFor={htmlFor} aria-label={htmlFor}>
    {children}
  </label>
)

export default Label
