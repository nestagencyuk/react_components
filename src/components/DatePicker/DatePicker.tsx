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
const DateTimePicker: React.FC<ReactDatePickerProps> = ({ className, ...props }) => (
  <DatePicker
    className="input w--100"
    wrapperClassName={cx(className, 'datepicker')}
    calendarClassName="datepicker-calendar"
    {...props}
  />
)

export default DateTimePicker
