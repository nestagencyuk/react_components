declare namespace IDataTable {
  interface IProps {
    controls: {
      global: IGlobalConfig
      row: IRowControls
      footer: IFooterControls
    }
    header: IColumnConfig[]
    rows: Array<Array<ICellConfig>>
    data: any
    onSubmit: (data: any[]) => void
    className?: string
    loading?: boolean
  }

  // Config types
  interface IGlobalConfig {
    type: 'standard' | 'form'
    visible: boolean
    minHeight?: number
    maxHeight?: number
    buttonCustomiseTable?: boolean
    buttonFilterData?: boolean
    buttonAddRow?: boolean
    search?: boolean
  }

  interface IRowControls {
    visible: boolean
    sendToEndPoint?: string
    sendOnBlur?: boolean
    buttonCopyRow?: boolean
    buttonDeleteRow?: boolean
    buttonLoadPage?: boolean
    buttonLockRow?: boolean
  }

  interface IFooterControls {
    visible: boolean
    rowCount?: boolean | number
    pagination: {
      pageLimit: number
    }
  }

  interface IColumnConfig {
    defaultWidth?: number
    resizable?: boolean
    visible: boolean
    name: string
    id: string
  }

  interface IRowConfig {
    visible?: boolean
    id: string
    buttonCopyRow?: boolean
    buttonDeleteRow?: boolean
    buttonLockRow?: boolean
    buttonLoadPage?: boolean
  }

  interface IManagedRowConfig extends IRowConfig {
    _uid: number
  }

  interface ICellConfig {
    id: string
    name: string
    value: any
    type?: 'text' | 'number' | 'search' | 'select' | 'string'
    placeholder?: string
    multi?: boolean
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
    filterable?: boolean
  }

  // Datatable components
  interface IControlsProps {
    header: IColumnConfig[]
    controls: {
      buttonCustomiseTable?: boolean
      buttonFilterData?: boolean
      buttonAddRow?: boolean
      search?: boolean
    }
    onChange: any
  }

  interface IHeaderProps {
    columns: IColumnConfig[]
    showRowControls?: boolean
  }

  interface IBodyProps {
    controls: {
      visible: boolean
      buttonCopyRow?: boolean
      buttonDeleteRow?: boolean
      buttonLockRow?: boolean
      buttonLoadPage?: boolean
    }
    columns: IColumnConfig[]
    rows: Array<Array<ICellConfig>>
    managedRows: IRowConfig[]
    tableType: 'standard' | 'form'
  }

  interface IRowProps {
    controls: IRowControls
    columns: IColumnConfig[]
    cells: ICellConfig[]
    data: any
    tableType: 'standard' | 'form'
  }

  interface ICellProps {
    id: string
    config: any
    tableType: 'standard' | 'form'
  }

  interface IFooterProps {
    [key: string]: any
  }
}

export { IDataTable }
