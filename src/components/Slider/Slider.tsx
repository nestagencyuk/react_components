import { IImage } from '../Image/types'
import { ISlider } from './types'
import * as React from 'react'
import { Fragment, Children, useEffect, useMemo } from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import '@nestagencyuk/scss_lib/dist/slider.scss'

/**
 * Context
 */
import { Paginate } from '../../context/Paginate'

/**
 * Components
 */
import { Image } from '../Image'
import { Button } from '../Button'

/**
 * Types
 */
const types = {
  Fade: 'slider--fade',
  Slide: 'slider--slide'
}

/**
 * My component
 */
const Slider = ({ type = 'Slide', tick, items }: ISlider.IProps) => (
  <Paginate limit={1}>
    {({ items: pageItems, current, setCurrent }) => {
      const total = items.length
      const max = total - 1
      const min = 0
      const prev = current - 1 < min ? max : current - 1
      const next = current + 1 > max ? min : current + 1

      const bodyStyle = {
        width: `${100 * total}%`,
        transform: type === 'Slide' ? `translateX(-${(100 / total * current)}%)` : null
      }

      /**
       * Render slide items
       */
      const renderItems = () =>
        items.map((x, i) => {
          const itemStyle = {
            transform: type === 'Fade' ? `translateX(-${100 * i}%)` : null
          }

          return (
            <div key={`slide-${i}`} className={cx('slider__item', { 'slider__item--active': pageItems.includes(i) })} style={itemStyle}>
              {x}
            </div>
          )
        })

      /**
       * Auto slide
       */
      useEffect(() => {
        if (!tick) return
        const handleTick = setTimeout(() => setCurrent(next), tick)
        return () => clearTimeout(handleTick)
      }, [current])

      return (
        <section className={cx('slider', types[type])}>
          <div className='slider__body' style={bodyStyle}>
            {renderItems()}
          </div>

          <footer className='slider__footer'>
            <Button type='Primary' onClick={() => setCurrent(prev)}>Prev</Button>
            <Button type='Primary' onClick={() => setCurrent(next)}>Next</Button>
          </footer>
        </section>
      )
    }}
  </Paginate>
)

export default Slider
