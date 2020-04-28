import { IList } from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import '@nestagencyuk/scss_lib/dist/list.scss'

/**
 * Components
 */
import { ListItem, ListLink } from '.'

/**
 * List of items
 */
const List = ({ className, items }: IList.IProps) =>
  items ? (
    <ul className={cx(className, 'list')}>
      {items.map((x, i) =>
        x.href ? (
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
