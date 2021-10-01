import React from 'react'
import './Sidebar.css'

import { Avatar } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { selectUser } from '../../redux/userSlice'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import AddIcon from '@material-ui/icons/Add'

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
               src="https://images.unsplash.com/photo-1557683304-673a23048d34?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=282&q=80"
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
               <p>who viewed your profile</p>
               <p className="sidebar__statNumber">10</p>
            </div>
            <div className="sidebar__statItem">
               <BookmarkIcon />
               <h4>My items</h4>
            </div>
         </div>

         <div className="sidebar__stats_2">
            <div className="sidebar__stat_2">
               <a href="groups">Groups</a>
            </div>
            <div className="sidebar__stat_2">
               <a href="events">Events</a>
               <AddIcon />
            </div>
            <div className="sidebar__stat_2">
               <a href="follow"> Follow hastags</a>
            </div>
            <div className="sidebar__stat_2_discover">
               <p>Discover more</p>
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
