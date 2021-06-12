import React, { useContext, useEffect, useState } from 'react'
import FirestoreContext from '../Firestore'
import { Address } from '../lib/address'
import { User } from '../lib/user'
import { Page } from './BasePage'

type ULIProps = {
  user: User
}

const UserLi = ({ user }: ULIProps) => (
  <li className="flex flex-col justify-between p-4 border-b-2 text-md last:border-b-0 md:flex-row">
    <div className="flex items-center flex-1 font-bold">
      <div className="w-2 h-2 mr-2 bg-green-300 rounded-full animate-pulse"></div>
      <h1>{user.name}</h1>
    </div>
    <div className="flex-1">
      <h1>{user.address.street}</h1>
    </div>
    <div className="flex-1">
      <h1>
        Lat: {user.address.geo?.latitude || ''}, Long:{' '}
        {user.address.geo?.longitude}
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
  const db = useContext(FirestoreContext)
  const [addresses, setAddress] = useState<Address[]>([])
  const [pageState, setPageState] = useState<UsersPageState>(
    UsersPageState.Loading
  )

  const getAddresses = async () => {
    const querySnapshot = await db?.collection('addresses').get()
    const data = querySnapshot?.docs.map((doc) => doc.data())

    if (data) {
      setAddress(data as Address[])
      setPageState(UsersPageState.Users)
    } else {
      setPageState(UsersPageState.NoUsers)
    }
  }

  useEffect(() => {
    getAddresses()
  })

  switch (pageState) {
    case UsersPageState.Loading:
      return <h1>Loading users ...</h1>
    case UsersPageState.NoUsers:
      return <h1>No registered users</h1>
    case UsersPageState.Users:
      return (
        <>
          <h1 className="mb-4 ml-4 text-2xl font-bold">Active Users</h1>
          <ul id="users" className="w-full bg-gray-100 rounded-lg shadow-lg">
            {addresses.map((addy) => (
              <p>{JSON.stringify(addy)}</p>
            ))}
          </ul>
        </>
      )
  }
}

export function UsersPage() {
  return (
    <Page>
      <div className="z-10 w-full">
        <UserList />
      </div>
    </Page>
  )
}
