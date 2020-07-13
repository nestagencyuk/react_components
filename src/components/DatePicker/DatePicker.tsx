import * as React from 'react'
import cx from 'classnames'
import DatePicker from 'react-datepicker'
import { IDatePicker } from './types'

/**
 * Styles
 */
import './DatePicker.scss'

/**
 * A datepicker component
 */
const DateTimePicker: React.FC<IDatePicker.IProps> = (props) => (
  <DatePicker
    className={cx(props.className, 'input')}
    wrapperClassName="datepicker"
    calendarClassName="datepicker-calendar"
    {...props}
  />
)

export default DateTimePicker
