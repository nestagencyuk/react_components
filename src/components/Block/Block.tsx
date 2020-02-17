import IBlock from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import 'scss-lib/dist/block.scss'

/**
 * Block classes
 */
const blockClasses: IBlock.IClasses = {
  Fill: 'block--fill'
}

/**
 * My component
 */
const Block = ({ className, type, children }: IBlock.IProps) => (
  <div className={cx(className, 'block', blockClasses[type])}>{children}</div>
)

export default Block
