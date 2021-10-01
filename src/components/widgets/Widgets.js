import React from 'react'
import './Widgets.css'
import { Info, FiberManualRecord, ArrowForward } from '@material-ui/icons'
import Footer from '../Footer/Footer'

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
         <div className="widgets__stats">
            <div className="widgets__header">
               <h2>LinkedIn news</h2>
               <Info />
            </div>
            {newsArticle('React is great library', 'Top news - 999 readers')}
            {newsArticle('Corona virus update', 'Top news - 1500 readers')}
            {newsArticle('BitCoins hit 50k', 'Crypto - 600 readers')}
            {newsArticle('Electric cars sales rate', 'Cars & auto - 9958 readers')}
         </div>

         <div className="widgets__stats">
            <div className="widgets__header">
               <h2>Today's top courses</h2>
               <Info />
            </div>
            <div className="widgets__stat">
               <h4>The Secret to Better Decision</h4>
               <p>Seth Godin</p>
            </div>
            <div className="widgets__stat">
               <h4>What is Graphic Design?</h4>
               <p>Sean Adams</p>
            </div>
            <div className="widgets__stat">
               <h4>Agile Foundation</h4>
               <p>Doug Rose</p>
            </div>
            <div className="widgets__stat__bottom">
               <h2>Show more on LinkedIn learning</h2>
               <ArrowForward />
            </div>
         </div>

         <Footer />
      </div>
   )
}

export default Widgets
