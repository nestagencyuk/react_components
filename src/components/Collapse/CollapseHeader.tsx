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
const CollapseHeader = ({ className, active, heading, onClick }: ICollapse.IHeaderProps) => (
  <button className={cx(className, 'collapse__header')} onClick={onClick}>
    <Text className="collapse__heading" type="Intro" tag="span">
      {heading}
    </Text>
    <Icon name={active ? 'Chevron-up' : 'Chevron-down'} />
  </button>
)

export default CollapseHeader
