import { ICollapse } from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Components
 */
import { Text } from '../Text'
import { Icon } from '../Icon'

/**
 * Header part of the collapse panel
 */
const CollapseHeader: React.FC<ICollapse.IHeaderProps> = ({ className, open, heading, onClick }) => (
  <button className={cx(className, 'collapse__header')} onClick={onClick}>
    <Text className="collapse__heading" variant="Intro" tag="span">
      {heading}
    </Text>
    <Icon name={open ? 'Chevron-up' : 'Chevron-down'} />
  </button>
)

export default CollapseHeader
