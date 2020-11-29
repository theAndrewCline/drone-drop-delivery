import React from 'react'
import { SignUpPage } from './pages/SignUp'
import { UsersPage } from './pages/Users'
import { PaperPlane } from './components/svg/PaperPlane'
import './tailwind.output.css'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  useRouteMatch
} from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import { setupApollo } from './lib/apolloSetup'
import { FormErrorPage } from './pages/FormError'

const apolloClient = setupApollo()

function Nav() {
  const usersRoute = useRouteMatch('/users')

  if (usersRoute) {
    return (
      <div className="w-screen p-4 bg-white">
        <nav className="flex items-center p-2 m-auto max-w-screen-lg">
          <PaperPlane className="h-8" />
          <h1 className="ml-4 text-2xl font-bold text-green-600">
            Drone Drop Delivery
          </h1>
          <Link to="/" className="ml-auto">
            <button className="px-4 py-2 ml-auto font-bold text-white bg-green-500 rounded transition duration-500 hover:bg-green-600 hover:shadow-xl">
              Sign Up
            </button>
          </Link>
        </nav>
      </div>
    )
  } else {
    return (
      <div className="w-screen p-4 bg-white">
        <nav className="flex items-center p-2 m-auto max-w-screen-lg">
          <PaperPlane className="h-8" />
          <h1 className="ml-4 text-2xl font-bold text-green-600">
            Drone Drop Delivery
          </h1>
        </nav>
      </div>
    )
  }
}

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <Router>
        <Nav />

        <Switch>
          <Route exact path="/">
            <SignUpPage />
          </Route>

          <Route path="/users">
            <UsersPage />
          </Route>

          <Route path="/form-error">
            <FormErrorPage />
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  )
}

export default App
