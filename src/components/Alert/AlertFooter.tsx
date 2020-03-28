import * as React from 'react'
import cx from 'classnames'

const AlertFooter = ({ actions }: any) => (
  <footer className={cx('alert__footer')}>
    {actions}
  </footer>
)

export default AlertFooter
