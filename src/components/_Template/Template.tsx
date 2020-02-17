// ** THIS IS JUST A TEMPLATE FOR NEW COMPONENTS ** //

import ITemplate from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Template classes
 */
const templateClasses: ITemplate.IClasses = {
  Primary: 'template--primary',
  Secondary: 'template--secondary',
  Tertiary: 'template--tertiary'
}

/**
 * My component
 */
const Template = ({ className, type }: ITemplate.IProps) => (
  <div className={cx(className, 'template', templateClasses[type])}>Template</div>
)

export default Template
