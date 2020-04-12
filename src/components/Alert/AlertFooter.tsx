import { IAlert } from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Components
 */
import { Footer } from '../Footer'

/**
 * Render alert actions
 */
const AlertFooter = (props: IAlert.IFooterProps) => props.actions ? <Footer className={cx('alert__footer')} {...props} /> : null

export default AlertFooter
