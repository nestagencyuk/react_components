import { IDataTable } from './types'
import * as React from 'react'
import uid from 'uid'
import { Fragment } from 'react'

/**
 * Components
 */
import { Grid, GridItem } from '../Grid'
import { Button } from '../Button'
import { Text } from '../Text'
import { Input } from '../Input'

/**
 * Render a table cell
 */
const DataTableFooter: React.FC<IDataTable.IFooterProps> = ({ controls, pagination, rowCount }) => {
  const { lastPage, currentPage, nextPage, prevPage, jumpToPage } = pagination

  return controls.visible ? (
    <footer className="datatable__footer" data-testid="datatable-footer">
      <Grid>
        <GridItem span={4}>
          {controls.rowCount && <Text className="text--bold">{`${rowCount} ${rowCount === 1 ? 'Row' : 'Rows'}`}</Text>}
        </GridItem>
        <GridItem span={8} className="m--l-auto">
          {controls.pagination && (
            <Fragment>
              <Button
                className="m--r-xs"
                variant="Tertiary"
                disabled={currentPage === 1 || currentPage === 0}
                onClick={() => prevPage()}
              >
                Prev
              </Button>
              <Input
                className="m--r-xs"
                id={`jump-to-page-${uid(8)}`}
                type="Number"
                value={currentPage || 1}
                minValue={1}
                maxValue={lastPage || 1}
                onChange={(val) => jumpToPage(val)}
              />
              <Text tag="span" className="text--bold m--r-xs">
                of {lastPage}
              </Text>
              <Button
                variant="Tertiary"
                disabled={rowCount === 0 ? true : currentPage === lastPage}
                onClick={() => nextPage()}
              >
                Next
              </Button>
            </Fragment>
          )}
        </GridItem>
      </Grid>
    </footer>
  ) : null
}

export default DataTableFooter
