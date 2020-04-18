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
import { Image } from './'

describe('----- Image Component -----', () => {
  it('Renders the correct HTML', () => {
    const htmlA = shallow(<Image aspect='7x3' src='/' alt='My Image' />)
    expect(htmlA.html()).to.equal('<figure class="img img--7x3"><picture class="img__picture"><span class="img__loader"><div class="loader loader--circle"></div></span><img class="img__img" src="/" alt="My Image"/></picture></figure>')

    const htmlB = shallow(<Image aspect='16x9' src='/' srcSet={[{ media: '(min-width: 500px)', srcSet: 'https://source.unsplash.com/random/1000x1000'}]} alt='My Image' />)
    expect(htmlB.html()).to.equal('<figure class="img img--16x9"><picture class="img__picture"><span class="img__loader"><div class="loader loader--circle"></div></span><source media="(min-width: 500px)" srcSet="https://source.unsplash.com/random/1000x1000"/><img class="img__img" src="/" alt="My Image"/></picture></figure>')
  })
})