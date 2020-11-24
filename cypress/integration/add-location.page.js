describe('Add Location Page', function () {
  it('should have the correct form', function () {
    cy.visit('localhost:3000')

    cy.get('#add-info-form').find('#name').should('have.focus')

    cy.get('#add-info-form').find('#address')
  })
})
