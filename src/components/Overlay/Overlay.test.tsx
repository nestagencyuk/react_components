import 'jsdom-global/register'
import * as React from 'react'
import * as Adapter from 'enzyme-adapter-react-16'
import { expect } from 'chai'
import { configure, shallow } from 'enzyme'
import register from 'ignore-styles'

/**
 * Setup
 */
register(['.scss'])
configure({ adapter: new Adapter() })

/**
 * Components
 */
import { Overlay } from './'

describe('----- Overlay Component -----', () => {
  it('Renders the correct HTML', () => {
    const htmlA = shallow(<Overlay type={'Primary'} />)
    expect(htmlA.html()).to.equal('<div class="overlay overlay--primary">Overlay</div>')
  })
})