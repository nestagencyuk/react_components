declare namespace IDataTable {
  interface IDataTableHeader {
    buttonCustomiseTable: boolean
    buttonFilterData: boolean
    buttonAddLine: boolean
    search: boolean
    hidden: boolean
  }

  interface IDataTableConfig {
    table: {
      header: IDataTableHeader
    }
  }

  interface IProps {
    children: () => React.ReactElement | React.ReactNode
    config: IDataTableConfig
  }

  interface IDataTableHeaderProps {
    config: IDataTableHeader
  }
}

export { IDataTable }
