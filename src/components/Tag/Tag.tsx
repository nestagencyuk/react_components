import { ITag } from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import './Tag.scss'

/**
 * Components
 */
import { Icon } from '../Icon'

/**
 * A tag component
 */
const Tag: React.FC<ITag.IProps> = ({ className, children, onClick }) => (
  <button className={cx(className, 'tag')} onClick={onClick}>
    {children}
    <Icon className="tag__action m--l-xs" name="Cross" size="Small" />
  </button>
)

export default Tag
