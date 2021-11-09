import React from 'react'
import './MessagingSidebar.css'

import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import CreateIcon from '@material-ui/icons/Create'
import SearchIcon from '@material-ui/icons/Search'
import TuneIcon from '@material-ui/icons/Tune'
import { Avatar } from '@material-ui/core'

const MessagingSidebar = () => {
   const messagingInbox = (name, date, msg) => (
      <div className="messagingSidebar__inboxs">
         <Avatar />
         <div className="messagingSidebar__inbox">
            <div className="messagingSidebar__inbox__stats">
               <h4>{name}</h4>
               <p>{date}</p>
            </div>
            <p>{msg}</p>
         </div>
      </div>
   )

   return (
      <div className="messagingSidebar">
         <div className="messagingSidebar__header">
            <h2>Messaging</h2>
            <div className="messagingSidebar__headerIcon">
               <MoreHorizIcon />
               <CreateIcon />
            </div>
         </div>
         <div className="messagingSidebar__search">
            <div className="messagingSidebar__searchIcon">
               <SearchIcon />
               <input placeholder="Search messages" type="text" />
            </div>
            <TuneIcon />
         </div>
         {messagingInbox('Sherif Cool', 'Sep 20', 'Hey whats up? its been long time that you are not showing up!')}
         {messagingInbox('Tom Mot', 'May 20', 'Hey there! how are you?')}
         {messagingInbox('John River', 'Sep 20', 'Hey whats up?!')}
         <div className="messagingSidebar__bottom">
            <h4> Load more conversation</h4>
         </div>
      </div>
   )
}

export default MessagingSidebar
