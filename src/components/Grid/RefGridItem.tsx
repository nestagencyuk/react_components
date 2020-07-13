import { IGrid } from './types'
import * as React from 'react'
import { forwardRef } from 'react'

/**
 * Components
 */
import { GridItem } from '.'

/**
 * GridItem with ref
 */
const RefGridItem = forwardRef(
  GridItem as (props: IGrid.IItemProps & { ref?: React.Ref<HTMLDivElement> }) => React.ReactElement
)

export default RefGridItem
