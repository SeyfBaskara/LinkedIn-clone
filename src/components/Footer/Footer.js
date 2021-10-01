import React from 'react'
import './Footer.css'

const Footer = () => {
   return (
      <div className="footer">
         <div className="footer__stat">
            <p>About</p>
            <p>Accessibility</p>
            <p>Help Center</p>
            <p>Privacy & Terms</p>
            <p>Ad Choices</p>
            <p>Advertising</p>
            <p>Business Services</p>
            <p>Get the linkedin app</p>
            <p>More</p>
         </div>

         <div className="footer__logo">
            <img
               src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/512px-LinkedIn_Logo.svg.png"
               alt="brand"
            />
            <p>LinkedIn Coorporation @ 2021</p>
         </div>
      </div>
   )
}

export default Footer
