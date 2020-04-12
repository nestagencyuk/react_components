context('Radio', () => {

  describe(`Base`, () => {
    const id = 'forms-radio--base'

    it('Choose an option', () => {
      cy.visit(`http://localhost:3002/iframe.html?id=${id}`)

      cy.get('#radio').click()
      cy.get('.text').invoke('text').should('eq', 'Value: true')
    })
  })

  describe(`Group`, () => {
    const id = 'forms-radio--group'

    it('Choose an option', () => {
      cy.visit(`http://localhost:3002/iframe.html?id=${id}`)

      cy.get('.radio:nth-of-type(1)').click()
      cy.get('.text').invoke('text').should('eq', 'Value selected: "cat"')

      cy.get('.radio:nth-of-type(2)').click()
      cy.get('.text').invoke('text').should('eq', 'Value selected: "dog"')

      cy.get('.radio:nth-of-type(3)').click()
      cy.get('.text').invoke('text').should('eq', 'Value selected: "horse"')
    })
  })
})
