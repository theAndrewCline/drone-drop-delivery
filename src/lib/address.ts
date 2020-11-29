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

export function resultToAddress(result: any): Address {
  return {
    street: result.deliveryLine1,
    secondary: result.deliveryLine2,
    city: result.components.cityName,
    state: result.components.state,
    zipcode: result.components.zipCode,
    geo: {
      lat: result.metadata.latitude,
      lng: result.metadata.longitude
    }
  }
}

const key = process.env.REACT_APP_SMARTY_WEBSITE_KEY as string
const credentials = new SmartyStreets.SharedCredentials(key)
const client = SmartyStreets.buildClient.usStreet(credentials)

const Lookup = usStreet.Lookup

export async function validateAddress(address: Address): Promise<Address> {
  let lookup = new Lookup()
  lookup.street = address.street
  lookup.secondary = address.secondary || ''
  lookup.city = address.city
  lookup.state = address.state
  lookup.zipCode = address.zipcode
  lookup.maxCandidates = 1

  return client
    .send(lookup)
    .then((data: any) => {
      if (data?.lookups[0]?.result?.length > 0) {
        return data.lookups[0].result[0]
      } else {
        throw new Error('Address Is Not Valid')
      }
    })
    .then(resultToAddress)
}
