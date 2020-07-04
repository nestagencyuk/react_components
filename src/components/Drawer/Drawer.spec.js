context('Drawer', () => {
  describe(`Base`, () => {
    const id = 'components-base-drawer--base'

    it('Opens the drawer', () => {
      cy.visit(`http://localhost:3002/iframe.html?id=${id}`)

      cy.get('.btn').click()
      // cy.get('.dra').invoke('text').should('eq', 'Value: true')
    })
  })
})
