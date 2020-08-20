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
  const [triggerEl, setTrigger] = useState(null)
  const [target, setTarget] = useState(null)
  const [arrow, setArrow] = useState(null)
  const [focused, onFocus, onBlur] = useFocus({ trigger: triggerEl, target })
  const [styles, attributes] = usePopper({ align, trigger: triggerEl, target, arrow })

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
      [trigger === 'Hover' ? 'onMouseEnter' : 'onFocus']: onFocus,
      [trigger === 'Hover' ? 'onMouseLeave' : 'onBlur']: onBlur
    }),
    [trigger]
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
