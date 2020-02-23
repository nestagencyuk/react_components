import IFooter from './types'
import * as React from 'react'
import { useInView } from 'react-intersection-observer'
import cx from 'classnames'

/**
 * Styles
 */
import '@nestagencyuk/scss_lib/dist/footer.scss'
import '@nestagencyuk/scss_lib/dist/keyframes.scss'

/**
 * Components
 */
import { Grid, GridItem } from '../Grid'
import { Image } from '../Image'
import { Icon } from '../Icon'
import { List, ListItem, ListLink } from '../List'

/**
 * My component
 */
const Footer = ({ className, image, links = [], social = [], subInfo = '' }: IFooter.IProps) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    rootMargin: '100px 100px 100px 100px'
  })

  return (
    <footer ref={ref} className={cx(className, 'footer')}>
      <Grid gutter>
        <GridItem span={2}>{image && <Image className={'footer__img'} {...image} />}</GridItem>

        <GridItem span={5}>
          {links.length > 0 && inView && (
            <List className={'footer__list'}>
              {links.map(({ text, href }, i) => (
                <ListItem key={`item-${i}`} className={'footer__item'}>
                  <ListLink className={'footer__link'} href={href}>
                    {text}
                  </ListLink>
                </ListItem>
              ))}
            </List>
          )}
        </GridItem>

        <GridItem span={5}>
          {social.length > 0 && inView && (
            <List className={'footer__list'}>
              {social.map(({ text, icon, href }, i) => (
                <ListItem key={`item-${i}`} className={'footer__item'}>
                  <ListLink className={'footer__link'} href={href} external>
                    <Icon className={'footer__icn'} name={icon.toLowerCase()} />
                    {text}
                  </ListLink>
                </ListItem>
              ))}
            </List>
          )}
        </GridItem>
      </Grid>
      <div className={'footer__sub'}>{subInfo}</div>
    </footer>
  )
}

export default Footer
