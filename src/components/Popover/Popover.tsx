import { IPopover } from './types'
import cx from 'classnames'
import * as React from 'react'
import { Fragment, useMemo, useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useFocus } from '../../hooks/useFocus'
import { usePopper } from '../../hooks/usePopper'
import { useKeyboardNav } from '../../hooks/useKeyboardNav'
import * as tabbable from 'tabbable'

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
  const [trigger, setTrigger] = useState(null)
  const [target, setTarget] = useState(null)

  const [focused, onFocus, onBlur] = useFocus({ toggleable: true, trigger, target })
  const [styles, attributes] = usePopper({ align, trigger, target })
  const [, , onKeyDown] = useKeyboardNav({ root: target })

  /**
   * Render the actual popover
   */
  const renderPopover = () =>
    focused &&
    createPortal(
      <aside
        className={cx('popover')}
        ref={setTarget}
        style={styles.popper}
        {...attributes.popper}
        tabIndex={-1}
        onBlur={onBlur}
        onKeyDown={(e) =>
          onKeyDown(e, () => {
            const els = tabbable(document.body)
            if (e.shiftKey) {
              els[els.indexOf(trigger) - 1].focus()
            }
            if (!e.shiftKey) {
              els[els.indexOf(trigger)].focus()
            }
          })
        }
      >
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
    [target]
  )

  /**
   * Prevent scroll
   */
  useEffect(() => {
    if (!focused) {
      document.body.style.overflow = null
    }
  }, [focused])

  /**
   * Add key down event to the trigger element
   */
  useEffect(() => {
    if (!trigger) return
    if (!trigger.dataset.active) {
      trigger.dataset.active = true
    }
    if (trigger.dataset.active) {
      trigger?.addEventListener('keydown', onKeyDown)
    }
  }, [focused, target])

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
