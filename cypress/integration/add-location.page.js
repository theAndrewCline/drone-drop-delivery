describe('Add Location Page', function () {
  it('should have the correct form', function () {
    cy.visit('localhost:3000')

    cy.get('#add-info-form')
      .find('#name')
      .should('have.focus')
      .type('Andrew Cline')

    cy.get('#add-info-form')
      .find('#address')
      .type('1021 N Summit Blvd, Peoria IL, 61606')

    cy.get('#add-info-form').find('button').contains('Add Location').click()
  })
})
