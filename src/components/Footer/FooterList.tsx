import IFooter from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import '@nestagencyuk/scss_lib/dist/list.scss'

/**
 * Components
 */
import { FooterItem, FooterLink } from '.'

/**
 * My component
 */
const FooterList = ({ items = [] }: IFooter.IListProps) => (
  <ul className={cx('footer__list')}>
    {items.map((x, i) =>
      x.href ? (
        <FooterItem key={`item-${i}`}>
          <FooterLink {...x}>{x.text}</FooterLink>
        </FooterItem>
      ) : (
        <FooterItem key={`item-${i}`} {...x}>
          {x.text}
        </FooterItem>
      )
    )}
  </ul>
)

export default FooterList
