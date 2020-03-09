import IList from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * My component
 */
const ListItem = ({ children }: IList.IItemProps) => <li className={cx('list__item')}>{children}</li>

export default ListItem
