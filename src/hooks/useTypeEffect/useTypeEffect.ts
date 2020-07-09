import { ITypeEffect } from './types'
import { useState, useEffect } from 'react'

/**
 * Make a typing effect from a string
 *
 * @param {String} text
 * The string to process
 */
const useTypeEffect = ({ wait, text, speed = 100 }: ITypeEffect.IProps = {}): [ITypeEffect.IState] => {
  const [typed, setText] = useState('')
  let timer: ReturnType<typeof setTimeout> = null

  /**
   * Type away
   */
  const type = (i: number, text: string) => {
    if (i < text.length) {
      timer = setTimeout(() => {
        i++
        setText((prev) => prev + text.charAt(i - 1))
        type(i, text)
      }, speed)
    }
  }

  /**
   * Set text state
   */
  useEffect(() => {
    if (wait) return
    type(0, text)
    return () => clearTimeout(timer)
  }, [wait])

  return [typed]
}

export default useTypeEffect
