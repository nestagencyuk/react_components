import { IGrid } from './types'
import * as React from 'react'
import { forwardRef } from 'react'

/**
 * Components
 */
import { Grid } from '.'

/**
 * Grid with ref
 */
const RefGrid = forwardRef(Grid as (props: IGrid.IProps & { ref?: React.Ref<HTMLDivElement> }) => React.ReactElement)

export default RefGrid
