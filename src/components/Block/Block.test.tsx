import * as React from 'react'
import { render } from '@testing-library/react'
import { Block } from '.'

describe('Block Component', () => {
  it('Renders without crashing', () => {
    const mountComponentInContext = () => render(
      <Block 
        image={{ align: 'Start', src: 'https://source.unsplash.com/random/1000x1000', alt: 'Block Image', aspect: '1x1' }} 
        header={{ heading: 'Heading', subheading: 'Sub Heading' }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Block>
    )
    const { asFragment } = mountComponentInContext()
    expect(asFragment()).toMatchSnapshot()
  })
})
