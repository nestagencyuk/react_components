import { IDataTable } from './types'

export const orderColumnsByDisplayOrder = (a: IDataTable.IColumn, b: IDataTable.IColumn) => {
  if (a.displayOrder < b.displayOrder) {
    return -1
  }
  if (a.displayOrder > b.displayOrder) {
    return 1
  }
  return 0
}
