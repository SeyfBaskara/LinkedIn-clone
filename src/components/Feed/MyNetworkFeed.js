import React from 'react'
import './MyNetworkFeed.css'

import { Avatar, Button } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

const profile = (name, title, status) => (
   <div class="profile">
      <img
         src="https://images.unsplash.com/photo-1557683304-673a23048d34?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=282&q=80"
         alt="background-img"
      />
      <Avatar />
      <h2>{name}</h2>
      <p> {title}</p>
      <div>
         <p>{status}</p>
      </div>
      <Button variant="outlined" color="primary">
         Connect
      </Button>
      <CloseIcon />
   </div>
)

const MyNetworkFeed = () => {
   return (
      <div className="myNetworkFeed">
         <div className="invitation-wrapper">
            <div className="top">
               <p>Invitation</p>
               <h3>See all</h3>
            </div>
         </div>

         <div class="card-wrapper">
            <div className="top">
               <p>People you may know from Faculty of Engineering, University of Debrecen</p>
               <h3>See all</h3>
            </div>
            <div className="card">
               {profile('Heaven gren', 'Civil Engineer', 'Based on your profile')}
               {profile('Sam Gardener', 'Software Developer', 'Based on your profile')}
               {profile('Heaven gren', 'Civil Engineer', 'Based on your profile')}
               {profile('Heaven gren', 'Civil Engineer', 'Based on your profile')}
               {profile('Heaven gren', 'Civil Engineer', 'Based on your profile')}
               {profile('Heaven gren', 'Civil Engineer', 'Based on your profile')}
               {profile('Heaven gren', 'Civil Engineer', 'Based on your profile')}
               {profile('Heaven gren', 'Civil Engineer', 'Based on your profile')}
               {profile('Heaven gren', 'Civil Engineer', 'Based on your profile')}
               {profile('Heaven gren', 'Civil Engineer', 'Based on your profile')}
            </div>
         </div>
      </div>
   )
}

export default MyNetworkFeed
