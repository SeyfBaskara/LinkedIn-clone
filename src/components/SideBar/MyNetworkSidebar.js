import React from 'react'
import './MyNetworkSidebar.css'
import { Link } from 'react-router-dom'
import {
   Person,
   PermContactCalendar,
   Group,
   SupervisedUserCircle,
   EventNote,
   MenuBook,
   ChromeReaderMode,
   KeyboardArrowUp,
} from '@material-ui/icons'
import { Button } from '@material-ui/core'

//NOTE Refactoring require for this component

const MyNetworkSidebar = () => {
   return (
      <div className="myNetworkSidebar">
         <div className="myNetworkSidebar__top">
            <h2>Manage my Network</h2>

            <div className="myNetworkSidebar__top__elem">
               <div className="myNetworkSidebar__top__elem-left">
                  <Person />
                  <p>Connection</p>
               </div>
               <p>32</p>
            </div>
            <div className="myNetworkSidebar__top__elem">
               <div className="myNetworkSidebar__top__elem-left">
                  <PermContactCalendar />
                  <p>Contacts</p>
               </div>
               <p>16</p>
            </div>
            <div className="myNetworkSidebar__top__elem">
               <div className="myNetworkSidebar__top__elem-left">
                  <SupervisedUserCircle />
                  <p>People I Follow</p>
               </div>
               <p>1</p>
            </div>
            <div className="myNetworkSidebar__top__elem">
               <div className="myNetworkSidebar__top__elem-left">
                  <Group />
                  <p>Groups</p>
               </div>
               <p>1</p>
            </div>
            <div className="myNetworkSidebar__top__elem">
               <div className="myNetworkSidebar__top__elem-left">
                  <EventNote />
                  <p>Events</p>
               </div>
               <p>5</p>
            </div>
            <div className="myNetworkSidebar__top__elem">
               <div className="myNetworkSidebar__top__elem-left">
                  <MenuBook />
                  <p>Pages</p>
               </div>
               <p>26</p>
            </div>
            <div className="myNetworkSidebar__top__elem">
               <div className="myNetworkSidebar__top__elem-left">
                  <ChromeReaderMode />
                  <p>Newsletters</p>
               </div>
               <p>1</p>
            </div>
            <div className="myNetworkSidebar__top__elem">
               <div className="myNetworkSidebar__top__elem-left">
                  <Person />
                  <p>Hashtags</p>
               </div>
               <p>10</p>
            </div>
            <div class="shrink__side">
               <h3>Show less</h3>
               <KeyboardArrowUp />
            </div>
            <div class="contact">
               <h4>Add personal contacts</h4>
               <p>
                  We’ll periodically import and store your contacts to help you and others connect. You choose who to connect to
                  and who to invite.
                  <span>
                     <Link href="#">Learn more</Link>
                  </span>
               </p>
               <input type="text" placeholder="Seyfettin.baskale@gmail.com" />
               <Button variant="outlined" color="primary">
                  Continue
               </Button>
               <Link href="#">More options</Link>
            </div>
         </div>
      </div>
   )
}

export default MyNetworkSidebar
