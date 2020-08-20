import { useState, useCallback } from 'react'
import { IUseFocus } from './types'

/**
 * Handles focus events for the target and its descendants.
 */
const useFocus = ({ toggleable = false, trigger, target }: IUseFocus.IProps = {}): [
  boolean,
  (e?: React.FocusEvent) => void,
  (e?: React.FocusEvent, cb?: (e: React.FormEvent<Element>) => void) => void,
  (bool?: boolean) => void
] => {
  const [focused, setFocused] = useState(false)

  /**
   * Handle focusing
   */
  const onFocus = (e?: React.FocusEvent) => {
    if (toggleable) {
      setFocused((prev) => !prev)
    } else {
      !focused && setFocused(true)
    }
  }

  /**
   * Handle blurring away, either taking into account unrelated nodes, or
   * just normal child nodes
   */
  const onBlur = useCallback(
    (e: React.FocusEvent & { relatedTarget: HTMLElement }, cb?: (e: React.FormEvent) => void) => {
      const isUnrelated = trigger || target
      let newFocused = true

      if (isUnrelated) {
        const isInside = (target || trigger)?.contains(e?.relatedTarget)

        if (!isInside) {
          newFocused = false
        }
      } else {
        const isInside = (e.currentTarget || e.target)?.contains(e.relatedTarget)
        if (!isInside) {
          newFocused = false
        }
      }

      setFocused(newFocused)
      if (cb && !newFocused) cb(e)
    },
    [target]
  )

  return [focused, onFocus, onBlur, setFocused]
}

export default useFocus
