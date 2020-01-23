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
import { Template } from './'

describe('----- Template Component -----', () => {
  it('Renders the correct HTML', () => {
    const template = shallow(<Template type={'Primary'} />)
    expect(template.html()).to.equal('<div class="template template--primary">Template</div>')
  })
})