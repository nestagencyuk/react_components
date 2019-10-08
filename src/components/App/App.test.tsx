import 'jsdom-global/register'
import * as React from 'react'
import * as Adapter from 'enzyme-adapter-react-16'
import * as sinon from 'sinon'
import { expect } from 'chai'
import { configure, shallow, mount } from 'enzyme'
import register from 'ignore-styles'

/**
 * Setup
 */
register(['.scss'])
configure({ adapter: new Adapter() })

/**
 * Components
 */
import { App } from './'

describe('----- App Component -----', () => {
  // const app = shallow(<App pages={[{ path: '/', config: { title: 'Test' }}]} />)

  // it('Renders <div>', () => {
  //   expect(app.type()).to.equal('div')
  // })
})