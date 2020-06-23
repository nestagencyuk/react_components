// ** THIS IS JUST A TEMPLATE FOR NEW COMPONENTS ** //

import { ITemplate } from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Styles
 */
// import '@nestagencyuk/scss_lib/dist/template.scss'

/**
 * Variants
 */
const variants = {
  Primary: 'template--primary',
  Secondary: 'template--secondary',
  Tertiary: 'template--tertiary'
}

/**
 * My component
 */
const Template: React.FC<ITemplate.IProps> = ({ className, variant = 'Primary', children }) => (
  <div className={cx(className, 'template', variants[variant])}>{children}</div>
)

export default Template
