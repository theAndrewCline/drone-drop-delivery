import { createContext } from 'react'
import firebase from 'firebase/app'

const FirestoreContext = createContext<
  undefined | firebase.firestore.Firestore
>(undefined)

export default FirestoreContext
