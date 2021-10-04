import React from 'react'
import './NotificationSidebar.css'

const NotificationSidebar = () => {
   return (
      <div className="notificationSidebar">
         <div className="notificationSidebar__top">
            <h2>Notifications</h2>
            <p>You are all caught up! check back later for new notifications</p>
         </div>
         <div className="notificationSidebar__bottom">
            <p>Improve your notifications</p>
            <h2>View settings</h2>
         </div>
      </div>
   )
}

export default NotificationSidebar
