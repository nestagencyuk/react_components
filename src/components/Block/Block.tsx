import { IBlock } from './types'
import { IGrid } from '../Grid/types'
import * as React from 'react'
import { forwardRef } from 'react'
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
import { Button } from '../Button'

/**
 * Forward the ref
 */
const RefGrid = forwardRef(Grid) as (props: IGrid.IProps & { ref?: React.Ref<HTMLDivElement> }) => React.ReactElement

/**
 * Sizes
 */
const sizes = {
  Small: 2,
  Medium: 4,
  Large: 6
}

/**
 * Block component
 */
const Block: React.FC<IBlock.IProps> = (
  { className, size = 'Medium', image, header, button, children },
  ref: React.Ref<HTMLDivElement>
) => {
  const passRef = ref && (typeof ref === 'function' || Object.keys(ref).length > 0 ? { ref } : {})
  const Comp = passRef ? RefGrid : Grid

  /**
   * Image alignment
   */
  const imageStart = image?.align === 'Start'
  const imageEnd = image?.align === 'End'

  return children ? (
    <Comp {...passRef} className={cx(className, 'block')}>
      {imageStart && (
        <GridItem span={sizes[size]}>
          <Image {...image} />
        </GridItem>
      )}

      <GridItem span={12 - sizes[size]}>
        <Box className={cx(size === 'Small' ? 'p--l-xl p--r-xl' : 'p--xxl')} align={{ x: 'Center', y: 'Center' }} fill>
          <div>
            <BlockHeader size={size} {...header} />
            {children}
            <Button {...button}>{button?.text}</Button>
          </div>
        </Box>
      </GridItem>

      {imageEnd && (
        <GridItem span={sizes[size]}>
          <Image {...image} />
        </GridItem>
      )}
    </Comp>
  ) : null
}

export default Block
