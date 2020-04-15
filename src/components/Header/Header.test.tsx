// import 'jsdom-global/register'
// import * as React from 'react'
// import * as Adapter from 'enzyme-adapter-react-16'
// import { expect } from 'chai'
// import { configure, shallow } from 'enzyme'
// import register from 'ignore-styles'

// /**
//  * Setup
//  */
// register(['.scss'])
// configure({ adapter: new Adapter() })

// /**
//  * Components
//  */
// import { Header } from '.'

// describe('----- Header Component -----', () => {
//   it('Renders the correct HTML', () => {
//     const htmlA = shallow(<Header>Test</Header>)
//     expect(htmlA.html()).to.equal('<header class="header">Test</header>')

//     const htmlB = shallow(<Header heading={'Heading'} />)
//     expect(htmlB.html()).to.equal('<header class="header"><h1 class="text text--alpha text--left">Heading</h1></header>')

//     const htmlC = shallow(<Header heading={'Heading'} subheading={'Subheading'} />)
//     expect(htmlC.html()).to.equal('<header class="header"><h1 class="text text--alpha text--left">Heading</h1><h2 class="text text--beta text--left">Subheading</h2></header>')
//   })
// })