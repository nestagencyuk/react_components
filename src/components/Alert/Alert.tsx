import IAlert from './types'
import * as React from 'react'
import { createPortal } from 'react-dom'
import { useContext, useEffect, Fragment } from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import '@nestagencyuk/scss_lib/dist/alert.scss'

/**
 * Context
 */
import { OpenContext } from '../../context/OpenContext'

/**
 * Components
 */
import { AlertClose, AlertBody, AlertFooter } from '.'
import { Icon } from '../Icon'
import { Overlay } from '../Overlay'

/**
 * Alert types
 */
const types = {
  Success: 'alert--success',
  Warning: 'alert--warning',
  Error: 'alert--error',
  Info: 'alert--info',
}

/**
 * Icons
 */
const icons = {
  Success: 'Success',
  Warning: 'Info',
  Error: 'Error',
  Info: 'Info',
}

const Alert = ({ type = 'Info', timeout, footer, children }: IAlert.IProps) => {
  const { setOpen } = useContext(OpenContext)

  /**
   * Hide alert if timeout set
   */
  useEffect(() => {
    if (!open || !timeout) return
    setTimeout(() => setOpen(false), timeout)
  }, [open])

  return open ? createPortal(
    <Fragment>
      <Overlay type={'Inverse'} />
      <aside className={cx('alert', types[type])}>
        <AlertClose onClick={setOpen} />
        <Icon className={cx('alert__icn')} name={icons[type]} colour={type === 'Info' ? 'Dark' : type} />
        {children && <AlertBody>{children}</AlertBody>}
        {footer && <AlertFooter {...footer} />}
      </aside>
    </Fragment>,
    document.body
  ) : null
}

export default Alert
