// ** THIS IS JUST A TEMPLATE FOR NEW COMPONENTS ** //

import { ITemplate } from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Styles
 */
// import '@nestagencyuk/scss_lib/dist/template.scss'

/**
 * Classes
 */
const templateClasses = {
  Primary: 'template--primary',
  Secondary: 'template--secondary',
  Tertiary: 'template--tertiary'
}

/**
 * My component
 */
const Template = ({ className, type, children }: ITemplate.IProps) => (
  <div className={cx(className, 'template', templateClasses[type])}>{children}</div>
)

export default Template
