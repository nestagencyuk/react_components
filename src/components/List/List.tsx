import { IList } from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import './List.scss'

/**
 * Components
 */
import { ListItem, ListLink } from '.'

/**
 * List of items
 */
const List: React.FC<IList.IProps> = ({ className, items }) =>
  items ? (
    <ul className={cx(className, 'list')}>
      {items.map((x, i) =>
        x.href || x.to ? (
          <ListItem key={`item-${i}`}>
            <ListLink {...x}>{x.text}</ListLink>
          </ListItem>
        ) : (
          <ListItem key={`item-${i}`} {...x}>
            {x.text}
          </ListItem>
        )
      )}
    </ul>
  ) : null

export default List
