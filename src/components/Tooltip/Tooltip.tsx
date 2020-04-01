import ITooltip from './types'
import * as React from 'react'
import { createPortal } from 'react-dom'
import { useContext, useEffect, useState, useRef } from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import '@nestagencyuk/scss_lib/dist/tooltip.scss'

/**
 * A tooltip
 */
const Tooltip = ({ attachTo, trigger = 'hover', align = 'left', children }: ITooltip.IProps) => {
  const ref: any = useRef()
  const [open, setOpen] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  /**
   * Get the x & y positions
   */
  const getPosition = () => {
    if (!attachTo) return
    if (!ref.current) return

    const tooltipRect = ref.current.getBoundingClientRect()
    const attachRect = attachTo.getBoundingClientRect()

    let x = 0
    let y = 0

    switch (align) {
      case 'Left':
        x = attachRect.left - tooltipRect.width
        y = attachRect.top + attachTo.clientHeight / 2
        break
      case 'Right':
        x = attachRect.right
        y = attachRect.top + attachTo.clientHeight / 2
        break
      case 'Top':
        x = attachRect.left + attachTo.clientWidth / 2
        y = attachRect.top - tooltipRect.height
        break
      case 'Bottom':
        x = attachRect.left + attachTo.clientWidth / 2
        y = attachRect.bottom
        break
    }

    setPosition({ x, y })
  }

  /**
   * Attach trigger events
   */
  useEffect(() => {
    if (!attachTo) return
    const event = () => setOpen((prev: boolean) => !prev)

    if (trigger === 'hover') {
      attachTo.addEventListener('mouseenter', event)
      attachTo.addEventListener('mouseleave', event)
    } else {
      attachTo.addEventListener(trigger, event)
    }
  }, [attachTo])

  /**
   * Render tooltip
   */
  useEffect(() => {
    getPosition()
  }, [open])

  return open
    ? createPortal(
        <aside
          ref={ref}
          className={cx('tooltip', { [`tooltip--${align.toLowerCase()}`]: open })}
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`
          }}
        >
          {children}
        </aside>,
        document.body
      )
    : null
}

export default Tooltip
