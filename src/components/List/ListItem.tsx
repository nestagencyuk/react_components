import * as React from 'react'
import cx from 'classnames'
import { IList } from './types'

/**
 * Components
 */
import { ListLink } from '.'

/**
 * List item
 */
const ListItem: React.FC<IList.IItemProps> = (props) => (
  <li className={cx('list__item')}>{props.href || props.to ? <ListLink {...props}>{props.text}</ListLink> : props.text}</li>
)

export default ListItem
