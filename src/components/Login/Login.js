import React, { useState } from 'react'
import './Login.css'
import { useDispatch } from 'react-redux'

import 'firebase/app'
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../config/firebase'

import { login } from '../../redux/userSlice'

const Login = () => {
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [profilePic, setProfilePic] = useState('')
   const dispatch = useDispatch()

   const handleLogin = (e) => {
      e.preventDefault()

      signInWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
            dispatch(
               login({
                  email: userCredential.user.email,
                  uid: userCredential.user.uid,
                  displayName: userCredential.user.displayName,
                  photoURL: userCredential.user.photoURL,
               })
            )
         })
         .catch((error) => {
            console.log(error)
         })
   }

   const handleRegister = () => {
      if (!name) return alert('Please enter a full name!')

      createUserWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
            updateProfile(userCredential.user, {
               displayName: name,
               photoURL: profilePic,
            }).then(() => {
               dispatch(
                  login({
                     email: userCredential.user.email,
                     uid: userCredential.user.uid,
                     displayName: name,
                     photoURL: profilePic,
                  })
               )
            })
         })
         .catch((error) => {
            console.log(error)
         })
   }
   return (
      <div className="login">
         <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/512px-LinkedIn_Logo.svg.png"
            alt="brand"
         />
         <form>
            <input
               value={name}
               onChange={(e) => setName(e.target.value)}
               placeholder="Full name (Requred)"
               type="Full name"
            />
            <input
               value={profilePic}
               onChange={(e) => setProfilePic(e.target.value)}
               placeholder="Profile pic Url (Optional)"
               type="text"
            />
            <input
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               placeholder="Email (requred)"
               type="Email"
            />
            <input
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               placeholder="Password (requred)"
               type="Password"
            />
            <button type="submit" onClick={handleLogin}>
               Sign in
            </button>
         </form>
         <p>
            Not a member?{' '}
            <span className="login__register" onClick={handleRegister}>
               Register now
            </span>
         </p>
      </div>
   )
}

export default Login
