import ITextarea from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import '@nestagencyuk/scss_lib/dist/textarea.scss'

/**
 * My component
 */
const Textarea = ({ className, id, name, value, onChange }: ITextarea.IProps) => (
  <textarea
    className={cx(className, 'textarea')}
    id={id}
    name={name}
    rows={6}
    value={value || ''}
    onChange={(e: any) => onChange(e.target.value)}
  />
)

export default Textarea
