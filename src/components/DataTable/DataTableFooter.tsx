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
          <GridItem span={2}>
            <Text className="text--bold">{`${rowCount} ${rowCount === 1 ? 'Line' : 'Lines'}`}</Text>
          </GridItem>
        )}
        {displayPagination && (
          <GridItem span={10} className="m--l-auto">
            <Grid>
              <GridItem className="m--r-xs" span={4}>
                <Button
                  className="w--100"
                  disabled={currentPage === 1 || currentPage === 0}
                  onClick={() => prevPage()}
                  variant="Tertiary"
                >
                  Prev
                </Button>
              </GridItem>
              <GridItem span={4}>
                <Grid vCentred>
                  <GridItem className="m--r-xs" span={6}>
                    <Input
                      id="paginationJump"
                      type="Number"
                      className="text--bold w--100"
                      value={currentPage || 1}
                      minValue={1}
                      maxValue={lastPage || 1}
                      onChange={handlePaginationJump}
                    />
                  </GridItem>
                  <GridItem span={6}>
                    <Text className="text--bold">of {lastPage}</Text>
                  </GridItem>
                </Grid>
              </GridItem>
              <GridItem span={4}>
                <Button
                  disabled={rowCount === 0 ? true : currentPage === lastPage}
                  className="w--100"
                  onClick={() => nextPage()}
                  variant="Tertiary"
                >
                  Next
                </Button>
              </GridItem>
            </Grid>
          </GridItem>
        )}
      </Grid>
    </footer>
  )
}

export default DataTableFooter
