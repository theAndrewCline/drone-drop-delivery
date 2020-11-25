export type Location = {
  address: string
  unit?: string
  city: string
  state: string
  zip: string
}

const apiKey = process.env.REACT_APP_GEO_CODE_KEY

export function locationToUrl(location: Location): string {
  const url = `https://app.geocodeapi.io/api/v1/search?apikey=${apiKey}&text=${location.address},${location.unit},${location.city},${location.state},${location.zip}`
  return encodeURI(url)
}
