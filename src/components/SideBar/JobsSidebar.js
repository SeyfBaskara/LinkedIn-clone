import React from 'react'
import './JobsSidebar.css'

import {
   Bookmark,
   Notifications,
   Payment,
   AssignmentTurnedIn,
   Description,
   Note,
   Settings,
   PostAdd,
} from '@material-ui/icons'

const JobsSidebar = () => {
   return (
      <div className="jobsSidebar">
         <div className="jobsSidebar__top">
            <div className="jobsSidebar__top__elem">
               <Bookmark />
               <h4>My jobs</h4>
            </div>
            <div className="jobsSidebar__top__elem">
               <Notifications />
               <h4>Job Alerts</h4>
            </div>
            <div className="jobsSidebar__top__elem">
               <Payment />
               <h4>Salary</h4>
            </div>
            <div className="jobsSidebar__top__elem">
               <AssignmentTurnedIn />
               <h4>Skill Assesments</h4>
            </div>
            <div className="jobsSidebar__top__elem">
               <Description />
               <h4>Interview Prep</h4>
            </div>
            <div className="jobsSidebar__top__elem">
               <Note />
               <h4>Resume Builder</h4>
            </div>
            <div className="jobsSidebar__top__elem">
               <Settings />
               <h4>Application Settings</h4>
            </div>
         </div>

         <div className="jobsSidebar__bottom">
            <div className="jobsSidebar__bottom__elem">
               <PostAdd />
               <h4>Post a free jobs</h4>
            </div>
         </div>
      </div>
   )
}

export default JobsSidebar
