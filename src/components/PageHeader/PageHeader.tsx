import { IHeader } from './types'
import * as React from 'react'
import * as cx from 'classnames'

/**
 * Styles
 */
import '@nestagencyuk/scss_lib/dist/page-header.scss'

/**
 * Header classes
 */
const types = {
  Fixed: 'page-header--fixed'
}

/**
 * A simple page header component
 */
const PageHeader = ({ className, type, children }: IHeader.IProps) => (
  <header className={cx(className, 'page-header', types[type])}>
    {children}
  </header>
)

export default PageHeader
