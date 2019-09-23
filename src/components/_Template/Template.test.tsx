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
import { Template } from '.'

describe('----- Component Rendering -----', () => {
  const spy = sinon.spy()

  describe('Template Component', () => {
    const template = shallow(<Template type={'Primary'} />)

    it('Renders <div>', () => {
      expect(template.type()).to.equal('div')
    })
  })
})