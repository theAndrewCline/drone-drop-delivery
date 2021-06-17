import React, { useContext } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch
} from 'react-router-dom'
import { PaperPlane } from './components/svg/PaperPlane'
import { AddAddress } from './pages/AddAddress'
import { FormErrorPage } from './pages/FormError'
import SignUp from './pages/SignUp'
import ProfilePage from './pages/Profile'
import 'twin.macro'
import FirebaseContext from './Firebase'

function Nav() {
  const usersRoute = useRouteMatch('/profile')
  const { auth } = useContext(FirebaseContext)

  if (usersRoute) {
    return (
      <div tw="w-screen p-4 bg-white">
        <nav tw="flex items-center p-2 m-auto max-w-screen-lg">
          <PaperPlane />
          <h1 tw="ml-4 text-2xl font-bold text-green-600">
            Drone Drop Delivery
          </h1>

          <button
            onClick={() => {
              auth.signOut()
            }}
            tw="px-4 py-2 ml-auto font-bold text-green-500 border-2 border-green-500 rounded transition duration-500 hover:bg-green-50  hover:shadow-xl"
          >
            Sign Out
          </button>
        </nav>
      </div>
    )
  } else {
    return (
      <div tw="w-screen p-4 bg-white">
        <nav tw="flex flex-row items-center p-2">
          <PaperPlane />
          <h1 tw="ml-4 text-2xl font-bold text-green-600">
            Drone Drop Delivery
          </h1>
        </nav>
      </div>
    )
  }
}

function App() {
  return (
    <Router>
      <Nav />

      <Switch>
        <Route exact path="/">
          <SignUp />
        </Route>

        <Route path="/add-address">
          <AddAddress />
        </Route>

        <Route path="/profile">
          <ProfilePage />
        </Route>

        <Route path="/form-error">
          <FormErrorPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
