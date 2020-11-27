describe('Add Location Page', function () {
  it('should have the correct form', function () {
    const location = {
      street: '1501 Gardener Ln',
      unit: 'Apt 1512',
      city: 'Peoria Heights',
      state: 'IL',
      zip: '61616'
    }

    const route = `https://us-street.api.smartystreets.com/street-address?street=1501+Gardener+Ln&secondary=Apt+1512&city=Peoria+Heights&state=IL&zipcode=61616&candidates=1&agent=smartystreets+(sdk:javascript@1.6.0)&auth-id=54115129441651870`

    cy.intercept(route, { fixture: 'gardener-lookup.json' }).as('addressLookup')

    cy.visit('localhost:3000')

    cy.get('#add-info-form').find('#name').type('Andrew Cline')

    cy.get('#add-info-form').find('#street').type(location.street)

    cy.get('#add-info-form').find('#unit').type(location.unit)

    cy.get('#add-info-form').find('#city').type(location.city)

    cy.get('#add-info-form').find('#state').type(location.state)

    cy.get('#add-info-form').find('#zip').type(location.zip)

    cy.get('#add-info-form').find('button').contains('Add Location').click()

    cy.wait('@addressLookup')
  })

  it('should have the correct form', function () {
    const location = {
      street: '1021 N Summit Blvd',
      unit: '',
      city: 'Peoria',
      state: 'IL',
      zip: '61606'
    }

    const route = `https://us-street.api.smartystreets.com/street-address?street=1021+N+Summit+Blvd&city=Peoria&state=IL&zipcode=61606&candidates=1&agent=smartystreets+(sdk:javascript@1.6.0)&auth-id=54115129441651870`

    cy.intercept(route, { fixture: 'summit-lookup.json' }).as('locationLookup')

    cy.visit('localhost:3000')

    cy.get('#add-info-form').find('#name').type('Andrew Cline')

    cy.get('#add-info-form').find('#street').type(location.street)

    cy.get('#add-info-form').find('#unit')

    cy.get('#add-info-form').find('#city').type(location.city)

    cy.get('#add-info-form').find('#state').type(location.state)

    cy.get('#add-info-form').find('#zip').type(location.zip)

    cy.get('#add-info-form').find('button').contains('Add Location').click()

    cy.wait('@locationLookup')
  })
})
