describe('Users Page', function () {
  it('should render the correct page', function () {
    cy.visit('localhost:3000/users')

    cy.intercept('www.database.com', { fixture: 'users.json' }).as('users')

    cy.wait('@users')

    cy.fixture('users.json').then((users) => {
      users.forEach((user: any) => {
        cy.get('ul#users').find('li').contains(user.name)
        cy.get('ul#users').find('li').contains(user.address.street)
        cy.get('ul#users')
          .find('li')
          .contains(
            `Lat: ${user.address.geo.lat}, Long: ${user.address.geo.lng}`
          )
      })
    })
  })
})
