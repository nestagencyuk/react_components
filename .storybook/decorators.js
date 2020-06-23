import React from 'react'

/**
 * Demo Decorator
 */
const demoDecorator = (story) => <div className="demo">{story()}</div>

/**
 * Demo and Name Decorator
 */
const nameDecorator = (story) => <div className="demo">{story()}<span className="demo__caption">{story().props.name}</span></div>

export { demoDecorator, nameDecorator }