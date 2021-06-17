import firebase from 'firebase/app'
import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import FirestoreContext from '../Firebase'
import { Address } from '../lib/address'
import { Page } from './BasePage'
import 'twin.macro'

type AddressViewProps = {
  address: Address
}

const AddressView: React.FC<AddressViewProps> = ({ address }) => (
  <li tw="flex flex-col justify-between p-4 border-b-2 last:border-b-0 md:flex-row">
    <div tw="flex-1">
      <p>
        {address.street}, {address.city} {address.state}, {address.zipcode}
      </p>
    </div>
    <div>
      <h1>
        Lat: {address.geo.latitude || ''}, Long: {address.geo.longitude}
      </h1>
    </div>
  </li>
)

enum UsersPageState {
  Loading,
  NoUsers,
  Users
}

const UserList = () => {
  const { firestore } = useContext(FirestoreContext)
  const history = useHistory()
  const [user, setUser] = useState<undefined | firebase.User>()
  const [addresses, setAddress] = useState<Address[]>([])
  const [pageState, setPageState] = useState<UsersPageState>(
    UsersPageState.Loading
  )

  const checkAuthState = async () => {
    const auth = firebase.auth()

    auth.onAuthStateChanged((user_data) => {
      if (user_data) {
        setUser(user_data)
      } else {
        history.push('/')
      }
    })
  }

  const getAddresses = async () => {
    await checkAuthState()

    const querySnapshot = await firestore.collection('addresses').get()
    const data = querySnapshot?.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id
    }))
    console.log(data)

    if (data) {
      setAddress(data as Address[])
      setPageState(UsersPageState.Users)
    } else {
      setPageState(UsersPageState.NoUsers)
    }
  }

  useEffect(() => {
    getAddresses()
  }, [])

  switch (pageState) {
    case UsersPageState.Loading:
      return <h1>Loading users ...</h1>
    case UsersPageState.NoUsers:
      return <h1>No registered users</h1>
    case UsersPageState.Users:
      return (
        <>
          <h1 tw="mb-4 text-2xl font-bold">Welcome, {user.displayName}</h1>

          <h1 tw="mb-4 text-lg text-gray-500 font-bold">My Addresses</h1>
          <ul id="users" tw="w-full bg-gray-100 rounded-lg shadow-lg">
            {addresses.map((addy) => (
              <AddressView key={addy.id} address={addy} />
            ))}
          </ul>
        </>
      )
  }
}

function Profile() {
  return (
    <Page>
      <div tw="z-10 w-full">
        <UserList />
      </div>
    </Page>
  )
}

export default Profile
