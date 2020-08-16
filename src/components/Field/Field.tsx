import { IField } from './types'
import { IIcon } from '../Icon/types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import './Field.scss'

/**
 * Components
 */
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
const Field: React.FC<IField.IProps> = ({ className, label, state, msg, type, ...props }) => {
  console.log(type)

  return (
    <div className={cx(className, 'field', states[state])}>
      {label && (
        <label
          className={cx('field__label m--b-md text--bold', {
            'field__label--interactive': type === 'Checkbox' || type === 'Radio'
          })}
          htmlFor={props.id}
        >
          {label}
        </label>
      )}
      <FieldPicker state={state} type={type} {...props} />

      {state && <Icon className={'field__icn'} name={icons[state]} colour={state} />}
      {msg && <p className={'field__msg'}>{msg}</p>}
    </div>
  )
}

export default Field
