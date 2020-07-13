import * as React from "react"
import "react-datepicker/dist/react-datepicker.css"
import DatePicker from "react-datepicker"
import { IDatePicker } from "./types"
import cx from "classnames"

/**
 * Styles
 */
import './DatePicker.scss'

const DateTimePicker: React.FC<IDatePicker.IProps> = (props) => {
  return (
    <DatePicker {...props} className={cx(props.className, "datepicker__input")} calendarClassName="datepicker__calendar" />
  )
}

export default DateTimePicker