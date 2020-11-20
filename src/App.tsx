import React from 'react'
import { Drone } from './Drone'
import logo from './logo.svg'
import './tailwind.output.css'

function Form() {
  return (
    <div className="App-header bg-gray-200 p-4 rounded-2xl flex flex-col items-center bg-opactiy-0 z-10">
      <img src={logo} className="App-logo m-2" alt="logo" />
      <p className="bg-green-500 text-white transition duration-500 hover:bg-green-600 p-2 mb-4 rounded">
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  )
}

function App() {
  return (
    <>
      <div className="fixed w-screen bg-green-600 shadow-xl">
        <nav className="max-w-screen-2xl m-auto flex p-2 items-center">
          <Drone className="h-14 w-14 flex items-center justify-center transform -translate-y-2 ml-2" />
          <h1 className="text-white text-2xl font-bold ml-2">
            Drone Drop Delivery
          </h1>
        </nav>
      </div>
      <div className="flex flex-1 justify-center items-center min-h-screen">
        <Form />
      </div>
    </>
  )
}

export default App
