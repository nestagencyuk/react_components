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
const Input = ({ className, value, onChange }: ITextarea.IProps) => (
  <textarea
    className={cx(className, 'textarea')}
    value={value || ''}
    rows={6}
    onChange={(e: any) => onChange(e.target.value)}
  />
)

export default Input
