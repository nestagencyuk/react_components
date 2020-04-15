import { IGallery } from './types'
import * as React from 'react'
import { Fragment, useState, useEffect, useRef } from 'react'
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
 * A gallery of items
 */
const Gallery = ({ className, variant = 'Tiles', items, lightbox }: IGallery.IProps) => {
  const ref = useRef<HTMLElement>()

  /**
   * Masonry magic
   */
  const masonry = () => {
    const items = ref.current.querySelectorAll('.gallery__item')
    for (let x = 0; x < items.length; x++) {
      const item = items[x] as HTMLElement
      const rowHeight = parseInt(window.getComputedStyle(ref.current).getPropertyValue('grid-auto-rows'))
      const rowGap = parseInt(window.getComputedStyle(ref.current).getPropertyValue('grid-row-gap'))
      const innerItem = item.querySelector('.img')
      const rowSpan = Math.ceil((innerItem.getBoundingClientRect().height + rowGap) / (rowHeight + rowGap))

      item.style.gridRowEnd = `span ${rowSpan}`
    }
  }

  /**
   * Determine if masonry grid and resize
   */
  useEffect(() => {
    if (variant !== 'Masonry') return
    masonry()
    window.addEventListener('resize', masonry)
  }, [])

  return lightbox ? (
    <Toggle>
      {({ toggled, setToggled }: any) => {
        const [init, setInit] = useState(0)
        const handleClick = (i: number) => {
          setToggled(true)
          setInit(i)
        }
        const childItems = items({ handleClick })
        return (
          <section ref={ref} className={cx(className, 'gallery', variants[variant])}>
            {toggled && (
              <Float className='gallery__float' portal align={{ x: 'Center', y: 'Center' }}>
                <Overlay portal onClick={() => setToggled(false)} />
                <Slider className='gallery__slider' type='Fade' init={init} nav='Buttons' items={items({ handleClick })} />
              </Float>
            )}

            {childItems.map((x: any, i: any) => (
              <div key={`gallery-item-${i}`} className='gallery__item'>
                {x}
              </div>
            ))}

          </section>
        )
      }}
    </Toggle>
  ) : (
    <section className={cx(className, 'gallery', variants[variant])}>
      {items.map((x: any, i: any) => (
        <div key={`gallery-item-${i}`} className='gallery__item'>{x}</div>
      ))}
    </section>
  )
}

export default Gallery
