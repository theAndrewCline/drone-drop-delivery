import { core as SmartyStreets, usStreet } from 'smartystreets-javascript-sdk'

export type Address = {
  street: string
  secondary?: string
  city: string
  state: string
  zipcode: string
  geo: {
    lat: number
    lng: number
  }
}

const key = process.env.REACT_APP_SMARTY_WEBSITE_KEY as string
const credentials = new SmartyStreets.SharedCredentials(key)
const client = SmartyStreets.buildClient.usStreet(credentials)

const Lookup = usStreet.Lookup

export type Lookup = typeof Lookup

export function validateAddress(address: Address): Promise<any> {
  let lookup = new Lookup()
  lookup.street = address.street
  lookup.secondary = address.secondary || ''
  lookup.city = address.city
  lookup.state = address.state
  lookup.zipCode = address.zipcode
  lookup.maxCandidates = 1

  return client.send(lookup)
}
