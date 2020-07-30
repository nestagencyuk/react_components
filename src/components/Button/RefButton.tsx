import { IButton } from './types'
import * as React from 'react'
import { forwardRef } from 'react'

/**
 * Components
 */
import { Button } from '.'

/**
 * Button with ref
 */
const RefButton = forwardRef(
  Button as (props: IButton.IProps & { ref?: React.Ref<HTMLButtonElement> }) => React.ReactElement
)

export default RefButton
