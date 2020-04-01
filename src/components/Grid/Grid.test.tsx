import 'jsdom-global/register'
import * as React from 'react'
import * as Adapter from 'enzyme-adapter-react-16'
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
import { Grid, GridItem } from './'

describe('----- Grid Component -----', () => {
  it('Renders the correct HTML', () => {
    const htmlA = shallow(
      <Grid>
        <GridItem span={1}>
          Test
        </GridItem>
        <GridItem span={11}>
          Test
        </GridItem>
        <GridItem span={2}>
          Test
        </GridItem>
        <GridItem span={10}>
          Test
        </GridItem>
        <GridItem span={3}>
          Test
        </GridItem>
        <GridItem span={9}>
          Test
        </GridItem>
        <GridItem span={4}>
          Test
        </GridItem>
        <GridItem span={8}>
          Test
        </GridItem>
        <GridItem span={5}>
          Test
        </GridItem>
        <GridItem span={7}>
          Test
        </GridItem>
        <GridItem span={6}>
          Test
        </GridItem>
        <GridItem span={6}>
          Test
        </GridItem>
      </Grid>
    )
    expect(htmlA.html()).to.equal('<div class="grid"><div class="grid__item grid__item--1">Test</div><div class="grid__item grid__item--11">Test</div><div class="grid__item grid__item--2">Test</div><div class="grid__item grid__item--10">Test</div><div class="grid__item grid__item--3">Test</div><div class="grid__item grid__item--9">Test</div><div class="grid__item grid__item--4">Test</div><div class="grid__item grid__item--8">Test</div><div class="grid__item grid__item--5">Test</div><div class="grid__item grid__item--7">Test</div><div class="grid__item grid__item--6">Test</div><div class="grid__item grid__item--6">Test</div></div>')
    
    const htmlB = shallow(
      <Grid gutter>
        <GridItem span={6}>
          Gutter
        </GridItem>
        <GridItem span={6}>
          Gutter
        </GridItem>
      </Grid>
    )
    expect(htmlB.html()).to.equal('<div class="grid grid--gutter"><div class="grid__item grid__item--6">Gutter</div><div class="grid__item grid__item--6">Gutter</div></div>')
    
    const htmlC = shallow(
      <Grid gutter>
        <GridItem span={5}>
          <Grid gutter>
            <GridItem span={8}>
              Nested
            </GridItem>
            <GridItem span={4}>
              Nested
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem span={7}>
          <Grid gutter>
            <GridItem span={6}>
              Nested
            </GridItem>
            <GridItem span={6}>
              Nested
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    )
    expect(htmlC.html()).to.equal('<div class="grid grid--gutter"><div class="grid__item grid__item--5"><div class="grid grid--gutter"><div class="grid__item grid__item--8">Nested</div><div class="grid__item grid__item--4">Nested</div></div></div><div class="grid__item grid__item--7"><div class="grid grid--gutter"><div class="grid__item grid__item--6">Nested</div><div class="grid__item grid__item--6">Nested</div></div></div></div>')
  })
})