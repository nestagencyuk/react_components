import 'jsdom-global/register'
import * as React from 'react'
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
  const spy = sinon.spy()
  const link = shallow(<Link type={'Primary'} href={'/'}>Link</Link>)

  it('Renders <a>', () => {
    expect(link.type()).to.equal('a')
  })
})