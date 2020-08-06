import { useEffect, useState } from 'react'
import { usePopper as usePopperBase } from 'react-popper'
import { IUsePopper } from './types'

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
 * Use Popper
 *
 * @param {Object} options
 */
const usePopper = ({
  align = 'Auto',
  triggerRef: initialTriggerRef,
  targetRef: initialTargetRef,
  arrowRef: initialArrow
}: IUsePopper.IProps = {}): [
  { popper?: React.CSSProperties; arrow?: React.CSSProperties },
  { popper?: React.HTMLAttributes<any> }
] => {
  const [triggerRef, setTrigger] = useState(null)
  const [targetRef, setTarget] = useState(null)
  const [arrowRef, setArrow] = useState(null)

  /**
   * Popper options
   */
  const options = {
    placement: alignments[align],
    modifiers: [{ name: 'arrow', options: { element: initialArrow?.current || arrowRef } }]
  }

  const { styles, attributes } = usePopperBase(
    initialTriggerRef?.current || triggerRef,
    initialTargetRef?.current || targetRef,
    options
  )

  /**
   * Set the ref elements if coming from state updates
   */
  useEffect(() => {
    setTrigger(initialTriggerRef)
    setTarget(initialTargetRef)
    setArrow(initialArrow)
  }, [initialTriggerRef, initialTargetRef])

  return [styles, attributes]
}

export default usePopper
