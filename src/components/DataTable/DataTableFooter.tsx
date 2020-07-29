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
import { Grid, GridItem } from '../Grid'

/**
 * A datatable that displays table controls
 */
const DataTableFooter: React.FC = () => {
  const { config, rowCount } = useContext(DataTableContext)

  return (
    <footer className="datatable-footer" data-testid="datatable-footer">
      <Grid>{rowCount && <GridItem span={3}>{`${rowCount} Lines`}</GridItem>}</Grid>
    </footer>
  )
}

export default DataTableFooter
