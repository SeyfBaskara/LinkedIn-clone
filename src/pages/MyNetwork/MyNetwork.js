import React from 'react'
import './MyNetwork.css'
import MyNetworkSidebar from '../../components/SideBar/MyNetworkSidebar'
import MyNetworkFeed from '../../components/Feed/MyNetworkFeed'

const MyNetwork = () => {
   return (
      <div className="myNetwork">
         <MyNetworkSidebar />
         <MyNetworkFeed />
      </div>
   )
}

export default MyNetwork
