import { IAction } from './types'
import * as React from 'react'
import { forwardRef } from 'react'

/**
 * Components
 */
import { Action } from '.'

/**
 * Action with ref
 */
const RefAction = forwardRef(
  Action as (props: IAction.IProps & { ref?: React.Ref<HTMLButtonElement> }) => React.ReactElement
)

export default RefAction
