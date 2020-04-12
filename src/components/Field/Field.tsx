import { IField } from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import '@nestagencyuk/scss_lib/dist/field.scss'

/**
 * Components
 */
import { Label } from '../Label'
import { Icon } from '../Icon'
import { FieldPicker } from '.'

/**
 * Validation message
 */
const states = {
  Success: 'field--success',
  Warning: 'field--warning',
  Error: 'field--error'
}

/**
 * Validation icons
 */
const icons: { [key: string]: string } = {
  Success: 'Success',
  Warning: 'Info',
  Error: 'Error'
}

/**
 * Field wrapper component
 */
const Field = ({ className, label, state, msg, ...props }: IField.IProps) => (
  <div className={cx(className, 'field', states[state])}>
    {label && (
      <Label className='m m--r-md' for={props.id}>
        {label}
      </Label>
    )}

    <FieldPicker state={state} {...props} />

    {state && <Icon className={'field__icn'} name={icons[state]} colour={state} />}
    {msg && <p className={'field__msg'}>{msg}</p>}
  </div>
)

export default Field
