import React, { useRef, useEffect } from 'react'
import { DroneDelivery } from './DroneDelivery'
import { PaperPlane } from './PaperPlane'
import './tailwind.output.css'

function Form() {
  const nameRef = useRef(null)

  useEffect(() => {
    const el = (nameRef.current as unknown) as HTMLElement
    el.focus()
  }, [])

  return (
    <div
      id="add-info-form"
      className="bg-gray-200 p-4 px-12 rounded-2xl flex flex-col items-center bg-opactiy-0 z-10 shadow-lg"
    >
      <PaperPlane className="h-16 mb-4" />
      <h1 className="font-bold text-2xl mb-4">Add Your Location</h1>

      <div className="flex flex-col justify-left mb-4">
        <label className="text-xl mb-2" htmlFor="name">
          Name:
        </label>
        <input
          id="name"
          ref={nameRef}
          className="text-xl rounded px-4 py-2 border-2 border-solid border-gray-300"
          type="text"
          placeholder="Jane Doe"
        />
      </div>

      <div className="flex flex-col justify-left mb-4">
        <label className="text-xl mb-2" htmlFor="address">
          Address:
        </label>
        <input
          id="address"
          className="text-xl rounded px-4 py-2 border-2 border-solid border-gray-300"
          type="text"
          placeholder="123 Charming Ave"
          list="addresses"
        />
      </div>

      <button className="font-bold bg-green-500 text-white transition duration-500 hover:bg-green-600 hover:shadow-xl py-2 px-4 my-4 rounded">
        Add Location
      </button>
    </div>
  )
}

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
