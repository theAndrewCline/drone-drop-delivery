import { createContext, useContext } from 'react'
import firebase from 'firebase/app'

type FirebaseContextValue = {
  auth?: firebase.auth.Auth
  firestore?: firebase.firestore.Firestore
}

const Firebase = createContext<FirebaseContextValue>({})

export default Firebase

export const useFirebase = () => {
  const value = useContext(Firebase)
  return value
}
