import { IDataTable } from './types'
import * as React from 'react'
import { useContext, useState } from 'react'
import { DataTableContext } from '.'

/**
 * Styles
 */
import './DataTable.scss'

/**
 * Components
 */
import { Checkbox } from '../Checkbox'
import { Button } from '../Button'
import { Input } from '../Input'
import { Grid, GridItem } from '../Grid'
import { Popover } from '../Popover'

/**
 * A datatable that displays table controls
 */
const DataTableFooter: React.FC = () => {
  const { config, rowCountState } = useContext(DataTableContext)
  const { table, columns } = config
  const { rowCount } = table.footer

  return (
    <footer className="datatable-footer" data-testid="datatable-footer">
      <Grid>{rowCount && <GridItem span={3}>{`${rowCountState} Lines`}</GridItem>}</Grid>
    </footer>
  )
}

export default DataTableFooter
