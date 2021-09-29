import React from 'react'
import './Widgets.css'
import { Info, FiberManualRecord } from '@material-ui/icons'

const Widgets = () => {
   const newsArticle = (heading, subTitle) => (
      <div className="widgets__article">
         <div className="widgets__articleLeft">
            <FiberManualRecord />
         </div>
         <div className="widgets__articleRight">
            <h4>{heading}</h4>
            <p>{subTitle} </p>
         </div>
      </div>
   )

   return (
      <div className="widgets">
         <div className="widgets__header">
            <h2>LinkedIn news</h2>
            <Info />
         </div>
         {newsArticle('React is great library', 'Top news - 999 readers')}
         {newsArticle('Corona virus update', 'Top news - 1500 readers')}
         {newsArticle('Low emmision zone in urban', 'Top news - 900 readers')}
         {newsArticle('BitCoins hit 50k', 'Crypto  - 600 readers')}
         {newsArticle('Electric cars sales rate', 'Cars & auto - 9958 readers')}
      </div>
   )
}

export default Widgets
