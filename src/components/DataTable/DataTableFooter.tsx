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

/**
 * Render a table cell
 */
const DataTableFooter: React.FC<IDataTable.IFooterProps> = ({ controls, pagination, rowCount }) => {
  const { currentIndex, lastIndex, handleNext, handlePrev, handleSkip } = pagination
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
        <GridItem span={4}>
          {controls.rowCount && (
            <Text className="text--bold" data-testid="dataTableRowCount">{`${rowCount} ${
              rowCount === 1 ? 'Row' : 'Rows'
            }`}</Text>
          )}
        </GridItem>
        <GridItem span={8} className="m--l-auto">
          {controls.pagination && (
            <Fragment>
              <Button className="m--r-xs" variant="Tertiary" disabled={currentIndex === 1} onClick={handlePrev}>
                Prev
              </Button>
              <Input
                className="m--r-xs"
                id={null}
                type="Number"
                value={paginationIndex}
                testId="dataTablePagination"
                minValue={1}
                maxValue={lastIndex}
                onChange={(val: number) => updatePaginationIndex(val)}
              />
              <Text tag="span" className="text--bold m--r-xs">
                of {lastIndex}
              </Text>
              <Button variant="Tertiary" disabled={rowCount === 1 ? true : currentIndex === lastIndex} onClick={handleNext}>
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
