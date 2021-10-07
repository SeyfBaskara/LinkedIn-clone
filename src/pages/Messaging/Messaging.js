import React from 'react'
import './Messaging.css'

import MessagingSidebar from '../../components/SideBar/MessagingSidebar'
import MessagingFeed from '../../components/Feed/MessagingFeed'
import MessagingWidgets from '../../components/widgets/MessagingWidgets'

const Messaging = () => {
   return (
      <div className="messaging">
         <MessagingSidebar />
         <MessagingFeed />
         <MessagingWidgets />
      </div>
   )
}

export default Messaging
