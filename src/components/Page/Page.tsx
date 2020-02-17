import Page from './types'
import * as React from 'react'
import { Fragment } from 'react'
import * as cx from 'classnames'
import { excludeFromObj } from 'typescript-lib-frontend'

/**
 * Styles
 */
import 'scss-lib/dist/page.scss'

/**
 * A simple page wrapper
 */
const Page = ({ className, config, data, children }: Page.IProps) => {
  const Component: React.FC<Page.IProps> = config.view

  return (
    <Fragment>
      <Component config={excludeFromObj(config, ['view', 'content'])} content={config.content} data={data} />
      {children}
    </Fragment>
  )
}

export default Page
