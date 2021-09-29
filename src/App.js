import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import { selectUser, login, logout } from './redux/userSlice'

import Header from './components/Header/Header'
import Sidebar from './components/SideBar/Sidebar'
import Feed from './components/Feed/Feed'
import Login from './components/Login/Login'
import Widgets from './components/widgets/Widgets'

import 'firebase/app'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './config/firebase'

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
      <div className="app">
         <Header />

         {!user ? (
            <Login />
         ) : (
            <div className="body__app">
               <Sidebar />
               <Feed />
               <Widgets />
            </div>
         )}
      </div>
   )
}

export default App
