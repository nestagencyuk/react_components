import { expect } from 'chai'

/**
 * Components
 */
import { createNavNodes } from '.'

describe('----- Create Navigation Nodes -----', () => {
  it('Turn links array into a tree object', () => {
    const actual: any = [
      {
        text: 'Home',
        href: '/'
      },
      {
        text: 'About',
        href: '/about'
      },
      {
        text: 'Blog',
        href: '/blog'
      },
      {
        text: 'Mammals',
        children: [
          {
            text: 'Cats',
            href: '/mammals/cats'
          },
          {
            text: 'Dogs',
            children: [
              {
                text: 'Labrador',
                href: '/mammals/dogs/labrador'
              },
              {
                text: 'Terrier',
                href: '/mammals/dogs/terrier'
              },
            ]
          },
        ]
      },
      {
        text: 'Reptiles',
        children: [
          {
            text: 'Iguana',
            href: '/reptiles/iguana'
          },
          {
            text: 'Gecko',
            href: '/reptiles/gecko'
          }
        ]
      },
    ]

    const expected = {
      Mammals: {
        open: false,
        depth: 1,
        Dogs: {
          open: false,
          depth: 2
        },
      },
      Reptiles: {
        open: false,
        depth: 1
      }
    }

    const outcome = createNavNodes(actual)
    expect(outcome).to.deep.equal(expected)
  })
})