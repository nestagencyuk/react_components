import { ReactDatePickerProps } from "react-datepicker";

declare namespace IDatePicker {
  interface IProps extends ReactDatePickerProps {
    props: ReactDatePickerProps
  }
}

export { IDatePicker }