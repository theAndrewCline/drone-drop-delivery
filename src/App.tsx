import firebase from 'firebase/app'
import 'firebase/firestore'
import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  useRouteMatch
} from 'react-router-dom'
import { PaperPlane } from './components/svg/PaperPlane'
import Firestore from './Firestore'
import { FormErrorPage } from './pages/FormError'
import { SignUpPage } from './pages/SignUp'
import { UsersPage } from './pages/Users'
import './tailwind.output.css'

const firebaseConfig = {
  apiKey: 'AIzaSyAIv5clMf8eLd_SbJlyI1r3GBihGM3ybN0',
  authDomain: 'drone-drop-delivery.firebaseapp.com',
  projectId: 'drone-drop-delivery',
  storageBucket: 'drone-drop-delivery.appspot.com',
  messagingSenderId: '187764017051',
  appId: '1:187764017051:web:29a34fe9229887beb4c33e',
  measurementId: 'G-0TQR66RRM3'
}

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

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
  const getAddresses = async () => {
    const querySnapshot = await db.collection('addresses').get()
    const data = querySnapshot.docs.map((doc) => doc.data())
    console.log(data)
  }

  useEffect(() => {
    getAddresses()
  }, [])

  return (
    <Firestore.Provider value={db}>
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
    </Firestore.Provider>
  )
}

export default App
