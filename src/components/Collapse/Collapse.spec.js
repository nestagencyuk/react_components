context('Collapse', () => {
  describe(`Base`, () => {
    const id = 'components-base-collapse--base'

    it('Choose first option', () => {
      cy.visit(`http://localhost:3002/iframe.html?id=${id}`)

      cy.get('.collapse > .collapse__header').click()
      cy.get('.collapse > .collapse__body').should('have.class', 'collapse__body--open')
    })
  })

  describe(`Multiple`, () => {
    const id = 'components-base-collapse--multiple'

    it('Choose first option', () => {
      cy.visit(`http://localhost:3002/iframe.html?id=${id}`)

      cy.get('.collapse:nth-of-type(1) > .collapse__header').click()
      cy.get('.collapse:nth-of-type(1) > .collapse__body').should('have.class', 'collapse__body--open')
    })

    it('Choose second option', () => {
      cy.visit(`http://localhost:3002/iframe.html?id=${id}`)

      cy.get('.collapse:nth-of-type(2) > .collapse__header').click()
      cy.get('.collapse:nth-of-type(2) > .collapse__body').should('have.class', 'collapse__body--open')
      cy.get('.collapse:nth-of-type(1) > .collapse__body').should('not.have.class', 'collapse__body--open')
    })
  })
})
