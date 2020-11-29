import React, { useState } from 'react'
import { Page } from './BasePage'
import { DroneDelivery } from '../components/svg/DroneDelivery'
import { Redirect } from 'react-router-dom'
import { validateAddress, Address } from '../lib/address'
import { useCreateUserMutation } from '../lib/user'
import { SignUpForm } from '../components/SignUpForm'
import Bounce from 'react-reveal/Bounce'

export function SignUpPage() {
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const [potentialAddress, setPotentialAddress] = useState<Address | undefined>(
    undefined
  )
  const [error, setError] = useState(false)

  const [name, setName] = useState<string>('')
  const [address, setAddress] = useState<Address>({
    street: '',
    secondary: '',
    city: '',
    state: '',
    zipcode: '',
    geo: {
      lat: 0,
      lng: 0
    }
  })

  const createUser = useCreateUserMutation()

  function handleFormSubmit() {
    validateAddress(address)
      .then((a) => {
        setPotentialAddress(a)
      })
      .catch((_) => {
        setError(true)
        setShouldRedirect(true)
      })
  }

  function handleAddressConfirm() {
    createUser({ name, address: (potentialAddress as unknown) as Address })
      .then(() => {
        setShouldRedirect(true)
      })
      .catch((_) => {
        setError(true)
        setShouldRedirect(true)
      })
  }

  function handleAddressDeny() {
    setPotentialAddress(undefined)
  }

  if (potentialAddress && !shouldRedirect) {
    return (
      <Page>
        <Bounce up>
          <div className="z-10 flex flex-col w-8/12 h-auto p-4 text-lg bg-gray-200 rounded-lg">
            <h1 className="mb-2 font-bold">Is this your address?</h1>
            <p>{potentialAddress.street}</p>
            <p>{potentialAddress.secondary}</p>
            <p>
              {potentialAddress.city} {potentialAddress.state},{' '}
              {potentialAddress.zipcode}
            </p>
            <div className="flex w-100%">
              <button
                className="flex-1 px-4 py-2 my-4 font-bold text-white bg-green-500 rounded transition duration-500 hover:bg-green-600 hover:shadow-xl"
                onClick={() => handleAddressConfirm()}
              >
                Yes
              </button>

              <button
                className="flex-1 px-4 py-2 my-4 ml-2 font-bold text-white bg-red-500 rounded transition duration-500 hover:bg-red-600 hover:shadow-xl"
                onClick={() => handleAddressDeny()}
              >
                No
              </button>
            </div>
          </div>
        </Bounce>

        <div className="absolute">
          <DroneDelivery />
        </div>
      </Page>
    )
  }

  switch (shouldRedirect) {
    case true:
      if (error) {
        return <Redirect to="/form-error" />
      } else {
        return <Redirect to="/users" />
      }
    case false:
      return (
        <Page>
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
