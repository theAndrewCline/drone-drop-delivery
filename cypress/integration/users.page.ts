describe('Users Page', function () {
  it('should render the correct page', function () {
    cy.intercept('https://graphql.fauna.com/graphql', {
      fixture: 'users.json'
    }).as('users')

    cy.visit('localhost:3000/users')

    cy.wait('@users')

    // cy.fixture('users.json').then((graphqlReply) => {
    //   graphqlReply.data.users.data.forEach((user: any) => {
    //     cy.get('ul#users').find('li').contains(user.name)
    //     cy.get('ul#users').find('li').contains(user.address.street)
    //     cy.get('ul#users')
    //       .find('li')
    //       .contains(
    //         `Lat: ${user.address.geo.lat}, Long: ${user.address.geo.lng}`
    //       )
    //   })
    // })
  })
})
