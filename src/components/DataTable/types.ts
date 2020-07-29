declare namespace IDataTable {
  interface IProps {
    tableControls: ITableControls
    rowControls: IRowControls
    footerControls: IFooterControls
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
    rowCount: true
  }

  // DataTable components
  interface IHeader {
    headings: IHeading[]
  }

  interface IRow {
    cells: ICell[]
  }

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
    readOnly?: boolean
    ignoreTab?: boolean
    tabIndex?: number
    includeInObject: boolean
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
    belongsTo: string
    options?: { [key: string]: any }[]
    items?: { [key: string]: any }[]
  }

  // DataTable Context
  interface IContext {
    config: IConfig
  }
}

export { IDataTable }
