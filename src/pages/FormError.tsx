import React from 'react'
import { Link } from 'react-router-dom'
import Bounce from 'react-reveal/Bounce'
import { Fault } from '../components/svg/Fault'

export function FormErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center p-24">
      <div className="flex flex-col items-center justify-center">
        <Bounce up>
          <div className="z-10 flex flex-col px-8 py-4 m-auto bg-gray-100 rounded-lg shadow-lg items-left ">
            <h1 className="mb-4 text-xl font-bold">
              Sorry, there was an error submitting your information
            </h1>
            <p>Please verify your address and try again</p>
            <Link to="/">
              <button className="px-4 py-2 my-4 ml-auto font-bold text-white bg-green-500 rounded transition duration-500 hover:bg-green-600 hover:shadow-xl">
                Sign Up
              </button>
            </Link>
          </div>
        </Bounce>
      </div>

      <div className="absolute opacity-75 h-1/3">
        <Fault />
      </div>
    </div>
  )
}
