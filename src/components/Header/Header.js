import React from 'react'
import './Header.css'
import HeaderOption from './HeaderOption'

import SearchIcon from '@material-ui/icons/Search'
import ChatIcon from '@material-ui/icons/Chat'
import NotificationsIcon from '@material-ui/icons/Notifications'
import { Home, SupervisorAccount, BusinessCenter, ViewModule, ArrowDropDown } from '@material-ui/icons/'

import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from '../../redux/userSlice'
import 'firebase/app'
import { signOut } from 'firebase/auth'
import { auth } from '../../config/firebase'

const Header = () => {
   const user = useSelector(selectUser)
   const dispatch = useDispatch()

   const logoutOffApp = () => {
      dispatch(logout)
      signOut(auth)
         .then(() => {
            console.log('sign out')
         })
         .catch((error) => {
            console.log(error)
         })
   }

   return (
      <div className="header">
         <div className="header__left">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />

            <div className="header__search">
               <SearchIcon />
               <input placeholder="Search" type="text" />
            </div>
         </div>

         <div className="header__right ">
            <HeaderOption Icon={Home} title="Home" />
            <HeaderOption Icon={SupervisorAccount} title="My Network" />
            <HeaderOption Icon={BusinessCenter} title="Jobs" />
            <HeaderOption Icon={ChatIcon} title="Messaging" />
            <HeaderOption Icon={NotificationsIcon} title="Notifications" />
            <HeaderOption
               avatar={user?.photoURL}
               defaultAvatar={user?.email[0]}
               title="me"
               onClick={logoutOffApp}
               IconArrow={ArrowDropDown}
            />
            <HeaderOption Icon={ViewModule} IconArrow={ArrowDropDown} title="Work" />
         </div>
      </div>
   )
}

export default Header
