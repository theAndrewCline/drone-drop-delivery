import React, { useState } from 'react'
import { Page } from './BasePage'
import { DroneDelivery } from '../components/svg/DroneDelivery'
import { Redirect } from 'react-router-dom'
import { validateAddress, Address } from '../lib/address'
import { useCreateUserMutation } from '../lib/user'
import { SignUpForm } from '../components/SignUpForm'

export function SignUpPage() {
  const [shouldRedirect, setShouldRedirect] = useState(false)

  const [name, setName] = useState<string>('')
  const [address, setAddress] = useState<Address>({
    street: '',
    secondary: '',
    city: '',
    state: '',
    zipcode: '',
    geo: {
      lat: 0,
      lng: 0,
    },
  })

  const createUser = useCreateUserMutation()

  function handleFormSubmit() {
    // handle error
    validateAddress(address)
      .then((a: Address) => createUser({ name, address: a }))
      .then(() => {
        setShouldRedirect(true)
      })
      .catch(console.error)
  }

  switch (shouldRedirect) {
    case true:
      return <Redirect to="/users" />
    case false:
      return (
        <Page>
          <div className="flex items-center justify-center flex-col"></div>
          <SignUpForm
            handleFormSubmit={handleFormSubmit}
            setName={setName}
            setAddress={setAddress}
            address={address}
          />

          <div className="absolute">
            <DroneDelivery />
          </div>
        </Page>
      )
  }
}
