import { IPageFooter } from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * My component
 */
const PageFooterItem = ({ children }: IPageFooter.IItemProps) => <li className={cx('page-footer__item')}>{children}</li>

export default PageFooterItem
