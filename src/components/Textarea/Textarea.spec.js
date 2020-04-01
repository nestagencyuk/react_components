context('Textarea', () => {

  describe(`Base`, () => {
    const id = 'components-textarea--base'

    it('Types in a value', () => {
      cy.visit(`http://localhost:3002/iframe.html?id=${id}`)

      cy.get('#textarea').type('A value')
      cy.get('.text').invoke('text').should('eq', 'Value: A value')

      cy.get('#textarea').clear().type('Another value')
      cy.get('.text').invoke('text').should('eq', 'Value: Another value')
    })
  })
})
