import IAccordion from './types'
import * as React from 'react'
import { Fragment, useContext, useRef } from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import '@nestagencyuk/scss_lib/dist/accordion.scss'

/**
 * Components
 */
import { Text } from '../Text'
import { Icon } from '../Icon'

/**
 * Context
 */
import { ToggleGroupContext } from '../../context/ToggleGroup'

/**
 * My component
 */
const AccordionItem = ({ className, id, header, children }: IAccordion.IItemProps) => {
  const ref: any = useRef()
  const { toggles, setToggled } = useContext(ToggleGroupContext)

  const maxHeight = toggles[id] ? ref?.current?.scrollHeight : 0

  return (
    <Fragment>
      <button className={cx(className, 'accordion__header')} onClick={() => setToggled(id)}>
        <Text className="accordion__heading" type="Intro" tag="span">
          {header.heading}
        </Text>
        <Icon name={toggles[id] ? 'Chevron-up' : 'Chevron-down'} />
      </button>
      <div ref={ref} className={cx('accordion__item', { 'accordion__item--active': toggles[id] })} style={{ maxHeight }}>
        {children}
      </div>
    </Fragment>
  )
}

export default AccordionItem
