import { IPage } from './types'
import * as React from 'react'
import { Fragment } from 'react'
import { excludeFromObj } from '@nestagencyuk/typescript_lib-frontend'

/**
 * Styles
 */
import './Page.scss'

/**
 * A simple page wrapper
 */
const Page: React.FC<IPage.IProps> = ({ config, data, children }) => {
  const Component: React.FC<IPage.IProps> = config.view

  return (
    <Fragment>
      <Component config={excludeFromObj(config, ['view', 'content'])} content={config.content} data={data} />
      {children}
    </Fragment>
  )
}

export default Page
