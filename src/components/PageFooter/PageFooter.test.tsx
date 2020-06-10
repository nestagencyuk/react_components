
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
import { PageFooter } from './'

describe('----- Footer Component -----', () => {
  it('Renders the correct HTML', () => {
    // const htmlA = shallow(<Footer type={'Primary'} />)
    // expect(htmlA.html()).to.equal('<div class="footer footer--primary">Footer</div>')
  })
})