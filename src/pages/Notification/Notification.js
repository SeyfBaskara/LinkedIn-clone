import React from 'react'
import './Notification.css'

import NotificationSidebar from '../../components/SideBar/NotificationSidebar'
import NotificationFeed from '../../components/Feed/NotificationFeed'
import NotificationWidgets from '../../components/widgets/NotificationWidgets'

const Notification = () => {
   return (
      <div className="notification">
         <NotificationSidebar />
         <NotificationFeed />
         <NotificationWidgets />
      </div>
   )
}

export default Notification
