import { IBox } from './types'
import * as React from 'react'
import { forwardRef } from 'react'

/**
 * Components
 */
import { Box } from '.'

/**
 * Box with ref
 */
const RefBox = forwardRef(Box as (props: IBox.IProps & { ref?: React.Ref<HTMLDivElement> }) => React.ReactElement)

export default RefBox
