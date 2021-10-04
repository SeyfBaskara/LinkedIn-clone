import React from 'react'
import './NotificationFeed.css'

import { Avatar } from '@material-ui/core'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'

const NotificationFeed = () => {
   const notificationItem = (topic) => (
      <div className="notificationFeed__stats">
         <div className="notificationFeed__stat">
            <Avatar />
            <p>{topic}</p>
         </div>

         <div className="notificationFeed__stat__icon">
            <p>1h</p>
            <MoreHorizIcon />
         </div>
      </div>
   )

   return (
      <div className="notificationFeed">
         {notificationItem('How do you respond when your boss follows you on social media?')}
         {notificationItem(
            'Talent, hard work or luck – which traits are key to career success? Join the conversation.Talent, hard work or luck – which traits are key to career success? Join the conversation.'
         )}
         {notificationItem('Your application was viewed for Back End Developer at Nevermind AB')}
         {notificationItem('Is Stockholm the Silicon Valley of Europe? Join the conversation.')}
         {notificationItem('Trending: Remote work was supposed to kill off cities. So why hasn’t it?')}
         {notificationItem(
            'Fake it till you make it? Don’t be afraid to take inspiration from those you admire.'
         )}
         {notificationItem('Is Stockholm the Silicon Valley of Europe? Join the conversation.')}
         {notificationItem('Is Stockholm the Silicon Valley of Europe? Join the conversation.')}
         {notificationItem('Is Stockholm the Silicon Valley of Europe? Join the conversation.')}
         {notificationItem('Is Stockholm the Silicon Valley of Europe? Join the conversation.')}
      </div>
   )
}

export default NotificationFeed
