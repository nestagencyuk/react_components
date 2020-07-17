import React from 'react'

/**
 * Demo decorator
 */
const demoDecorator = (story) => <div className="demo">{story()}</div>

/**
 * Set min height on demo
 */
const minHeightDecorator = (story) => <div className="demo demo--min-height">{story()}</div>

/**
 * Select decorator
 */
const selectDecorator = (story) => <div className="demo demo--select">{story()}</div>

/**
 * Demo and name decorator
 */
const iconDecorator = (story) => (
  <div className="demo demo--icn">
    {story()}
    <span className="demo__caption">{story().props.name}</span>
  </div>
)

/**
 * Force a large container for scrollable demos
 */
const scrollDecorator = (story) => <div className="demo demo--scroll">{story()}</div>

/**
 * Add a dark background for light components
 */
const inverseDecorator = (story) => <div className="demo demo--inverse">{story()}</div>

/**
 * Adjust size to demo float
 */
const floatDecorator = (story) => <div className="demo demo--float">{story()}</div>

/**
 * Adjust to demo datatable
 */
const dataTableDecorator = (story) => <div className="demo demo--datatable">{story()}</div>

export {
  demoDecorator,
  selectDecorator,
  iconDecorator,
  scrollDecorator,
  inverseDecorator,
  floatDecorator,
  minHeightDecorator,
  dataTableDecorator
}
