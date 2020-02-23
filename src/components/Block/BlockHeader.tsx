import IBlock from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Components
 */
import { Text } from '../../components/Text'

/**
 * A block header
 */
const BlockHeader = ({ heading }: IBlock.IHeaderProps) => (
  <header className={cx('block__header')}>
    {heading && (
      <Text className={'block__heading'} tag={'h1'} type={'Intro'}>
        {heading}
      </Text>
    )}
  </header>
)

export default BlockHeader
