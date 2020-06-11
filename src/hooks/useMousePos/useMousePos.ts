import { useEffect } from 'react'
import { useRaf } from '../useRaf'
import { lerp } from '@nestagencyuk/typescript_lib-frontend'

/**
 * Get mouse position
 *
 * @param {String} acceleration
 * Add for a smooth effect
 */
const useMousePos = (acceleration: number = 0) => {
  const [state, setState] = useRaf({ x: 0, y: 0 })
  const [velocity, setVelocity] = useRaf({ x: 0, y: 0 })

  const handler = (e: any) => {
    setState({
      x: e.clientX,
      y: e.clientY
    })
  }

  useEffect(() => {
    window.addEventListener('mousemove', handler, {
      capture: false,
      passive: true
    })

    return () => {
      window.removeEventListener('mousemove', handler)
    }
  }, [window])

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

export default useMousePos
