import React from 'react'
import './Jobs.css'

import JobsSidebar from '../../components/SideBar/JobsSidebar'
import JobsFeed from '../../components/Feed/JobsFeed'
import JobsWidgets from '../../components/widgets/JobsWidgets'

const Jobs = () => {
   return (
      <div className="jobs">
         <JobsSidebar />
         <JobsFeed />
         <JobsWidgets />
      </div>
   )
}

export default Jobs
