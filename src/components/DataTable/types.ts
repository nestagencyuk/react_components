declare namespace IDataTable {
  // Base DataTable config
  interface IConfig {
    table: {
      header: {
        buttonCustomiseTable: boolean
        buttonFilterData: boolean
        buttonAddLine: boolean
        search: boolean
        hidden: boolean
      }
    }
    columns: IColumn[]
  }

  // DataTable types
  interface IProps {
    config: IConfig
  }

  // DataTable Rows/Cols types
  interface IColumn {
    name: string
    hidden: boolean
  }

  // DataTable Context
  interface IContext {
    config: IConfig
  }

  interface IDataTableDropDownProps {
    children: React.ReactNode
  }
}

export { IDataTable }
