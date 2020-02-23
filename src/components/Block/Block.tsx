import IBlock from './types'
import * as React from 'react'
import { forwardRef } from 'react'
import { useInView } from 'react-intersection-observer'
import cx from 'classnames'

/**
 * Styles
 */
import 'scss-lib/dist/block.scss'

/**
 * Components
 */
import { BlockHeader, BlockMedia, BlockBody } from '.'

/**
 * Block classes
 */
const blockClasses = {
  Fill: 'block--fill'
}

/**
 * My component
 */
const Block = ({ className, type, header, media, children }: IBlock.IProps) => {
  const [blockRef, inView] = useInView({
    threshold: 0.1,
    rootMargin: '100px 100px 100px 100px'
  })

  const renderMedia = () => media && inView && <BlockMedia {...media} />

  return (
    <section ref={blockRef} className={cx(className, 'block', blockClasses[type], { 'block--split': media })}>
      {media?.align === 'Left' && renderMedia()}

      {header && inView && <BlockHeader {...header} />}
      {children && inView && <BlockBody>{children}</BlockBody>}

      {media?.align === 'Right' && renderMedia()}
    </section>
  )
}

export default Block
