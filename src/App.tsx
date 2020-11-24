import React from 'react'
import { Form } from './Form'
import { DroneDelivery } from './DroneDelivery'
import { PaperPlane } from './PaperPlane'
import './tailwind.output.css'

function Nav() {
  return (
    <div className="fixed w-screen bg-white p-4 z-20">
      <nav className="max-w-screen-2xl m-auto flex p-2 items-center">
        <PaperPlane className="h-8" />
        <h1 className="text-green-600 text-2xl font-bold ml-4">
          Drone Drop Delivery
        </h1>
      </nav>
    </div>
  )
}

function App() {
  return (
    <>
      <Nav />
      <div className="flex flex-1 flex-col justify-center items-center min-h-screen">
        <Form />
        <div className="absolute">
          <DroneDelivery />
        </div>
      </div>
    </>
  )
}

export default App
