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
const usePopper = ({ align = 'Auto', trigger, target, arrow }: IUsePopper.IProps = {}): [
  { popper?: React.CSSProperties; arrow?: React.CSSProperties },
  { popper?: React.HTMLAttributes<any> }
] => {
  /**
   * Popper options
   */
  const options = {
    placement: alignments[align],
    modifiers: [{ name: 'arrow', options: { element: arrow } }]
  }

  const { styles, attributes } = usePopperBase(trigger, target, options)

  return [styles, attributes]
}

export default usePopper
