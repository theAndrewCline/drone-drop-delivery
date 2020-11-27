import React from 'react'
import { SignUpPage } from './pages/SignUp'
import { UsersPage } from './pages/Users'
import { PaperPlane } from './components/svg/PaperPlane'
import './tailwind.output.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function Nav() {
  return (
    <div className="fixed z-20 w-screen p-4 bg-white">
      <nav className="flex items-center p-2 m-auto max-w-screen-2xl">
        <PaperPlane className="h-8" />
        <h1 className="ml-4 text-2xl font-bold text-green-600">
          Drone Drop Delivery
        </h1>
      </nav>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Nav />

      <Switch>
        <Route exact path="/">
          <SignUpPage />
        </Route>
        <Route path="/users">
          <UsersPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
