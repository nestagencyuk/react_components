import CT from 'colorthief/dist/color-thief.mjs'
import { IUseImageColour } from './types'
import { useRef, useCallback, useState } from 'react'

/**
 * Get colours from an image
 */
const useImageColour = ({ sample = 50 }: IUseImageColour.IProps = {}): [
  IUseImageColour.IState,
  React.RefCallback<HTMLElement>
] => {
  const ref = useRef<HTMLElement>()
  const [colour, setColour] = useState(null)

  /**
   * Set the ref node
   */
  const setRef = useCallback((node) => {
    if (!node) return

    const img = node.tagName === 'IMG' ? node : node.querySelector('img')
    const colorThief = new CT()

    img.crossOrigin = 'Anonymous'
    img.addEventListener('load', () => {
      setColour({
        dominant: colorThief.getColor(img, sample),
        palette: colorThief.getPalette(img, 6, sample)
      })
    })

    ref.current = node
  }, [])

  return [colour, setRef]
}

export default useImageColour
