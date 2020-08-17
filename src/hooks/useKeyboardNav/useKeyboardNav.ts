import { useRef, useState, useEffect, useCallback, KeyboardEvent } from 'react'
import { IUseFocus } from './types'
import * as tabbable from 'tabbable'

/**
 * Handles focus events for the target and its descendants.
 */
const useKeyboardNav = ({ trap = false, root, skip }: IUseFocus.IProps = {}): [
  number,
  React.RefObject<Array<React.RefObject<HTMLElement>>>,
  (e?: React.KeyboardEvent, cb?: any) => void
] => {
  const tabbableRefs = useRef<Array<React.RefObject<HTMLElement>>>()
  const [cursor, setCursor] = useState(-1)

  /**
   * Go to the previous element
   */
  const prev = () => {
    document.body.style.overflow = 'hidden'
    tabbableRefs.current.forEach((el) => (el.current.tabIndex = null))
    setCursor((prev) => (prev <= 0 ? tabbableRefs.current.length - 1 : prev - 1))
  }

  /**
   * Go to the next element
   */
  const next = () => {
    document.body.style.overflow = 'hidden'
    tabbableRefs.current.forEach((el) => (el.current.tabIndex = null))
    setCursor((prev) => (prev >= tabbableRefs.current.length - 1 ? 0 : prev + 1))
  }

  /**
   * Exit the tab trap
   */
  const exit = () => {
    document.body.style.overflow = null
    tabbableRefs.current.forEach((el) => (el.current.tabIndex = -1))
  }

  /**
   * Handle key press
   */
  const onKeyDown = useCallback(
    (e: React.KeyboardEvent, cb?: any) => {
      if (!root) return

      console.log('KEydown')

      tabbableRefs.current = tabbable(root)
        .map((el, i) => skip !== i && { current: el })
        .filter((x) => !!x)

      switch (e.key) {
        case 'ArrowUp':
          prev()
          break
        case 'ArrowDown':
          next()
          break
        case 'Tab':
          exit()
          if (cb) cb(e)
          break
        default:
          break
      }
    },
    [root]
  )

  /**
   * Listen to the cursor change and set focus on the element
   */
  useEffect(() => {
    if (!tabbableRefs.current || (tabbableRefs.current && !tabbableRefs?.current[cursor])) return
    tabbableRefs?.current[cursor]?.current.focus()
  }, [cursor])

  return [cursor, tabbableRefs, onKeyDown]
}

export default useKeyboardNav
