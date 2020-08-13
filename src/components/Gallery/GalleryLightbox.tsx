import { IGallery } from './types'
import * as React from 'react'
import { useState, Fragment, forwardRef } from 'react'

/**
 * Components
 */
import { useToggle } from '../../hooks/useToggle'

/**
 * Components
 */
import { Overlay } from '../Overlay'
import { Float } from '../Float'
import { Slider } from '../Slider'

/**
 * Lightbox style
 */
const GalleryLightbox = ({ items }: IGallery.IProps, ref: React.RefObject<Array<React.RefObject<HTMLDivElement>>>) => {
  const [initialSlide, setInitialSlide] = useState(0)
  const [toggled, setToggled] = useToggle()

  /**
   * Toggle the slider visibility
   */
  const handleClick = (i: number) => {
    setToggled(true)
    setInitialSlide(i)
  }

  const childItems = typeof items === 'function' && items({ toggled, handleClick })

  return (
    <Fragment>
      {toggled && (
        <Float className="gallery__float" portal align={{ x: 'Center', y: 'Center' }}>
          <Overlay portal fixed onClick={() => setToggled(false)} />
          <Slider
            className="gallery__slider"
            variant="Fade"
            initialSlide={initialSlide}
            navbar="Buttons"
            items={childItems}
          />
        </Float>
      )}

      {childItems.map((x, i) => (
        <div ref={ref.current[i]} key={`gallery-item-${i}`} className="gallery__item">
          {x}
        </div>
      ))}
    </Fragment>
  )
}

export default forwardRef(GalleryLightbox)
