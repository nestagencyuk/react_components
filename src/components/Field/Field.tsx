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
import { Label } from '../Label'
import { FieldPicker } from '.'

/**
 * Validation message
 */
const uiStates = {
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
const Field: React.FC<IField.IProps> = ({ className, label, uiState, msg, type, ...props }) => {
  const isBoolean = type === 'Checkbox' || type === 'Radio'

  /**
   * Render label
   */
  const renderLabel = (align: 'Start' | 'End') => (
    <Label
      className={cx(align === 'End' ? 'm--l-md' : 'm--b-md')}
      variant={align === 'End' ? 'Inline' : 'Stacked'}
      for={props.id}
      interactive={isBoolean}
    >
      {label}
    </Label>
  )

  return (
    <div className={cx(className, 'field', uiStates[uiState])}>
      {label && !isBoolean && renderLabel('Start')}

      <FieldPicker className={!isBoolean && 'field__input'} type={type} {...props} />

      {label && isBoolean && renderLabel('End')}

      {uiState && <Icon className={'field__icn'} name={icons[uiState]} colour={uiState} />}
      {msg && <p className={'field__msg'}>{msg}</p>}
    </div>
  )
}

export default Field
