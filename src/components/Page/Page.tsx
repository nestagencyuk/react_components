import * as React from 'react'
import { excludeFromObj } from 'typescript-lib-frontend'

/**
 * Styles
 */
import './Page.scss'

const Page: React.FC<Page.IProps> = (props) => {
  const { router, config, data } = props
  const Component: React.FC<Page.IProps> = config.view

  return (
    <main className={'page'}>
      <Component
        router={router}
        config={excludeFromObj(config, ['view', 'content'])}
        content={config.content}
        data={data}
      />
    </main>
  )
}

export default Page
