import { useRef, useState, useEffect, useCallback } from 'react'

/**
 * Use Focus
 */
const useFocus = ({ trigger = 'Click' } = {}): [
  React.RefCallback<HTMLElement>,
  React.RefCallback<HTMLElement>,
  boolean,
  (e?: React.FocusEvent<HTMLElement> & { relatedTarget: HTMLElement }) => void,
  (e?: React.FocusEvent<HTMLElement> & { relatedTarget: HTMLElement }) => void
] => {
  const [focused, setFocused] = useState(false)
  const [nextEl, setNextEl] = useState(null)
  const triggerRef = useRef<HTMLElement>()
  const targetRef = useRef<HTMLElement>()
  let timer: ReturnType<typeof setTimeout> = null

  /**
   * Set the trigger ref node
   */
  const setTriggerRef = useCallback((node) => {
    if (!node) return
    // if (trigger === 'Hover') {
    //   node.onmouseenter = onFocus
    //   node.onmouseleave = onBlur
    // }
    triggerRef.current = node
  }, [])

  /**
   * Set the target ref node
   */
  const setTargetRef = useCallback((node) => {
    if (!node) return
    targetRef.current = node
  }, [])

  /**
   * Handle focusing
   */
  const onFocus = (e?: React.FocusEvent<HTMLElement> & { relatedTarget: HTMLElement }) => {
    if (targetRef.current) {
      setFocused(true)
    } else {
      clearTimeout(timer)
      if (!focused) {
        setFocused(true)
      }
    }
  }

  /**
   * Handle blurring away
   */
  const onBlur = async (e: React.FocusEvent<HTMLElement> & { relatedTarget: HTMLElement }) => {
    if (targetRef.current) {
      const isInside = (targetRef?.current || triggerRef?.current)?.contains(e?.relatedTarget)
      if (isInside) {
        setNextEl(e.relatedTarget)
      } else {
        setFocused(false)
      }
    } else {
      timer = setTimeout(() => focused && setFocused(false), 0)
    }
  }

  /**
   * Cleanup to prevent memory leaks
   */
  useEffect(() => {
    return () => {
      timer && clearTimeout(timer)
    }
  }, [])

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

  return [setTriggerRef, setTargetRef, focused, onFocus, onBlur]
}

export default useFocus
