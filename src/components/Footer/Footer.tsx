import IFooter from './types'
import * as React from 'react'
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
import { FooterList } from '.'

/**
 * My component
 */
const Footer = ({ className, image, links = [], subInfo }: IFooter.IProps) => {
  const startLinks = links.filter((x) => x.align === 'Start')
  const endLinks = links.filter((x) => x.align === 'End')

  return (
    <footer className={cx(className, 'footer')}>
      <Grid gutter>
        <GridItem span={2}>{image && <Image className={'footer__img'} {...image} />}</GridItem>

        <GridItem span={5}>
          <FooterList items={startLinks} />
        </GridItem>

        <GridItem span={5}>
          <FooterList items={endLinks} />
        </GridItem>
      </Grid>

      {subInfo && <div className={'footer__sub'}>{subInfo}</div>}
    </footer>
  )
}

export default Footer
