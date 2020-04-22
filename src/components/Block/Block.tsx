import { IBlock } from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import '@nestagencyuk/scss_lib/dist/block.scss'

/**
 * Components
 */
import { BlockHeader } from '.'
import { Grid, GridItem } from '../Grid'
import { Image } from '../Image'
import { Box } from '../Box'
import { Link } from '../Link'

/**
 * Sizes
 */
const sizes = {
  Small: 2,
  Medium: 4,
  Large: 6
}

/**
 * My component
 */
const Block = ({ className, size = 'Medium', image, header, link, children }: IBlock.IProps) => {
  /**
   * Image alignment
   */
  const imageStart = image?.align === 'Start'
  const imageEnd = image?.align === 'End'

  return (
    <Grid className={cx(className, 'block')}>
      {imageStart && (
        <GridItem span={sizes[size]}>
          <Image aspect="1x1" {...image} />
        </GridItem>
      )}

      <GridItem span={12 - sizes[size]}>
        <Box className="p--l-xxl p--r-xxl" align={{ x: 'Center', y: 'Center' }}>
          <div>
            <BlockHeader size={size} {...header} />
            {children}
            <Link {...link}>{link?.text}</Link>
          </div>
        </Box>
      </GridItem>

      {imageEnd && (
        <GridItem span={sizes[size]}>
          <Image aspect="1x1" {...image} />
        </GridItem>
      )}
    </Grid>
  )
}

export default Block
