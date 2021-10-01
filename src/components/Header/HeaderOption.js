import React from 'react'
import './HeaderOption.css'

import { Avatar } from '@material-ui/core'

const HeaderOption = ({ avatar, defaultAvatar, Icon, title, onClick, IconArrow }) => {
   return (
      <div className="headerOption" onClick={onClick}>
         {Icon && <Icon className="headerOption__icon" />}
         {avatar && (
            <Avatar className="headerOption__icon" src={avatar}>
               {defaultAvatar}
            </Avatar>
         )}
         {IconArrow ? (
            <div className="headerOption__icon__arrow">
               <h3 className="headerOption__title">{title}</h3>
               <IconArrow />
            </div>
         ) : (
            <h3 className="headerOption__title">{title}</h3>
         )}
      </div>
   )
}

export default HeaderOption

//NOTE IconArrow fontsize must be fixed
