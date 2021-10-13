import React from 'react'
import './JobsFeed.css'

import { Avatar } from '@material-ui/core'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import TrackChangesIcon from '@material-ui/icons/TrackChanges'

const JobsFeed = () => {
   const jobsFeedPost = (title, company, location, status, time, applicant) => (
      <div className="jobsFeed__post">
         <div className="post__details">
            <Avatar variant="square">Logo</Avatar>
            <div className="post__details__elem">
               <h4>{title}</h4>
               <p>{company}</p>
               <p>{location}</p>
               <div className="post__details__elem-status">
                  <TrackChangesIcon />
                  <p>{status}</p>
               </div>
               <div className="post__details__elem-timeStatus">
                  <p>{time}</p>
                  <h4>{applicant}</h4>
               </div>
            </div>
         </div>
         <BookmarkBorderIcon />
      </div>
   )

   return (
      <div className="jobsFeed">
         <div className="jobsFeed__posts">
            <div className="posts__header">
               <h3>Recommended for you</h3>
               <p>Based on your profile and search history</p>
            </div>

            {jobsFeedPost(
               'Frontend Developer',
               'Salt',
               'Stockholm, Stockholm County, Sweden',
               'Actively recruiting',
               'Promoted',
               '13 applicants'
            )}
            {jobsFeedPost(
               'Backend Developer',
               'Volvo',
               'Stockholm, Stockholm County, Sweden',
               'Actively recruiting',
               '1 hour ago',
               '5 applicants'
            )}
            {jobsFeedPost(
               'Fullstack Developer',
               'Scania',
               'Stockholm, Stockholm County, Sweden',
               'Actively recruiting',
               'Promoted',
               '10 applicants'
            )}
            {jobsFeedPost(
               'Java Developer',
               'Sweed Bank',
               'Stockholm, Stockholm County, Sweden',
               'Actively recruiting',
               '5 days ago',
               '5 applicants'
            )}
            {jobsFeedPost(
               'Frontend Developer',
               'Salt',
               'Stockholm, Stockholm County, Sweden',
               'Actively recruiting',
               'Promoted',
               '13 applicants'
            )}
         </div>
      </div>
   )
}

export default JobsFeed
