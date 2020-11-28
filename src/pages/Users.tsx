import React, { useEffect, useState } from 'react'
import { useQuery, gql } from '@apollo/client'
import { Page } from './BasePage'
import { User } from '../lib/user'

type ULIProps = {
  user: User
}

const query = gql`
  query GetUsers {
    users {
      data {
        _id
        name
        address {
          street
          secondary
          geo {
            lat
            lng
          }
        }
      }
    }
  }
`

function UserLi({ user }: ULIProps) {
  return (
    <li className="flex flex-row flex-col justify-between p-4 border-b-2 text-md last:border-b-0 md:flex-row">
      <div className="flex items-center flex-1 font-bold">
        <div
          className={`w-2 h-2 mr-2 bg-green-300 rounded-full animate-pulse`}
        ></div>
        <h1>{user.name}</h1>
      </div>
      <div className="flex-1">
        <h1>{user.address.street}</h1>
      </div>
      <div className="flex-1 ml-auto">
        <h1>
          Lat: {user.address.geo.lat}, Long: {user.address.geo.lng}
        </h1>
      </div>
    </li>
  )
}

export function UsersPage() {
  const [users, setUsers] = useState<User[]>([])

  const { loading, error, data } = useQuery(query)

  useEffect(() => {
    console.log(error)
  }, [error])

  useEffect(() => {
    if (!loading) {
      console.log(data)
      setUsers(data.users.data)
    }
  }, [data, loading])

  return (
    <Page>
      <div className="w-full">
        <h1 className="mb-4 ml-4 text-2xl font-bold">Active Users</h1>
        <ul id="users" className="w-full bg-gray-100 rounded-lg shadow-lg">
          {users.map((user: User) => {
            return <UserLi user={user} key={user._id} />
          })}
        </ul>
      </div>
    </Page>
  )
}
