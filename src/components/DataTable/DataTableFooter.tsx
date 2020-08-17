import * as React from 'react'
import { useState, useEffect } from 'react'
import { IDataTable } from './types'
import { Fragment } from 'react'

/**
 * Components
 */
import { Grid, GridItem } from '../Grid'
import { Button } from '../Button'
import { Text } from '../Text'
import { Input } from '../Input'
import { Select } from '../Select'
import { Label } from '../Label'

/**
 * Render a table cell
 */
const DataTableFooter: React.FC<IDataTable.IFooterProps> = ({ controls, pagination, rowCount, setPaginationPageLimit }) => {
  const { currentIndex, lastIndex, handleNext, handlePrev, handleSkip, pageLimit } = pagination
  const [paginationIndex, setPaginationIndex] = useState(currentIndex)

  const updatePaginationIndex = (val: number) => {
    setPaginationIndex(val)

    if (!isNaN(val)) {
      handleSkip(val)
    }
  }

  useEffect(() => {
    setPaginationIndex(currentIndex)
  }, [currentIndex])

  return (
    <footer className="datatable__footer" data-testid="datatable-footer">
      <Grid>
        <GridItem span={6}>
          {controls.rowCount && (
            <Text className="text--bold m--r-sm" data-testid="dataTableRowCount" tag="span">{`${rowCount} ${
              rowCount === 1 ? 'Row' : 'Rows'
            }`}</Text>
          )}
          {controls.pagination && (
            <Fragment>
              <Label className="m--r-sm" for="pagination-page-limit">
                Show
              </Label>
              <Select
                id="pagination-page-limit"
                options={[
                  {
                    label: '5',
                    value: '5'
                  },
                  {
                    label: '10',
                    value: '10'
                  },
                  {
                    label: '15',
                    value: '15'
                  },
                  {
                    label: '20',
                    value: '20'
                  },
                  {
                    label: '50',
                    value: '50'
                  },
                  {
                    label: '100',
                    value: '100'
                  }
                ]}
                value={pageLimit.toString()}
                onChange={(e: string) => setPaginationPageLimit(parseInt(e))}
              />
            </Fragment>
          )}
        </GridItem>
        <GridItem span={6} className="m--l-auto">
          {controls.pagination && (
            <Fragment>
              <Button
                className="m--r-xs"
                variant="Tertiary"
                size="Small"
                disabled={currentIndex === 1 || currentIndex === 0}
                onClick={handlePrev}
              >
                Prev
              </Button>
              <Input
                className="m--r-xs"
                id={null}
                type="Number"
                value={paginationIndex}
                testId="dataTablePagination"
                size="Small"
                minValue={1}
                maxValue={lastIndex}
                onChange={(val: number) => updatePaginationIndex(val)}
              />
              <Text tag="span" className="text--bold m--r-xs">
                of {lastIndex}
              </Text>
              <Button
                variant="Tertiary"
                size="Small"
                disabled={rowCount === 0 ? true : currentIndex === lastIndex}
                onClick={handleNext}
              >
                Next
              </Button>
            </Fragment>
          )}
        </GridItem>
      </Grid>
    </footer>
  )
}

export default DataTableFooter
