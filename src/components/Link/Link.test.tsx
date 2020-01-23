import 'jsdom-global/register'
import * as React from 'react'
import { MemoryRouter } from 'react-router-dom'
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
import { Link } from './'

describe('----- Link Component -----', () => {
  it('Renders the correct HTML', () => {
    const htmlA = mount(<MemoryRouter><Link type={'Primary'} href={'/'}>Test</Link></MemoryRouter>)
    expect(htmlA.find('a').html()).to.equal('<a class="link link--primary" href="/">Test</a>')

    const htmlB = mount(<MemoryRouter><Link type={'Secondary'} href={'/'}>Test</Link></MemoryRouter>)
    expect(htmlB.find('a').html()).to.equal('<a class="link link--secondary" href="/">Test</a>')

    const htmlC = mount(<MemoryRouter><Link type={'Tertiary'} href={'/'}>Test</Link></MemoryRouter>)
    expect(htmlC.find('a').html()).to.equal('<a class="link link--tertiary" href="/">Test</a>')
  })
  
  it('Simulates a click', () => {
    const htmlB = mount(<MemoryRouter><Link type={'Primary'} href={'/'}>Test</Link></MemoryRouter>)
    htmlB.find('a').simulate('click', { button: 0 })
  })
})