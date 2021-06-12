import React from 'react'
import firebase from 'firebase/app'

const provider = new firebase.auth.GoogleAuthProvider()

const SignUp = () => {
  const signInWithGoogle = async () => {
    firebase.auth().signInWithPopup(provider)
  }

  return (
    <div className="container mx-auto flex flex-col items-center">
      <div className="flex flex-col items-center px-16 py-8 bg-gray-200 rounded shadow">
        <h1 className="text-2xl font-bold text-black">Sign In</h1>
        <hr className="w-full my-4 border border-gray-400" />
        <button
          onClick={signInWithGoogle}
          className="px-4 py-2 mx-2 font-bold text-white bg-green-500 rounded shadow hover:shadow-lg hover:bg-green-400 transition focus:outline-none focus:ring-2 focus:ring-green-900"
        >
          Sign In With Google
        </button>
      </div>
    </div>
  )
}

export default SignUp
