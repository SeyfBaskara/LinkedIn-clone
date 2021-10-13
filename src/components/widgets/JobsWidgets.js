import React from 'react'
import './JobsWidgets.css'
import Footer from '../Footer/Footer'
import EmojiObjectsSharpIcon from '@material-ui/icons/EmojiObjectsSharp'

const JobsWidgets = () => {
   return (
      <div className="jobsWidgets">
         <div className="jobsWidgets__top">
            <h2>Ways to prepare</h2>
            <div className="top__elem">
               <EmojiObjectsSharpIcon />
               <div className="top__elem__stat">
                  <h4>Best practices</h4>
                  <p>Get the most out of your job search and stand out to recruiters</p>
               </div>
            </div>
         </div>
         <Footer />
      </div>
   )
}

export default JobsWidgets
