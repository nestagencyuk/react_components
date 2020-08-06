import { IDataTable } from './types'
import * as React from 'react'
import { capitalise } from '@nestagencyuk/typescript_lib-frontend'

/**
 * Context
 */
import { DataTableCell as BaseDataTableCell } from '../../context/DataTable'

/**
 * Components
 */
import { Input } from '../Input'
import { Select } from '../Select'
import { Text } from '../Text'

/**
 * Render a table cell
 */
const DataTableFooter: React.FC<IDataTable.IFooterProps> = ({ id, config, onChange }) => {
  return <tbody>test</tbody>
}

export default DataTableFooter
