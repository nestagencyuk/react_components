import { IDataTable } from './types'
import * as React from 'react'
import { useMemo } from 'react'
import * as clone from 'rfdc'
import { v4 as uid } from 'uuid'
import { useManageArray } from '../../hooks/useManageArray'

/**
 * Context
 */
import { DataTableContext } from '.'

/**
 * Access datatable state
 */
const DataTable: React.FC<IDataTable.IProps | IDataTable.IRenderProps> = ({ data: initialData, children, onSubmit }) => {
  const { array: rows, addItem, editItem, deleteItem } = useManageArray({ initialArray: initialData })

  /**
   * Create a blank row
   */
  const blankRow = useMemo(() => Object.keys(initialData[0]).reduce((acc, x: string) => ({ ...acc, [x]: null }), {}), [
    initialData,
    rows
  ])

  /**
   * Add a new row
   *
   * @param {Object} row
   * The row to add, for a blank row, pass null
   */
  const addRow = (row: any) => {
    const _uid = uid()
    addItem(row ? { ...row, _uid } : blankRow)
  }

  /**
   * Delete a row but prevent deleting of last row
   *
   * @param {Object} uid
   * The row's id to delete
   */
  const deleteRow = (uid: string) => {
    if (rows.length === 1) return
    deleteItem(uid)
  }

  /**
   * Shape the final row data
   */
  const shapeData = (array: any) => {
    const newArray = clone()(array)
    newArray.map((x: any) => delete x._uid)
    return newArray
  }

  /**
   * Handle the submission of the form
   *
   * @param {Event} e
   * The default form submission event
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(shapeData(rows))
  }

  /**
   * Context value
   */
  const value: IDataTable.IValue = useMemo(
    () => ({
      rows,
      addRow,
      editRow: editItem,
      deleteRow,
      handleSubmit
    }),
    [rows]
  )

  return (
    <DataTableContext.Provider value={value}>
      {typeof children === 'function' ? children(value) : children}
    </DataTableContext.Provider>
  )
}

export default DataTable
