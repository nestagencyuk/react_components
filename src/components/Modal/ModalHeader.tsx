import * as React from 'react'
import cx from 'classnames'

/**
 * Components
 */
import { Text } from '../Text'

/**
 * The main modal header
 */
const ModalHeader = ({ heading, subheading }: any) => (
  <header className={cx('modal__header')}>
    {heading && (
      <Text tag={'h1'} type={'Beta'}>
        {heading}
      </Text>
    )}
    {subheading && (
      <Text tag={'h2'} type={'Epsilon'}>
        {subheading}
      </Text>
    )}
  </header>
)

export default ModalHeader
