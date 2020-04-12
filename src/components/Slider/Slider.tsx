// ** THIS IS JUST A TEMPLATE FOR NEW COMPONENTS ** //

import { ISlider } from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Styles
 */
// import '@nestagencyuk/scss_lib/dist/slider.scss'

/**
 * Classes
 */
const sliderClasses = {
  Primary: 'slider--primary',
  Secondary: 'slider--secondary',
  Tertiary: 'slider--tertiary'
}

/**
 * My component
 */
const Slider = ({ className, type, children }: ISlider.IProps) => (
  <div className={cx(className, 'slider', sliderClasses[type])}>{children}</div>
)

export default Slider
