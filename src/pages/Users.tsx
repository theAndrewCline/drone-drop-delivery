import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { Page } from './BasePage'
import { User, GET_USERS_QUERY } from '../lib/user'

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
        Lat: {user.address.geo.lat}, Long: {user.address.geo.lng}
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
  const { loading, error, data } = useQuery(GET_USERS_QUERY)
  const [pageState, dispatch] = useState<UsersPageState>(UsersPageState.Loading)
  const users = data?.users?.data

  useEffect(() => {
    if (error) console.error(error)
  }, [error])

  // DETERMINE'S VIEW STATE
  useEffect(() => {
    if (loading) {
      dispatch(UsersPageState.Loading)
    } else if (users?.length > 0) {
      dispatch(UsersPageState.Users)
    } else {
      dispatch(UsersPageState.NoUsers)
    }
  }, [loading, users])

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
            {users.map((user: User) => (
              <UserLi user={user} key={user._id} />
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
