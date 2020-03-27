import 'jsdom-global/register'
import * as React from 'react'
import * as Adapter from 'enzyme-adapter-react-16'
import * as sinon from 'sinon'
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
import { Select } from './'

describe('----- Select Component -----', () => {
  it('Renders the correct HTML', () => {
    const htmlA = shallow(<Select id={'name'} options={[{ label: 'Option 1', value: 'option-1' },{ label: 'Option 2', value: 'option-2' }]} value={null} onChange={() => {}} />)
    expect(htmlA.html()).to.equal('<div class="select select--primary">Select</div>')
  })
})