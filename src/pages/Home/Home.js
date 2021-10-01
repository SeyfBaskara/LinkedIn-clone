import React, { useEffect } from 'react'
import './Home.css'

import { useDispatch } from 'react-redux'
import { login, logout } from '../../redux/userSlice'

import Sidebar from '../../components/SideBar/Sidebar'
import Feed from '../../components/Feed/Feed'
import Widgets from '../../components/widgets/Widgets'

import 'firebase/app'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../features/firebase'

const Home = () => {
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
      <div className="home">
         <div className="home__app">
            <Sidebar />
            <Feed />
            <Widgets />
         </div>
      </div>
   )
}

export default Home
