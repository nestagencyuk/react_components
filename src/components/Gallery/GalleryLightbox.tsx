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
  const [toggled, setToggled] = useToggle()
  const [init, setInit] = useState(0)

  /**
   * Toggle the slider visibility
   */
  const handleClick = (i: number) => {
    setToggled(true)
    setInit(i)
  }

  const childItems = typeof items === 'function' && items({ toggled, handleClick })

  return (
    <Fragment>
      {toggled && (
        <Float className="gallery__float" portal align={{ x: 'Center', y: 'Center' }}>
          <Overlay portal fixed onClick={() => setToggled(false)} />
          <Slider className="gallery__slider" variant="Fade" init={init} nav="Buttons" items={childItems} />
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
