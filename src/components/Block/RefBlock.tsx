import { IBlock } from './types'
import * as React from 'react'
import { forwardRef } from 'react'

/**
 * Components
 */
import { Block } from '.'

/**
 * Block with ref
 */
const RefBlock = forwardRef(Block as (props: IBlock.IProps & { ref?: React.Ref<HTMLDivElement> }) => React.ReactElement)

export default RefBlock
