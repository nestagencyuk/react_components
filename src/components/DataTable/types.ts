import { IButton } from '../Button/types'
import { IGenericObject, LoadingState } from '../../types'

declare namespace IDataTable {
  /**
   * Config types
   */
  interface IGlobalControls {
    visible: boolean
    minHeight?: number
    maxHeight?: number
    buttons?: Array<
      IButton.IProps & {
        align: 'Start' | 'End'
        text: string
        action: GlobalControlsEvent | RowControlsEvent
      }
    >
    search?: boolean
  }

  interface IRowControls {
    visible: boolean
    sendToEndpoint?: string
    sendOnBlur?: boolean
    buttons?: Array<
      IButton.IProps & {
        text: string
        action: RowControlsEvent
      }
    >
  }

  interface IFooterControls {
    visible: boolean
    rowCount?: boolean | number
    pagination?: {
      pageLimit?: 5 | 10 | 15 | 20 | 50 | 100
    }
  }

  interface IColumnConfig {
    id: string
    name: string
    resizable?: boolean
    visible: boolean
    sortable?: boolean
    defaultWidth?: number
  }

  interface IRowConfig {
    visible?: boolean
    id: string
    buttonCopyRow?: boolean
    buttonDeleteRow?: boolean
    buttonLockRow?: boolean
    buttonLoadPage?: boolean
  }

  interface ICellConfig {
    id: string
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
    locked?: boolean
    disabled?: boolean
    ignoreTab?: boolean
    includeInObject?: boolean
    sendOnBlur?: boolean
    sendOnChange?: boolean
    sendOnWait?: boolean
    sendOnTrigger?: boolean
    sendMethod?: 'GET' | 'POST' | 'PUT' | 'PATCH'
    sendToEndpoint?: string
    triggerInputs?: boolean
    triggerUpdate?: string[]
    responseValue?: any
    responseLabel?: any
    searchable?: boolean
    filterable?: boolean
    options?: Array<{ [key: string]: any }>
  }

  /**
   * Prop types
   */
  type GlobalEvent =
    | GlobalControlsEvent
    | RowControlsEvent
    | FooterControlsEvent
    | HeaderEvent
    | RowEvent
    | CellEvent
    | 'SUBMIT'
  type GlobalControlsEvent = 'FILTER' | 'SEARCH' | 'CUSTOMISE'
  type RowControlsEvent = 'ADD_ROW' | 'COPY_ROW' | 'DELETE_ROW' | 'LOCK_ROW' | 'LINK'
  type FooterControlsEvent = 'PREV_PAGE' | 'NEXT_PAGE'
  type HeaderEvent = 'SORT'
  type RowEvent = 'ROW_CHANGE' | 'ROW_BLUR'
  type CellEvent = 'CELL_BLUR' | 'CELL_CHANGE' | 'CELL_TRIGGER' | 'CELL_WAIT'

  type EventDispatcher = (value: { type: GlobalEvent; payload?: any }) => void

  interface IProps {
    className?: string
    type: 'standard' | 'form'
    loadingState?: LoadingState
    controls: {
      global: IGlobalControls
      row: IRowControls
      footer: IFooterControls
    }
    header: IColumnConfig[]
    rows: ICellConfig[][]
    data: IGenericObject[]
    onEvent?: EventDispatcher
  }

  interface IControlsProps {
    header: IColumnConfig[]
    controls: IGlobalControls
    onChange: any
    onEvent?: EventDispatcher
  }

  interface IHeaderProps {
    columns: IColumnConfig[]
    showRowControls?: boolean
    onEvent?: EventDispatcher
  }

  interface IRowProps {
    controls: IRowControls
    columns: IColumnConfig[]
    cells: ICellConfig[]
    data: any
    tableType: 'standard' | 'form'
    onEvent?: EventDispatcher
  }

  interface ICellProps {
    id: string
    index?: number
    config: ICellConfig
    tableType: 'standard' | 'form'
    onEvent?: EventDispatcher
  }

  interface IFooterProps {
    [key: string]: any
    onEvent?: EventDispatcher
  }
}

export { IDataTable }
