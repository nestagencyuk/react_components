import * as React from 'react'
import { useContext } from 'react'
import { DataTableContext } from '.'

/**
 * Styles
 */
import './DataTable.scss'

/**
 * Components
 */
import { Grid, GridItem } from '../Grid'
import { Button } from '../Button'
import { Box } from '../Box'
import { Text } from '../Text'
import { Input } from '../Input'
import { IDataTable } from './types'

/**
 * A datatable that displays table controls
 */
const DataTableFooter: React.FC<IDataTable.IFooterControls> = ({ displayRowCount = true, displayPagination = true }) => {
  const { rowCount, lastPage, currentPage, nextPage, prevPage, jumpToPage } = useContext(DataTableContext)

  const handlePaginationJump = (val: number) => {
    jumpToPage(val)
  }

  return (
    <footer className="datatable-footer" data-testid="datatable-footer">
      <Grid vCentred>
        {displayRowCount && (
          <GridItem span={4}>
            <Text className="text--bold">{`${rowCount} ${rowCount === 1 ? 'Line' : 'Lines'}`}</Text>
          </GridItem>
        )}
        {displayPagination && (
          <GridItem span={8} className="m--l-auto">
            <Button
              className="m--r-xs"
              disabled={currentPage === 1 || currentPage === 0}
              onClick={() => prevPage()}
              variant="Tertiary"
            >
              Prev
            </Button>
            <Input
              id="paginationJump"
              type="Number"
              className="m--r-xs"
              value={currentPage || 1}
              minValue={1}
              maxValue={lastPage || 1}
              onChange={handlePaginationJump}
            />
            <Text tag="span" className="text--bold m--r-xs">
              of {lastPage}
            </Text>
            <Button
              disabled={rowCount === 0 ? true : currentPage === lastPage}
              onClick={() => nextPage()}
              variant="Tertiary"
            >
              Next
            </Button>
          </GridItem>
        )}
      </Grid>
    </footer>
  )
}

export default DataTableFooter
