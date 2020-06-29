import { IField } from './types'
import { IIcon } from '../Icon/types'
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
  Error: 'field--error',
  Info: 'field--info'
}

/**
 * Validation icons
 */
const icons: IIcon.IIconTypes = {
  Success: 'Success',
  Warning: 'Info',
  Error: 'Error',
  Info: 'Info'
}

/**
 * Field wrapper component
 */
const Field = ({ className, label, state, msg, ...props }: IField.IProps) => (
  <div className={cx(className, 'field', states[state])}>
    {label && (
      <Label
        className={cx('field__label', { 'field__label--interactive': props.type === 'Checkbox' || props.type === 'Radio' })}
        for={props.id}
      >
        {label}
      </Label>
    )}

    <FieldPicker state={state} {...props} />

    {state && <Icon className={'field__icn'} name={icons[state]} colour={state} />}
    {msg && <p className={'field__msg'}>{msg}</p>}
  </div>
)

export default Field
