import * as React from 'react'

/**
 * Components
 */
import { Header } from '../Header'

/**
 * The main Block header
 */
const BlockHeader = ({ ...props }: any) => (
  <Header className='block__header' {...props} />
)

export default BlockHeader
