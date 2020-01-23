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
import { Grid, GridItem } from './'

describe('----- Grid Component -----', () => {
  it('Renders the correct HTML', () => {
    const htmlA = shallow(<Grid><GridItem>Test</GridItem></Grid>)
    expect(htmlA.html()).to.equal('<section class="grid"><div class="grid__item">Test</div></section>')
    
    const htmlB = shallow(<Grid><GridItem span={6}>Test</GridItem><GridItem span={6}>Test</GridItem></Grid>)
    expect(htmlB.html()).to.equal('<section class="grid"><div class="grid__item grid__item--6">Test</div><div class="grid__item grid__item--6">Test</div></section>')
  })
})