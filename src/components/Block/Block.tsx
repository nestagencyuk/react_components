import { IBlock } from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Styles
 */
// import '@nestagencyuk/scss_lib/dist/block.scss'

/**
 * Components
 */
import { BlockHeader } from '.'
import { Grid, GridItem } from '../Grid'
import { Text } from '../Text'
import { Image } from '../Image'
import { Box } from '../Box'
import { Link } from '../Link'

/**
 * My component
 */
const Block = ({ className, image, header, link, children }: IBlock.IProps) => (
  <Grid className={cx(className, 'block m--b-lg')}>
    {image?.align === 'Start' && <GridItem span={6}>
      <Image aspect={'1x1'} {...image} />
    </GridItem>}

    <GridItem span={6}>
      <Box className='p--xxl' align={{ x: 'Center', y: 'Center' }}>
        <div>
          <BlockHeader {...header} />
          <Text>{children}</Text>
          <Link {...link}>{link?.text}</Link>
        </div>
      </Box>
    </GridItem>

    {image?.align === 'End' && <GridItem span={6}>
      <Image aspect={'1x1'} {...image} />
    </GridItem>}
  </Grid>
)

export default Block
