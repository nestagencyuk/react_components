import IField from './types'
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
const fieldMsgClasses: any = {
  Error: 'field__msg--error',
  Warning: 'field__msg--warning',
  Success: 'field__msg--success'
}

/**
 * Validation icons
 */
const fieldIcons: any = {
  Error: 'Error',
  Warning: 'Info',
  Success: 'Success'
}

/**
 * Field wrapper component
 */
const Field = ({ className, label, state, msg, ...other }: IField.IProps) => (
  <div className={cx(className, 'field')}>
    {label && (typeof label === 'object' ? label : <Label for={other.id}>{label}</Label>)}

    <FieldPicker state={state} {...other} />
    
    {state && <Icon className={cx('field__icn')} name={fieldIcons[state]} colour={state} />}
    {msg && <p className={cx('field__msg', fieldMsgClasses[state])}>{msg}</p>}
  </div>
)

export default Field
