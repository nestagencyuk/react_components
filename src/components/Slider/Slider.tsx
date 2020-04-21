import { ISlider } from './types'
import * as React from 'react'
import { Fragment, useEffect } from 'react'
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
import { Icon } from '../Icon'
import { Pagination } from '../Pagination'

/**
 * Types
 */
const variants = {
  Fade: 'slider--fade',
  Slide: 'slider--slide'
}

/**
 * My component
 */
const Slider = ({ className, variant = 'Slide', init = 0, tick, items, nav }: ISlider.IProps) => (
  <Paginate init={init} limit={1}>
    {({ items: pageItems, current, setCurrent }) => {
      const total = items.length
      const max = total - 1
      const min = 0
      const prev = current - 1 < min ? max : current - 1
      const next = current + 1 > max ? min : current + 1

      const bodyStyle = {
        width: `${100 * total}%`,
        transform: variant === 'Slide' ? `translateX(-${(100 / total) * current}%)` : null
      }

      const showDots = nav ? nav === 'Dots' : true
      const showButtons = nav ? nav === 'Buttons' : true

      /**
       * Render slide items
       */
      const renderItems = () =>
        items.map((x, i) => {
          const itemStyle = {
            transform: variant === 'Fade' ? `translateX(-${100 * i}%)` : null
          }
          return (
            <div
              key={`slide-${i}`}
              className={cx('slider__item', { 'slider__item--active': pageItems.includes(i) })}
              style={itemStyle}
            >
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
        <section className={cx(className, 'slider', variants[variant])}>
          <div className='slider__body'>
            <div className='slider__items' style={bodyStyle}>
              {renderItems()}
            </div>

            {showButtons && (
              <Fragment>
                <button className='slider__btn slider__btn--prev' onClick={() => setCurrent(prev)}>
                  Prev
                  <Icon name='chevron-left' size='Large' colour='Light' />
                </button>
                <button className='slider__btn slider__btn--next' onClick={() => setCurrent(next)}>
                  Next
                  <Icon name='chevron-right' size='Large' colour='Light' />
                </button>
              </Fragment>
            )}
          </div>

          {showDots && (
            <Pagination
              className='slider__nav'
              variant='Dots'
              current={current}
              items={Array.from(Array(total).keys())}
              onCurrent={(i) => setCurrent(i)}
            />
          )}
        </section>
      )
    }}
  </Paginate>
)

export default Slider
