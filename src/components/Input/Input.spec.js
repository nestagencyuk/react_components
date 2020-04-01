context('Input', () => {

  describe(`Base`, () => {
    const id = 'components-input--base'

    it('Types in a value', () => {
      cy.visit(`http://localhost:3002/iframe.html?id=${id}`)

      cy.get('#input').type('A value')
      cy.get('.text').invoke('text').should('eq', 'Value: A value')

      cy.get('#input').clear().type('Another value')
      cy.get('.text').invoke('text').should('eq', 'Value: Another value')
    })
  })
})
