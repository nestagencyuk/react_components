declare namespace IDataTable {
  // Base DataTable config
  interface IConfig {
    table: {
      header: IHeader
      footer: IFooter
    }
    columns: IColumn[]
    rows: IRow[]
  }

  // DataTable types
  interface IProps {
    config: IConfig
  }

  interface IHeader {
    buttonCustomiseTable: boolean
    buttonFilterData: boolean
    buttonAddLine: boolean
    search: boolean
    hidden: boolean
  }

  interface IFooter {
    hidden: boolean
    rowCount: true
  }

  // DataTable Rows, Cols & Cells types
  interface IColumn {
    name: string
    hidden: boolean
    displayOrder: number
    sortable: boolean
    defaultSort: null | 'asc' | 'desc'
    resizableWidth: boolean
    defaultWidth: number
    minWidth: number
    maxWidth: number
  }

  interface IRow {
    sendToEndpoint: string
    sendOnBlur: boolean
    cells: ICell[]
  }

  interface ICell {
    type: 'text' | 'number' | 'search' | 'select' | 'string'
    name: string
    id?: string
    value?: any
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
    responseDisplay?: any
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
