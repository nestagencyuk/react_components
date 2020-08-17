import * as React from 'react'
import cx from 'classnames'
import DatePicker from 'react-datepicker'
import { ReactDatePickerProps } from 'react-datepicker'

/**
 * Styles
 */
import './DatePicker.scss'

/**
 * A datepicker component
 */
const DateTimePicker: React.FC<ReactDatePickerProps> = (props) => (
  <DatePicker
    className={cx(props.className, 'input')}
    wrapperClassName="datepicker"
    calendarClassName="datepicker-calendar"
    {...props}
  />
)

export default DateTimePicker
