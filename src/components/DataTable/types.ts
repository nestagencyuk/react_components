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
    searchable: boolean
  }

  interface IRow {
    sendToEndpoint: string
    sendOnBlur: boolean
    cells: ICell[]
  }

  interface ICell {
    name: string
    belongsTo: string
    value: any
  }

  // DataTable Context
  interface IContext {
    config: IConfig
  }
}

export { IDataTable }
