import { useRef, useState, useEffect } from 'react'
import { IUseFocus } from './types'

/**
 * Handles focus events for the target and its descendants.
 */
const useFocus = ({
  trigger = 'Click',
  triggerRef: initialTriggerRef = null,
  targetRef: initialTargetRef = null
}: IUseFocus.IProps = {}): [
  boolean,
  (e?: React.FocusEvent<any>) => void,
  (e?: React.FocusEvent<any>, cb?: (e: any) => void) => void
] => {
  const triggerRef = useRef<React.RefObject<any> | any>()
  const targetRef = useRef<React.RefObject<any> | any>()
  const [focused, setFocused] = useState(false)
  const [nextEl, setNextEl] = useState(null)

  /**
   * Handle focusing
   */
  const onFocus = () => {
    setFocused((prev) => !prev)
  }

  /**
   * Handle blurring away, either taking into account unrelated nodes, or
   * just normal child nodes
   */
  const onBlur = (e: React.FocusEvent<any>, cb?: any) => {
    const isUnrelated = (initialTriggerRef && initialTargetRef) || (triggerRef.current && targetRef.current)
    let newFocused = true

    if (isUnrelated) {
      const asyncTrigger = initialTriggerRef?.current || triggerRef.current
      const asyncTarget = initialTargetRef?.current || targetRef.current
      const isInside = (asyncTarget || asyncTrigger)?.contains(e?.relatedTarget)

      if (isInside) {
        setNextEl(e.relatedTarget)
      } else {
        newFocused = false
      }
    } else {
      if (!e.currentTarget.contains(e.relatedTarget)) {
        newFocused = false
      }
    }

    setFocused(newFocused)
    if (cb && !newFocused) cb(e)
  }

  /**
   * Attach extra event handlers
   */
  const attachEvents = () => {
    if (trigger === 'Hover') {
      ;(initialTriggerRef as any)?.addEventListener('mouseenter', onFocus)
      ;(initialTriggerRef as any)?.addEventListener('mouseleave', onBlur)
    }
  }

  /**
   * Set the ref elements if coming from state update
   */
  useEffect(() => {
    triggerRef.current = initialTriggerRef
    targetRef.current = initialTargetRef

    const sameEls = initialTriggerRef === triggerRef.current || initialTargetRef === targetRef.current
    if (sameEls) return
    attachEvents()
  }, [initialTriggerRef, initialTargetRef])

  /**
   * Pass the onBlur to the next component
   */
  useEffect(() => {
    if (!nextEl) return
    nextEl.addEventListener('blur', onBlur)
    if (trigger === 'Hover') {
      nextEl.addEventListener('mouseleave', onBlur)
    }
  }, [nextEl])

  return [focused, onFocus, onBlur]
}

export default useFocus
