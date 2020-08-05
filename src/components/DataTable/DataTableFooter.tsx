import * as React from 'react'
import { useContext } from 'react'
import { DataTableContext } from '.'
import { IDataTable } from './types'

/**
 * Styles
 */
import './DataTable.scss'

/**
 * Components
 */
import { Grid, GridItem } from '../Grid'
import { Button } from '../Button'
import { Input } from '../Input'
import { Text } from '../Text'

/**
 * A datatable footer that displays table controls
 */
const DataTableFooter: React.FC<IDataTable.IFooterProps> = ({ displayRowCount = true, displayPagination = true }) => {
  const { rowCount, maxPage, currentPage, nextPage, prevPage, jumpToPage } = useContext(DataTableContext)

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
                <Button className="w--100" disabled={currentPage === 1} onClick={() => prevPage()} variant="Tertiary">
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
                      value={currentPage}
                      minValue={1}
                      maxValue={maxPage || 0}
                      onChange={handlePaginationJump}
                    />
                  </GridItem>
                  <GridItem span={6}>
                    <Text className="text--bold">of {maxPage}</Text>
                  </GridItem>
                </Grid>
              </GridItem>
              <GridItem span={4}>
                <Button
                  disabled={rowCount === 0 ? true : currentPage === maxPage}
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
