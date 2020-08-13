import { ITextarea } from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import './Textarea.scss'

/**
 * My component
 */
const Textarea: React.FC<ITextarea.IProps> = ({ className, id, name, value, disabled, onChange }) => (
  <textarea
    className={cx(className, 'textarea', { 'textarea--disabled': disabled })}
    id={id}
    name={name}
    rows={6}
    value={value || ''}
    data-testid="textarea"
    disabled={disabled}
    onChange={(e: any) => onChange(e.target.value)}
  />
)

export default Textarea
