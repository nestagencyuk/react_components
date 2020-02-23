import IBlock from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * A block header
 */
const BlockBody = ({ children }: IBlock.IBodyProps) => <div className={cx('block__body')}>{children}</div>

export default BlockBody
