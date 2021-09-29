import React from 'react'
import './Sidebar.css'

import { Avatar } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { selectUser } from '../../redux/userSlice'

const Sidebar = () => {
   const user = useSelector(selectUser)

   const recentItem = (topic) => (
      <div className="sidebar__recentItem">
         <span className="sidebar__hash">#</span>
         <p>{topic}</p>
      </div>
   )

   return (
      <div className="sidebar">
         <div className="sidebar__top">
            <img
               src="https://images.unsplash.com/flagged/photo-1570735821643-6d4126137675?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mzl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
               alt="background-img"
            />
            <Avatar src={user?.photoURL} className="sidebar__avatar">
               {user.email[0]}
            </Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
         </div>

         <div className="sidebar__stats">
            <div className="sidebar__stat">
               <p>Connection</p>
               <p className="sidebar__statNumber">35</p>
            </div>
            <div className="sidebar__stat">
               <p>who viewed you</p>
               <p className="sidebar__statNumber">10</p>
            </div>
         </div>

         <div className="sidebar__bottom">
            <p>Recent</p>
            {recentItem('Software Developer')}
            {recentItem('Programming Language')}
            {recentItem('JavaScript ')}
            {recentItem('ReactJS')}
            {recentItem('Software Enginnering')}
         </div>
      </div>
   )
}

export default Sidebar
