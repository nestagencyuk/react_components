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
import { Button } from '.'

describe('----- Button Component -----', () => {  
  it('Renders the correct HTML', () => {
    const htmlA = shallow(<Button>Test</Button>)
    expect(htmlA.html()).to.equal('<button class="btn btn--primary" type="button">Test</button>')

    const htmlB = shallow(<Button variant='Secondary'>Test</Button>)
    expect(htmlB.html()).to.equal('<button class="btn btn--secondary" type="button">Test</button>')

    const htmlC = shallow(<Button variant='Tertiary'>Test</Button>)
    expect(htmlC.html()).to.equal('<button class="btn btn--tertiary" type="button">Test</button>')

    const htmlD = shallow(<Button variant='Action'>Test</Button>)
    expect(htmlD.html()).to.equal('<button class="btn btn--action" type="button">Test</button>')
    
    const htmlE = mount(<MemoryRouter><Button href='/'>Test</Button></MemoryRouter>)
    expect(htmlE.find('a').html()).to.equal('<a class="btn btn--primary" href="/">Test</a>')

    const htmlF = mount(<MemoryRouter><Button variant='Secondary' href='/'>Test</Button></MemoryRouter>)
    expect(htmlF.find('a').html()).to.equal('<a class="btn btn--secondary" href="/">Test</a>')

    const htmlG = mount(<MemoryRouter><Button variant='Tertiary' href='/'>Test</Button></MemoryRouter>)
    expect(htmlG.find('a').html()).to.equal('<a class="btn btn--tertiary" href="/">Test</a>')

    const htmlH = mount(<MemoryRouter><Button variant='Action' href='/'>Test</Button></MemoryRouter>)
    expect(htmlH.find('a').html()).to.equal('<a class="btn btn--action" href="/">Test</a>')
  })
  
  it('Simulates a click', () => {
    const spy = sinon.spy()
    const elA = shallow(<Button onClick={spy}>Test</Button>)
    elA.find('button').simulate('click')
    expect(spy).to.have.property('callCount', 1)
  })
})