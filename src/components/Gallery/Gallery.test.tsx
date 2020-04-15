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
import { ImageGrid } from '.'

describe('----- ImageGrid Component -----', () => {
  it('Renders the correct HTML', () => {
    const htmlA = shallow(<ImageGrid type={'Primary'}>ImageGrid</ImageGrid>)
    expect(htmlA.html()).to.equal('<div class="imagegrid imagegrid--primary">ImageGrid</div>')
  })
})