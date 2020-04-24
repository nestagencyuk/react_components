import { ITextarea } from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import '@nestagencyuk/scss_lib/dist/textarea.scss'

/**
 * My component
 */
const Textarea = ({ className, id, name, value, disabled, onChange }: ITextarea.IProps) => (
  <textarea
    className={cx(className, 'textarea', { 'textarea--disabled': disabled })}
    id={id}
    name={name}
    rows={6}
    value={value || ''}
    disabled={disabled}
    onChange={(e: any) => onChange(e.target.value)}
  />
)

export default Textarea
