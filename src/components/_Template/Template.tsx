// ** THIS IS JUST A TEMPLATE FOR NEW COMPONENTS ** //

import * as React from 'react'
import cx from 'classnames'
import ITemplate from './types'

/**
 * Styles
 */
import './Template.scss'

/**
 * My component
 */
const Template: React.FC<ITemplate.IProps> = ({ className, type }) => {
  const templateClasses: ITemplate.IClasses = {
    Primary: 'template--primary',
    Secondary: 'template--secondary',
    Tertiary: 'template--tertiary'
  }

  return <div className={cx(className, 'template', templateClasses[type])}>Template</div>
}

export default Template
