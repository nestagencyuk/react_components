import * as React from 'react'
import cx from 'classnames'
import { IList } from './types'

/**
 * Styles
 */
import './List.scss'

/**
 * Components
 */
import { ListItem } from '.'

/**
 * List of items
 */
const List: React.FC<IList.IProps> = ({ className, items }) => (
  <ul className={cx(className, 'list')}>
    {items.map((item, i) => (
      <ListItem key={`item-${i}`} {...item} />
    ))}
  </ul>
)

export default List
