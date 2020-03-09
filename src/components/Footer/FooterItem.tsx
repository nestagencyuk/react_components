import IFooter from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * My component
 */
const FooterItem = ({ children }: IFooter.IItemProps) => <li className={cx('footer__item')}>{children}</li>

export default FooterItem
