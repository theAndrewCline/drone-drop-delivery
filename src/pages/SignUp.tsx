import React, { useContext } from 'react'
import firebase from 'firebase/app'
import { useHistory } from 'react-router-dom'
import 'twin.macro'
import Firebase from '../Firebase'

const provider = new firebase.auth.GoogleAuthProvider()

const SignUp = () => {
  const history = useHistory()
  const { auth } = useContext(Firebase)

  const signInWithGoogle = async () => {
    auth.signInWithPopup(provider).then(() => {
      history.push('/profile')
    })
  }

  return (
    <div tw="container mx-auto flex flex-col items-center">
      <div tw="flex flex-col items-center px-16 py-8 bg-gray-200 rounded shadow">
        <h1 tw="text-2xl font-bold text-black">Sign In</h1>
        <hr tw="w-full my-4 border border-gray-400" />
        <button
          onClick={signInWithGoogle}
          tw="px-4 py-2 mx-2 font-bold text-white bg-green-500 rounded shadow hover:shadow-lg hover:bg-green-400 transition focus:outline-none focus:ring-2 focus:ring-green-900"
        >
          Sign In With Google
        </button>
      </div>
    </div>
  )
}

export default SignUp
