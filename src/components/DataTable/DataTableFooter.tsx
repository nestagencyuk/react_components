import { IDataTable } from './types'
import * as React from 'react'
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
              <Button
                className="m--r-xs"
                variant="Tertiary"
                disabled={currentIndex === 1 || currentIndex === 0}
                onClick={handlePrev}
              >
                Prev
              </Button>
              <Input
                className="m--r-xs"
                id={null}
                type="Number"
                value={currentIndex || 1}
                minValue={1}
                maxValue={lastIndex || 1}
                onChange={(val) => handleSkip(val)}
              />
              <Text tag="span" className="text--bold m--r-xs">
                of {lastIndex}
              </Text>
              <Button variant="Tertiary" disabled={rowCount === 0 ? true : currentIndex === lastIndex} onClick={handleNext}>
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
