import React from 'react';

/**
 * Demo Decorator
 */
const demoDecorator = story => <div className="demo">{story()}</div>;

/**
 * Demo and Name Decorator
 */
const nameDecorator = story => (
  <div className="demo">
    {story()}
    <span className="demo__caption">{story().props.name}</span>
  </div>
);

/**
 * Force a large container for scrollable demos
 */
const scrollDecorator = story => (
  <div className="demo" style={{ height: '1000px' }}>
    {story()}
  </div>
);

export { demoDecorator, nameDecorator, scrollDecorator };
