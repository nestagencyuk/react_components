import { ITooltip } from './types'
import cx from 'classnames'
import * as React from 'react'
import { Fragment, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import { useFocus } from '../../hooks/useFocus'
import { usePopper } from '../../hooks/usePopper'

/**
 * Styles
 */
import './Tooltip.scss'

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
 * A tooltip
 */
const Tooltip: React.FC<ITooltip.IProps> = ({ align = 'Top', trigger = 'Hover', render, children }) => {
  const [triggerRef, setTrigger] = useState(null)
  const [targetRef, setTarget] = useState(null)
  const [arrowRef, setArrow] = useState(null)
  const [focused, onFocus, onBlur] = useFocus({ trigger, triggerRef, targetRef })
  const [styles, attributes] = usePopper({ align, triggerRef, targetRef, arrowRef })

  /**
   * Render the actual tooltip
   */
  const renderTooltip = () =>
    focused &&
    createPortal(
      <aside
        className={cx('tooltip')}
        ref={setTarget}
        style={styles.popper}
        {...attributes.popper}
        tabIndex={-1}
        data-testid="toolTipContainer"
      >
        <div className={cx('animate', alignments[align])}>
          <div className={cx('tooltip__body')}>{render}</div>
          <span ref={setArrow} className={cx('tooltip__arrow')} style={styles.arrow} />
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
          ref: setTrigger,
          ...events
        })
      ) : (
        <span ref={setTrigger} {...events} tabIndex={0}>
          {children}
        </span>
      )}
      {renderTooltip()}
    </Fragment>
  )
}

export default Tooltip
