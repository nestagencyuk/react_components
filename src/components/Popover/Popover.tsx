import { IPopover } from './types'
import cx from 'classnames'
import * as React from 'react'
import { Fragment, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import { useFocus } from '../../hooks/useFocus'
import { usePopper } from '../../hooks/usePopper'

/**
 * Styles
 */
import './Popover.scss'

/**
 * Alignment
 */
const alignments = {
  Left: 'animate--fade-in-right',
  Right: 'animate--fade-in-left',
  Top: 'animate--fade-in-bottom',
  Bottom: 'animate--fade-in-top'
}

/**
 * A popover
 */
const Popover: React.FC<IPopover.IProps | IPopover.IRenderProps> = ({ align = 'Top', render, children }) => {
  const [triggerRef, setTrigger] = useState(null)
  const [targetRef, setTarget] = useState(null)
  const [focused, onFocus, onBlur] = useFocus({ toggleable: true, triggerRef, targetRef })
  const [styles, attributes] = usePopper({ align, triggerRef, targetRef })

  /**
   * Render the actual popover
   */
  const renderPopover = () =>
    focused &&
    createPortal(
      <aside className={cx('popover')} ref={setTarget} style={styles.popper} {...attributes.popper} tabIndex={-1}>
        <div className={cx('animate', alignments[align])}>
          <div className={cx('popover__body')}>{render}</div>
        </div>
      </aside>,
      document.body
    )

  /**
   * Determine correct event
   */
  const events = useMemo(
    () => ({
      onFocus,
      onBlur
    }),
    []
  )

  return (
    <Fragment>
      {typeof children === 'function' ? (
        children({
          ref: setTrigger,
          ...events
        })
      ) : (
        <span ref={setTrigger} {...events} tabIndex={0}>
          {children}
        </span>
      )}
      {renderPopover()}
    </Fragment>
  )
}

export default Popover
