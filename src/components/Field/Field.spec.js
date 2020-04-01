context('Field', () => {
  describe(`Base`, () => {
    const id = 'components-field--states'

    it('Types in a value', () => {
      cy.visit(`http://localhost:3002/iframe.html?id=${id}`)

      cy.get('.input').type(' ').clear()
      cy.get('.field').should('have.class', 'field--error')
      cy.get('.field__msg').invoke('text').should('eq', 'Please enter a value')

      cy.get('.input').type('A')
      cy.get('.field').should('have.class', 'field--warning')
      cy.get('.field__msg').invoke('text').should('eq', 'Please enter a longer value')

      cy.get('.input').clear().type('A longer')
      cy.get('.field').should('have.class', 'field--success')
      cy.get('.field__msg').invoke('text').should('eq', 'Hoorah!')
    })
  })
})
