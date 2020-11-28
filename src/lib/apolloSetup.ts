import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { loader } from 'graphql.macro'

const typeDefs = loader('../graphql/schema.graphql')

export function setupApollo() {
  const httpLink = createHttpLink({
    uri: 'https://graphql.fauna.com/graphql'
  })

  const authLink = setContext((_, { headers }) => {
    const token = process.env.REACT_APP_FAUNA_DB_TOKEN

    return {
      headers: {
        ...headers,
        authorization: `Bearer ${token}`
      }
    }
  })

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
    typeDefs
  })
}
