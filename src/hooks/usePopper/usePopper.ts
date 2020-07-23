import { useRef, useCallback, useEffect } from 'react'
import { createPopper } from '@popperjs/core/lib/popper-lite'
import flip from '@popperjs/core/lib/modifiers/flip'
import preventOverflow from '@popperjs/core/lib/modifiers/preventOverflow'
import arrow from '@popperjs/core/lib/modifiers/arrow'

/**
 * Alignments
 */
const alignments: { [key: string]: 'auto' | 'left' | 'top' | 'bottom' | 'right' } = {
  Auto: 'auto',
  Left: 'left',
  Top: 'top',
  Bottom: 'bottom',
  Right: 'right'
}

/**
 * Use request animation frame
 *
 * @param {Object} options
 */
const usePopper = ({ align = 'Auto', active = true }: any = {}): [
  React.RefCallback<HTMLElement>,
  React.RefCallback<HTMLElement>,
  React.RefCallback<HTMLElement>
] => {
  const triggerRef = useRef<HTMLElement>()
  const popperRef = useRef<HTMLElement>()
  const arrowRef = useRef<HTMLElement>()
  const popperInstance = useRef<{ destroy: () => void }>()

  /**
   * Popper options
   */
  const options = {
    placement: alignments[align],
    modifiers: [flip, preventOverflow, arrow, { name: 'arrow', options: { element: arrowRef.current } }]
  }

  /**
   * Set the ref node
   */
  const setTriggerRef = useCallback((node) => {
    if (!node) return
    triggerRef.current = node
  }, [])

  /**
   * Set the ref node
   */
  const setPopperRef = useCallback((node) => {
    if (!node) return
    popperRef.current = node
  }, [])

  /**
   * Set the ref node
   */
  const setArrowRef = useCallback((node) => {
    if (!node) return
    arrowRef.current = node
  }, [])

  /**
   * Cleanup on umnount
   */
  useEffect(() => {
    return () => {
      popperInstance.current?.destroy()
    }
  }, [])

  /**
   * Create a popper instance
   */
  useEffect(() => {
    if (active) {
      popperInstance.current = createPopper(triggerRef.current, popperRef.current, options)
    } else {
      popperInstance.current?.destroy()
    }
  }, [active])

  return [setTriggerRef, setPopperRef, setArrowRef]
}

export default usePopper
