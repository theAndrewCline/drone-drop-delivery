import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import FirebaseContext from './Firebase'
import reportWebVitals from './reportWebVitals'
import GlobalStyles from './styles/GlobalStyles'

const firebaseConfig = {
  apiKey: 'AIzaSyAIv5clMf8eLd_SbJlyI1r3GBihGM3ybN0',
  authDomain: 'drone-drop-delivery.firebaseapp.com',
  projectId: 'drone-drop-delivery',
  storageBucket: 'drone-drop-delivery.appspot.com',
  messagingSenderId: '187764017051',
  appId: '1:187764017051:web:29a34fe9229887beb4c33e',
  measurementId: 'G-0TQR66RRM3'
}

firebase.initializeApp(firebaseConfig)

const firestore = firebase.firestore()
const auth = firebase.auth()

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <FirebaseContext.Provider value={{ firestore, auth }}>
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
