import { IHeader } from '../Header/types'
import * as React from 'react'

/**
 * Components
 */
import { Header } from '../Header'

/**
 * The main Block header
 */
const BlockHeader: React.FC<IHeader.IProps> = (props) => <Header className="block__header" {...props} />

export default BlockHeader
