import React, { useEffect, useState } from 'react'
import { Page } from './BasePage'

type User = {
  id: string
  name: string
  address: {
    street: string
    secondary: string
    city: string
    zip: string
    geo: {
      lat: number
      lng: number
    }
  }
}

type ULIProps = {
  user: User
  key: string
}

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

  useEffect(() => {
    fetch('https://www.database.com')
      .then((data) => data.json())
      .then((data) => {
        const users = (data as unknown) as User[]
        setUsers(users)
      })
  }, [])

  return (
    <Page>
      <div className="w-full">
        <h1 className="mb-4 ml-4 text-2xl font-bold">Active Users</h1>
        <ul id="users" className="w-full bg-gray-100 rounded-lg shadow-lg">
          {users.map((user: User) => {
            return <UserLi user={user} key={user.id} />
          })}
        </ul>
      </div>
    </Page>
  )
}
