import React from 'react'
import './MessagingFeed.css'

import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined'
import AttachFileIcon from '@material-ui/icons/AttachFile'
import GifIcon from '@material-ui/icons/Gif'
import SentimentSatisfiedSharpIcon from '@material-ui/icons/SentimentSatisfiedSharp'
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined'
import { Avatar } from '@material-ui/core'

const MessagingFeed = () => {
   const messagingInbox = (name, time, msg) => (
      <>
         <div className="messagingFeed__inboxMsg-profile">
            <Avatar />
            <div className="messagingFeed__inboxMsg-info">
               <h4>{name}</h4>
               <p>{time}</p>
            </div>
         </div>
         <div className="messagingFeed__inboxMsg-text">
            <p> {msg}</p>
         </div>
      </>
   )
   return (
      <div className="messagingFeed">
         <div className="messagingFeed__header">
            <div className="messagingFeed__headerInfo">
               <h4>Gaelle Tremas</h4>
               <p>Teacher at English School</p>
            </div>
            <div className="messagingFeed__headerIcons">
               <MoreHorizIcon />
               <VideoCallIcon />
            </div>
         </div>

         <div className="messagingFeed__inbox">
            <div className="messagingFeed__inboxProfile">
               <Avatar />
               <div className="messagingFeed__inboxProfile-info">
                  <h4>Gaelle Tremas</h4>
                  <p>Teacher at English School</p>
               </div>
            </div>

            {messagingInbox(
               'Gaelle Tremas',
               '1:26 PM',
               `Messages will come here Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
               eiusmod tempor incididunt ut labore et dolore magna aliqua. `
            )}
            {messagingInbox(
               'Seyf Baskara',
               '1:26 PM',
               `Messages will come here Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
               eiusmod tempor incididunt ut labore et dolore magna aliqua.`
            )}
            {messagingInbox(
               'Gaelle Tremas',
               '1:26 PM',
               `Messages will come here Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
               eiusmod tempor incididunt ut labore et dolore magna aliqua.`
            )}
         </div>

         <div className="messagingFeed__input">
            <input type="text" placeholder="Write a message" />
            <KeyboardArrowUpIcon />
         </div>

         <div className="messagingFeed__bottom">
            <div className="messagingFeed__bottom__leftIcon">
               <ImageOutlinedIcon />
               <AttachFileIcon />
               <GifIcon />
               <SentimentSatisfiedSharpIcon />
            </div>
            <div className="messagingFeed__bottom__rightIcon">
               <button type="button">Send</button>
               <MoreHorizOutlinedIcon />
            </div>
         </div>
      </div>
   )
}

export default MessagingFeed
