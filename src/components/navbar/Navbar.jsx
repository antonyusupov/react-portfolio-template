import React from 'react';
import './navbar.css';
import {SiAffinitydesigner} from 'react-icons/si';


const Navbar = () => {

  const menuIcon = document.querySelector('#navbar-menu_icon');
  const linksContainer = document.querySelector('#linksContainer');


  const toggleClass = () => {
    if (linksContainer.classList.contains('active')) {
      linksContainer.classList.remove('active');
      menuIcon.innerHTML = 'Menu';
    } else {
      linksContainer.classList.add('active');
      menuIcon.innerHTML = 'Close X';
    }
  }
  return (
    <div className='navbar-main_container'>
      <div className='navbar-logo_container'>
        <p>
          <SiAffinitydesigner />
        </p>
      </div>
      <div className='navbar-links_container'>
        <div className='navbar-menu_icon-container'>
          <div className='icon-container' id='iconContainer'>
          <div onClick={toggleClass} id='navbar-menu_icon'>Menu</div>
          </div>
          <div id='linksContainer' className='navbar-links_responsive'>
            <p>Home</p>
            <p>Features</p>
            <p>About</p>
            <p>Contact</p>
          </div>
        </div>
        <div className='navbar-links'>
          <p>Home</p>
          <p>Features</p>
          <p>About</p>
          <p>Contact</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar;