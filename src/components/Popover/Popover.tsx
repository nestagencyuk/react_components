import { IPopover } from './types'
import cx from 'classnames'
import * as React from 'react'
import { Fragment, useMemo } from 'react'
import { createPortal } from 'react-dom'
import { useCombinedRefs } from '../../hooks/useCombinedRefs'
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
const Popover: React.FC<IPopover.IProps | IPopover.IRenderProps> = ({ align = 'Bottom', render, children }) => {
  const [focusTriggerRef, focusTargetRef, focused, onFocus, onBlur] = useFocus()
  const [triggerRef, popperRef, arrowRef] = usePopper({ active: focused, align })

  /**
   * Render the actual popover
   */
  const renderPopover = () =>
    createPortal(
      <aside
        className={cx('popover', { 'popover--active': focused })}
        ref={useCombinedRefs(popperRef, focusTargetRef)}
        tabIndex={-1}
      >
        <div className={cx('animate', focused && alignments[align])}>
          <div className={cx('popover__body')}>{render}</div>
          <span ref={arrowRef} className={cx('popover__arrow')} />
        </div>
      </aside>,
      document.body
    )

  /**
   * Determine correct event
   */
  const events = useMemo(
    () => ({
      onFocus: onFocus,
      onBlur: onBlur
    }),
    []
  )

  return (
    <Fragment>
      {typeof children === 'function' ? (
        children({
          ref: useCombinedRefs(triggerRef, focusTriggerRef),
          ...events
        })
      ) : (
        <span ref={useCombinedRefs(triggerRef, focusTriggerRef)} {...events} tabIndex={0}>
          {children}
        </span>
      )}
      {renderPopover()}
    </Fragment>
  )
}

export default Popover
