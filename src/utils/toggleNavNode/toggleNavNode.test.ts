import { expect } from 'chai'

/**
 * Components
 */
import { toggleNavNode } from '.'

describe('----- Open Navigation Nodes -----', () => {
  it('Toggle open a node', () => {
    const actual = {
      Mammals: {
        open: false,
        depth: 1,

        Dogs: {
          open: false,
          depth: 2,

          Blah: {
            open: false,
            depth: 3
          },

          Blah2: {
            open: true,
            depth: 3
          },
        },
      },
      Reptiles: {
        open: false,
        depth: 1
      }
    }

    const expected = {
      Mammals: {
        open: false,
        depth: 1,

        Dogs: {
          open: false,
          depth: 2,

          Blah: {
            open: true,
            depth: 3
          },

          Blah2: {
            open: false,
            depth: 3
          },
        },
      },
      Reptiles: {
        open: false,
        depth: 1
      }
    }

    const outcome = toggleNavNode(actual, 'Blah')
    console.log('Outcome', outcome)
    expect(outcome).to.deep.equal(expected)
  })
})