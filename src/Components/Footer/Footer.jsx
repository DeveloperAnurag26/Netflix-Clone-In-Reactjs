import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'

function Footer() {
  return (
    <div className='footer'>
      <div className="footer-icons">
          <img src={facebook_icon} alt="" srcset="" />
      <img src={instagram_icon} alt="" srcset="" />
      <img src={twitter_icon} alt="" srcset="" />
      <img src={youtube_icon} alt="" srcset="" />

      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Inverstor Relations</li>
        <li>Jobs</li>
        <li>Terms Of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact US</li>
      </ul>
      <p className='copyright-text'></p>
    
    </div>
  )
}

export default Footer
