import { IFooter } from 'components/Footer/types'

declare namespace IDataTable {
  interface IProps {
    config: {
      tableControls: ITableControls
      rowControls: IRowControls
      footerControls: IFooterControls
    }
    headings: IHeading[]
    data: Array<Array<ICell>>
  }

  interface ITableControls {
    visible: boolean
    buttonCustomiseTable?: boolean
    buttonFilterData?: boolean
    buttonAddLine?: boolean
    search?: boolean
  }

  interface IRowControls {
    visible: boolean
    sendToEndPoint?: string
    sendOnBlur?: boolean
    buttonDuplicateRow?: boolean
    buttonRemoveRow?: boolean
    buttonLoadPage?: boolean
    buttonLockRow?: boolean
  }

  interface IFooterControls {
    visible: boolean
    displayRowCount?: boolean
    displayPagination?: boolean
    paginatedRowsPerPage?: number
  }

  // DataTable components
  interface IHeaderProps {
    headings: IHeading[]
  }

  interface IRowProps {
    cells: ICell[]
    row: any
  }

  interface ICellProps extends ICell {
    onChange: (e: React.SyntheticEvent) => void
  }

  interface IFooterProps extends IFooterControls {}

  // DataTable Header, Rows & Cells types
  interface IHeading {
    id: string
    name: string
    visible: boolean
    sortable?: boolean
    defaultSort?: null | 'asc' | 'desc'
    resizable?: boolean
    defaultWidth?: number
  }

  interface ICell {
    id: string
    name: string
    value: any
    type?: 'text' | 'number' | 'search' | 'select' | 'string'
    placeholder?: string
    multiple?: boolean
    required?: boolean
    minLength?: number
    maxLength?: number
    minValue?: number
    maxValue?: number
    step?: number
    pattern?: string
    disabled?: boolean
    ignoreTab?: boolean
    tabIndex?: number
    includeInObject?: boolean
    sendOnBlur?: boolean
    sendOnChange?: boolean
    sendOnWait?: boolean
    sendOnTrigger?: boolean
    sendMethod?: 'GET' | 'POST' | 'PUT' | 'PATCH'
    sendToEndpoint?: string
    responseValue?: any
    triggerInputs?: boolean
    responseLabel?: any
    triggerUpdate?: string[]
    searchable?: boolean
    options?: { [key: string]: any }[]
    items?: { [key: string]: any }[]
  }
}

export { IDataTable }
