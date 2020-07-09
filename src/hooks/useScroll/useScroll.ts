import { IUseScroll } from './types'
import { useEffect } from 'react'
import { useRaf } from '../useRaf'
import { lerp } from '@nestagencyuk/typescript_lib-frontend'

/**
 * Get scroll position
 *
 * @param {String} acceleration
 * Add for a smooth effect
 */
const useScroll = ({ acceleration = 0 }: IUseScroll.IProps = {}): [IUseScroll.IState] => {
  const [state, setState] = useRaf({ x: 0, y: 0 })
  const [velocity, setVelocity] = useRaf({ x: 0, y: 0 })

  const handler = () => {
    setState({
      x: window.pageXOffset,
      y: window.pageYOffset
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', handler, {
      capture: false,
      passive: true
    })

    return () => {
      window.removeEventListener('scroll', handler)
    }
  }, [])

  useEffect(() => {
    if (!acceleration) return
    const dx = Math.floor(lerp(velocity.x, state.x, acceleration) * 100) / 100
    const dy = Math.floor(lerp(velocity.y, state.y, acceleration) * 100) / 100
    if (state.y === Math.ceil(velocity.y)) return

    setVelocity({
      x: dx,
      y: dy
    })
  }, [state, velocity])

  return acceleration ? [velocity] : [state]
}

export default useScroll
