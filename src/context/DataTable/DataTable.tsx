import { IGenericObject } from '../../types'
import { IDataTable } from './types'
import * as React from 'react'
import { useMemo } from 'react'
import * as clone from 'rfdc'
import { useManageArray } from '../../hooks/useManageArray'

/**
 * Context
 */
import { DataTableContext } from '.'

/**
 * Access datatable state
 */
const DataTable: React.FC<IDataTable.IProps | IDataTable.IRenderProps> = ({ data: initialData, children }) => {
  const { array: data, addItem, editItem, deleteItem } = useManageArray({ initialArray: initialData })

  /**
   * Create a blank row
   */
  const blankRow = useMemo(() => Object.keys(initialData[0]).reduce((acc, x: string) => ({ ...acc, [x]: null }), {}), [
    initialData,
    data
  ])

  /**
   * Add a new row
   *
   * @param {Object} row
   * The row to add, for a blank row, pass null
   */
  const addRow = (row: IGenericObject | null) => {
    addItem(row !== null ? { ...row } : blankRow)
  }

  /**
   * Delete a row but prevent deleting of last row
   *
   * @param {Object} uid
   * The row's id to delete
   */
  const deleteRow = (uid: string) => {
    if (data.length === 1) return
    deleteItem(uid)
  }

  /**
   * Shape the final row data
   */
  const shapeData = (array: IGenericObject & { _uid?: string }): IGenericObject[] => {
    const newArray = clone()(array) as IGenericObject[]
    newArray.map((x: any) => delete x._uid)
    return newArray
  }

  /**
   * Context value
   */
  const value: IDataTable.IValue = useMemo(
    () => ({
      data,
      addRow,
      editRow: editItem,
      deleteRow,
      shapeData
    }),
    [data]
  )

  return (
    <DataTableContext.Provider value={value}>
      {typeof children === 'function' ? children(value) : children}
    </DataTableContext.Provider>
  )
}

export default DataTable
