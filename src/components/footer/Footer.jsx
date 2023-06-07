import React from 'react';
import './footer.css';
import {SiAffinitydesigner} from 'react-icons/si';
import {FaTwitter, FaGithub, FaInstagram, FaYoutube, FaHeart, FaRegCopyright} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer-main_container'>
        <div className='footer-logo_container'>
            <span><SiAffinitydesigner/></span>
        </div>
        <div className='footer-social_container'>
            <p><FaTwitter/></p>
            <p><FaGithub/></p>
            <p><FaInstagram/></p>
            <p><FaYoutube/></p>
        </div>
        <div className='footer-copyright'>
            <span><FaHeart/></span>
            <p><FaRegCopyright/></p>
            <small>John Doe</small>
        </div>
    </div>
  )
}

export default Footer