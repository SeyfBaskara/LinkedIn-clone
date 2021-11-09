import React from 'react'
import './MessagingBox.css'

import Avatar from '@material-ui/core/Avatar'
import { MoreHoriz, Message, KeyboardArrowDown, Search, Tune } from '@material-ui/icons'

const MessagingBox = () => {
   const messagingInbox = (name, date, msg) => (
      <div className="messaging__inboxs">
         <Avatar />
         <div className="messaging__inbox">
            <div className="messaging__profile">
               <h4>{name}</h4>
               <p>{date}</p>
            </div>
            <p>{msg}</p>
         </div>
      </div>
   )

   return (
      <div className="messagingBox">
         <div className="box__top">
            <div className="box__top__left">
               <Avatar />
               <p>Messaging</p>
            </div>
            <div className="box__top__right">
               <MoreHoriz />
               <Message />
               <KeyboardArrowDown />
            </div>
         </div>
         <div className="box__search">
            <div className="box__search__left">
               <Search />
               <input placeholder="Search Messages" type="text" />
            </div>
            <Tune />
         </div>

         {messagingInbox('Sherif Cool', 'Sep 20', 'Hey there!')}
         {messagingInbox('Tom Mot', 'Sep 20', 'hey there')}
         {messagingInbox('John River', 'Sep 20', 'hey there')}
      </div>
   )
}

export default MessagingBox
