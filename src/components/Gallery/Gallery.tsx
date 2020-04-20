import { IGallery } from './types'
import * as React from 'react'
import { useState, useEffect, useRef, createRef } from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import '@nestagencyuk/scss_lib/dist/gallery.scss'

/**
 * Components
 */
import { Toggle } from '../../context/Toggle'

/**
 * Components
 */
import { Overlay } from '../Overlay'
import { Float } from '../Float'
import { Slider } from '../Slider'

/**
 * Types
 */
const variants = {
  Tiles: 'gallery--tiles',
  Masonry: 'gallery--masonry'
}

/**
 * Masonry magic
 */
const masonry = (wrapper: any, items: any) => {
  if (!wrapper) return
  const rowHeight = parseInt(window.getComputedStyle(wrapper).getPropertyValue('grid-auto-rows'))
  const rowGap = parseInt(window.getComputedStyle(wrapper).getPropertyValue('grid-gap'))

  items.forEach((x: any) => {
    const item = x.current.firstChild as HTMLElement
    const rowSpan = Math.ceil((item.clientHeight + rowGap) / (rowHeight + rowGap))
    x.current.style.gridRowEnd = `span ${rowSpan}`
  })
}

/**
 * Lightbox style
 */
const LightBoxGallery = ({ className, variant, items }: IGallery.IProps) => (
  <Toggle>
    {({ toggled, setToggled }: any) => {
      const ref = useRef<HTMLElement>()
      const refs = useRef<Array<React.RefObject<HTMLDivElement>>>(
        Array.from(Array(typeof items === 'function' && items({}).length).keys()).map(() => createRef())
      )
      const [init, setInit] = useState(0)

      /**
       * Toggle the slider visibility
       */
      const handleClick = (i: number) => {
        setToggled(true)
        setInit(i)
      }

      const childItems = typeof items === 'function' && items({ handleClick })

      /**
       * Determine if masonry grid and resize
       */
      useEffect(() => {
        if (variant !== 'Masonry') return
        masonry(ref.current, refs.current)
        window.addEventListener('resize', () => masonry(ref.current, refs.current))
      }, [])

      return (
        <section ref={ref} className={cx(className, 'gallery', variants[variant])}>
          {toggled && (
            <Float className="gallery__float" portal align={{ x: 'Center', y: 'Center' }}>
              <Overlay portal onClick={() => setToggled(false)} />
              <Slider className="gallery__slider" variant="Fade" init={init} nav="Buttons" items={childItems} />
            </Float>
          )}

          {childItems.map((x: any, i: any) => (
            <div ref={refs.current[i]} key={`gallery-item-${i}`} className="gallery__item">
              {x}
            </div>
          ))}
        </section>
      )
    }}
  </Toggle>
)

/**
 * A gallery of items
 */
const Gallery = ({ className, variant = 'Tiles', items, lightbox }: IGallery.IProps) => {
  const ref = useRef<HTMLElement>()
  const refs = useRef<Array<React.RefObject<HTMLDivElement>>>(Array.from(Array(items.length).keys()).map(() => createRef()))

  /**
   * Determine if masonry grid and resize
   */
  useEffect(() => {
    if (lightbox || variant !== 'Masonry') return
    masonry(ref.current, refs.current)
    window.addEventListener('resize', () => masonry(ref.current, refs.current))
  }, [])

  return lightbox ? (
    <LightBoxGallery className={className} variant={variant} items={items} />
  ) : (
    <section ref={ref} className={cx(className, 'gallery', variants[variant])}>
      {Array.isArray(items) &&
        items.map((x: any, i: any) => (
          <div ref={refs.current[i]} key={`gallery-item-${i}`} className="gallery__item">
            {x}
          </div>
        ))}
    </section>
  )
}

export default Gallery
