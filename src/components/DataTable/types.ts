declare namespace IDataTable {
  // Base DataTable config
  interface IDataTableConfig {
    table: {
      header: {
        buttonCustomiseTable: boolean
        buttonFilterData: boolean
        buttonAddLine: boolean
        search: boolean
        hidden: boolean
      }
    }
    columns: IDataTableColumn[]
  }

  // DataTable Rows/Cols types
  interface IDataTableColumn {
    name: string
    hidden: boolean
  }

  // DataTable Context
  interface IDataTableContextProps {
    children: () => React.ReactElement | React.ReactNode
    config: IDataTableConfig
  }

  interface IDataTableDropDownProps {
    children: React.ReactNode
  }
}

export { IDataTable }
