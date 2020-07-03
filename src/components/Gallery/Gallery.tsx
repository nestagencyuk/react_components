import { IGallery } from './types'
import * as React from 'react'
import { useEffect, useRef, createRef } from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import './Gallery.scss'

/**
 * Components
 */
import { GalleryLightbox } from '.'

/**
 * Variants
 */
const variants = {
  Tiles: 'gallery--tiles',
  Masonry: 'gallery--masonry'
}

/**
 * Sizes
 */
const sizes = {
  Small: 'gallery--sm',
  Medium: 'gallery--md',
  Large: 'gallery--lg'
}

/**
 * A gallery of items
 */
const Gallery: React.FC<IGallery.IProps> = ({ className, variant = 'Tiles', size = 'Medium', items, lightbox }) => {
  const ref = useRef<HTMLElement>()
  const refs = useRef<Array<React.RefObject<HTMLDivElement>>>(
    Array.from(Array((typeof items === 'function' ? items({}) : items)?.length).keys()).map(() => createRef())
  )

  /**
   * Masonry magic
   *
   * @todo make into a hook?
   */
  const masonry = (wrapper: HTMLElement, items: Array<React.RefObject<HTMLElement>>) => {
    if (!wrapper) return
    const rowHeight = parseInt(window.getComputedStyle(wrapper).getPropertyValue('grid-auto-rows'))
    const rowGap = parseInt(window.getComputedStyle(wrapper).getPropertyValue('grid-gap'))

    items.forEach((x) => {
      const item = x.current.firstChild as HTMLElement
      const rowSpan = Math.ceil((item.clientHeight + rowGap) / (rowHeight + rowGap))
      x.current.style.gridRowEnd = `span ${rowSpan}`
    })
  }

  /**
   * Determine if masonry grid and resize
   */
  useEffect(() => {
    if (variant !== 'Masonry') return
    masonry(ref.current, refs.current)
    window.addEventListener('resize', () => masonry(ref.current, refs.current))
  }, [])

  return items ? (
    <section ref={ref} className={cx(className, 'gallery', variants[variant], sizes[size])}>
      {lightbox ? (
        <GalleryLightbox ref={refs} items={items} />
      ) : (
        Array.isArray(items) &&
        items.map((x, i) => (
          <div ref={refs.current[i]} key={`gallery-item-${i}`} className="gallery__item">
            {x}
          </div>
        ))
      )}
    </section>
  ) : null
}

export default Gallery
