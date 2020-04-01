context('Accordion', () => {
  describe(`Base`, () => {
    const id = 'components-accordion--base'

    it('Choose first option', () => {
      cy.visit(`http://localhost:3002/iframe.html?id=${id}`)

      cy.get('.accordion > :nth-child(1)').click()
      cy.get('.accordion > :nth-child(1) + .accordion__item').should('have.class', 'accordion__item--active')
    })

    it('Choose second option', () => {
      cy.visit(`http://localhost:3002/iframe.html?id=${id}`)

      cy.get('.accordion > :nth-child(3)').click()
      cy.get('.accordion > :nth-child(1) + .accordion__item').should('not.have.class', 'accordion__item--active')
      cy.get('.accordion > :nth-child(3) + .accordion__item').should('have.class', 'accordion__item--active')
    })
  })
})
