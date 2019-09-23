import 'jsdom-global/register'
import * as React from 'react'
import * as Adapter from 'enzyme-adapter-react-16'
import * as sinon from 'sinon'
import { expect } from 'chai'
import { configure, shallow, mount } from 'enzyme'
import register from 'ignore-styles'

// Setup
register(['.scss'])
configure({ adapter: new Adapter() })

// Components
import Button from '.'

describe('----- Component Rendering -----', () => {
  const spy = sinon.spy()

  describe('Button Component', () => {
    const button = shallow(<Button type={'Primary'} onClick={spy}>Test</Button>)

    it('Renders <button>', () => {
      expect(button.type()).to.equal('button')
    })
    it('Renders <a>', () => {
      const link = shallow(<Button type={'Primary'} href={'/'}>Test</Button>)
      expect(link.type()).to.equal('a')
    })
    it('Simulates a click', () => {
      button.find('button').simulate('click')
      expect(spy).to.have.property('callCount', 1)
    })
  })
})