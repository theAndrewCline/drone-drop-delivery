function locationToUrl(location: Location): string {
  const apiKey = Cypress.env('geo_key')
  const url = `https://app.geocodeapi.io/api/v1/search?apikey=${apiKey}&text=${location.address},${location.unit},${location.city},${location.state},${location.zip}`
  return encodeURI(url)
}

describe('Add Location Page', function () {
  it('should have the correct form', function () {
    const location = {
      address: '1501 Gardener Ln',
      unit: 'Apt 1512',
      city: 'Peoria Heights',
      state: 'IL',
      zip: '61616'
    }

    const route = locationToUrl(location)
    console.log(route)
    cy.intercept(locationToUrl(location), 'geo-code.json').as('getGeoCode')

    cy.visit('localhost:3000')

    cy.get('#add-info-form').find('#name').type('Andrew Cline')

    cy.get('#add-info-form').find('#address').type(location.address)

    cy.get('#add-info-form').find('#unit').type(location.unit)

    cy.get('#add-info-form').find('#city').type(location.city)

    cy.get('#add-info-form').find('#state').type(location.state)

    cy.get('#add-info-form').find('#zip').type(location.zip)

    cy.get('#add-info-form').find('button').contains('Add Location').click()

    cy.wait('@getGeoCode')
  })

  it('should have the correct form', function () {
    const location = {
      address: '1021 N Summit Blvd',
      unit: '',
      city: 'Peoria',
      state: 'IL',
      zip: '61606'
    }

    const route = locationToUrl(location)
    console.log(route)
    cy.intercept(locationToUrl(location), 'geo-code.json').as('getGeoCode')

    cy.visit('localhost:3000')

    cy.get('#add-info-form').find('#name').type('Andrew Cline')

    cy.get('#add-info-form').find('#address').type(location.address)

    cy.get('#add-info-form').find('#unit')

    cy.get('#add-info-form').find('#city').type(location.city)

    cy.get('#add-info-form').find('#state').type(location.state)

    cy.get('#add-info-form').find('#zip').type(location.zip)

    cy.get('#add-info-form').find('button').contains('Add Location').click()

    cy.wait('@getGeoCode')
  })
})
