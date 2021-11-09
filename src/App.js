import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

import { useSelector, useDispatch } from 'react-redux'
import { selectUser, login, logout } from './redux/userSlice'

import 'firebase/app'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './features/firebase'

import Header from './components/Header/Header'
import Login from './components/Login/Login'
import MessagingBox from './components/MessagingBox/MessagingBox'

// Pages
import Home from './pages/Home/Home'
import MyNetwork from './pages/MyNetwork/MyNetwork'
import Jobs from './pages/Jobs/Jobs'
import Messaging from './pages/Messaging/Messaging'
import Notification from './pages/Notification/Notification'

function App() {
   const user = useSelector(selectUser)
   const dispatch = useDispatch()

   useEffect(() => {
      onAuthStateChanged(auth, (userCredential) => {
         if (userCredential) {
            dispatch(
               login({
                  email: userCredential.email,
                  uid: userCredential.uid,
                  displayName: userCredential.displayName,
                  photoURL: userCredential.photoURL,
               })
            )
         } else {
            dispatch(logout)
         }
      })
   }, [])

   return (
      <Router>
         <div className="app">
            <Header />
            <Switch>
               {!user ? (
                  <Login />
               ) : (
                  <>
                     <Route exact path="/" component={Home} />
                     <Route exact path="/mynetwork" component={MyNetwork} />
                     <Route exact path="/jobs" component={Jobs} />
                     <Route exact path="/messaging" component={Messaging} />
                     <Route exact path="/notifications" component={Notification} />
                  </>
               )}
            </Switch>
            <MessagingBox />
         </div>
      </Router>
   )
}

export default App
