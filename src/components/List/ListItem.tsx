import IList from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * My component
 */
const List = ({ className, children }: IList.IItemProps) => <li className={cx(className, 'list__item')}>{children}</li>

export default List
