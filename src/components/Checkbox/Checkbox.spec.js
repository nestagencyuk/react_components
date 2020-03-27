context('Checkbox', () => {

  describe(`Base`, () => {
    const id = 'components-checkbox--base'

    it('Choose an option', () => {
      cy.visit(`http://localhost:3002/iframe.html?id=${id}`)

      cy.get('#checkbox').click()
      cy.get('.p').invoke('text').should('eq', 'Value: true')
    })
  })

  describe(`Group`, () => {
    const id = 'components-checkbox--group'

    it('Choose an option', () => {
      cy.visit(`http://localhost:3002/iframe.html?id=${id}`)

      cy.get('.checkbox:nth-of-type(1)').click()
      cy.get('.p').invoke('text').should('eq', 'Values selected: ["cat"]')

      cy.get('.checkbox:nth-of-type(2)').click()
      cy.get('.p').invoke('text').should('eq', 'Values selected: ["cat","dog"]')

      cy.get('.checkbox:nth-of-type(3)').click()
      cy.get('.p').invoke('text').should('eq', 'Values selected: ["cat","dog","horse"]')
    })
  })
})
