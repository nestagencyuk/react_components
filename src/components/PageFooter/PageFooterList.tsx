import { IPageFooter } from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import '@nestagencyuk/scss_lib/dist/list.scss'

/**
 * Components
 */
import { PageFooterItem, PageFooterLink } from '.'

/**
 * My component
 */
const PageFooterList = ({ items = [] }: IPageFooter.IListProps) => (
  <ul className={cx('page-footer__list')}>
    {items.map((x, i) =>
      x.href ? (
        <PageFooterItem key={`item-${i}`}>
          <PageFooterLink {...x}>{x.text}</PageFooterLink>
        </PageFooterItem>
      ) : (
        <PageFooterItem key={`item-${i}`} {...x}>
          {x.text}
        </PageFooterItem>
      )
    )}
  </ul>
)

export default PageFooterList
