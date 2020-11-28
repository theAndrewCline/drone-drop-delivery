import { useMutation, gql } from '@apollo/client'
import { Address } from './address'

export type User = {
  _id: string
  ts: string
  name: string
  address: Address
}

type UserConfig = {
  name: string,
  address: Address
}

const ADD_USER = gql`
  mutation AddUser($user: UserInput!) {
    createUser(data: $user) {
      _id
    }
  }
`

export function useCreateUserMutation(): (a: UserConfig) => Promise<void> {
  const [addUser] = useMutation(ADD_USER)

  return ({ name, address }: UserConfig) => {
    const user = {
      ts: new Date().toISOString(),
      name,
      address
    }

    return addUser({ variables: { user } })
      .then((response) => {
        if (!response.data) {
          throw new Error('Could not create new user')
        }
      })
  }
}