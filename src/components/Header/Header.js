import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import HeaderOption from './HeaderOption'

import SearchIcon from '@material-ui/icons/Search'
import TelegramIcon from '@material-ui/icons/Telegram'
import NotificationsIcon from '@material-ui/icons/Notifications'
import { Home, SupervisorAccount, BusinessCenter, ViewModule, ArrowDropDown } from '@material-ui/icons/'

import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from '../../redux/userSlice'
import 'firebase/app'
import { signOut } from 'firebase/auth'
import { auth } from '../../features/firebase'

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
            <Link to="/">
               <HeaderOption Icon={Home} title="Home" />
            </Link>
            <Link to="/mynetwork">
               <HeaderOption Icon={SupervisorAccount} title="My Network" />
            </Link>
            <Link to="/jobs">
               <HeaderOption Icon={BusinessCenter} title="Jobs" />
            </Link>
            <Link to="/messaging">
               <HeaderOption Icon={TelegramIcon} title="Messaging" />
            </Link>
            <Link to="/notifications">
               <HeaderOption Icon={NotificationsIcon} title="Notifications" />
            </Link>

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
