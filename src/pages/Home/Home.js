import React from 'react'
import './Home.css'

import Sidebar from '../../components/SideBar/Sidebar'
import Feed from '../../components/Feed/Feed'
import Widgets from '../../components/widgets/Widgets'

const Home = () => {
   return (
      <div className="home">
         <Sidebar />
         <Feed />
         <Widgets />
      </div>
   )
}

export default Home
