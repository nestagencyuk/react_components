declare namespace IDataTable {
  // Base DataTable config
  interface IDataTableConfig {
    table: {
      header: IDataTableHeader
    }
    columns: [IDataTableColumn]
  }

  // DataTable Header types
  interface IDataTableHeader {
    buttonCustomiseTable: boolean
    buttonFilterData: boolean
    buttonAddLine: boolean
    search: boolean
    hidden: boolean
  }

  interface IDataTableHeaderProps {
    config: IDataTableHeader
  }

  // DataTable Rows/Cols types
  export interface IDataTableColumn {
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
