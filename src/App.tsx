import React from 'react'
import { Form } from './Form'
import { DroneDelivery } from './DroneDelivery'
import { PaperPlane } from './PaperPlane'
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

function Page({ children }: any) {
  return (
    <div className="flex flex-col items-center justify-center flex-1 min-h-screen">
      {children}
    </div>
  )
}

function SignUpPage() {
  return (
    <Page>
      <Form />
      <div className="absolute">
        <DroneDelivery />
      </div>
    </Page>
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
          <Page>
            <h1>Users</h1>
          </Page>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
