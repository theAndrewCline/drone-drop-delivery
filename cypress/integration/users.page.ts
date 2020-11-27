describe('Users Page', function () {
  it('should render the correct page', function () {
    cy.visit('localhost:3000/users')

    cy.intercept('www.database.com', { fixture: 'users.json' }).as('users')

    cy.wait('@users')
  })
})
